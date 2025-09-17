const express = require('express')
const cors = require('cors')
const sgMail = require('@sendgrid/mail')
const port = 2900

const SENDGRID_LIST_ID = process.env.SENDGRID_LIST_ID
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log("Api online")
})

app.post('/api/v1/', async (req, res) => {
  console.log(req.body)
  const email = req.body.email;
  const firstName = ""
  const lastName = ""

  // Basic validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  // Contact data to be added to SendGrid
  const newContact = [
    {
      email: email,
      first_name: firstName,
      last_name: lastName
    }
  ];

  const requestBody = {
    contacts: newContact,
    list_ids: [SENDGRID_LIST_ID]
  };

  try {
    await sgMail.client.request({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: requestBody
    });

    console.log(`Successfully signed up: ${email}`);
    res.status(200).json({ message: 'Successfully signed up for the mailing list.' });
  } catch (error) {
    console.error('Error signing up:', error.response.body.errors);
    res.status(500).json({ error: 'An error occurred during signup.' });
  }
});
