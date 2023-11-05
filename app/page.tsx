import Header from './components/Header/Header';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';
import { H1, H2, H4, Paragraph } from './components/Typography/Typography';

export default function Home() {
 return (
  <main className="flex flex-col items-start p-6 lg:p-6 container">
   <Header />
   <div className="flex flex-col lg:flex-row mt-[90px] w-full">
    <div className="flex-col max-w-xs sm:max-w-lg lg:max-w-md text-sm flex">
     <H1>Your personal gaming calendar</H1>
     <Paragraph>
      The events you can't miss, the best content from your favourite games, in
      a daily email that you can sync on your calendar
     </Paragraph>
    </div>
    <div className="mt-8 lg:ml-12 flex flex-1 lg:justify-center w-full">
     <SubscribeForm />
    </div>
   </div>

   <div className="mt-12 sm:mt-24 w-full">
    <H2>How it works</H2>
    <ul className="my-6 ml-6 [&>li]:mt-2 list-decimal">
     <li className="text-muted-foreground">
      Subscribe with your email address
     </li>
     <li className="text-muted-foreground">
      Choose the games you want to follow
     </li>
     <li className="text-muted-foreground">
      Enjoy everyday emails that you can sync on your calendar
     </li>
    </ul>
    <p className="text-sm text-muted-foreground">
     You can unsubscribe anytime.
    </p>
   </div>

   <div className="mt-12 sm:mt-24 w-full">
    {/* Make this pop */}
    <H2>Latest games</H2>
    <Paragraph>LG vs EG - Ongoing / Live</Paragraph>
    <Paragraph>LG vs EG - Dec 12, 2024</Paragraph>
   </div>
  </main>
 );
}
