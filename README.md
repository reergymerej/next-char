# next-char

This is a utility for finding the next character in a string.  No, not `indexOf`.  It's to help you parse code.

Imagine you have some JS like this.

```js
var foo = function () {
    if (bar) {
        baz();
    } else {
        quux();
    }
};
```

As a string, it would be.

    'var foo = function () {\nif (bar) {\nbaz();\n} else {\nquux();\n}\n}'

You know the index of the first `{`, but how do you find its pair (and ignore all the other braces)?

```js
var str = 'var foo = function () {\nif (bar) {\nbaz();\n} else {\nquux();\n}\n}';

var openingIndex = str.indexOf('{');
// 22

var scopeString = str.substr(openingIndex);
// '{\nif (bar) {\nbaz();\n} else {\nquux();\n}\n}'

var closingIndex = nextChar.findClosingPairIndex(scopeString);
// 39

scopeString = scopeString.substr(0, closingIndex);
// '{\nif (bar) {\nbaz();\n} else {\nquux();\n}\n}'
```