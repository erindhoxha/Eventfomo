import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";

interface SwitchBoxProps {
  gameId: string;
  gameName: string;
  checked: boolean;
}

const SwitchBox = ({ gameId, gameName, checked }: SwitchBoxProps) => {
  return (
    <div className="flex items-center justify-between">
      <Label
        htmlFor="chess"
        className="flex items-center w-full cursor-pointer py-4"
      >
        <Image
          src={`/img/icons/${gameId}.png`}
          width={24}
          height={24}
          alt={gameName}
        />
        <p className="text-sm ml-1">{gameName}</p>
      </Label>
      <Switch id={gameId} checked={checked} />
    </div>
  );
};

export default SwitchBox;
