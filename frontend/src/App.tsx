import React from 'react';
import { Input } from './components/ui/input';

export function App() {
  const [value, setValue] = React.useState<string>('');

  return (
    <>
      <div style={{ display: 'flex', gap: 15, margin: 40 }}>
        <div style={{ maxWidth: 300 }}>
          <Input
            placeholder="Name"
            label="Name"
            name="Name"
            value={value}
            onChange={setValue}
          />
        </div>

        <div style={{ maxWidth: 300 }}>
          <Input
            label="Surname"
            placeholder="Surname"
            name="Surname"
            value={value}
            onChange={setValue}
            error="This field is required"
          />
        </div>

        <div style={{ maxWidth: 300 }}>
          <Input
            label="Surname"
            placeholder="Surname"
            name="Surname"
            value={value}
            onChange={setValue}
            disabled
          />
        </div>
      </div>
    </>
  );
}
