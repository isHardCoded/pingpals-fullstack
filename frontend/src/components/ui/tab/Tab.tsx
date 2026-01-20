import type { TabProps } from '.';
import s from './styles.module.css';

export function Tab({ className, children, active, onClick, id }: TabProps) {
  const rootClassNames = () =>
    [s.root, active && s.active, className].filter(Boolean).join(' ');

  return (
    <div className={rootClassNames()} onClick={() => onClick(id)}>
      <div className={s.tabBefore}>
        <span />
      </div>
      <div className={s.text}>{children}</div>
      <div className={s.tabAfter}>
        <span />
      </div>
    </div>
  );
}
