import nodemailer from "nodemailer";
import multer from "multer";

export const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 't42006532@gmail.com',
    pass: 'iepa nojz kcti hsrs',
  },
});

export async function sendEmail(mailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error('Failed to send email: ' + error.message);
  }
}

