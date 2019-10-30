import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email:string;
    @Column()
    password:string;

}