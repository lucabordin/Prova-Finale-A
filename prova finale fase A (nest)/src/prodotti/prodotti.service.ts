import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdottoEntity } from './entities/prodotti.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdottiService {
  constructor(
    @InjectRepository(ProdottoEntity)
    private prodottiRepository: Repository<ProdottoEntity>,
  ) {}

  async create(createProdottiDto: CreateProdottiDto) {
    try {
      const nuovoProdotto: CreateProdottiDto =
        await this.prodottiRepository.create(createProdottiDto);
      await this.prodottiRepository.save(nuovoProdotto);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async ordinare(
    id: number,
    quantita: UpdateProdottiDto,
  ): Promise<boolean | never> {
    try {
      const prodotto: CreateProdottiDto =
        await this.prodottiRepository.findOneBy({
          idProdotto: id,
        });
      if (!prodotto)
        throw new Error(`nessun prodotto corrispondente all'id ${id} trovato`);
      prodotto.Giacenza += quantita.Giacenza;
      await this.prodottiRepository.update(id, prodotto);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async vendere(id: number, quantita: UpdateProdottiDto) {
    try {
      const prodotto: CreateProdottiDto =
        await this.prodottiRepository.findOneBy({
          idProdotto: id,
        });
      if (!prodotto) {
        // return false;
        throw new Error(`nessun prodotto corrispondente all'id ${id} trovato`);
      }
      if (quantita.Giacenza > prodotto.Giacenza) {
        // console.log(quantita.Giacenza);
        throw new BadRequestException(
          'impossibile effettuare la richesta poichè si supera la giacenza in magazzino',
        );
      }
      prodotto.Giacenza -= quantita.Giacenza;
      await this.prodottiRepository.update(id, prodotto);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
