import React from 'react';
import type { TabsProps } from '.';
import s from './styles.module.css';
import { Tab } from '../tab';

export function Tabs({
  className,
  tabs,
  columnSize = '1fr',
  onTabChange,
}: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  const rootClassNames = () =>
    [s.root, className, s[`columnSize-${columnSize}`]]
      .filter(Boolean)
      .join(' ');

  const handleTabClick = (index: number) => () => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <div className={rootClassNames()}>
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          active={activeTab === i}
          onClick={handleTabClick(i)}
          id={i}
        >
          {tab}
        </Tab>
      ))}
    </div>
  );
}
