import { parse } from 'markdown-to-json';
import fs from 'fs';
import showdown from 'showdown';
let converter = new showdown.Converter({ noHeaderId: true });

// List Directory into JSON
let list = getdata('./gen/md');
let refined = categorize(list);

for (const f of refined) {
  fs.writeFileSync(`./src/lib/${f.basename}.json`, JSON.stringify(f.schema));
}

/**
 * @param  {} list Process line items for styles.
 */
function categorize(list) {
  for (const p of list) {
    p['schema'] = [];
    for (const { index, value } of p.preview.map((value, index) => ({ index, value }))) {
      // Determine elemnt type.
      let lt = lineType(value);
      // Save Results
      if (lineType(value)) {
        let cleaned = value.substring(lt.remove, value.length).trim();
        let innerHtml = converter.makeHtml(cleaned).replace('<p>', '').replace('</p>', '');
        p['schema'].push({ item: innerHtml, tag: lt.tag, index: index });
      } else {
        let innerHtml = converter.makeHtml(value).replace('<p>', '').replace('</p>', '');

        p['schema'].push({ item: innerHtml, tag: 'p', index: index });
      }
    }
    delete p['preview'] // No longer needed
  }

  return list;
}

/**
 * @param  {} md Markdown to check against
 */
function lineType(md) {
  if (md.substring(0, 5) === '#####') {
    return { tag: 'h5', remove: 5 };
  }
  if (md.substring(0, 4) === '####') {
    return { tag: 'h4', remove: 4 };
  }
  if (md.substring(0, 3) === '###') {
    return { tag: 'h3', remove: 3 };
  }
  if (md.substring(0, 2) === '##') {
    return { tag: 'h2', remove: 3 };
  }
  if (md.substring(0, 1) === '#') {
    return { tag: 'h1', remove: 1 };
  }
  return undefined;
}

/**
 * @param  {} dir Convert Markdown files to JSON results Array.
 */
function getdata(dir) {
  // list file names
  let names = getfiles(dir);

  // convert names into paths
  let files = names.map((v) => {
    return `${dir}/${v}`
  });

  // console.log(files)
  const parsed = parse(files, {
    minify: false,
    width: 100000
  });
  const results = JSON.parse(parsed);
  let push = [];

  // Loop through every entry (file).
  for (const key in results) {
    if (Object.hasOwnProperty.call(results, key)) {
      push.push(results[key]);
    }
  }

  // Loop through previews and split, filter blanks.
  for (const i of push) {
    i['preview'] = i['preview'].split(`\n`).filter(v => v);
  }

  return push;

}

/**
 * @param  {} dir List all files in the directory
 */
function getfiles(dir) {
  return fs.readdirSync(dir)
}
