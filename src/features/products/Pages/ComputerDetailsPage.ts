import { Locator, Page } from "@playwright/test";
import { ComputerEssentialComponent } from "../Component/ComputerEssentialComponent";
import { BasePage } from "./BasePage";

export type ComputerComponentConstructor<T extends ComputerEssentialComponent> =
  new (root: Locator) => T;

export class ComputerDetailsPage extends BasePage {
  private readonly root: Locator;

  constructor(page: Page) {
    super(page);
    // ✅ selector gốc của form build computer
    this.root = page.locator("#product-details-form");
  }

  computerComp<T extends ComputerEssentialComponent>(
    computerComponentClass: ComputerComponentConstructor<T>
  ): T {
    // ✅ LUÔN luôn truyền root
    return new computerComponentClass(this.root);
  }
}