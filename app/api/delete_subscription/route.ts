import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = cookies();
  const { user_id, game_id } = await req.json();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const data = await supabase
    .from("user_game_subscriptions")
    .delete()
    .eq("user_id", user_id)
    .eq("game_id", game_id);

  return NextResponse.json(data);
}
