import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity(({name:'tb_categoria'}))
export class Categoria {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    marca: string;

    @Column()
    tipoProduto:string;
}
