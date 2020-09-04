let loadingWin: HTMLElement | null = null;

const clsPrefix = "__universal_loading";

const styles = `.${clsPrefix} {
  background-color: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  max-width: 80%;
  color: #ffffff;
  padding: 15px;
  position: fixed;
  left: 50%;
  bottom: 50%;
  border-radius: 4px;
  text-align: center;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  z-index: 9999;
  outline: none;
}
.${clsPrefix}_circle {
  border: 2px solid rgba(200, 200, 200, 0.5);
  border-radius: 50%;
  position: relative;
  height: 40px;
  width: 40px;
  margin: auto;
}
.${clsPrefix}_circle:after {
  content: "";
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: -2px;
  left: -2px;
  border: 2px solid;
  border-color: transparent;
  border-left-color: #fff;
  box-sizing: content-box;
  animation: ${clsPrefix}_roller 1s infinite linear;
}
.${clsPrefix}_text {
  margin-top: 6px;
  color: #fff;
  line-height: 1.5;
  font-size: 14px;
  text-align: center;
  font-weight: normal;
}
@keyframes ${clsPrefix}_roller {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}`.replace(/\n/g, "");

/*
 * @param message {String}
 */
export function show({ content = "" }): Promise<any> {
  if (!loadingWin) {
    // create a style tag for keyframes
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.body.appendChild(style);
    // create loading win
    loadingWin = document.createElement("div");
    loadingWin.className = clsPrefix;
    loadingWin.setAttribute("role", "alert");
    // support for ARIA, add tabindex for focus
    // https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/tabindex
    loadingWin.setAttribute("tabindex", "-1");
    // add a circle element
    const circle = document.createElement("div");
    circle.className = `${clsPrefix}_circle`;
    loadingWin.appendChild(circle);
    // add text element
    const text = document.createElement("div");
    text.className = `${clsPrefix}_text`;
    loadingWin.appendChild(text);

    document.body.appendChild(loadingWin);
  }

  const text = loadingWin.querySelector(`.${clsPrefix}_text`) as HTMLDivElement;
  if (content) {
    text.style.display = "block";
    text.innerText = content;
  } else {
    text.style.display = "none";
    text.innerText = "";
  }

  return Promise.resolve();
}

export function hide(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (loadingWin && loadingWin.parentNode) {
        loadingWin.parentNode.removeChild(loadingWin);
      }
      loadingWin = null;
      resolve();
    }, 0);
  });
}
