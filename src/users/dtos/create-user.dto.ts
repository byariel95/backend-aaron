import { MaxLength } from "class-validator";

export class CreateUserDto {

    @MaxLength(100)
    email: string;

    @MaxLength(50)
    name: string;

    @MaxLength(50)
    lastname: string;

    birthday: string;

    @MaxLength(9)
    phone: string;

    @MaxLength(13)
    dpi: string;

    @MaxLength(120)
    description: string;
}