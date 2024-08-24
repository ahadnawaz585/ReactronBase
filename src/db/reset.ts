
import ResetHelper from "./helper/reset.helper";
class Reset {
  private resetService: ResetHelper;
  constructor() {
    this.resetService = new ResetHelper();
    this.reset();
  }

  private async reset() {
    try {
      await this.resetService.resetDB();
      console.log("Done reset!");
    } catch (error) {
      console.error("error reseting ", error);
    }
  }
}

new Reset();
