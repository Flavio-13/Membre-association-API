/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Members {
    @PrimaryGeneratedColumn()
    idMember: number;

    @Column({ nullable: false })
    nom: string;

    @Column()
    prenom: string;

    @Column({ nullable: false })
    age: number;

    @Column({ nullable: false })
    adresse: string;

    @Column({ nullable: false })
    mdp: string;
}