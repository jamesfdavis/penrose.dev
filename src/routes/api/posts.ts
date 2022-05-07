// src/routes/index.json.js
import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(event: any) {
  // load all markdown files from the posts directory
  const files = await importMarkdowns("./src/posts/");
  const posts = files.map((file: any) => convertToPostPreview(file));

  return { body: posts }

}