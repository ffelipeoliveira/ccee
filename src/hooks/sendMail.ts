import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import type { SentMessageInfo } from 'nodemailer';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
const REDIRECT_URI = process.env.REDIRECT_URI as string;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN as string;

const oAuth2Client: OAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(): Promise<SentMessageInfo | Error> {
  try {
    const accessTokenResponse = await oAuth2Client.getAccessToken();
    const accessToken = accessTokenResponse?.token;

    if (!accessToken) {
      throw new Error('Failed to retrieve access token');
    }

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'renan.martins@aluno.uepb.edu.br',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'RENAN 📧 <renan.martins@aluno.uepb.edu.br>',
      to: ['renan.lima@academico.ifpb.edu.br'],
      subject: 'Hello from Gmail using API',
      text: 'Hello from Gmail using API',
      html: '<h1>Hello from Gmail using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error as Error;
  }
}

sendMail()
  .then((result) => console.log('✅ Email enviado:', result))
  .catch((error) => console.error('❌ Erro ao enviar:', error));
