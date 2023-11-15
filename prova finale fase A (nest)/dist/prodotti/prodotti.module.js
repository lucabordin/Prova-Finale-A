"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdottiModule = void 0;
const common_1 = require("@nestjs/common");
const prodotti_service_1 = require("./prodotti.service");
const prodotti_controller_1 = require("./prodotti.controller");
const typeorm_1 = require("@nestjs/typeorm");
const prodotti_entity_1 = require("./entities/prodotti.entity");
let ProdottiModule = class ProdottiModule {
};
exports.ProdottiModule = ProdottiModule;
exports.ProdottiModule = ProdottiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([prodotti_entity_1.ProdottoEntity])],
        controllers: [prodotti_controller_1.ProdottiController],
        providers: [prodotti_service_1.ProdottiService],
    })
], ProdottiModule);
//# sourceMappingURL=prodotti.module.js.map