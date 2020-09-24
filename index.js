const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { createConnection, getConnectionUrl } = require('./google-utils');
  const auth = createConnection();

app.get('/login', (req, res) => {

  const url = getConnectionUrl(auth);
  res.redirect(url);
})

app.get('/auth/google/callback', async (req, res) => {
  const code = req.query.code;
  const data = await auth.getToken(code);
  console.log(data.tokens);
  res.send(data.tokens)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
