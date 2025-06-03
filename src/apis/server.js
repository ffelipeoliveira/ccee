// server.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sendMail } from './gmail.js'; // ajuste o caminho conforme necessário

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { to, message } = req.body;

  if (!to || !message) {
    return res.status(400).json({ error: 'Missing "to" or "message"' });
  }

  try {
    const result = await sendMail({
      to,
      subject: 'Mensagem via App',
      text: message,
      html: `<p>${message}</p>`,
    });
    res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
