'use client';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="flex flex-col items-start p-6 lg:p-24 ">
      <Header />
      <div className="mt-[90px] max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <h1 className="max-w-2xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Never miss out on any gaming events again.
        </h1>
      </div>
      <div className="mt-5 w-full">
        <Form />
      </div>
    </main>
  );
}
