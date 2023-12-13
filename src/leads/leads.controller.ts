import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { CreateLeadDTO } from './dtos/createLead.dto';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { FindLeadDTO } from './dtos/getLead.dto';

@Controller("leads")
export class LeadsController {
  constructor(private readonly appService: LeadsService) {}

  @Post()
  createLead(@Body() data : CreateLeadDTO): any {
    return this.appService.create(data);
  }

  @Get(":email")
  getLeadByEmail(@Param() data : FindLeadDTO): any {
    return this.appService.getByEmail(data.email);
  }
}
