import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateMatchDto } from '../dto/CreateMatch.dto';
import { MatchService } from '../services/match.service';
import mongoose from 'mongoose';
import { UpdateMatchDto } from '../dto/UpdateMatch.dto';

@ApiTags('match')
@Controller('match')
export class MatchController {

    constructor(
        private matchService: MatchService
    ) { }

    @Get()
    getAll() {
        return this.matchService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Match ID', 404);
        const findMatch = await this.matchService.getMatchById(id);
        if (!findMatch) throw new HttpException('Match not found', 404);

        return findMatch
    }

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: CreateMatchDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as CreateMatchDto
            },
        }
    })
    CreateMatch(@Body() createMatchDto: CreateMatchDto) {
        return this.matchService.createMatch(createMatchDto)
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    @ApiBody({
        type: UpdateMatchDto,
        examples: {
            body: {
                summary: "Empty Body",
                description: "Description for when an empty body is used",
                value: {} as UpdateMatchDto
            },
        }
    })
    async updateMatch(
        @Param('id') id: string,
        @Body() updateMatchDto: UpdateMatchDto
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Match ID', 404);
        const updated = await this.matchService.updateMatch(id, updateMatchDto)

        if (!updated) throw new HttpException('Match not found', 404);

        return updated
    }

    @Delete(':id')
    async deleteMatch(
        @Param('id') id: string,
    ) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Please use a valid Match ID', 404);

        const deleted = await this.matchService.deleteMatch(id)
        if (!deleted) throw new HttpException('Match not found', 404);
        return;
    }
}
