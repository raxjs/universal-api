import raxUICore from '@rax-ui/core';

const PREFIX = '--';
const bodyStyle = document.body && document.body.style;
const isThemeWeb = typeof window === 'object' && typeof window.getComputedStyle === 'function' && typeof bodyStyle.setProperty === 'function';

// use the base theme
let pageTheme = { ...raxUICore };

// use the window.getComputedStyle 
if (isThemeWeb) {
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
        console.log('getPropertyValue', key);
        return pageTheme[key.substr(2)]
      }
    }
  };
}

// set new CSS variables
export function setCSSVariables(config) {
  if (isThemeWeb) {
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
  if (isThemeWeb) {
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
