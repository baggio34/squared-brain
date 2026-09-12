import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateKanbanItemDto } from './dto/create-kanban-item.dto';
import { UpdateKanbanItemDto } from './dto/update-kanban-item';
import { KanbanItemService } from './kanban-item.service';

@Controller('kanban-item')
export class KanbanItemController {
    constructor(private readonly kanbanItemService: KanbanItemService) {}
    // POST kanban item
    @Post()
    create(@Body() createKanbanItemDto: CreateKanbanItemDto) {
        return this.kanbanItemService.create(createKanbanItemDto);
    }

    // PUT kanban item
    @Put('id')
    update(@Param(':id') id: string, @Body() updateKanbanItemDto: UpdateKanbanItemDto) {
        return this.kanbanItemService.update(id, updateKanbanItemDto);
    }

    // GET kanban item full
    @Get('id')
    findOne(@Param(':id') id: string) {
        return this.kanbanItemService.findOne(id);
    }

    // DELETE kanban item
    @Delete('id')
    delete(@Param(':id') id: string) {
        return this.kanbanItemService.delete(id);
    }
}