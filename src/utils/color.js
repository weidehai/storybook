/* eslint-disable */
export function hsv2rgb(arr) {
  let h = arr[0],
    s = arr[1],
    v = arr[2];
  s = s / 100;
  v = v / 100;
  let r = 0,
    g = 0,
    b = 0;
  let i = parseInt((h / 60) % 6);
  let f = h / 60 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
    default:
      break;
  }
  r = parseInt(r * 255.0);
  g = parseInt(g * 255.0);
  b = parseInt(b * 255.0);
  return [r, g, b];
}

export function rgb2hex(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}
