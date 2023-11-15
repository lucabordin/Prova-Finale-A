"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProdottiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prodotti_dto_1 = require("./create-prodotti.dto");
class UpdateProdottiDto extends (0, mapped_types_1.PartialType)(create_prodotti_dto_1.CreateProdottiDto) {
}
exports.UpdateProdottiDto = UpdateProdottiDto;
//# sourceMappingURL=update-prodotti.dto.js.map