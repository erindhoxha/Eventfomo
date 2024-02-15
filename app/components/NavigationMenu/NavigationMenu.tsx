import * as React from "react";
import LinkComponent from "../Link/Link";
import { usePathname } from "next/navigation";

type NavBarProps = {
  navigations: {
    title: string;
    href: string;
    game: string;
  }[];
};

const NavBar = ({ navigations }: NavBarProps) => {
  return (
    <>
      <div className="gap-1 hidden lg:flex">
        <LinkComponent size="none" variant="none" href="/">
          <p className="text-lg font-bold tracking-normal mr-4 border-b border-b-green-500">
            Eventfomo
          </p>
        </LinkComponent>
        {navigations.map((navigation) => {
          const pathname = usePathname();
          const isActive = pathname.startsWith(navigation.href);

          return (
            <LinkComponent
              variant={isActive ? "active" : undefined}
              key={navigation.game}
              href={navigation.href}
            >
              <div className="mr-1">
                <img
                  width="24"
                  style={{
                    minWidth: 24,
                    minHeight: 24,
                  }}
                  height="24"
                  src={`/img/icons/${navigation.game}.png`}
                  alt={`${navigation.game} icon`}
                />
              </div>
              {navigation.title}
            </LinkComponent>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
