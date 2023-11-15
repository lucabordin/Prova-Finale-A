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
exports.ClientiController = void 0;
const common_1 = require("@nestjs/common");
const clienti_service_1 = require("./clienti.service");
const create_clienti_dto_1 = require("./dto/create-clienti.dto");
const login_clienti_dto_1 = require("./dto/login-clienti.dto");
const authToken_guards_1 = require("../guards/authToken.guards");
let ClientiController = class ClientiController {
    constructor(clientiService) {
        this.clientiService = clientiService;
    }
    async create(createClientiDto) {
        try {
            if (await this.clientiService.create(createClientiDto))
                return 'inserimento effettuato con successo';
            else
                throw new common_1.BadRequestException("errore durante l'ealborazione della richiesta");
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async login(loginClientiDto) {
        try {
            console.log(loginClientiDto);
            const token = await this.clientiService.login(loginClientiDto);
            console.log(token);
            return token;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findOne(id) {
        return await this.clientiService.findOne(id);
    }
};
exports.ClientiController = ClientiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_clienti_dto_1.CreateClientiDto]),
    __metadata("design:returntype", Promise)
], ClientiController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_clienti_dto_1.LoginClientiDto]),
    __metadata("design:returntype", Promise)
], ClientiController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(authToken_guards_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientiController.prototype, "findOne", null);
exports.ClientiController = ClientiController = __decorate([
    (0, common_1.Controller)('clienti'),
    __metadata("design:paramtypes", [clienti_service_1.ClientiService])
], ClientiController);
//# sourceMappingURL=clienti.controller.js.map