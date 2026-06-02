import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-heading text-7xl font-extrabold text-grad">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold">Page not found</h1>
        <p className="mt-2" style={{ color: 'var(--text-soft)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn btn-primary mt-6 px-6 py-3">
          <Home className="h-5 w-5" /> Back home
        </Link>
      </div>
    </main>
  );
}
