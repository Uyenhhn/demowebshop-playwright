import { Locator, Page } from "@playwright/test";
import { ComputerComponent } from "./ComputerComponent";

export class StandardComputerComponent extends ComputerComponent {
  constructor(component: Locator) {
    super(component);
  }

  async selectProcessor(valueLabel: string): Promise<void> {
    await this.selectDropdown("Processor", valueLabel);
  }

  async selectRAM(valueLabel: string): Promise<void> {
    await this.selectDropdown("RAM", valueLabel);
  }
}
