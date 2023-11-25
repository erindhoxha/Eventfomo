import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';

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
 items: MiniTableItemProps[] | null;
}

const ListItem = ({
 name,
 game_id,
 description,
 starts_at,
}: Omit<MiniTableItemProps, 'id' | 'created_at'>) => {
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
      src={`/img/icons/${game_id}.png`}
      alt={`${game_id} icon`}
     />
    </div>
    <div>
     <p className="text-sm font-medium leading-none">{name}</p>
     <p className="text-sm text-muted-foreground">{description}</p>
    </div>
   </div>
   <p className="ml-auto text-sm">{starts_at}</p>
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
      <p className="text-sm text-muted-foreground">No ongoing events for now</p>
     </div>
    )}
   </CardContent>
  </Card>
 );
};

export default MiniTable;
