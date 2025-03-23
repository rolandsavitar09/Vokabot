const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data pertanyaan dan jawaban chatbot
const chatbotResponses = {
    "halo": "Hai! Ada yang bisa saya bantu?",
    "siapa namamu?": "Saya VokaBot, asisten virtual Anda!",
    "apa itu vokabot?": "VokaBot adalah chatbot sederhana yang menjawab pertanyaan dasar.",
    "terima kasih": "Sama-sama! 😊",
    "bye": "Sampai jumpa! 👋"
};

// Endpoint untuk menerima pertanyaan
app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase(); // Ambil pesan dari pengguna
    const response = chatbotResponses[userMessage] || "Maaf, saya tidak mengerti pertanyaan Anda.";
    res.json({ response });
});

// Jalankan server
app.listen(port, () => {
    console.log(`VokaBot berjalan di http://localhost:${port}`);
});
