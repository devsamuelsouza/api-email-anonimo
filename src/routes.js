import { Router } from "express";
import { configDotenv } from 'dotenv';

configDotenv();

const router = Router();

router.get("/cotacao/coins", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY
            }
        }
    ).then(response => response.json())
        .then(data => {
            res.status(200).send(data.data)
        }).catch(error => {
            res.status(500).send({
                error
            })
        })
});

export default router;