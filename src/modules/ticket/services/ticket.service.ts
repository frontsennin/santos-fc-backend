import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TicketModel } from '../../../models/ticket.model';
import { CreateTicketDto } from '../dto/CreateTicket.dto';
import { UpdateTicketDto } from '../dto/UpdateTicket.dto';

@Injectable()
export class TicketService {

    constructor(
        @InjectModel(TicketModel.name) private ticketModel: Model<TicketModel>
    ) { }

    createTicket(createTicketDto: CreateTicketDto) {
        const newTicket = new this.ticketModel(createTicketDto);

        return newTicket.save();
    }

    getAll() {
        return this.ticketModel.find()
    }

    getTicketById(id: string) {
        return this.ticketModel.findById(id)
    }

    updateTicket(id: string, updateTicketDto: UpdateTicketDto) {
        return this.ticketModel.findByIdAndUpdate(id, updateTicketDto, { new: true })
    }

    deleteTicket(id: string) {
        return this.ticketModel.findByIdAndDelete(id)
    }
}
