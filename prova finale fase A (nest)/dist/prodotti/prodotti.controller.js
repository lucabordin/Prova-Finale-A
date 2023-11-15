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
exports.ProdottiController = void 0;
const common_1 = require("@nestjs/common");
const prodotti_service_1 = require("./prodotti.service");
const create_prodotti_dto_1 = require("./dto/create-prodotti.dto");
const update_prodotti_dto_1 = require("./dto/update-prodotti.dto");
const idNumeric_pipe_1 = require("../CustomPipes/idNumeric.pipe");
let ProdottiController = class ProdottiController {
    constructor(prodottiService) {
        this.prodottiService = prodottiService;
    }
    async create(createProdottiDto) {
        try {
            if (await this.prodottiService.create(createProdottiDto))
                return 'inserimento avvenuto con successo';
            else
                throw new common_1.BadRequestException("errore durante l'elaborazione della richiesta");
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
        return this.prodottiService.create(createProdottiDto);
    }
    async ordinare(id, quantita) {
        try {
            if (!(await this.prodottiService.ordinare(id, quantita)))
                throw new common_1.BadRequestException("errore durante l'elaborazione della richiesta");
            else
                return 'operazione effettuata con successo';
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async vendere(id, quantita) {
        try {
            const successo = await this.prodottiService.vendere(id, quantita);
            if (!successo)
                throw new common_1.BadRequestException("errore durante l'elaborazione della richieta");
            else
                return 'operazione effettuata con successo';
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
};
exports.ProdottiController = ProdottiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prodotti_dto_1.CreateProdottiDto]),
    __metadata("design:returntype", Promise)
], ProdottiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/ordinare/:id'),
    __param(0, (0, common_1.Param)('id', idNumeric_pipe_1.CustomValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_prodotti_dto_1.UpdateProdottiDto]),
    __metadata("design:returntype", Promise)
], ProdottiController.prototype, "ordinare", null);
__decorate([
    (0, common_1.Get)('/vendere/:id'),
    __param(0, (0, common_1.Param)('id', idNumeric_pipe_1.CustomValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_prodotti_dto_1.UpdateProdottiDto]),
    __metadata("design:returntype", Promise)
], ProdottiController.prototype, "vendere", null);
exports.ProdottiController = ProdottiController = __decorate([
    (0, common_1.Controller)('prodotti'),
    __metadata("design:paramtypes", [prodotti_service_1.ProdottiService])
], ProdottiController);
//# sourceMappingURL=prodotti.controller.js.map