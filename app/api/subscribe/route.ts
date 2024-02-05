import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookieStore = cookies();
  const { user_id, game_id } = await req.json();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  console.log(user_id, game_id);

  const data = await supabase
    .from("user_game_subscriptions")
    .insert({ user_id, game_id });

  console.log(data);

  return NextResponse.json(data);
}
