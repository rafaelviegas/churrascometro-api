import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LeadsModule, PrismaModule],
  controllers: [],
  providers: [],
})

export class AppModule {}

