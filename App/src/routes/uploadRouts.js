const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configuração do multer para armazenamento dos arquivos e com qual nome eles serão salvos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, );
    },
    filename: (req, file, cb) =>{
        cb(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage});

// Rota para upload de arquivos
router.post('/importar', upload.single('extrato'), (req, res) => {
    if(!req.file){
        return res.status(400).send('nenhum arquivo enviado');
    }
    //confirmação de que o arquivo foi recebido
    res.send({
        mensagem: "Arquivo recebido com sucesso",
        arquivo: req.file.filename
    });
});

module.exports = router;