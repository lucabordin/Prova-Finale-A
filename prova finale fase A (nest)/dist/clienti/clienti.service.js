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
exports.ClientiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clienti_entity_1 = require("./entities/clienti.entity");
const typeorm_2 = require("typeorm");
let ClientiService = class ClientiService {
    constructor(clientiRepository) {
        this.clientiRepository = clientiRepository;
    }
    async create(createClientiDto) {
        try {
            if (!createClientiDto)
                throw new Error('il cliente inserito non è valido');
            const nuovoCliente = await this.clientiRepository.create(createClientiDto);
            await this.clientiRepository.save(nuovoCliente);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async login(loginClientiDto) {
        try {
            console.log(loginClientiDto);
            const cliente = await this.clientiRepository.findOneBy({
                Email: loginClientiDto.Email,
            });
            if (!cliente)
                return false;
            if (loginClientiDto.Password != cliente?.Password)
                return false;
            const payload = {
                sub: cliente.CodiceCliente,
            };
            console.log(payload);
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const cliente = await this.clientiRepository.findOneBy({ CodiceCliente: id });
            if (cliente) {
                const clienteDto = {
                    CodiceCliente: cliente.CodiceCliente,
                    Nome: cliente.Nome,
                    Cognome: cliente.Cognome,
                    DataDiNascita: cliente.DataDiNascita,
                    Email: cliente.Email,
                };
                return clienteDto;
            }
            else
                throw new Error(`nessun prodotto che corrisponde all'id: ${id} trovato`);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ClientiService = ClientiService;
exports.ClientiService = ClientiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(clienti_entity_1.ClienteEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientiService);
//# sourceMappingURL=clienti.service.js.map