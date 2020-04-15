import confirm from "../../quickapp/index";
import { Options } from "../../types";

// eslint-disable-next-line
(global as any).my = {
  confirm: (options): void => {
    options.success({ confirm: true });
  },
};

test("Confirm in a mini app environment can return a Promise", async (): Promise<
  void
> => {
  const options: Options = {
    title: "Confirm title",
    content: "Confirm content",
    confirmButtonText: "confirm",
    cancelButtonText: "cancel",
  };

  await confirm(options).then((value): void => {
    expect(value).toBeTruthy();
  });
});
