import type { CSSProperties, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export function Container({ children, style }: ContainerProps) {
  return (
    <div className="mx-auto max-w-[1120px] px-6" style={style}>
      {children}
    </div>
  );
}
