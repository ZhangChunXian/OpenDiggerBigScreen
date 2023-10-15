<template>
  <div>
    <Echart
        :options="options"
        id="centreLeft2Chart"
        height="380px"
        width="320px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import { mapState } from 'vuex'
import axios from 'axios'
const https = require('https');

export default {
  name: "centerRight2Chart",
  data () {
    return {
      options: {},
      Languages: {},
      chart: null  // 用于存放 ECharts 实例
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          tooltip: {
            show: true, // 默认显示
            showContent: true, // 是否显示提示框浮层
            trigger: 'item', // 触发类型，默认数据项触发
            triggerOn: 'mousemove', // 提示触发条件，mousemove鼠标移至触发，还有click点击触发
            alwaysShowContent: false, // 默认离开提示框区域隐藏，true为一直显示
            showDelay: 100, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
            hideDelay: 2000, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
            enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
            position: 'right', // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
            confine: false, // 是否将 tooltip 框限制在图表的区域内。
            // 外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
            transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是秒，设置为 0 的时候会紧跟着鼠标移动。
          },
          // legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
          //   show: true,
          //   data: [
          //     {
          //       name: '正面派'
          //     },
          //     {
          //       name: '三一派'
          //     }
          //   ]
          // },
          series: [{
            type: 'graph', // 关系图
            name: 'Repository:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
            legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
            hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
            coordinateSystem: null, // 坐标系可选
            xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
            yAxisIndex: 0, // y轴坐标
            force: { // 力引导图基本配置
              // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
              repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
              gravity: 0.1, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength: 100, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
              layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
              // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
            nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            // symbol:'roundRect', // 关系图节点标记的图形。
            // ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
            // 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
            // 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
            // symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
            // 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
            // symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
            // symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
            edgeSymbol: ['none', 'none'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
            // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
            edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

            itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
              // normal 是图形在默认状态下的样式；
              // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              normal: { // 默认样式
                label: {
                  show: true
                },
                borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

              },
              emphasis: { // 高亮状态

              }
            },
            lineStyle: { // ========关系边的公用线条样式。
              normal: {
                color: '#0c8093',
                width: '1', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
              },
              emphasis: { // 高亮状态

              }
            },
            label: { // ========结点图形上的文本标签
              normal: {
                show: true, // 是否显示标签。
                position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                  // color: '#d3d7d4', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                  fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                  fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                  fontFamily: 'sans-serif', // 文字的字体系列
                  fontSize: 12, // 字体大小
                }
              },
              emphasis: { // 高亮状态

              }
            },
            edgeLabel: { // ========连接线上的文本标签
              normal: {
                show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
              },
              emphasis: { // 高亮状态

              }
            },
            categories: [ // name(类别名称)要同legend(图例）按次序一致
              {
                name: '正面派'
              },
              {
                name: '三一派'
              }
            ],
            // 设置结点node的数据
            // category: 类别序号，从0开始
            // name: 结点图形显示的文字
            // value: 鼠标点击结点，显示的数字
            // symbolSize: 结点图形的大小
            // symbol: 类目节点标记图形，默然为圆形
            // label: 标签样式
            data: newData.data,
            links: newData.links,
          }]
        };
      },
      immediate: true,
      deep: true
    },
    currentRepository: {
      handler: async function (newVal) {
        let tmp = await this.fetchData('https://oss.x-lab.info/open_digger/github/' + newVal)
        this.cdata.data = tmp.data;
        this.cdata.links = tmp.links;
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapState(['currentRepository']),
    ...mapState(['languages']),
    chartStyle() {
      return this.fullscreen ? { height: '100vh', width: '100vw' } : { height: '380px', width: '320px' };
    }
  },
  methods: {
    async fetchData(path) {
      let repoNetworkResponse = await axios.get(
          path + '/repo_network.json'
      );
      let results = this.parseRepoNetwork(repoNetworkResponse.data)
      return results
    },
    parseRepoNetwork(repo_network) {
      // 转换 nodes
      const data = repo_network.nodes.map((node, index) => {
        return {
          category: index % 2 == 0 ? '三一派' : '正面派',
          name: node[0],
          value: node[1],
          symbolSize: node[1] / 20
        };
      });
      // 转换 edges
      const links = repo_network.edges
          .filter(edge => edge[2] >= 10)  // 过滤掉value小于1的边
          .map(edge => {
        return {
          source: edge[0],
          target: edge[1],
          value: edge[2]
        };
      });

      const result = {
        data: data,
        links: links,
      };
      result.data.forEach(node => {
        if (node.category == '三一派') {
          node.itemStyle = {
            normal: {
              color: '#000'
            }
          }
        } else {
          node.itemStyle = {
            normal: {
              color: '#26a641'
            }
          }
        }
      }
      )

      return result;
    },
    transformLanguageData(data) {
      // 将原始数据转换为数组，并按照使用行数排序
      let dataArray = Object.keys(data).map((key) => {
        return {name: key, value: data[key]};
      }).sort((a, b) => b.value - a.value);

      // 初始化结果数据结构
      let result = {
        xData: [],
        seriesData: []
      };

      // 提取前三种语言
      for (let i = 0; i < 3; i++) {
        if(dataArray[i]) {
          result.xData.push(dataArray[i].name);
          result.seriesData.push(dataArray[i]);
        }
      }

      // 计算其余语言的总和
      let otherLanguagesValue = dataArray.slice(3).reduce((total, item) => {
        return total + item.value;
      }, 0);

      // 如果有其余的语言，则加入“其他语言”这一类
      if (otherLanguagesValue > 0) {
        result.xData.push("其他语言");
        result.seriesData.push({name: "其他语言", value: otherLanguagesValue});
      }

      return result;
    }
  },
}
</script>

<style scoped>

</style>