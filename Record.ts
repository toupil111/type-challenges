interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

type myRecord<K extends keyof any, T> = {
  [P in K]: T;
};
type Keys = keyof any;
function logTypeValue<T>(value: T): T {
  console.log(value);
  return value;
}
const keysValue = logTypeValue<keyof any>(null as any);
console.log(keysValue);
const cats: myRecord<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
