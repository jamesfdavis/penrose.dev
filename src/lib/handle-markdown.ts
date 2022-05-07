//handle-markdown.js
import fs from 'fs';
// import files with pattern
import glob from "glob";
// parse front matter and body of markdown
import fm from "front-matter";
// parse body to html
import { remark } from "remark";
import html from "remark-html";
import rehypePrism from "@mapbox/rehype-prism";
import { rehype } from "rehype";

/**
* import all markdown files in specified path, extract front matter and convert to html
* @param {string} markdownPath path to folder containing the markdown files (ends on /)
* @returns [{path, attributes, body}]
*/
export async function importMarkdowns(markdownPath: string) {
  const fileNames: any = glob.sync(`${markdownPath}*.md`);


  const list = fileNames.map((path: any) => convertMarkdown(path));
  const results: Array<any> = [];

  for await (const variable of list) {
    results.push(variable)
  }

  return results;
}

/**
* convert markdown to object with attributes and html
* @param {string} path path to file
* @returns
*/
export async function convertMarkdown(path: string) {
  // read file
  const contents: any = fs.readFileSync(path, 'utf8');
  // extract frontmatter and body with the front-matter package

  const temp: any = fm(contents);


  // parse the body to html with the remark/rehype pipeline
  let result = await remark().use(html).process(temp.body).then((file) => {
    return file
  });

  result = await rehype().use(rehypePrism).process(result).then((file) => {
    return file
  });

  const details: any = { path: path, attributes: temp.attributes, html: result };

  return details;

};

export function convertToPostPreview(object: any) {
  const result = object
  const url = result.path.replace(".md", "").replace("src/", "")
  const details = { ...result.attributes, url };

  return details;

}