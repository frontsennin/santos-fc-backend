import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateTicketDto } from '../dto/CreateTicket.dto';
import { TicketService } from '../services/ticket.service';
import mongoose from 'mongoose';
import { UpdateTicketDto } from '../dto/UpdateTicket.dto';

@ApiTags('ticket')
@Controller('ticket')
export class TicketController {

    constructor(
        private ticketService: TicketService
    ) { }

    @Get()
    getAll() {
        return this.ticketService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Ticket ID', 404);
        const findTicket = await this.ticketService.getTicketById(id);
        if (!findTicket) throw new HttpException('Ticket not found', 404);

        return findTicket
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateTicketDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateTicketDto
            },
        }
    })
    CreateTicket(@Body() createTicketDto: CreateTicketDto) {
        return this.ticketService.createTicket(createTicketDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateTicketDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateTicketDto
            },
        }
    })
    async updateTicket(
        @Param('id') id: string,
        @Body() updateTicketDto: UpdateTicketDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Ticket ID', 404);
        const updated = await this.ticketService.updateTicket(id, updateTicketDto)

        if (!updated) throw new HttpException('Ticket not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteTicket(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Ticket ID', 404);

        const deleted = await this.ticketService.deleteTicket(id)
        if (!deleted) throw new HttpException('Ticket not found', 404);
        return;
    }
}
