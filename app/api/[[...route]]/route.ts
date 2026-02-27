import { db } from "@/db";
import { communities } from "@/db/schema";
import { handle } from "hono/vercel";
import { Hono } from "hono";
type Variables = {
  userId: string;
};
const app = new Hono<{ Variables: Variables }>().basePath("/api");

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "Internal Server Error" }, 500);
});

app.get("/communities/all", async (c) => {
  const allCommunities = await db.select().from(communities);
  return c.json(allCommunities);
});

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
