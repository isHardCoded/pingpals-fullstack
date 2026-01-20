import React from 'react';

export type TabProps = {
  className?: string;
  children: React.ReactNode;
  active: boolean;
  onClick: (id: number) => void;
  id: number;
};
