const dotenv = require('dotenv')
dotenv.config()
const FormData = require('form-data')
const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

// const mailerSendApiKey = process.env.MAILERSEND_API_KEY
// const mailerSendUrl = "https://api.mailersend.com/v1/email"
// const senderEmail = "test@test-2p0347zxqq3lzdrn.mlsender.net"
// const senderName = "What a great name to be sending emails with"

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.listen(3000, (request, response) => {
    console.log("Server Workin") 
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// app.post('/', async (req, res) => {
//     const firstname = req.body.first_name
//     const lastname = req.body.last_name
//     const email = req.body.email
//
//     console.log(req.body)
//
//     // const emailPayload = {
//     //     to: [
//     //         {
//     //             email: email, 
//     //             name: `${firstname} ${lastname}` 
//     //         }
//     //     ],
//     //     subject: "I love Emailing",
//     //     content: [
//     //         {
//     //             type: "text/plain",
//     //             value: "Welcome to dev@deakin"
//     //         }
//     //     ]
//     // }
//
//     const response = await fetch(https://api.sendgrid.com/v3/mail/send, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json', 
//             'Authorization': `Bearer ${SEND_GRID_API_KEY}`, 
//             'X-Requested-With': 'XMLHttpRequest' 
//         },
//         body: JSON.stringify(emailPayload) 
//     });
//
//     console.log(response)
//
//     res.status(200).send("Email sent successfully!");
// })
