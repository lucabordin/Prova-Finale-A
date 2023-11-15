"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clienti_dto_1 = require("./create-clienti.dto");
class UpdateClientiDto extends (0, mapped_types_1.PartialType)(create_clienti_dto_1.CreateClientiDto) {
}
exports.UpdateClientiDto = UpdateClientiDto;
//# sourceMappingURL=update-clienti.dto.js.map