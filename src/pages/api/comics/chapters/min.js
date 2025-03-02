import { experimental_AstroContainer } from "astro/container";
import { db } from "@/db/index";
import { comicsTable } from "@/db/schema";
import Comic from "@/components/partials/comic.astro";
import { eq } from "drizzle-orm";

const container = await experimental_AstroContainer.create();

export const PATCH = async ({ request }) => {
  const body = await request.formData();
  const id = body.get("id");
  const comic = await db
    .select()
    .from(comicsTable)
    .where(eq(comicsTable.id, id))
    .limit(1);

  const { chapter } = comic[0];

  await db
    .update(comicsTable)
    .set({ chapter: chapter - 1 })
    .where(eq(comicsTable.id, id));

  const result = container.renderToString(Comic);
  return new Response(await result);
};
