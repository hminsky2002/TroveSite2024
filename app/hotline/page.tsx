'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useQueueSize } from '../hotline-api';

export default function HotlinePage() {
  const [queueSizeResponse, refreshQueueSizeResponse] = useQueueSize();

  const [queueSize, setQueueSize] = useState(0);

  useEffect(() => {
    if (queueSizeResponse) {
      setQueueSize(queueSizeResponse.queue_size);
    }
    const intervalId = setInterval(() => {
      refreshQueueSizeResponse();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [queueSizeResponse, refreshQueueSizeResponse]);

  return (
    <div className="hotline-page starrybackground relative flex min-h-screen flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/sleepyPerson.jpeg"
          width={800}
          height={800}
          alt="Sleepy Person"
          className="object-contain"
        />
        <div className="absolute flex flex-col">
          <Image
            src="/Teddybedtime.gif"
            width={200}
            height={200}
            alt="Sleepy Person"
            className="object-contain"
          />
          <div className="items-center space-y-4 text-center">
            <h1 className="my-8 flex items-center justify-center rounded-full border-2 border-yellow-400 bg-purple-900 bg-opacity-90 p-4 text-6xl text-gray-200 blur-[0.5px]">
              Trove Bedtime Hotline
            </h1>
            <div className="mx-auto max-w-[300px] bg-purple-900 bg-opacity-90 p-4 text-gray-200">
              <p className="mx-auto max-w-[300px] text-xl">
                Current Number of Sleepy People waiting for a Bedtime Story:
              </p>
              <p className="text-4xl font-bold">{queueSize}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
