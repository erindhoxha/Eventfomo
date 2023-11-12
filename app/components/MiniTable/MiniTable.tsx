import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MiniTableItemProps {
  id: string;
  name: string;
  game: string;
  description: string;
  eventDate: string;
}
interface MiniTableProps {
  title: string;
  description?: string;
  items: MiniTableItemProps[];
}

const ListItem = ({
  name,
  game,
  description,
  eventDate,
}: Omit<MiniTableItemProps, 'id'>) => {
  return (
    <div className="flex items-center">
      <div className="space-y-1 flex items-center">
        <div className="mr-2">
          <img
            width="24"
            style={{
              minWidth: 36,
              minHeight: 36,
            }}
            height="24"
            src={`/img/icons/${game}.png`}
            alt={`${game} icon`}
          />
        </div>
        <div>
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <p className="ml-auto text-sm">{eventDate}</p>
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
              game={item.game}
              eventDate={item.eventDate}
            />
          ))}
        </div>
        {(!items || items.length === 0) && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">
              No ongoing events for now
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MiniTable;
