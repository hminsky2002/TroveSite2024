"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter
import { usePathname } from "next/navigation";

export default function Logo() {
  const pathname = usePathname();
  // Function to change the background color to a random color
  const changeBackgroundColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  };

  useEffect(() => {
    // This ensures that your page style change is cleaned up if the component unmounts
    return () => {
      // Reset to default background color when component unmounts, if desired
      document.body.style.backgroundColor = ""; // Set this to your default page background color
    };
  }, []);

  if (pathname.match("/admin/")) {
    return <></>;
  }

  return (
    <div
      className="flex mx-auto items-center text-center"
      style={{ maxWidth: "200px" }}
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
