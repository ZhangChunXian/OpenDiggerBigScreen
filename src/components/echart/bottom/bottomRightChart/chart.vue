<template>
  <div>
    <Echart :options="options" id="centreLeft1Chart" height="480px" width="100%"></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data() {
    return {
      options: {},
      // 定义颜色
      colorList: {
        linearYtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#f5b44d'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearGtoB: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#43dfa2'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        linearBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#1c98e8'
            },
            {
              offset: 1,
              color: '#28f8de'
            }
          ]
        },
        areaBtoG: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(35,184,210,.2)'
            },
            {
              offset: 1,
              color: 'rgba(35,184,210,0)'
            }
          ]
        }
      }
    }
  },
  components: {
    Echart
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          title: {
            text: '',
            textStyle: {
              color: '#D3D6DD',
              fontSize: 24,
              fontWeight: 'normal'
            },
            subtextStyle: {
              color: '#fff',
              fontSize: 16
            },
            top: 50,
            left: 80
          },
          visualMap: {
            min: 0,
            max: 30,
            inRange: {
              color: ['#98FB98', '#32CD32', '#008000', '#006400', '#004d00']
            },
            show: false
          },
          calendar: {
            cellSize: [14, 14],
            range: [newData['thatday'], newData['EndOfThatdayYear']],
            itemStyle: {
              borderColor: '#ebedf0',
              borderWidth: 4
            },
            top: '50%', // 调整热力图的位置到下半部分
            bottom: '10%',
            left: "10%",
            splitLine: {
              show: false
            },
            yearLabel: { show: false }
          },
          legend: {
            top: 120,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['年度活跃值'],
            textStyle: {
              color: '#fff',
              fontSize: 14
            }
          },
          tooltip: {
            trigger: 'item'
          },
          radar: {
            center: ['68%', '27%'],
            radius: '40%',
            name: {
              color: '#fff'
            },
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: this.colorList.linearYtoG,
                opacity: 0.6
              }
            },
            splitLine: {
              lineStyle: {
                color: this.colorList.linearYtoG,
                opacity: 0.6
              }
            },
            splitArea: {
              areaStyle: {
                color: '#fff',
                opacity: 0.1,
                shadowBlur: 25,
                shadowColor: '#000',
                shadowOffsetX: 0,
                shadowOffsetY: 5
              }
            },
            indicator: newData.indicator
          },
          series: [
            {
              type: 'heatmap',
              coordinateSystem: 'calendar',
              data: newData['filterYearData']
            },
            {
              type: 'radar',
              symbolSize: 0,
              data: [
                {
                  value: newData.radarDataAvg,
                  name: '年度活跃值',
                  itemStyle: {
                    normal: {
                      color: 'rgba(248,211,81, 0.2)'
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: 'rgba(248,211,81, 0.7)',
                      shadowBlur: 25,
                      shadowColor: 'rgba(248,211,81)',
                      shadowOffsetX: 0,
                      shadowOffsetY: -10,
                      opacity: 1
                    }
                  }
                }
              ]
            },
          ]
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
