"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdottiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const prodotti_entity_1 = require("./entities/prodotti.entity");
const typeorm_2 = require("typeorm");
let ProdottiService = class ProdottiService {
    constructor(prodottiRepository) {
        this.prodottiRepository = prodottiRepository;
    }
    async create(createProdottiDto) {
        try {
            const nuovoProdotto = await this.prodottiRepository.create(createProdottiDto);
            await this.prodottiRepository.save(nuovoProdotto);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async ordinare(id, quantita) {
        try {
            const prodotto = await this.prodottiRepository.findOneBy({
                idProdotto: id,
            });
            if (!prodotto)
                throw new Error(`nessun prodotto corrispondente all'id ${id} trovato`);
            prodotto.Giacenza += quantita.Giacenza;
            await this.prodottiRepository.update(id, prodotto);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async vendere(id, quantita) {
        try {
            const prodotto = await this.prodottiRepository.findOneBy({
                idProdotto: id,
            });
            if (!prodotto) {
                throw new Error(`nessun prodotto corrispondente all'id ${id} trovato`);
            }
            if (quantita.Giacenza > prodotto.Giacenza) {
                throw new common_1.BadRequestException('impossibile effettuare la richesta poichè si supera la giacenza in magazzino');
            }
            prodotto.Giacenza -= quantita.Giacenza;
            await this.prodottiRepository.update(id, prodotto);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProdottiService = ProdottiService;
exports.ProdottiService = ProdottiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prodotti_entity_1.ProdottoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdottiService);
//# sourceMappingURL=prodotti.service.js.map