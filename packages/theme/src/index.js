import raxUICore from '@rax-ui/core';

const PREFIX = '--';
const bodyStyle = typeof document === 'object' && typeof document.body === 'object' && document.body.style;
let canUseComputedStyle = false;
if (bodyStyle) {
	canUseComputedStyle = typeof window === 'object' && typeof window.getComputedStyle === 'function' && typeof bodyStyle.setProperty === 'function';
}

// use the base theme
let pageTheme = { ...raxUICore };

// use the window.getComputedStyle 
if (canUseComputedStyle) {
  // Using CSS custom properties (variables)
  // Create CSS variables on body
  for (let key in pageTheme) {
    bodyStyle.setProperty(PREFIX + key, pageTheme[key]);
  }
} else if (typeof window === 'object') {
  // init getComputedStyle for weex or too old browser
  window.getComputedStyle = () => {
    return {
      getPropertyValue: (key) => {
        return pageTheme[key.substr(2)];
      }
    }
  };
}

// set new CSS variables
export function setCSSVariables(config) {
  if (canUseComputedStyle) {
    for (let key in config) {
      bodyStyle.setProperty(PREFIX + key, config[key]);
    }
  } else if (typeof window === 'object') {
    pageTheme = {
      ...pageTheme,
      ...config,
    };
  }
}

// set new CSS variable
export function setCSSVariable(key, value) {
  if (canUseComputedStyle) {
    bodyStyle.setProperty(PREFIX + key, value);
  } else {
    pageTheme[key] = value;
  }
}

// get CSS variable
export function getCSSVariable(key) {
  const theme = window.getComputedStyle(typeof document == 'object' ? document.body : null);
  return theme.getPropertyValue(PREFIX + key);
}
