export const getInit = (props) => `<html>
                                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                                    <style media="screen" type="text/css">
                                    #container {
                                        width:100%;
                                        height:100%;
                                        top:0;
                                        left:0;
                                        right:0;
                                        bottom:0;
                                        position:absolute;
                                        user-select: none;
                                        -webkit-user-select: none;
                                    }
                                    </style>
                                    <head>
                                        ${
                                          props.stock
                                            ? '<script src="https://code.highcharts.com/stock/highstock.js"></script>'
                                            : '<script src="https://code.highcharts.com/highcharts.js"></script>'
                                        }
                                        ${
                                          props.more
                                            ? '<script src="https://code.highcharts.com/highcharts-more.js"></script>'
                                            : ''
                                        }
                                        ${
                                          props.enableVariablePie
                                            ? '<script src="https://code.highcharts.com/modules/variable-pie.js"></script>'
                                            : ''
                                        }
                                        ${
                                          props.guage
                                            ? '<script src="https://code.highcharts.com/modules/solid-gauge.js"></script>'
                                            : ''
                                        }
                                        <script src="https://code.highcharts.com/modules/exporting.js"></script>
                                        <script>
                                        document.addEventListener("DOMContentLoaded", function(event) {
                                            Highcharts.setOptions(${JSON.stringify(
                                              props.options
                                            )});
                                            Highcharts.${
                                              props.stock
                                                ? 'stockChart'
                                                : 'chart'
                                            }('container', `;

export const getEnd = () => `           );
                                    });
                                    </script>
                                </head>
                                <body>
                                    <div id="container">
                                    </div>
                                </body>
                            </html>`;

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
