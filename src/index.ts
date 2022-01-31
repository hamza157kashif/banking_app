import { createConnection } from "typeorm";
import { Banker } from "./entities/Banker";
import { Client } from "./entities/Client";

const main=async()=> {
    try{
        await createConnection({
            type:"postgres",
            host:"localhost",
            port:5432,
            username:"postgres",
            password:'hamza',
            database:"typeorm",
            entities:[Client,Banker],
            synchronize:true
        })
        console.log("connected to db");
        
    }catch(error){
        console.error(error);
        throw new Error("unable to connect db");
        
    }
}

main()