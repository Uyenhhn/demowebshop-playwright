import { Locator } from "@playwright/test";
import { BaseItemDetailsComponent } from "./BaseItemDetailsComponent";

export abstract class ComputerEssentialComponent extends BaseItemDetailsComponent {
  constructor(protected component: Locator) {
    super(component);
  }

  abstract selectProcessor(type: string): Promise<string | null>;
  abstract selectRam(type: string): Promise<string | null>;

  async selectHDD(type: string): Promise<string | null> {
    return await this.selectCompOptions(type);
  }

  async selectOS(type: string): Promise<string | null> {
    return await this.selectCompOptions(type);
  }

  async selectSoftware(type: string): Promise<string | null> {
    return await this.selectCompOptions(type);
  }

  protected async selectCompOptions(
    type: string
  ): Promise<string | null> {
    const optionLoc = this.component
      .locator(`xpath=.//label[contains(normalize-space(.), "${type}")]`)
      .first();

    await optionLoc.click();
    return (await optionLoc.textContent())?.trim() ?? null;
  }
}