export default class Events {
  private events: any;

  constructor() {
    this.events = {};
  }

  emit(key: string, params: any) {
    if (this.events[key] && this.events[key].size > 0) {
      const _queue = new Set(Array.from(this.events[key]));

      _queue.forEach(async (item: any) => {
        item.handler(params);
        if (item.once) {
          this.events[key].delete(item);
        }
      });
    }
  }

  // async _emit(key: string, params: any) {
  //   if (this.events[key] && this.events[key].length > 0) {
  //     const item = this.events[key].shift();
  //     if (isAsync(item)) {
  //       await item(params);
  //     } else {
  //       item(params);
  //     }
  //     this.emit(key, params);
  //   }
  // }

  once(key: string, cb: (val: any) => void) {
    const item = {
      once: true,
      handler: cb,
    };
    this.events[key] ? this.events[key].add(item) : (this.events[key] = new Set([item]));
    // return () => {
    //   this.events[key].delete(item);
    // };
  }

  register(key: string, cb: (val: any) => void) {
    const item = {
      once: false,
      handler: cb,
    };
    this.events[key] ? this.events[key].add(item) : (this.events[key] = new Set([item]));
    return () => {
      this.events[key].delete(item);
    };
  }
}
