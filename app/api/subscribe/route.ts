import supabase from "@/supabase";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req);

  // const data = await supabase
  // .from("user_game_subscriptions")
  // .insert({ user_id: user.id, game_id: gameId });
  return Response.json({ message: "Hello, world!" });
}
