import { Module } from '@nestjs/common';
import { KanbanItemController } from './kanban-item.controller';
import { KanbanColumnController } from './kanban-column.controller';
import { KanbanColumnService } from './kanban-column.service';
import { KanbanItemService } from './kanban-item.service';

@Module({
    imports: [],
    controllers: [KanbanColumnController, KanbanItemController],
    providers: [KanbanColumnService, KanbanItemService],
    exports: [KanbanColumnService, KanbanItemService],
})
export class KanbanModule {}