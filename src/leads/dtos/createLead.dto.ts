import { ApiProperty } from "@nestjs/swagger";

export class CreateLeadDTO {
    @ApiProperty()
    email: string;
    @ApiProperty()
    name:  string;
    @ApiProperty()
    postalCode: string;
    @ApiProperty()
    optIn: boolean;
}