const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.sendOtp = async (phone, msg) => {
  return client.messages
    .create({
      to: `+91 ${phone}`,
      from: "+1 5046134954",
      body: `${msg} expiresIn 5 minit`,
    })
    .then((message) => {})
    .catch((err) => console.log(err.message));
};
