import { createClient } from "@supabase/supabase-js";
const fs = require("fs");
require("dotenv").config({ path: __dirname + "/../../.env" });

const url = process.env.SUPABASE_URL!;
const anonKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(url, anonKey);

const data = fs.readFileSync("dota-tournaments.json", "utf8");

const tournaments = JSON.parse(data);

tournaments.forEach(async (d: any) => {
  await supabase.from("events").insert(d);
});
