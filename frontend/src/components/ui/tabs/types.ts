export type TabsColumnSize = 'auto' | '1fr';

export type TabsProps = {
  className?: string;
  tabs: string[];
  columnSize?: TabsColumnSize;
  onTabChange?: (index: number) => void;
};
