import { PrismaClient } from "@prisma/client";

// import { tableNames } from "../static/staticData";
const basePrisma = new PrismaClient({
  // log: ["query"],
});

const prisma = basePrisma.$extends({
  model: {
    $allModels: {},
  },
});

export default prisma;
