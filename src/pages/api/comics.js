import { experimental_AstroContainer } from "astro/container";
import Comic from "../../components/partials/comic.astro";
export const POST = async ({ request }) => {
  const body = await request.formData();
  const name = body.get("name");
  const link = body.get("link");
  const chapter = body.get("chapter");

  const container = await experimental_AstroContainer.create();
  const result = container.renderToString(Comic, {
    props: {
      name: name,
      link: link,
      chapter: chapter,
    },
  });
  return new Response(await result);
};
