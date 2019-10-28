import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Shop } from "./Shop.entity";
import { Exclude } from 'class-transformer';


@Entity()
export  class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email:string;
    
    @Column()
    @Exclude()
    password:string;
    @ManyToMany(type => Shop)
    @JoinTable()
    shopsliked : Shop[];

}