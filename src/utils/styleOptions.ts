export const styleOut = (output: any, originalInput, originalOutput) => {
  return {
    ...output,
    _original: {
      input: { ...originalInput }, // 实际调用 api 方法时传入的参数. 对入参进行 format 之后的结果
      output: { ...originalOutput }, // 实际调用 api 方法时传入的参数. 返回值 format 之前的结果
    },
  };
};

export const styleIn = (options: any, baseName: string) => {
  const { _ext = {}, ...rest } = options;
  return {
    ...rest,
    ...(_ext[baseName] || {}),
  };
};
