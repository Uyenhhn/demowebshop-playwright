import { ComputerType } from "../../src/features/products/Types/ComputerType";
import { ComputerConfig } from "../../src/features/products/Types/ComputerConfig";

export const buildYourOwnCheapComputerData: ComputerConfig = {
  productName: "Build your own cheap computer",
  type: ComputerType.cheap,                   // radio
  processor: "Slow",                          // ví dụ label thực tế trên trang
  ram: "2 GB",
  hdd: "320 GB",
  os: "Ubuntu",
  software: [],                               // không chọn gì
  qty: 1,
};