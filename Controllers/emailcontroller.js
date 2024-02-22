import {sendEmail} from "../services/Emailservice.js"; 
import { transporter } from "../services/Emailservice.js";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              


async function sendEmailController(req, res) {
  console.log(req.body);
  console.log(req.method);
  console.log(req.url);
  console.log(req.files);
  try {
    if (!req.body.to || !req.body.subject || !req.body.tbody) {
      return res.status(400).send('Missing required fields in the request body.');
    }
    const { from,to, subject, tbody, cc, bcc } = req.body;
    const attachments=req.files;
    let mailOptions;

    if (req.files) {
      mailOptions = {
        from,
        to,
        subject,
        tbody,
        cc,
        bcc,
        attachments: attachments.map(file => ({
          filename: file.originalname,
          content: file.buffer
        }))
      };
    } else {
      mailOptions = {
        from,
        to,
        subject,
        tbody,
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
