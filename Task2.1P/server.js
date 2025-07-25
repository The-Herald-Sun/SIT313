const dotenv = require('dotenv')
dotenv.config()
const FormData = require('form-data')
const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")

const mailerSendApiKey = process.env.MAILERSEND_API_KEY
const mailerSendUrl = "https://api.mailersend.com/v1/email"
const senderEmail = "test@test-2p0347zxqq3lzdrn.mlsender.net"
const senderName = "What a great name to be sending emails with"

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.listen(3000, (request, response) => {
    console.log("Server Workin") 
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', async (req, res) => {
    const firstname = req.body.first_name
    const lastname = req.body.last_name
    const email = req.body.email
    
    console.log(req.body)

    const emailPayload = {
        from: {
            email: senderEmail,
            name: senderName
        },
        to: [
            {
                email: email, 
                name: `${firstname} ${lastname}` 
            }
        ],
        subject: "I love Emailing",
        text: `Hello ${firstname} ${lastname}`
    }

    const response = await fetch(mailerSendUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${mailerSendApiKey}`, 
            'X-Requested-With': 'XMLHttpRequest' 
        },
        body: JSON.stringify(emailPayload) 
    });

    res.status(200).send("Email sent successfully!");
})
