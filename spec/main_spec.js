"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var CodeNum = require("../lib/main.js");


describe("编码转换", function(){
    it("数字编码", function(){
        let code=new CodeNum();
        let numString='88595-0001';
        var result=code.zipCode(numString);
        var expect_string = '||::|:|::|::|:|:|:|:::|:|:||:::||:::||::::::||:|::||';
        
        expect(expect_string).to.equal(result);
    });

    it("编码转数字", function(){
        let code=new CodeNum();

        var result = code.postCode('||::|:|::|::|:|:|:|:::|:|:||:::||:::||::::::||:|::||');
        var expect_string = '88595-0001';

        expect(expect_string).to.equal(result);
    });
});