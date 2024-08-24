import SeederHelper from "./helper/seeder.helper";
import ResetHelper from "./helper/reset.helper";

class Seeder {
  private seederHelper: SeederHelper;
  private resetHelper: ResetHelper;

  constructor(force: boolean) {
    this.resetHelper = new ResetHelper();
    this.seederHelper = new SeederHelper();
    if (force) {
      this.reset();
      setTimeout(() => {
        this.startSeeding();
      }, 1000);
    } else {
      this.startSeeding();
    }
  }

  private async startSeeding() {
    await this.seederHelper.Seeder();
  }

  private async reset() {
    try {
      await this.resetHelper.resetDB();
      console.log("reseted");
    } catch (error) {
      console.error("error reseting ", error);
    }
  }
}

const forceIndex = process.argv.indexOf("--force");

if (forceIndex !== -1) {
  new Seeder(true);
} else {
  new Seeder(false);
}
