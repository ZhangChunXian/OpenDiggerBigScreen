<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      drawTiming: null,
      cdata: {
        year: null,
        weekCategory: [],
        radarData: [],
        radarDataAvg: [],
        maxData: 12000,
        weekMaxData: [],
        weekLineData: []
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
    this.drawTimingFn();
  },
  beforeDestroy () {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn () {
      this.setData();
      this.drawTiming = setInterval(() => {
        this.setData();
      }, 6000);
    },
    setData () {
      // 清空轮询数据
      this.cdata.weekCategory = [];
      this.cdata.weekMaxData = [];
      this.cdata.weekLineData = [];
      this.cdata.radarData = [];
      this.cdata.radarDataAvg = [];

      let dateBase = new Date();
      this.cdata.year = dateBase.getFullYear();
      // 周数据
      for (let i = 0; i < 7; i++) {
        // 日期
        let date = new Date();
        this.cdata.weekCategory.unshift([date.getMonth() + 1, date.getDate()-i].join("/"));

        // 折线图数据
        this.cdata.weekMaxData.push(this.cdata.maxData);
        let distance = Math.round(Math.random() * 11000 + 500);
        this.cdata.weekLineData.push(distance);

        // 雷达图数据
        // 我的指标
        let averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
        let maxSpeed = averageSpeed + +(Math.random() * 3).toFixed(2);
        let hour = +(distance / 1000 / averageSpeed).toFixed(1);
        let radarDayData = [distance, averageSpeed, maxSpeed, hour];
        this.cdata.radarData.unshift(radarDayData);

        // 平均指标
        let distanceAvg = Math.round(Math.random() * 8000 + 4000);
        let averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
        let maxSpeedAvg = averageSpeedAvg + +(Math.random() * 2).toFixed(2);
        let hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
        let radarDayDataAvg = [
          distanceAvg,
          averageSpeedAvg,
          maxSpeedAvg,
          hourAvg
        ];
        this.cdata.radarDataAvg.unshift(radarDayDataAvg);
      }

    }
  }
};
</script>

<style lang="scss" scoped>
</style>