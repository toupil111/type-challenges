type MyExclude<T, U> = T extends U ? never : T;

// type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type myVal = string | number | boolean;
type Bol = boolean;
type Str = string;
type Num = number;

type myValueA1 = MyExclude<string | number | boolean, boolean>

// const myValueC2: MyExclude<myVal, Str> = 1;

// const myValueB3: MyExclude<myVal, Num> = true;
