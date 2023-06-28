type myPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
// keyof: 取interface的键后保存为联合类型
interface userInfo {
  name: string;
  age: number;
}
type keyofValue = keyof userInfo;
// keyofValue = "name" | "age"

//   in: 取联合类型的值，主要用于数组和对象的构建.
// 切记不要用于interface, 否则会报错
type name = "firstname" | "lastname";
type TName = {
  [key in name]: string;
};
