export const ComputerType = {
  standard: "standard", // Processor/RAM = dropdown
  cheap: "cheap",       // Processor/RAM = radio
} as const;

export type ComputerTypeKey = keyof typeof ComputerType;
export type ComputerTypeValue = typeof ComputerType[ComputerTypeKey];