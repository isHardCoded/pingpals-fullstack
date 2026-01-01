import { Button } from './atoms';

export function App() {
  return (
    <div style={{ padding: 30, fontFamily: 'Poppins, sans-serif' }}>
      <div style={{ marginTop: 50, display: 'flex', gap: 50 }}>
        <Button>Hello!</Button>
        <Button appearance="secondary">Hello!</Button>
        <Button disabled>Hello!</Button>
        <Button disabled appearance="secondary">
          Hello!
        </Button>
      </div>
    </div>
  );
}
