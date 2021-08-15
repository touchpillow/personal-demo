const obj = {
  ["编辑"]: "edit",
  ["新增"]: "add",
};

// let a = 1;

type ArrayLengthMutationKeys =
  | "splice"
  | "push"
  | "pop"
  | "shift"
  | "unshift"
  | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
  ? TItems
  : never;
type FixedLengthArray<T extends any[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };
var myFixedLengthArray: FixedLengthArray<[string, string, string]>;
// Array declaration tests
myFixedLengthArray = ["a", "b", "c"]; // ✅ OK
// myFixedLengthArray = [ 'a', 'b', 123 ]  // ✅ TYPE ERROR
myFixedLengthArray = ["a"]; // ✅ LENGTH ERROR
myFixedLengthArray = ["a", "b"]; // ✅ LENGTH ERROR

// Index assignment tests
myFixedLengthArray[1] = "foo"; // ✅ OK
myFixedLengthArray[1000] = "foo"; // ✅ INVALID INDEX ERROR

// Methods that mutate array length
myFixedLengthArray.push("foo"); // ✅ MISSING METHOD ERROR
myFixedLengthArray.pop(); // ✅ MISSING METHOD ERROR

// Direct length manipulation
myFixedLengthArray.length = 123; // ✅ READ-ONLY ERROR

// Destructuring
var [a] = myFixedLengthArray; // ✅ OK
var [a, b] = myFixedLengthArray; // ✅ OK
var [a, b, c] = myFixedLengthArray; // ✅ OK
var [a, b, c, d] = myFixedLengthArray; // ✅ INVALID INDEX ERROR
