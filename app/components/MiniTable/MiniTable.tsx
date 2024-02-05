import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MiniTableItemProps {
  description: string | null;
  ends_at: string | null;
  game_id: string;
  id: number;
  name: string;
  starts_at: string;
}

interface MiniTableProps {
  title: string;
  description?: string;
  items: MiniTableItemProps[] | null | undefined;
}

const ListItem = ({
  name,
  game_id,
  description,
  starts_at,
  ends_at,
}: Omit<MiniTableItemProps, "id" | "created_at">) => {
  return (
    <div className="flex lg:flex-row sm:items-center">
      <div className="space-y-1 flex items-center">
        <div className="mr-2">
          <img
            width="24"
            className="sm:min-w-[36px] sm:min-h-[36px] min-w-[24px] min-h-[24px]"
            height="24"
            src={`/img/icons/${game_id}.png`}
            alt={`${game_id} icon`}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs lg:text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex mt-2">
            <p className="text-xs lg:text-sm text-muted-foreground">
              {new Date(starts_at).toLocaleDateString("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              {" / "}
              <span>
                {ends_at &&
                  new Date(ends_at).toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex ml-auto items-center">
        <div className="mr-2">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              width="24"
              className="sm:min-w-[24] sm:min-h-[24] min-w-[24px] min-h-[24px]"
              height="24"
              src={`/img/icons/youtube.png`}
              alt={`Youtube link for ${game_id}`}
            />
          </a>
        </div>
        <div className="mr-2">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              width="24"
              className="sm:min-w-[24] sm:min-h-[24] min-w-[24px] min-h-[24px]"
              height="24"
              src={`/img/icons/twitch.png`}
              alt={`Youtube link for ${game_id}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const MiniTable = ({ title, description, items }: MiniTableProps) => {
  return (
    <Card className="col-span-1 bg-dark">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items?.map((item) => (
            <ListItem
              key={item.id}
              name={item.name}
              description={item.description}
              game_id={item.game_id}
              starts_at={item.starts_at}
              ends_at={item.ends_at}
            />
          ))}
        </div>
        {(!items || items.length === 0) && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">
              Couldn't find any events on this section for now. Please check
              again later.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MiniTable;
