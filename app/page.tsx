import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import Header from './components/Header/Header';
import { H1, H2, Paragraph } from './components/Typography/Typography';
import ImageComponent from './components/Image/Image';

export default function Home() {
  return (
    <main className="flex flex-col items-start p-6 lg:p-12 ">
      <Header />
      <div className="lg:container">
        <div className="flex flex-col lg:justify-center lg:flex-row mt-[90px] w-full">
          <div className="flex-col max-w-xs sm:max-w-lg lg:max-w-md text-sm flex">
            <H1>Your personal gaming calendar</H1>
            <Paragraph>
              The links you can't miss, the best content from your favorite
              creators and newsletters, in a daily email digest
            </Paragraph>
          </div>
          <div className="mt-8 lg:ml-12">
            <SubscribeForm />
          </div>
          {/* <div className="lg:ml-12 mt-12 lg:mt-0 flex lg:justify-center flex-grow">
          <ImageComponent
            src="/img/eventfomo.png"
            width={500}
            height={500}
            alt="Image"
            rounded
          />
        </div> */}
        </div>
      </div>

      <div className="mt-24 w-full">
        <H2>How it works</H2>
        <ul className="my-6 ml-6 [&>li]:mt-2 list-decimal">
          <li className="text-muted-foreground">Subscribe</li>
          <li className="text-muted-foreground">
            Everyday, you'll get an email with the latest tournaments
          </li>
          <li className="text-muted-foreground">Enjoy</li>
        </ul>
      </div>
    </main>
  );
}
