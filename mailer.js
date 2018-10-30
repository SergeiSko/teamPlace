var nodemailer = require('nodemailer');

let sendGmail = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "skoblin.s98@gmail.com",
      pass: "F_ybk_jr_C_1"
    }
});


let mailOptions = {
  from: 'skoblin.s98@gmail.com', // отправитель
  to: 'skoblin.s98@gmail.com', // получатель
  subject: 'nodemailer', // Тема
  text: 'worked', // сообщение текстом
  //html: 'output' // сообщение html страницей
};

sendGmail.sendMail(mailOptions);
