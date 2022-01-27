
import { SMTPClient } from 'emailjs';
// import CheckMail from 'server/helpers/mail/checkemailhash';

export default async function handler(req, res) {

  const { email, name, message } = req.body;
  const mymail = process.env.mail;
  const password = process.env.password;

  // console.log(mymail,password);


  try {
    const client = new SMTPClient({
      user: mymail,
      password: password,
      host: 'smtp.gmail.com',
      ssl: true,
    });

    await client.sendAsync(
      {
        from: mymail,
        to: 'aces.it@nirmauni.ac.in',
        subject: `Contact Mail from ${name}`,
        text: `Email from: ${email} \n Message: ${message}`

      }
    );
    
    await client.sendAsync(
      {
        from: mymail,
        to: email,
        subject: 'From ACES',
        attachment: [
          {
            data: `
                      <!DOCTYPE html>
                      <html lang="en">
                      <body>
                      <div class="container" style="text-align: center;
                      box-shadow: 0px 0px 3px blue;
                      width: 90%;
                      margin: 0 auto;
                      text-transform: capitalize;">
                      <h1>
                      <a href="#" style="
                      text-decoration: none;
                      padding: 3px;
                      ">
                      ACES
                      </a>
                      </h1>
                      <p style="
                      opacity: .5;
                      font-size: 1.5rem;
                      padding: 3px;">
                      ACES
                      </p>
                      <h1>
                      Thanks for Contact Us
                      </h1>
                      <button style="background-color: blue;
                      outline: none;
                      border: none;
                      padding: 5px;">
                      <a href="https://aces-nirmauni.netlify.app/" style="color: wheat;
                      font-size: 1.5rem;
                      font-weight: bold;
                      text-decoration:none;
                      margin:2rem 0;
                      ">
                      Click 🛶 to Enter
                      </a>
                      </button>
                      <h1> </h1>
                      <div class="footer" style=" background-color: black;
                      width: 100%;
                      padding: 0;
                      text-align: center;
                      list-style: none;
                      padding:1rem;
                      color: white;
                      ">
                      <p class="footer-para">All Copyright goes to © ACES</p>
                      </div>
                      </div>
                      </body>
                      </html>
          `
            ,
            alternative: true
          }
        ]
      }
    );
  }
  catch (e) {
    console.log(e)

    return res.status(404).end(JSON.stringify({
      message: "Error in sending mail",

    }))
  }

  res.end(JSON.stringify({
    message: "Both Mail send"
  }))

};