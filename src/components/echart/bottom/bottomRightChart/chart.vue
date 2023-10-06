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
            left: 60
          },
          tooltip: {},
          visualMap: {
            min: 0,
            max: 50,
            type: 'piecewise',
            orient: 'horizontal',
            calculable: true,
            inRange: {
              color: ['#161b22', '#0e4429', '#0d743c', '#26a641', '#39d353']
            },
            show: false
          },
          calendar: {
            cellSize: [16, 9],
            range: [newData['thatday'], newData['EndOfThatdayYear']],
            itemStyle: {
              borderColor: '#0d1117',
              borderWidth: 4
            },
            top: '66%', // 调整热力图的位置到下半部分
            bottom: '12%',
            left: 'center',
            splitLine: {
              show: false
            },
            yearLabel: { show: false },
            dayLabel: { // 设置日期文本样式
              textStyle: {
                color: '#fff', // 文本颜色为白色
              }
            },
            monthLabel: { // 设置月份文本样式
              textStyle: {
                color: '#fff', // 文本颜色为白色
              }
            }
          },
          legend: {
            top: 100,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['年度活跃值'],
            textStyle: {
              color: '#fff',
              fontSize: 28
            }
          },
          // tooltip: {
          //   // trigger: 'item',
          //   // position: 'top',
          //   // formatter: function(params) {
          //   // return '日期：' + params.value[0] + '<br/>活跃度：' + params.value[1];
          //   // }
          // },
          radar: {
            center: ['60%', '27%'],
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
              data: newData['filterYearData'],
              tooltip: {
                trigger: 'item',
                position: 'top',
                formatter: function(params) {
                return '日期：' + params.value[0] + '<br/>活跃值：' + params.value[1];
                }
              }
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
                      color: '#00224a'
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: '#26a641',
                      // shadowBlur: 25,
                      // shadowColor: '#00224a',
                      // shadowOffsetX: 0,
                      // shadowOffsetY: -10,
                      opacity: 0.5
                    }
                  }
                }
              ],
              tooltip: {
                trigger: 'item',
              }
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
