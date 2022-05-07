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

  // console.log('step 1.', fileNames);

  const list = fileNames.map((path: any) => convertMarkdown(path));
  const results: Array<any> = [];

  for await (const variable of list) {
    results.push(variable)
  }

  console.log('step last', results)


  // const list = fileNames.map((path: any) => convertMarkdown(path));
  // console.log('step 7.', list);

  // return list;

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

  // console.log('step 2.', contents);
  const temp: any = fm(contents);
  // console.log('step 3.', temp);

  // parse the body to html with the remark/rehype pipeline
  let result = await remark().use(html).process(temp.body).then((file) => {
    // console.log('file', file);
    return file
  });

  // console.log('step 4.', result);

  result = await rehype().use(rehypePrism).process(result).then((file) => {
    // console.log('file', file);
    return file
  });

  // console.log('step 5.', result);

  const details: any = { path: path, attributes: temp.attributes, html: result };

  // console.log('step 6.', details);

  return details;

};

export function convertToPostPreview(object: any) {
  // console.log('object', object);
  const result = object
  const url = result.path.replace(".md", "").replace("src/", "")
  const details = { ...result.attributes, url };

  return details;

}