/* eslint-disable prettier/prettier */
import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Members } from "../../Entity/Member.entity";
import { IMember } from "src/interface/Member.interface";
import { MemberController } from "./Member.controller"
import { MemberService } from "./Member.service";

describe('memberController', () => {
    let memberController: MemberController;
    let memberService: MemberService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [TypeOrmModule.forFeature([Members])],
            controllers: [MemberController],
            providers: [MemberService]
        }).compile();

        memberService = moduleRef.get<MemberService>(MemberService);
        memberController = moduleRef.get<MemberController>(MemberController);
    });

    describe('member module', () => {
        const newMember: IMember = {
            nom: 'Nothing',
            prenom: 'Also nothing',
            adresse: 'Antananarivo',
            age: 1,
            mdp: 'qsdqsdq'
        };

        it('should return a new member', async () => {
            expect(await memberController.addMember(newMember)).toBe(newMember);  
        })
    })

})