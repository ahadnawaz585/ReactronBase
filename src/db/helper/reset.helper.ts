import { PrismaClient } from "@prisma/client";
import prisma from "../models/baseModel";


class ResetHelper {
  private prisma = new PrismaClient();
  private tableNames:string[] =[]
  async resetDB() {
    try {
      for (const tableName of this.tableNames) {
        await prisma.$queryRawUnsafe(`DELETE FROM "${tableName}";`);
        console.log(`Table ${tableName} has been reset.`);
      }
    } catch (err) {
      console.error("Error resetting tables:", err);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default ResetHelper;
