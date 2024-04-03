import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketModel, TicketSchema } from '../../models/ticket.model';
import { TicketService } from './services/ticket.service';
import { TicketController } from './controllers/ticket.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: TicketModel.name,
                schema: TicketSchema
            }
        ])
    ],
    controllers: [
        TicketController
    ],
    providers: [
        TicketService
    ],
})
export class TicketModule { }
