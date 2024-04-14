'use client';
import Link from 'next/link';

function HomePage() {
  return (
    <>
      <h1 className="text-6xl font-bold">Welcome</h1>
      <Link href={'/properties'}>Show Properties</Link>
    </>
  );
}

export default HomePage;
