export interface PromisifyArgs<SuccessArg, FailArg> {
  success?: (args: SuccessArg) => void;
  onSuccess?: (args: SuccessArg) => void;
  fail?: (args: FailArg) => void;
  onFail?: (args: FailArg) => void;
}
export function promisify<Arg = any, SuccessArg = any, FailArg = any>(
  api: (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => void
) {
  return (arg: Arg & PromisifyArgs<SuccessArg, FailArg>) => {
    return new Promise<SuccessArg>((resolve, reject) => {
      const promisifyArg: any = arg;

      api({
        ...promisifyArg,
        success: (res: SuccessArg) => {
          if (promisifyArg && typeof promisifyArg.success === 'function') {
            promisifyArg.success(res);
          }
          resolve(res);
        },
        onSuccess: (res: SuccessArg) => {
          if (promisifyArg && typeof promisifyArg.onSuccess === 'function') {
            promisifyArg.onSuccess(res);
          }
          resolve(res);
        },
        fail: (res: FailArg) => {
          if (promisifyArg && typeof promisifyArg.fail === 'function') {
            promisifyArg.fail(res);
          }
          reject(res);
        },
        onFail: (res: FailArg) => {
          if (promisifyArg && typeof promisifyArg.onFail === 'function') {
            promisifyArg.onFail(res);
          }
          reject(res);
        },
        compelete: (res: SuccessArg | FailArg) => {
          if (promisifyArg && typeof promisifyArg.compelete === 'function') {
            promisifyArg.compelete(res);
          }
        },
        onCompelete: (res: SuccessArg | FailArg) => {
          if (promisifyArg && typeof promisifyArg.onCompelete === 'function') {
            promisifyArg.onCompelete(res);
          }
        },
      });
    });
  };
}
