import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VscSearchStop } from 'react-icons/vsc';

const NotFoundPage = () => {
  return (
    <div className="container min-h-screen pt-10 md:pt-20 flex flex-col items-center ">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-9xl font-black text-primary">404</h1>

        <p className="text-2xl mb-2 font-bold tracking-tight text-muted-foreground sm:text-4xl">
          Oops! Page Not Found
        </p>
        <div className="flex justify-center">
          <VscSearchStop
            size={100}
            className="text-primary animate-bounce transition-all"
          />
        </div>

        <p className="mb-2 max-w-xl">
          The page you&apos;re looking for seems to have gone on a little
          adventure.
          <br /> Don&apos;t worry, we&apos;ll help you find your way back home.
        </p>

        <Link
          href="/"
          className=" 
          items-center justify-center"
        >
          <Button className="text-white text-xl font-bold">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
