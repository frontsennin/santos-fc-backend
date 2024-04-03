/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MatchModel } from '../../../models/match.model';
import { CreateMatchDto } from '../dto/CreateMatch.dto';
import { UpdateMatchDto } from '../dto/UpdateMatch.dto';

@Injectable()
export class MatchService {

    constructor(
        @InjectModel(MatchModel.name) private matchModel: Model<MatchModel>
    ) { }

    createMatch(createMatchDto: CreateMatchDto) {
        const newMatch = new this.matchModel(createMatchDto);

        return newMatch.save();
    }

    getAll() {
        return this.matchModel.find()
    }

    getMatchById(id: string) {
        return this.matchModel.findById(id)
    }

    updateMatch(id: string, updateMatchDto: UpdateMatchDto) {
        return this.matchModel.findByIdAndUpdate(id, updateMatchDto, { new: true })
    }

    deleteMatch(id: string) {
        return this.matchModel.findByIdAndDelete(id)
    }
}
