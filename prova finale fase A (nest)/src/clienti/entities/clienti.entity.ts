import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { isDate } from 'util/types';

@Entity('clienti')
export class ClienteEntity {
  @PrimaryColumn()
  @IsString()
  @IsNotEmpty()
  @Length(5)
  CodiceCliente: string;
  @Column()
  @IsString()
  @IsNotEmpty()
  Nome: string;
  @Column()
  @IsString()
  @IsNotEmpty()
  Cognome: string;
  @Column()
  @IsDate()
  @IsNotEmpty()
  DataDiNascita: Date;
  @Column()
  @IsString()
  @IsNotEmpty()
  Email: string;
  @Column()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  Password: string;
}
