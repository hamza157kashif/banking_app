import { Column, CreateDateColumn, Entity,  JoinTable,  ManyToMany,  UpdateDateColumn } from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";
@Entity('banker')
export class Banker extends Person{

    @Column({
        length:10,
        unique:true
    })
    employee_number: string;

    @ManyToMany(
        ()=>Client
    )
    @JoinTable({
        name:'bankers_clients',
        joinColumn:{
            name:'banker',
            referencedColumnName:'id'
        },
        inverseJoinColumn:{
            name:'client',
            referencedColumnName:'id'
        }
    })
    clients:Client[]
   
    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
    

}