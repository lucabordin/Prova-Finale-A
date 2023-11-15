import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Entity } from 'typeorm';

@Entity('prodotti')
export class CreateProdottiDto {
  @IsNumber()
  @IsNotEmpty()
  idProdotto: number;

  @IsString()
  @IsNotEmpty()
  NomeProdotto: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  Giacenza: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  QuantitaMinimaOrdine: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  Prezzo: number;
}
