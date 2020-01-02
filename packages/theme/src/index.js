import raxUICore from '@rax-ui/core';

let store = {
  theme: raxUICore,
};

export function setTheme(config) {
	store = {
	  theme: {
	    ...store.theme,
	    ...config,
	  }
	};
}

export function getCSSVariables() {
	return store.theme;
}
