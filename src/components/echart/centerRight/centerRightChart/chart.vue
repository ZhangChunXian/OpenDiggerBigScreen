<template>
  <div>
    <Echart
      :options="options"
      id="centreRight2Chart1"
      height="200px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
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
  },
  watch: {
    cdata: {
      handler (newData) {
        // 固定样式数据
        let lineStyle = {
          normal: {
            width: 1,
            opacity: 0.5
          }
        };

        this.options = {
          radar: {
            indicator: newData.indicatorData,
            shape: "circle",
            splitNumber: 5,
            radius: ["0%", "65%"],
            name: {
              textStyle: {
                color: "rgb(238, 197, 102)"
              }
            },
            splitLine: {
              lineStyle: {
                color: [
                  "rgba(238, 197, 102, 0.1)",
                  "rgba(238, 197, 102, 0.2)",
                  "rgba(238, 197, 102, 0.4)",
                  "rgba(238, 197, 102, 0.6)",
                  "rgba(238, 197, 102, 0.8)",
                  "rgba(238, 197, 102, 1)"
                ].reverse()
              }
            },
            splitArea: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(238, 197, 102, 0.5)"
              }
            }
          },
          series: [
            {
              name: "北京",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataBJ,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#F9713C"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.1
                }
              }
            },
            {
              name: "上海",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataSH,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "#B3E4A1"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            },
            {
              name: "广州",
              type: "radar",
              lineStyle: lineStyle,
              data: newData.dataGZ,
              symbol: "none",
              itemStyle: {
                normal: {
                  color: "rgb(238, 197, 102)"
                }
              },
              areaStyle: {
                normal: {
                  opacity: 0.05
                }
              }
            } //end
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
};
</script>