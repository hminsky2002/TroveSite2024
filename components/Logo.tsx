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
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          src="/arrow1rightorange.gif"
          width={50}
          height={50}
          alt="pointyarrow"
        />
        <Image
          src="/logo.png"
          width={250}
          height={250}
          alt="trove logo"
          className="mr-7 cursor-pointer"
          onClick={changeBackgroundColor}
        />
      </div>
    </div>
  );
}
