import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { KanbanColumnService } from './kanban-column.service';
import { CreateKanbanColumnDto } from './dto/create-kanban-column.dto';
import { UpdateKanbanColumnDto } from './dto/update-kanban-column.dto';


@Controller('kanban-column')
export class KanbanColumnController {
    constructor(private readonly kanbanColumnService: KanbanColumnService) {}

    // POST kanban column
    @Post()
    create(@Body() createKanbanColumnDto: CreateKanbanColumnDto) {
        return this.kanbanColumnService.create(createKanbanColumnDto);
    }

    // PUT kanban column
    @Put('id')
    update(@Param(':id') id: string, @Body() updateKanbanColumnDto: UpdateKanbanColumnDto) {
        return this.kanbanColumnService.update(id, updateKanbanColumnDto);
    }

    // GET kanban columns
    @Get('id')
    findOne(@Param(':id') id: string) {
        return this.kanbanColumnService.findOne(id);
    }

    // DELETE kanban column
    @Delete('id')
    delete(@Param(':id') id: string) {
        return this.kanbanColumnService.delete(id);
    }
    

}