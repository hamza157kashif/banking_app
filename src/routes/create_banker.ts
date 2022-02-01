import  Express  from "express";
import { Banker } from "../entities/Banker";

const router= Express.Router();
router.post('/api/banker',async (req,res)=>{
    //res.send('hello');
    const{
        firstname,
        lastname,
        email,
        cardNumber,
        employeenumber
    }=req.body;
    const banker=Banker.create({
        first_name:firstname,
        last_name:lastname,
        email,
        card_num:cardNumber,
        employee_number:employeenumber
    });

    await banker.save();
    return res.json(banker)
});

export{
    router as createBankerRouter
};