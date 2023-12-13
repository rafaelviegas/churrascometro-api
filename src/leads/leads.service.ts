import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLeadDTO } from './dtos/createLead.dto';

@Injectable()
export class LeadsService {  
  constructor(private prisma: PrismaService){
  }
  create(lead : CreateLeadDTO): any {
    return this.prisma.lead.create({data: lead});
  }

  getByEmail(email : string): any {
    return this.prisma.lead.findFirst({where: {email}})
    .then(lead => {
      if(!lead)
        throw new HttpException('Ops! E-mail não encontrado.', HttpStatus.NOT_FOUND);

      return lead;
    })
  }  
}
