import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center flex-col my-10 mx-2">
      <Image
        src="/images/404.png"
        alt="not found"
        className="w-full md:w-2/4 md:h-2/4 m-auto"
        width={200}
        height={10}
      />
      <p className="mt-4">
        Looking for jobs?{' '}
        <Link href="/jobs" className="underline text-blue-500">
          Check out latest jobs
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
