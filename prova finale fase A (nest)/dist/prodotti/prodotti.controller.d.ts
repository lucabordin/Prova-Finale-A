import { ProdottiService } from './prodotti.service';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
export declare class ProdottiController {
    private readonly prodottiService;
    constructor(prodottiService: ProdottiService);
    create(createProdottiDto: CreateProdottiDto): Promise<boolean | "inserimento avvenuto con successo">;
    ordinare(id: number, quantita: UpdateProdottiDto): Promise<string | never>;
    vendere(id: number, quantita: UpdateProdottiDto): Promise<string | never>;
}
