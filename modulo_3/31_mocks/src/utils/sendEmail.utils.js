import { createTransport } from "nodemailer";

async function sendEmail(data) {
  try {
    console.log(data);
    const transport = createTransport({
      service: "gmail",
      port: process.env.PORT,
      auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    });
    await transport.sendMail({
      from: `CODER <${process.env.GOOGLE_EMAIL}>`,
      to: data.email,
      subject: `USER ${data.name.toUpperCase()} REGISTERED!`,
      html: `
        <h1>USER REGISTERED!<h1>
        <p>VERIFY CODE: ${data.verifiedCode}</p>
      `,
    });
  } catch (error) {
    throw error;
  }
}

export default sendEmail;
