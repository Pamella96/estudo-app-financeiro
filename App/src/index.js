const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json()); //permite que a api entenda o formato json

//importando as rotas
app.use('/api/upload', uploadRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('API do app financeiro com IA esta rodando!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});