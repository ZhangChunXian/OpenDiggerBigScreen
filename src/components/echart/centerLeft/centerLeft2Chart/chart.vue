<template>
  <div>
    <Echart id="centreLeft2Chart" ref="centreLeft2ChartRef" :options="options" height="360px" width="330px"></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart';
import 'echarts-wordcloud';

export default {
  data() {
    return {
      options: {},
      shapeMatrix: ''
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        // 设置点的位置(经纬度)
        this.options = {
          tooltip: {
            show: true,
            formatter: function (params) {
            let value = parseFloat(params.value).toFixed(1);
            return `${params.name}贡献值: ${value}`;
            }
          },
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            containLabel: true // 包含坐标轴标签在内
          },
          series: [
            {
              type: 'wordCloud',
              gridSize: 1,
              sizeRange: [12, 55],
              rotationRange: [-45, 0, 45, 90],
              shape: 'circle',
              textStyle: {
                normal: {
                  color: function () {
                    return 'rgb(' +
                      Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) +
                      ', ' + Math.round(Math.random() * 255) + ')'
                  }
                }
              },
              left: 'center',
              top: 'center',
              right: null,
              bottom: null,
              data: newData,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    }
  },
  methods: {
    // 开启定时器
    startInterval() {

    },
    // 重新随机选中地图区域
    reSelectMapRandomArea() {
    },
    handleMapRandomSelect() {
    }
  }
};
</script>
