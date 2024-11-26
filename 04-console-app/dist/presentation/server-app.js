"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_use_case_1 = require("../domain/use-cases/create-table.use-case");
const save_file_use_case_1 = require("../domain/use-cases/save-file.use-case");
class ServerApp {
    static run(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { base, limit, showTable, fileDestination, fileName } = options || {};
            const table = new create_table_use_case_1.CreateTable().execute({ base, limit });
            const wasCreated = new save_file_use_case_1.SaveFile().excute({
                fileDestination: `${fileDestination}/table-${base}`,
                fileContent: table,
                fileName: fileName
            });
            if (showTable)
                console.log(table);
            wasCreated ?
                console.log('file created') :
                console.error('Error creating file');
        });
    }
}
exports.ServerApp = ServerApp;
