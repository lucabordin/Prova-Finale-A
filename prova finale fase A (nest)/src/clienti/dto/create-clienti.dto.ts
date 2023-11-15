import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Entity } from 'typeorm';

@Entity('clienti')
export class CreateClientiDto {
  @IsString()
  @IsNotEmpty()
  @Length(5)
  CodiceCliente: string;

  @IsString()
  @IsNotEmpty()
  Nome: string;

  @IsString()
  @IsNotEmpty()
  Cognome: string;

  @IsDate()
  @IsNotEmpty()
  DataDiNascita: Date;

  @IsString()
  @IsNotEmpty()
  Email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  Password: string;
}
