/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { IMember } from "src/interface/Member.interface";
import { MemberService } from "./Member.service";

@Controller('member')
export class MemberController {
    constructor(private memberService: MemberService) {}

    @Post('create')
    async addMember(@Body() newMember: IMember): Promise<IMember> {
        return await this.memberService.createMember(newMember);
    }

    
}