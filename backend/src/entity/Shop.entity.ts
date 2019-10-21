import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
class Shop {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    name:string;
    @Column()
    photo :string;
    @Column()
    lat:number;
    @Column()
    lng :number;

}