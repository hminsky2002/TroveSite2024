'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Logo() {
  const pathname = usePathname();

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  };

  useEffect(
    () => () => {
      document.body.style.backgroundColor = ''; // Set this to your default page background color
    },
    [],
  );

  if (pathname.match('/admin/')) {
    return <></>;
  }

  return (
    <div
      className="mx-auto flex items-center text-center"
      style={{ maxWidth: '200px' }}
    >
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="trove logo"
        className="w-full cursor-pointer"
        onClick={changeBackgroundColor} // Add onClick event to Image component
      />
    </div>
  );
}
