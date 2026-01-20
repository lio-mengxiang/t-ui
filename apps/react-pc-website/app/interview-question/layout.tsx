import Metadata from './metadata';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <Metadata />
      <body>{children}</body>
    </html>
  );
}
