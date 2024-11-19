document.addEventListener('DOMContentLoaded', () => {

  const container = document.getElementById('board');
  var myChart = echarts.init(container);

  // myChart.showLoading();
  // $.getJSON('http://taverne.jlb.ninja/graph.json', function(graph) {

      let dataContainer = document.getElementById('data');
      // graph2 = JSON.parse(dataContainer.innerHTML);
      // console.log('%cinvestigation-board.js :: 11 =============================', 'color: #f00; font-size: 1rem');
      // console.log(graph2);

      graph = JSON.parse(dataContainer.innerHTML);
      console.log('%cinvestigation-board.js :: 11 =============================', 'color: #f00; font-size: 1rem');
      console.log(graph);



      myChart.hideLoading();
      graph.nodes.forEach(function(node) {
          node.label = {
              show: node.symbolSize > 30
          };
      });
      option = {
          title: {
              text: "",
              subtext: '',
              top: 'bottom',
              left: 'right'
          },
          // customize category color
          color: ['#DD751D', '#aaa', '#3F291A'],


          tooltip: {
              trigger: 'item',
              formatter: function(params) {

                  if (params.dataType === 'node') {
                      let label = params.data.name;
                      if(params.data.illustration) {
                        // label += '<br/><img src="' + params.data.illustration.url + '" style="width: 200px"/>';
                        return label;
                      }
                  } else if (params.dataType === 'edge') {

                  }
              }
          },
          legend: [{
              // selectedMode: 'single',
              data: graph.categories.map(function(a) {
                  return a.name;
              })
          }],
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [{
              name: '',
              type: 'graph',
              legendHoverLink: false,
              layout: 'force',
              data: graph.nodes,
              links: graph.links,
              categories: graph.categories,
              roam: true,

              // itemStyle: {
              //   borderColor: '#00ff00',
              //   borderWidth: 3
              // },
              label: {
                  position: 'right',
                  formatter: '{b}'
              },
              lineStyle: {
                  color: 'source',
                  curveness: 0.1,
                  type: 'solid',
                  width: 3
              },
              emphasis: {
                  focus: 'adjacency',
                  lineStyle: {
                      width: 10
                  }
              }
          }]
      };

      myChart.on('dblclick', function (params) {
        console.log(params)
        if (params.data && params.data.url) {
            document.location.href = params.data.url;
        }
      });


      myChart.setOption(option);
  // });
});