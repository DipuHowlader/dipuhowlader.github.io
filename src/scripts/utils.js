// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};

// Gets the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};


// wrap each element of an array
// elems - the array of elements to wrap
// wrapType - type of wrapper ('div', 'span' etc)
// wrapClass - wrapper class(s) 
const wrapLines = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
          // add a wrap for every char (overflow hidden)
          const wrapEl = document.createElement(wrapType);
          wrapEl.classList = wrapClass;
          char.parentNode.appendChild(wrapEl);
          wrapEl.appendChild(char);
      });
  }

  console.log(process.env.NODE_ENV)
export { map, lerp, calcWinsize, getMousePos,  wrapLines };