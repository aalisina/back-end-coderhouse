"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const database_1 = require("./database");
const router = express_1.default.Router();
router.get('/productos', (req, res) => {
    if (!database_1.data)
        return res.json({ error: 'No hay productos cargados' });
    const objToSend = database_1.data.map((item, index) => {
        return {
            id: index + 1,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail
        };
    });
    res.json(objToSend);
});
router.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    const idNum = Number(id);
    if (idNum === NaN)
        return res.json({ error: 'Producto no encontrado' });
    if (idNum > database_1.data.length || idNum <= 0)
        return res.json({ error: 'Producto no encontrado' });
    const objToSend = {
        id: idNum,
        title: database_1.data[idNum - 1].title,
        price: database_1.data[idNum - 1].price,
        thumbnail: database_1.data[idNum - 1].thumbnail
    };
    res.json(objToSend);
});
router.post('/productos/', (req, res) => {
    const objToCreate = req.body;
    database_1.data.push(objToCreate);
    fs_1.default.writeFileSync('./database.js', `export const data = ${JSON.stringify(database_1.data)}`);
    res.json(database_1.data);
});
exports.default = router;
