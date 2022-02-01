import  Express  from "express";
import { Client } from "../entities/Client";
import { Banker } from "../entities/Banker";

const router= Express.Router();
router.put('/api/banker/:bankerId/client/:clientId',async (req,res)=>{
    //res.send('hello');
    const { bankerId, clientId } = req.params;

		const client = await Client.findOne(
			parseInt(clientId)
		);

		const banker = await Banker.findOne(
			parseInt(bankerId)
		);

		if (banker && client) {
			banker.clients = [client];
			await banker.save();
			return res.json({
				msg: 'banker connected to client',
			});
		} else {
			return res.json({
				msg: 'banker or client not found',
			});
		}
});

export{
    router as connectBankerToClient
};