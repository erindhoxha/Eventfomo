import * as React from 'react';
import LinkComponent from '../Link/Link';

export function NavBar() {
  return (
    <>
      <div className="gap-1 hidden lg:flex">
        <LinkComponent size="none" variant="none" href="/">
          <p className="text-lg font-bold tracking-normal mr-4 border-b border-b-green-500">
            Eventfomo
          </p>
        </LinkComponent>
        <LinkComponent variant="outline" href="/games/chess">
          <div className="mr-1">
            <img
              width="24"
              style={{
                minWidth: 24,
                minHeight: 24,
              }}
              height="24"
              src={`/img/icons/chess.png`}
              alt="Chess icon"
            />
          </div>
          Chess
        </LinkComponent>
        <LinkComponent variant="outline" href="/games/chess">
          <div className="mr-1">
            <img
              width="24"
              style={{
                minWidth: 24,
                minHeight: 24,
              }}
              height="24"
              src={`/img/icons/dota.png`}
              alt="dota icon"
            />
          </div>
          Dota 2
        </LinkComponent>
        <LinkComponent variant="outline" href="/games/chess">
          <div className="mr-1">
            <img
              width="24"
              style={{
                minWidth: 24,
                minHeight: 24,
              }}
              height="24"
              src={`/img/icons/lol.png`}
              alt="League of legends icon"
            />
          </div>
          League of legends
        </LinkComponent>
        <LinkComponent variant="outline" href="/games/chess">
          <div className="mr-1">
            <img
              width="24"
              style={{
                minWidth: 24,
                minHeight: 24,
              }}
              height="24"
              src={`/img/icons/csgo.png`}
              alt="Csgo icon"
            />
          </div>
          CS GO 2
        </LinkComponent>
        <LinkComponent variant="outline" href="/games/chess">
          <div className="mr-1">
            <img
              width="24"
              style={{
                minWidth: 24,
                minHeight: 24,
              }}
              height="24"
              src={`/img/icons/wow.png`}
              alt="Wow icon"
            />
          </div>
          World of Warcraft
        </LinkComponent>
      </div>
    </>
  );
}
