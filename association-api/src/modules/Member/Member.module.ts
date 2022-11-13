/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Members } from "../../Entity/Member.entity";
import { MemberController } from "./Member.controller";
import { MemberService } from "./Member.service";

@Module({
    imports: [TypeOrmModule.forFeature([Members])],
    controllers: [MemberController],
    providers: [MemberService]
})
export class MemberModule {}