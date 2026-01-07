import { Tab } from './components/ui/tab';
import { useState } from 'react';

export function App() {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div style={{ padding: 40, display: 'flex', gap: 12 }}>
      <Tab id={1} active={activeTab === 1} onClick={setActiveTab}>
        Overview
      </Tab>

      <Tab id={2} active={activeTab === 2} onClick={setActiveTab}>
        Details
      </Tab>

      <Tab id={3} active={activeTab === 3} onClick={setActiveTab}>
        Settings
      </Tab>
    </div>
  );
}
