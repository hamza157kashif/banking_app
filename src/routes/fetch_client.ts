import  Express  from "express";
import { createQueryBuilder } from "typeorm";
import { Client } from "../entities/Client";

const router= Express.Router();
router.post('/api/client',async (_req,res)=>{

    const client = await createQueryBuilder(
		'client'
	)
		.select('client.first_name')
		.from(Client, 'client')
		.leftJoinAndSelect(
			'client.transactions',
			'transaction'
		)
		.where('client.id = :clientId', {
			clientId: 3,
		})
		.getOne();

    //const client =await Client.find();
    return res.json(client);
});

export{
    router as fetchClientRouter
};