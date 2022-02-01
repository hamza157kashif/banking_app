import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionTypes{
    DEPOSIT='deposit',
    WITHDRAW='wihtdraw'
}

@Entity('transactions')
export class Transaction extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:"enum",
        enum:TransactionTypes
    })
    type:string

    @Column({
        type:"numeric"
    })
    amount:number

    @ManyToOne(()=>Client,
    Client=>Client.transactions,
    {
        cascade:true
    }
    )
    @JoinColumn({
        name:'client_id'
    })
    client:Client;
}