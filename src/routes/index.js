var express = require('express');
const router = express.Router();
import { index } from '../controllers/cache'
router.get('/while', async (req, res) => {
    await new Promise(r => setTimeout(r, 5000));
    res.send('Hello World!')
});
router.post('/hello', async (req, res) => {
    await new Promise(r => setTimeout(r, 1000));
    res.send('Hello World!')
});
router.get('/async', async (req, res) => {
    res.send('Hello World!')
});

router.get('/cache', index)


export { router }
