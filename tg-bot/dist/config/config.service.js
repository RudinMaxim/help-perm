"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv_1 = require("dotenv");
class ConfigService {
    constructor() {
        const { error, parsed } = (0, dotenv_1.config)();
        if (error) {
            throw new Error("Не найден файл .env");
        }
        if (!parsed) {
            throw new Error('Не удалось прочитать файл .env');
        }
        this.config = parsed;
    }
    get(key) {
        const res = this.config[key];
        if (!res) {
            throw new Error(`Не найден ключ '${key}' в файле .env`);
        }
        return res;
    }
}
exports.ConfigService = ConfigService;