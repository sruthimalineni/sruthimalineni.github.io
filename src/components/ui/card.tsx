import { ReactNode } from 'react';

export function Card({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`rounded-2xl border p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className='flex items-center justify-center'>{children}</div>;
}
