import{IsDateString} from 'class-validator'
export class CreateRegisterDto {
    name: string;
    description: string;
    genreName: string;
    typeName: string;
    
    @IsDateString()
    year: string;
}



