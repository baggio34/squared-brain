import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { ItemImportance } from '@prisma/client'

export class CreateKanbanItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

    @IsEnum(ItemImportance)
    item_importance?: ItemImportance;

    @IsNumber()
    predicted_time?: number;

    @IsString()
    @IsNotEmpty()
    column_id: string;
}