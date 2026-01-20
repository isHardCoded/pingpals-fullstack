import { Tabs } from './components/ui/tabs';

export function App() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 12 }}>
      <Tabs tabs={['Account', 'Password']} />
    </div>
  );
}
