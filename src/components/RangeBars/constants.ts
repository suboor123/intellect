export enum RangeHeading {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export const mapColorToRange: Record<RangeHeading, string> = {
  [RangeHeading.HIGH]: "text-success",
  [RangeHeading.MEDIUM]: "text-warning",
  [RangeHeading.LOW]: "text-danger",
};
