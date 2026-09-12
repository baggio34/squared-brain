import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateKanbanItemDto } from './dto/create-kanban-item.dto';
import { UpdateKanbanItemDto } from './dto/update-kanban-item';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemImportance } from '@prisma/client'


@Injectable()
export class KanbanItemService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateKanbanItemDto) {
        const item = await this.prisma.kanban_item.create({
            data: {
                name: dto.name,
                description: dto.description,
                importance: dto.item_importance,
                predicted_time: dto.predicted_time,
                column_id: dto.column_id,
            },
        })

        return item.id;
    }

    async update(id: string, dto: UpdateKanbanItemDto) {
        try {
            const updatedItem = await this.prisma.kanban_item.update({
                where: { id },
                data: {
                    name: dto.name,
                    description: dto.description,
                    importance: dto.item_importance,
                    predicted_time: dto.predicted_time,
                    column_id: dto.column_id,
                },
            });

            return updatedItem.id;
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException("Kanban Item don't exists");
            }
        }

        throw Error;
    }

    async findOne(id: string) {
        const findedItem = await this.prisma.kanban_item.findUnique({
            where: { id },
            select: { name: true, description: true, importance: true, sub_tasks: true, predicted_time: true},
        }); 

        if (!findedItem) {
            throw new NotFoundException("Kanban Item not founded");
        }

        return findedItem;
    }

    async delete(id: string) {
        try {
            const deletedItem = await this.prisma.kanban_item.delete({
                where: { id },
                select: { id: true },
            });
            
            return deletedItem;
        } catch (error) {
            if (error.code == 'P2025') {
                throw new NotFoundException("Kanban Item not founded")
            }
        }
    }
}