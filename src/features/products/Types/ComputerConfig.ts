import { ComputerTypeValue } from "./ComputerType";

/**
 * Cấu hình cho 1 product Build-your-own
 * - Các field optional để bạn có thể test case thiếu option (negative/partial)
 */
export type ComputerConfig = {
  productName: string;        // tên hiển thị ở Home Featured (click theo tên)
  type: ComputerTypeValue;    // "standard" | "cheap"
  processor?: string;         // label hiển thị
  ram?: string;               // label hiển thị
  hdd?: string;               // radio label (vd: "320 GB")
  os?: string;                // radio label (vd: "Windows 7 [+$50.00]")
  software?: string[];        // danh sách checkbox label
  qty?: number;               // (optional) nếu cần nhập quantity
};
