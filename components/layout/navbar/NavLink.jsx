'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ children, href }) {
  const currentPathName = usePathname();

  return (
    <Link
      className={`${
        href === currentPathName ? 'bg-gray-900' : ''
      } px-3 py-2 text-white rounded-md hover:bg-gray-900 hover:text-white`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
