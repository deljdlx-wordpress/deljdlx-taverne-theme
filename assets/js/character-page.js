document.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('character-attributes-graph');
  if (!container) {
    return;
  }


  console.log(characterAttributes);


  indicators = [];
  values = [];

  for(let attribute in characterAttributes) {
    indicators.push({
      text: attribute,
      max: 10,
      color: '#000',
    });
    values.push(characterAttributes[attribute]);
  }



  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(container);

  // Specify the configuration items and data for the chart
  option = {
      title: {
          // text: 'Charactéristiques'
      },
      tooltip: {
          trigger: 'axis'
      },
      // legend: {
      //     left: 'center',
      //     data: [
      //         'Charactéristiques',
      //     ]
      // },
      radar: [{
              indicator: indicators,
              center: ['50%', '50%'],
              // radius: 150
          },
      ],
      series: [{
              type: 'radar',
              tooltip: {
                  trigger: 'item'
              },
              areaStyle: {},
              data: [{
                  value: values,
                  name: 'Charactéristiques'
              }]
          },
      ]
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
});