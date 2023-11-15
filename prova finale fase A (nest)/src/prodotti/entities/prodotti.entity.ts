import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('prodotti')
export class ProdottoEntity {
  @PrimaryColumn()
  @IsNumber()
  @IsNotEmpty()
  idProdotto: number;
  @Column()
  @IsString()
  @IsNotEmpty()
  NomeProdotto: string;
  @Column()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  Giacenza: number;
  @Column()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  QuantitaMinimaOrdine: number;
  @Column()
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  Prezzo: number;
}
