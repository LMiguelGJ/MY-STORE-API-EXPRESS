const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const { config } = require('./../config/config')

const UserService = require('./user.service');
const service = new UserService();

const nodemailer = require('nodemailer');

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch){
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  async signToken(user){
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async sendMail(email){
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: config.emailUser,
          pass: config.emailPassword
      }
    });
    const info = await transporter.sendMail({
      from: config.emailUser, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Prueba de klk ✔", // Subject line
      text: "dime se te llego la cosa?", // plain text body
      html: "<b>Prueba de klk</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
    return { message: 'mail sent' }
  }

}

module.exports = AuthService;
