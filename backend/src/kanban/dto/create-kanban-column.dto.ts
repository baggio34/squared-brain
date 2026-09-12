import { IsNotEmpty, IsString } from 'class-validator';

export class CreateKanbanColumnDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    // I will take off the user id after implement auth logic
    @IsString()
    @IsNotEmpty()
    userId: string;

}