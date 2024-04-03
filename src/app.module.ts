import { UserModule } from './modules/user/user.module';
import { MatchModule } from './modules/match/match.module';
import { PlanModule } from './modules/plan/plan.module';
import { StadiumModule } from './modules/stadium/stadium.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nicolasmazia666:jDPrjIOwrJFusQiU@cluster0.wtbny8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    ConfigModule.forRoot(),
    UserModule,
    MatchModule,
    PlanModule,
    StadiumModule,
    TicketModule
  ]
})
export class AppModule {}
