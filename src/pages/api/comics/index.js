import { experimental_AstroContainer } from "astro/container";
import Comic from "@/components/partials/comic.astro";
import { db } from "@/db/index";
import { comicsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

const container = await experimental_AstroContainer.create();

export const POST = async ({ request }) => {
  const body = await request.formData();
  const name = body.get("name");
  const link = body.get("link");
  const chapter = body.get("chapter");

  const comic = await db
    .insert(comicsTable)
    .values({ name: name, link: link, chapter: chapter });

  console.log(comic);
  const result = container.renderToString(Comic);
  return new Response(await result);
};

export const DELETE = async ({ request }) => {
  const body = await request.formData();
  const id = body.get("id");
  await db.delete(comicsTable).where(eq(comicsTable.id, id));
  const result = container.renderToString(Comic);
  return new Response(await result);
};
