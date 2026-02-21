import { expect, Page } from "@playwright/test";
import HomePage from "../../home/Pages/HomePage";
import { ProductDetailsPage } from "../Page/ProductDetailPage";
import { ComputerConfig } from "../Types/ComputerConfig";  // nếu chưa có, tạm dùng 'any'

export class BuyingComputerFlow {
  private readonly successBarSel = ".bar-notification.success";

  constructor(
    private readonly page: Page,
    private readonly cfg: ComputerConfig, // nếu chưa có type, tạm để 'any'
  ) {
    this.page = page;
  }

  /** Guard tối thiểu để fail sớm & message rõ */
  private validateConfig(): void {
    if (!this.cfg.productName) {
      throw new Error("BuyingComputerFlow: 'productName' is required.");
    }
    if (!this.cfg.type) {
      throw new Error("BuyingComputerFlow: 'type' is required (standard|cheap).");
    }
  }

  async run(): Promise<void> {
    this.validateConfig();

    // 1) Home → mở product theo tên
    const home = new HomePage(this.page);
    await home.pageBodyComponent().openFeaturedProductByName(this.cfg.productName);

    // 2) Product detail → đợi trang → lấy configurator theo type
    const product = new ProductDetailsPage(this.page);
    await product.waitForLoaded();
    const cfgtr = product.configurator(this.cfg.type);

    // 3) Chọn options theo data (processor/ram khác nhau đã được ẩn trong component)
    if (this.cfg.processor) await cfgtr.selectProcessor(this.cfg.processor);
    if (this.cfg.ram)       await cfgtr.selectRAM(this.cfg.ram);

    if (this.cfg.hdd)       await cfgtr.selectHDD(this.cfg.hdd);
    if (this.cfg.os)        await cfgtr.selectOS(this.cfg.os);
    if (this.cfg.software?.length) {
      for (const sw of this.cfg.software) await cfgtr.selectSoftware(sw, true);
    }

    // (Optional) nếu có set quantity thì implement thêm method ở component
    // if (this.cfg.qty && this.cfg.qty !== 1) await cfgtr.setQty(this.cfg.qty);

    // 4) Add to cart + verify
    await cfgtr.addToCart();
    await expect(this.page.locator(this.successBarSel)).toBeVisible();
  }
}
