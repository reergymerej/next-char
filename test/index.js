'use strict';

var willy = require('willy');
var will = willy.will;
var nextChar = require('../index.js');

describe('finding closing pairs', function () {
    it('should work with simple examples', function () {
        var str = '{asdf}';
        var index = nextChar.findClosingPairIndex(str);
        will(index).be(5);
    });

    it('should work with recursive examples', function () {
        var str = '{as{d}f}';
        var index = nextChar.findClosingPairIndex(str);
        will(index).be(7);
    });

    it('should ignore those within strings', function () {
        var str = '{as"{"df}';
        var index = nextChar.findClosingPairIndex(str);
        will(index).be(8);
    });

    it('should skip escape chars', function () {
        var str = '{as\\{df}';
        var index = nextChar.findClosingPairIndex(str);
        will(index).be(7);
    });

    it('should return `undefined` if not found', function () {
        var str = '{asdf';
        var index = nextChar.findClosingPairIndex(str);
        will(index).beUndefined();
    });
});


