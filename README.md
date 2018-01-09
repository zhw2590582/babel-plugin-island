# babel-plugin-island [![Build Status](https://www.travis-ci.org/zhw2590582/island-webpack-plugin.svg?branch=master)](https://www.travis-ci.org/zhw2590582/island-webpack-plugin) [![Coverage Status](https://coveralls.io/repos/github/zhw2590582/babel-plugin-island/badge.svg?branch=master)](https://coveralls.io/github/zhw2590582/babel-plugin-island?branch=master)

> A island plugin for Babel (目前测试用于文件头部输出作者信息)

## Install

```
$ npm i --save-dev babel-plugin-island
```

## Usage

### Via .babelrc (Recommended)

```js
{
  "plugins": [
    [
      "island",
      {
        "author": "Harvey Zack",
        "email": "717995589@qq.com",
        "homepage": "http://www.zhw-island.com"
      }
    ]
  ];
}
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: [
    [
      'island',
      {
        author: 'Harvey Zack',
        email: '717995589@qq.com',
        homepage: 'http://www.zhw-island.com'
      }
    ]
  ]
});
```

## Related

* [babel-types](https://github.com/babel/babel/tree/master/packages/babel-types)

## License

MIT © [Harvey Zack](https://www.zhw-island.com/)
