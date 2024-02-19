import {sendEmail} from "../services/Emailservice.js"; 
import { transporter } from "../services/Emailservice.js";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


async function sendEmailController(req, res) {
  try {
    if (!req.body.from || !req.body.to || !req.body.subject || !req.body.text) {
      return res.status(400).send('Missing required fields in the request body.');
    }
    const { from,to, subject, text, cc, bcc } = req.body;
    let mailOptions;

    if (req.file) {
      mailOptions = {
        from,
        to,
        subject,
        text,
        cc,
        bcc,
        attachments: [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
          },
        ],
      };
    } else {
      mailOptions = {
        from,
        to,
        subject,
        text,
        cc,
        bcc,
      };
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.send('Email sent: ' + info.response);
    });
    /*const result = await sendEmail.sendEmail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully', info: result });*/
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default { sendEmailController };  
 
