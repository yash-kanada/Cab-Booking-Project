const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilio = require("twilio");
const client = twilio(accountSid, authToken);

exports.sendOtp = async (phone, msg) => {
  return client.messages
    .create({ 
      to: `+91${phone}`,
      from: process.env.TWILIO_NUMBER,
      body: `${msg} expiresIn 5 minit`,
    })
    .then((message) => {})
    .catch((err) => console.log(err.message));
};
