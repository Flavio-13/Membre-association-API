/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Members } from "../../Entity/Member.entity";
import { IMember } from "src/interface/Member.interface";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {
    
    private readonly saltRound: number = 10;
    
    constructor(
        @InjectRepository(Members)
        private userRepos: Repository<Members>
    ) {}


    async createMember(newMember: IMember): Promise<IMember> {
        newMember.mdp = await bcrypt.hash(newMember.mdp, this.saltRound);
        return await this.userRepos.save(newMember);
    }
    

    async getOneMemberById(idMember: number): Promise<IMember> {
        return await this.userRepos.findOne({
            where: {
                idMember: idMember
            }
        })
    }

    async updateMember(member: IMember): Promise<IMember> {
        if (member) return await this.userRepos.save(member);
        return null;
    }

    async deleteMember(idMember: number) {
        return await this.userRepos.delete(idMember);
    }
}