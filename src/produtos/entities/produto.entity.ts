import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";

@Entity(({name: 'tb_produtos'}))
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    nome:string;

    @IsNotEmpty()
    @Column()
    preco:number;

    @IsNotEmpty()
    @Column()
    descricao: string;

}
