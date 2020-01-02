import raxUICore from '@rax-ui/core';

var store = {
  theme: raxUICore,
};

export function setTheme(config) {
	store = {
	  ...store,
	  theme: {
	    ...store.theme,
	    ...config,
	  }
	};
}

export function getCSSVariable() {
	return store;
}
