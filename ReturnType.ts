type MyReturnType<T extends Function> =
  T extends (...args: any) => infer R
    ? R
    : never

    // https://github.com/type-challenges/type-challenges/issues/2