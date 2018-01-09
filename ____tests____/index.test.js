import fs from 'fs';
import path from 'path';
import * as babel from '@babel/core';
import 'better-log/install';
import island from '..';

test('Insert author information and outputs JavaScript', done => {
  fs.readFile(path.join(__dirname, 'actual.js'), (err, data) => {
    if (err) throw err;
    const src = data.toString();
    const out = babel.transform(src, {
      babelrc: false,
      plugins: [
        [
          island,
          {
            author: 'Harvey Zack',
            email: '717995589@qq.com',
            homepage: 'http://www.zhw-island.com'
          }
        ]
      ]
    });

    const bundle = out.code;
    fs.writeFileSync(path.join(__dirname, 'bundle.js'), bundle);
    expect(bundle.includes('Harvey Zack')).toBeTruthy();
    expect(bundle.includes('717995589@qq.com')).toBeTruthy();
    expect(bundle.includes('http://www.zhw-island.com')).toBeTruthy();
    done();
  });
});
