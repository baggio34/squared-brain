import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateKanbanColumnDto {
    @IsString()
    name: string;

}