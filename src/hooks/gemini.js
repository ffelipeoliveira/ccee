import { GoogleGenAI } from "@google/genai";
import express, { response, text } from "express";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
let main_chat_history = {};

app.post('/chat', async (req,res)=>{

    const { userId } = req.body;
    const { prompt } = req.body;
    
    if (!main_chat_history[userId]) {
        main_chat_history[userId] = [];
    }

    let index_chat_history = main_chat_history[userId];

    const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history: [...index_chat_history],
    config: [{
        //temperature: 0.5,
        maxOutputTokens: 1024,
    }],
});

const resposta = await chat.sendMessage({message: prompt});

index_chat_history.push({
    role: "user",
    parts: [{ text: prompt.slice(0, 50) }],
});

index_chat_history.push({
    role: "model",
    parts: [{ text: resposta.text.slice(0, 50) }],
});

console.log(JSON.stringify(index_chat_history, null, 2));
if (index_chat_history.length > 50) {
    index_chat_history.splice(0, 10);
}
res.json({ response: resposta.text });

});

app.post('/clear', async (req,res)=>{
    const { userId } = req.body;
    main_chat_history[userId] = [];
    res.json({response:"cleared"});
});
app.listen(3000, ()=> console.log('server is running...'));

// async function main() {
    //   const chat = ai.chats.create({
//     model: "gemini-2.0-flash-lite",
//     history: [
//       {
//         role: "user",
//         parts: [{ text: "Hello" }],
//       },
//       {
//         role: "model",
//         parts: [{ text: "Great to meet you. What would you like to know?" }],
//       },
//     ],
//   });

//   const response1 = await chat.sendMessage({
//     message: "I have 2 dogs in my house.",
//   });
//   console.log("Chat response 1:", response1.text);

//   const response2 = await chat.sendMessage({
//     message: "How many paws are in my house?",
//   });
//   console.log("Chat response 2:", response2.text);
// }

// await main();