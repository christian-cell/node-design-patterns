"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor(
    /*
    * @params args repo : storage repository
    */
    ) { }
    excute({ fileContent, fileDestination = 'outputs', fileName = 'table' }) {
        // const outputPath = `ouputs/`;
        try {
            fs_1.default.mkdirSync(fileDestination, { recursive: true });
            fs_1.default.writeFileSync(`${fileDestination}/tabla-${fileName}.txt`, fileContent);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.SaveFile = SaveFile;
