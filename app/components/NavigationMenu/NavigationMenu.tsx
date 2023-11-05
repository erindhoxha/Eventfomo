import * as React from 'react';
import LinkComponent from '../Link/Link';

export function NavBar() {
 return (
  <>
   <div className="gap-1 hidden md:flex">
    <LinkComponent size="default" variant="ghost" href="/">
     eventfomo
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     Chess
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     Dota 2
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     League of legends
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     CS GO 2
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     Maple Story
    </LinkComponent>
    <LinkComponent variant="outline" href="/games/chess">
     Tennis
    </LinkComponent>
   </div>
  </>
 );
}
