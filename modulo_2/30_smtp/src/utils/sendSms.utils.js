import twilio from "twilio";

async function sendSms(phone) {
  try {
    const transport = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
    transport.messages.create({
      body: "mensaje enviado desde la app notescoder",
      from: process.env.TWILIO_PHONE,
      to: phone,
    });
  } catch (error) {
    throw error;
  }
}

export default sendSms;
