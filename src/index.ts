import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";
import { Transaction } from "./entities/Transaction";
import  Express  from "express";
import { createClientRouter } from "./routes/create_client";
import { createBankerRouter } from "./routes/create_banker";
import { createTransactionRouter } from "./routes/create_transaction";
import { connectBankerToClient } from "./routes/connect_banker_to_client";
import { deleteClientRouter } from "./routes/delete_client";
import { fetchClientRouter } from "./routes/fetch_client";

const app=Express();
const main=async()=> {
    try{
        await createConnection({
            type:"postgres",
            host:"localhost",
            port:5432,
            username:"postgres",
            password:'hamza',
            database:"typeorm",
            entities:[Client,Banker,Transaction],
            synchronize:true
        })
        console.log("connected to db");

        app.use(Express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter)
        app.use(connectBankerToClient)
        app.use(deleteClientRouter )
        app.use(fetchClientRouter)

        app.listen(8080,()=>{
            console.log("Server running at 8080");  
        })
    }catch(error){
        console.error(error);
        throw new Error("unable to connect db");
        
    }
}

main()