const nodemailer = require("nodemailer");
const crypto = require("crypto");

const jwt = require("../config/jwt");

const { User } = require("../models");

module.exports = {
  async show(req, res) {
    const { email } = req.params;

    const userExist = await User.findOne({ where: { email } });
    if (!userExist) {
      return res.status(400).json({ error: "Email não encontrado" });
    }

    const token = jwt.sign({ email });

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
        html: `<b>Seu token:</b> ${token}`,
      });

      console.log("Mensagem enviada!");
    }
    main().catch(console.error);
    return res.json({ message: "Link para troca de senha enviado no email." });
  },

  async update(req, res) {
    const { password, confirmPassword } = req.body;
    const { token } = req.params;
    const { email } = jwt.verify(token);

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Senhas não combinam." });
    }

    const hash = (value) => {
      return crypto.createHash("md5").update(value).digest("hex");
    };

    const user = await User.findOne({ where: { email } });
    const userUpdated = await user.update({
      password: hash(password),
    });

    if (!userUpdated) {
      return res.status(500).json({ error: "Erro ao atualizar dados." });
    }

    return res.json({ message: "Senha atualizada com sucesso." });
  },
};
