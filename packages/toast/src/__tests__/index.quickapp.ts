import Toast from "../index";

jest.mock("universal-env", (): object => {
  return {
    isWeex: false,
    isMiniApp: false,
    isWeb: false,
    isQuickApp: true
  };
});

describe("Toast in quickapp", (): void => {
  it("show works with call", (): void => {
    const mockShow = jest.fn();
    // eslint-disable-next-line
    (global as any).my = {
      showToast: mockShow
    };

    Toast.show("Hello World");
    expect(mockShow.mock.calls.length).toBe(1);
  });
});
