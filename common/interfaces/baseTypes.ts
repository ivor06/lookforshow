import {visitor} from "uglify-js";
export {
    HashObject,
    HashString,
    HashNumber,
    HashBoolean,
    HashFunction,
    MapHashString,
    ObjectInterface,
    KeyboardEventWithTargetValue
}

interface HashObject<T> { [key: string]: T;
}
interface HashString extends HashObject<string> {
}
interface HashNumber extends HashObject<number> {
}
interface HashBoolean extends HashObject<boolean> {
}
interface HashFunction extends HashObject<() => void> {
}

interface MapHashString extends Map<string, HashString> {
}

interface ObjectInterface {
    key: string;
    value: any;
}

interface KeyboardEventWithValue extends EventTarget {
    value: string;
}

interface KeyboardEventWithTargetValue extends KeyboardEvent {
    target: KeyboardEventWithValue;
}
