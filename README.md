# react-native-highcharts-wrapper

Easy to use wrapper to utilise Highcharts within react-native applications.

## Getting Started

### `npm install react-native-highcharts-wrapper`

or

### `yarn add react-native-highcharts-wrapper`

## Example

```javascript
export default function HighChart() {
  const Highcharts = 'Highcharts';
  const conf = {
    chart: {
      type: 'spline',
      animation: Highcharts.svg,
      marginRight: 10,
      events: {
        load: function () {
          const series = this.series[0];
          setInterval(function () {
            const x = new Date().getTime(),
              y = Math.random() * (13000 - 12000) + 12000;
            series.addPoint([x, y], true, true);
          }, 2000);
        },
      },
    },
    title: {
      text: 'Live Bitcoin Price',
    },
    xAxis: { type: 'datetime', tickPixelInterval: 150 },
    yAxis: {
      title: { text: 'Price USD' },
      plotLines: [{ value: 0, width: 1, color: '#CCC' }],
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' +
          this.series.name +
          '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
          '<br/>' +
          Highcharts.numberFormat(this.y, 2)
        );
      },
    },
    exporting: { enabled: false },
    series: [
      {
        name: 'BTC',
        data: (function () {
          // generate an array of random data
          const data = [];
          const time = new Date().getTime();
          for (let i = -19; i <= 0; i += 1) {
            data.push({ x: time + i * 2000, y: Math.random() * (13000 - 12000) + 12000 });
          }
          return data;
        })(),
      },
    ],
  };

  const options = {
    global: { useUTC: false },
    lang: { decimalPoint: ',', thousandsSep: '.' },
  };

  return (
    <ChartView
      style={{ height: 350 }}
      config={conf}
      options={options}
    />
  );
}
```

## Props

| Prop    | Required |                                                                                                 Description |
| ------- | :------: | ----------------------------------------------------------------------------------------------------------: |
| config  |   true   | Highcharts configuration [See the docs.>>](http://www.highcharts.com/docs/getting-started/your-first-chart) |
| stock   |  false   |                                                                                Default false; use Highstock |
| more    |  false   |                                                                           Default false; use Highstock-more |
| heatMap |  false   |                                                                                  Default false; use HeatMap |
| style   |  false   |                                                                  Style object to be passed onto the WebView |
| options |  false   |                                                                Pass global and lang options from Highcharts |
| guage   |  false   |                                                                        Import gauge library from highcharts |
