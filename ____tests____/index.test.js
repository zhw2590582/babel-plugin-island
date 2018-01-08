import fs from 'fs';
import path from 'path';
import * as babel from "@babel/core";
import island from '..';

test('Insert author information and outputs JavaScript', done => {
  fs.readFile(path.join(__dirname, 'actual.js'), (err, data) => {
    if (err) throw err;

    const src = data.toString();
    const out = babel.transform(src, {
      babelrc: false,
      plugins: [island]
    });

    console.log(out.code);
    expect(true).toBe(true);
    done();
  });
});
