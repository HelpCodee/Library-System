const nodemailer = require("nodemailer");

module.exports = {
  async store(req, res) {
    const { email } = req.query;

    async function main() {
      let transporter = nodemailer.createTransport({
        host: process.env.MAILHOG_HOST,
        port: 1025,
        auth: null,
      });

      let info = await transporter.sendMail({
        from: '"Leonardo Lima 👻" <leonardo@mail.com>',
        to: email,
        subject: "Hello ✔",
        html: "<b>Hello " + email + "</b>",
      });

      console.log("Mensagem enviada!");
    }

    main().catch(console.error);
  },
};
