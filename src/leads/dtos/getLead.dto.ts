import { ApiProperty } from "@nestjs/swagger";

export class FindLeadDTO {
    @ApiProperty()
    email: string;
}