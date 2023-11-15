import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { ProdottoEntity } from './entities/prodotti.entity';
import { Repository } from 'typeorm';
export declare class ProdottiService {
    private prodottiRepository;
    constructor(prodottiRepository: Repository<ProdottoEntity>);
    create(createProdottiDto: CreateProdottiDto): Promise<boolean>;
    ordinare(id: number, quantita: UpdateProdottiDto): Promise<boolean | never>;
    vendere(id: number, quantita: UpdateProdottiDto): Promise<boolean>;
}
