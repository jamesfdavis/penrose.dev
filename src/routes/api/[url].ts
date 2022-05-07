// src/routes/posts/[url].json.js
import { convertMarkdown } from "$lib/handle-markdown"

export async function get({ params }) {

  const { url } = params;

  const post = await convertMarkdown(`./src/posts/${url}.md`);
  const body = JSON.stringify(post);

  console.log(body)

  return { body: body }
}