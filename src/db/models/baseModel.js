"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
// import { tableNames } from "../static/staticData";
var basePrisma = new client_1.PrismaClient({
// log: ["query"],
});
var prisma = basePrisma.$extends({
    model: {
        $allModels: {},
    },
});
exports.default = prisma;
