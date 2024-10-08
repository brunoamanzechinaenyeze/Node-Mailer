const nodeMailer = require("nodemailer");

const html = `
    <h1>Welcome Amanze</h1>
    <p>You are welcome to our company</p>
`;

async function main () {

   const transporter = nodeMailer.createTransport({
         host: 'mail.openjavascript.info',
         port: 465,
         secure: true,
         auth: {
            user: 'test@openjavascript.info',
            pass: 'NodeMailer123'
         }
    })

    const info = await transporter.sendMail({
        from: 'OpenJavascript <test@openjavascript.info>',
        to: 'heroicemeblem69@gmail.com',
        subject: 'Test Email',
        html: html
    })

    console.log('Message sent: ' + info.messageId);
}

main()
.catch(e => console.log(e))