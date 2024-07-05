import nodemailer from 'nodemailer';


export async function sendEmail(
      data 
    ) {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASS,
            },
        });
    
        await transporter.sendMail({
            from: data.email, // sender address
            to:"mdhasan26096@gmail.com", // list of receivers
            subject:  data.subject, // Subject line
            html:"hello", // html body
        });
    }