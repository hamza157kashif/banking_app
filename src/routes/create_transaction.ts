import Express  from "express";
import { Client } from "../entities/Client";
import {Transaction, TransactionTypes} from "../entities/Transaction"

const router=Express.Router();

router.post('/api/client/:clientid/transaction',async(req,res)=>{
    const {clientid}=req.params;
    const {type,amount}=req.body;

    const client= await Client.findOne(parseInt(clientid));

    if(!client){
        return res.json({
            msg:"client doesn't found"
        })
    }
    const transaction=Transaction.create({
        amount,
        type,
        client
    });

    await transaction.save();

    if(type===TransactionTypes.DEPOSIT){
        client.balance=client.balance+amount;
    }else if(type===TransactionTypes.WITHDRAW){
        client.balance=client.balance-amount;
    }

    await client.save();

    return res.json({
        msg:"Transaction Succesful"
    })

})

export {router as createTransactionRouter}