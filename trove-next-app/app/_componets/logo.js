"use client";
import { useState,useEffect } from "react";
import Image from "next/image";

export default function Logo() {
    const [index,setIndex] = useState(0);
    const messages = [
        "Trove rocks!",
        "Trove rolls!",
        "Trove sucks!",
        "Trove means luxury.",
        "Trove has trillions of dollars.",
        "Trove forever!"
    ];

  // Function to change the background color to a random color
  const changeBackgroundColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    const message = document.getElementById('message');
    message.textContent = messages[index];
    setIndex((index + 1) % messages.length);
  };

  useEffect(() => {
    // This ensures that your page style change is cleaned up if the component unmounts
    return () => {
      // Reset to default background color when component unmounts, if desired
      document.body.style.backgroundColor = ""; // Set this to your default page background color
    };
  }, []);

  return (
    <div>
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
