import { Button } from './atoms';

export function App() {
  return (
    <div style={{ display: 'flex', gap: 50, padding: 30 }}>
      <Button>Hello!</Button>
      <Button appearance="secondary">Hello!</Button>
      <Button disabled>Hello!</Button>
      <Button disabled appearance="secondary">
        Hello!
      </Button>
    </div>
  );
}
