import { H3 } from "../components/Typography/Typography";
import { Games, columns } from "../games/columns";
import { DataTable } from "../games/data-table";

const EventTemplate = ({
  title,
  games,
}: {
  title: string;
  games?: Games[] | null;
}) => {
  return (
    <div className="mt-12 sm:mt-24 w-full">
      <div className="flex flex-col mb-5">
        <H3>{title}</H3>
      </div>
      {games && <DataTable pageSize={50} columns={columns} data={games} />}
    </div>
  );
};

export default EventTemplate;
