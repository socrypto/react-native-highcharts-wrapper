export const flattenObject = (obj, str = '{') => {
  Object.keys(obj).forEach((key) => {
    str += `${key}: ${flattenText(obj[key])}, `;
  });
  return `${str.slice(0, str.length - 2)}}`;
};

export const flattenText = (item, key) => {
  if (key == 'y') console.log(item, typeof item);
  let str = '';
  if (item && typeof item === 'object' && item.length == undefined) {
    str += flattenObject(item);
  } else if (item && typeof item === 'object' && item.length !== undefined) {
    str += '[';
    item.forEach(function (k2) {
      str += `${flattenText(k2)}, `;
    });
    if (item.length > 0) str = str.slice(0, str.length - 2);
    str += ']';
  } else if (typeof item === 'string' && item.slice(0, 8) === 'function') {
    str += `${item}`;
  } else if (typeof item === 'string') {
    str += `\"${item.replace(/"/g, '\\"')}\"`;
  } else {
    str += `${item}`;
  }
  return str;
};
