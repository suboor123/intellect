export type RangeBarProps = {
  /**
   * Default value of active bars
   */
  value: number;
  /**
   * Event to handle bar clicks
   */
  onChange: (activeBar: number) => void;
  /**
   * Maximum number of bars present
   */
  max?: number;
};


export type BarProps = {
    isActive?: boolean;
    onClick?: () => void;
    size?: number;
}