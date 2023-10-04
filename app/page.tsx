import Header from './components/Header/Header';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 lg:p-24">
      <Header />
      <div className="mt-[90px] max-w-5xl w-full items-center justify-between font-mono text-sm flex">
        <h1 className="max-w-2xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Never miss out on any gaming events again.
        </h1>
      </div>
      <div className="mt-5 max-w-2xl items-start w-full justify-start font-mono text-sm flex">
        <Input type="email" placeholder="Email" />
      </div>
    </main>
  );
}
