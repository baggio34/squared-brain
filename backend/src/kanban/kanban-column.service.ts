import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto';
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KanbanColumnService {
    constructor(private readonly prisma: PrismaService) {}

    async create(dto: CreateKanbanColumnDto) {
        const column = await this.prisma.kanban_column.create({
            data: {
                name: dto.name,
                user_id: dto.userId,
            },
        })

        return column.id;
    }

    async update(id: string, dto: UpdateKanbanColumnDto) {
        try {
            const updatedColumn = await this.prisma.kanban_column.update({
                where: { id },
                data: {
                    name: dto.name,
                },
            });

            return updatedColumn.id;
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException("Kanban Column don't exists");
            }
        }

        throw Error;
    }

    async findOne(id: string) {
        const findedColumn = await this.prisma.kanban_column.findUnique({
            where: { id },
            select: { name: true, user_id: true, kanbanItems: true},
        }); 

        if (!findedColumn) {
            throw new NotFoundException("Kanban column not founded");
        }

        return findedColumn;
    }

    async delete(id: string) {
        try {
            const deletedColumn = await this.prisma.kanban_column.delete({
                where: { id },
                select: { id: true },
            });
            
            return deletedColumn;
        } catch (error) {
            if (error.code == 'P2025') {
                throw new NotFoundException("Kanban Column not founded")
            }
        }
    }
}