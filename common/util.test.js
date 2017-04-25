// import expect from "expect";
const expect = require("expect");

const util = require("./util.ts");

describe("Testing util.js", () => {
    it("isNumber", () => {
        expect(util.isNumber(894)).toEqual(true);
        expect(util.isNumber(0.6)).toEqual(true);
        expect(false).toEqual(util.isNumber(""));
        expect(false).toEqual(util.isNumber(true));
        expect(false).toEqual(util.isNumber({}));
        expect(false).toEqual(util.isNumber([]));
        expect(false).toEqual(util.isNumber());
        expect(false).toEqual(util.isNumber(null));
    });
    it("isString", () => {
        expect(true).toEqual(util.isString(""));
        expect(true).toEqual(util.isString(``));
        expect(true).toEqual(util.isString(''));
        expect(false).toEqual(util.isString(0.1));
        expect(false).toEqual(util.isString());
        expect(false).toEqual(util.isString({}));
        expect(false).toEqual(util.isString([]));
        expect(false).toEqual(util.isString(null));
    });
    it("getObject", () => {
        expect("123").toEqual(util.getObject("a.b.c", {a: {b: {c: "123"}}}));
        expect(123).toEqual(util.getObject("a.b.c", {a: {b: {c: 123}}}));
        expect(null).toEqual(util.getObject("a.b.c", {}));
        expect({a: {b: {c: "123"}}}).toEqual(util.getObject(null, {a: {b: {c: "123"}}}));
        expect({a: {b: {c: "123"}}}).toEqual(util.getObject(undefined, {a: {b: {c: "123"}}}));
    });
    it("setObject", () => {
        const
            obj = {},
            result = {a: {b: {c: 123}}};
        expect(false).toEqual(util.setObject("a.b.c", 123, null));
        expect(false).toEqual(util.setObject(null, 123, obj));
        expect(false).toEqual(util.setObject("", 123, obj));
        expect(true).toEqual(util.setObject("a.b.c", null, obj));
        expect(true).toEqual(util.setObject("a.b.c", 123, obj));
        expect(obj).toEqual(result);
        expect(true).toEqual(util.setObject("a.b.c", 123, {a: {b: {c: 234}}}));
        expect(obj).toEqual(result);
    });
    it("mapObject", () => {
        const
            obj = {a: 1, b: 2},
            result = util.mapObject(obj, (value, key) => ({d: ++value})),
            expectedResult = {a: {d: 2}, b: {d: 3}};

        expect(result).toEqual(expectedResult);
    });
    it("isContainsValue", () => {
        expect(util.isContainsValue([1, 2, 3], 2)).toEqual(true);
        expect(util.isContainsValue([1, 3], 2)).toEqual(false);
        expect(util.isContainsValue({a: 1, b: 2}, 2)).toEqual(true);
        expect(util.isContainsValue({a: 1, b: 3}, 2)).toEqual(false);
    });
});
