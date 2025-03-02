import { experimental_AstroContainer } from "astro/container";
import Comic from "../../components/partials/comic.astro";
import { db } from "../../db";
import { comicsTable } from "../../db/schema";

export const POST = async ({ request }) => {
  const body = await request.formData();
  const name = body.get("name");
  const link = body.get("link");
  const chapter = body.get("chapter");

  const comic = await db
    .insert(comicsTable)
    .values({ name: name, link: link, chapter: chapter });

  console.log(comic);

  const container = await experimental_AstroContainer.create();
  const result = container.renderToString(Comic);
  return new Response(await result);
};
