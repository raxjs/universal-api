import { CreateIntersectionObserver, OPTIONS, RECT, CallbackOptions } from '../types';

function buildMarginStr (margins: RECT): string {
  return margins.top + 'px ' + margins.right + 'px ' + margins.bottom + 'px ' + margins.left + 'px';
}

function IntersectionObservers (options?: OPTIONS) {
  this.thresholds = (options && options.thresholds) ? options.thresholds : [0];
  this.initialRatio = (options && options.initialRatio) ? options.initialRatio : 0;
  this.observeAll = (options && options.observeAll) ? options.observeAll : false;
  this.callBack = () => {};
  this.observers = [];
}

function relative (root: Element | null, self, margins?: RECT) {
  const options = {
    root,
    rootMargin: margins ? buildMarginStr(margins) : '0',
    threshold: self.thresholds
  }
  self.observers.push(new IntersectionObserver(self.callBack, options));
}

IntersectionObservers.prototype.relativeTo = function (selector: string, margins?: RECT) {
  relative(document.querySelector(selector), this, margins);
  return this;
}

IntersectionObservers.prototype.relativeToViewport = function (margins?: RECT) {
  relative(null, this, margins);
  return this;
}

IntersectionObservers.prototype.observe = function (targetSelector: string, callback: (res: CallbackOptions) => any) {
  if (this.observeAll) {
    const targets = document.querySelectorAll(targetSelector);
    targets.forEach(target => this.observers.forEach(observer => observer.observe(target)));
  } else {
    const target = document.querySelector(targetSelector);
    this.observers.forEach(observer => observer.observe(target));
  }
  this.callBack = (entries, observer) => {
    entries.forEach(entry => {
      callback({
        boundingClientRect: entry.boundingClientRect,
        intersectionRatio: entry.intersectionRatio,
        intersectionRect: entry.intersectionRect,
        relativeRect: entry.rootBounds,
        time: entry.time
      });
    });
  };
  return this;
}

IntersectionObservers.prototype.disconnect = function (targetSelector: string, callback: (res: CallbackOptions) => any) {
  this.callBack = () => {};
  this.observers = [];
  this.observers.forEach(observer => {
    observer.disconnect();
  });
  return this;
}

const createIntersectionObserver: CreateIntersectionObserver = (options?, component?) => {
  return new IntersectionObservers(options);
}

export default createIntersectionObserver;
