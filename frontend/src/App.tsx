import { useState } from "react";
import { Modal } from "./components/ui/modal";

export function App() {
  const [open, setOpen] = useState(true)

  return <>
    <Modal isOpen={open} title="Заголовок" description="Это контет модалки" onClose={() => setOpen(false)}
  secondaryAction={{
    label: 'Отмена',
    onClick: () => setOpen(false),
  }}
  primaryAction={{
    label: 'Удалить',
    onClick: () => alert('Удаление'),
  }} />
  </>
}
