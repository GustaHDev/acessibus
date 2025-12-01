require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./api/routes/UserRoutes');
const linhaRoutes = require('./api/routes/LinhaRoutes');
const interacaoRoutes = require('./api/routes/InteracaoRoutes');
const voiceRoutes = require('./api/routes/VoiceRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', userRoutes);
app.use('/', linhaRoutes);
app.use('/', interacaoRoutes);
app.use('/', voiceRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})