import { Page, Locator } from "@playwright/test";
import { ComputerComponent } from "../Component/ComputerComponent";
import { StandardComputerComponent } from "../Component/StandardComputerComponent";
import { CheapComputerComponent } from "../Component/CheapComputerComponent";
import { ComputerType } from "../Types/ComputerType";

/**
 * Đại diện cho trang Product Detail.
 * - Cung cấp root() để scope tất cả locator thuộc trang.
 * - Cung cấp configurator(type) để lấy component xử lý options.
 */
export class ProductDetailsPage {
  // Dùng lại root selector từ ComputerComponent (scope an toàn)
  public static selector = ComputerComponent.selector; // ".product-details-page"

  constructor(private readonly page: Page) {
    this.page = page;
  }

  /** Root của trang product details */
  root(): Locator {
    return this.page.locator(ProductDetailsPage.selector);
  }

  /** Đợi trang detail hiển thị (tránh click quá sớm) */
  async waitForLoaded(): Promise<void> {
    await this.root().waitFor({ state: "visible" });
  }

  /** Trả về configurator đúng loại dựa vào type (standard=dropdown, cheap=radio) */
  configurator(type: string): ComputerComponent {
    const r = this.root();
    if (type === ComputerType.standard) return new StandardComputerComponent(r);
    return new CheapComputerComponent(r);
  }
}