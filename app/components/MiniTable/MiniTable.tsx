import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const MiniTable = () => {
  return (
    <Card className="col-span-1 bg-dark">
      <CardHeader>
        <CardTitle>Recent Tournaments</CardTitle>
        <CardDescription>Games that will play this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex items-center">
              <div className="mr-2">
                <img
                  width="24"
                  style={{
                    minWidth: 36,
                    minHeight: 36,
                  }}
                  height="24"
                  src={`/img/icons/dota.png`}
                  alt="dota icon"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">
                  The International 2023
                </p>
                <p className="text-sm text-muted-foreground">
                  EG vs LGD, Best of 3
                </p>
              </div>
            </div>
            <p className="ml-auto text-sm">10/11/2024</p>
          </div>
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex items-center">
              <div className="mr-2">
                <img
                  width="24"
                  style={{
                    minWidth: 36,
                    minHeight: 36,
                  }}
                  height="24"
                  src={`/img/icons/chess.png`}
                  alt="chess icon"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">
                  The International 2023
                </p>
                <p className="text-sm text-muted-foreground">
                  EG vs LGD, Best of 3
                </p>
              </div>
            </div>
            <p className="ml-auto text-sm">10/11/2024</p>
          </div>
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex items-center">
              <div className="mr-2">
                <img
                  width="24"
                  style={{
                    minWidth: 36,
                    minHeight: 36,
                  }}
                  height="24"
                  src={`/img/icons/lol.png`}
                  alt="lol icon"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">
                  The International 2023
                </p>
                <p className="text-sm text-muted-foreground">
                  EG vs LGD, Best of 3
                </p>
              </div>
            </div>
            <p className="ml-auto text-sm">10/11/2024</p>
          </div>
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex items-center">
              <div className="mr-2">
                <img
                  width="24"
                  style={{
                    minWidth: 36,
                    minHeight: 36,
                  }}
                  height="24"
                  src={`/img/icons/csgo.png`}
                  alt="lol icon"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">
                  The International 2023
                </p>
                <p className="text-sm text-muted-foreground">
                  EG vs LGD, Best of 3
                </p>
              </div>
            </div>
            <p className="ml-auto text-sm">10/11/2024</p>
          </div>
          <div className="flex items-center">
            <div className="ml-4 space-y-1 flex items-center">
              <div className="mr-2">
                <img
                  width="24"
                  style={{
                    minWidth: 36,
                    minHeight: 36,
                  }}
                  height="24"
                  src={`/img/icons/wow.png`}
                  alt="dota icon"
                />
              </div>
              <div>
                <p className="text-sm font-medium leading-none">
                  The International 2023
                </p>
                <p className="text-sm text-muted-foreground">
                  EG vs LGD, Best of 3
                </p>
              </div>
            </div>
            <p className="ml-auto text-sm">10/11/2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniTable;
