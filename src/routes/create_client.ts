import  Express  from "express";
import { Client } from "../entities/Client";

const router= Express.Router();
router.post('/api/client',async (req,res)=>{
    //res.send('hello');
    const{
        firstname,
        lastname,
        email,
        cardNumber,
        balance
    }=req.body;
    const client=Client.create({
        first_name:firstname,
        last_name:lastname,
        email,
        card_num:cardNumber,
        balance
    });

    await client.save();
    return res.json(client)
});

export{
    router as createClientRouter
};