import { CreateIntersectionObserver, OPTIONS, RECT, CallbackOptions } from '../types';

function buildMarginStr(margins: RECT): string {
  return `${margins.top }px ${ margins.right }px ${ margins.bottom }px ${ margins.left }px`;
}

function IntersectionObservers(options?: OPTIONS) {
  this.thresholds = (options && options.thresholds) ? options.thresholds : [0];
  this.initialRatio = (options && options.initialRatio) ? options.initialRatio : 0;
  this.selectAll = (options && options.selectAll) ? options.selectAll : false;
  this.callBack = () => {};
  this.observers = [];
}

function relative(root: Element | null, self, margins?: RECT) {
  const options = {
    root,
    rootMargin: margins ? buildMarginStr(margins) : '0px',
    threshold: self.thresholds,
  };
  self.observers.push(new IntersectionObserver((...args) => {
    self.callBack(...args);
  }, options));
}

IntersectionObservers.prototype.relativeTo = function (selector: string, margins?: RECT) {
  relative(document.querySelector(selector), this, margins);
  return this;
};

IntersectionObservers.prototype.relativeToViewport = function (margins?: RECT) {
  relative(null, this, margins);
  return this;
};

IntersectionObservers.prototype.observe = function (targetSelector: string, callback: (res: CallbackOptions) => any) {
  if (this.selectAll) {
    const targets = document.querySelectorAll(targetSelector);
    targets.forEach((target) => this.observers.forEach((observer) => observer.observe(target)));
  } else {
    const target = document.querySelector(targetSelector);
    this.observers.forEach((observer) => observer.observe(target));
  }
  this.callBack = (entries, observer) => {
    entries.forEach((entry) => {
      callback && typeof callback === 'function' && callback({
        boundingClientRect: entry.boundingClientRect,
        intersectionRatio: entry.intersectionRatio,
        intersectionRect: entry.intersectionRect,
        relativeRect: entry.rootBounds,
        time: entry.time,
      });
    });
  };
  return this;
};

IntersectionObservers.prototype.disconnect = function (targetSelector: string, callback: (res: CallbackOptions) => any) {
  this.callBack = () => {};
  this.observers = [];
  this.observers.forEach((observer) => {
    observer.disconnect();
  });
  return this;
};

const createIntersectionObserver: CreateIntersectionObserver = (options?, component?) => {
  return new IntersectionObservers(options);
};

export default createIntersectionObserver;
