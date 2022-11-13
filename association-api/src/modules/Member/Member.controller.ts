/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { IMember } from "src/interface/Member.interface";
import { MemberService } from "./Member.service";

@Controller('member')
export class MemberController {
    constructor(private memberService: MemberService) {}

    @Post('create')
    async addMember(@Body() newMember: IMember): Promise<IMember> {
        console.log('mandalo ato');
        return await this.memberService.createMember(newMember);
    }

    @Post('update')
    async updateMember(@Body() changeToMember: IMember): Promise<IMember> {
        return await this.memberService.updateMember(changeToMember);
    }

    @Get('see/:id')
    async getOneMember(@Param('id') id: string): Promise<IMember> {
        return await this.memberService.getOneMemberById(parseInt(id));
    }

    @Delete('delete/:id')
    async deleteMember(@Param('id') id: string) {
        return await this.memberService.deleteMember(parseInt(id));
    }

    
    
}