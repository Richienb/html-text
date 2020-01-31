# HTML Text [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/html-text/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/html-text)

Extract text from HTML.

[![NPM Badge](https://nodei.co/npm/html-text.png)](https://npmjs.com/package/html-text)

## Install

```sh
npm install html-text
```

## Strategy

The input HTML is prettified to clean it up and unindent the code, stripped from tags and trimmed to removed newlines and spaces.

## Usage

```js
const htmlText = require("html-text");

htmlText(`
<!DOCTYPE html>
<html id="home" lang="en">

<body>
  <main>
    <p>Site Content.</p>
  </main>
</body>

</html>
`);
//=> 'Site Content.'
```

## API

### htmlText(input)

#### input

Type: `string`

The HTML to strip the tags from.
