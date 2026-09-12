import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { ItemImportance } from '@prisma/client'

export class UpdateKanbanItemDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsEnum(ItemImportance)
    item_importance?: ItemImportance;

    @IsNumber()
    predicted_time?: number;

    @IsString()
    column_id: string;
}