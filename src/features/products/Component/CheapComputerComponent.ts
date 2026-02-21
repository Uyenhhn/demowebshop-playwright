import { Locator } from "@playwright/test";
import { ComputerComponent } from "./ComputerComponent";

export class CheapComputerComponent extends ComputerComponent {
  constructor(component: Locator) {
    super(component);
  }

  async selectProcessor(valueLabel: string): Promise<void> {
    await this.selectRadio("Processor", valueLabel);
  }

  async selectRAM(valueLabel: string): Promise<void> {
    await this.selectRadio("RAM", valueLabel);
  }
}
