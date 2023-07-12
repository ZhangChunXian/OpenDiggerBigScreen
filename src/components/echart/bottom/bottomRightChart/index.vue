<template>
  <div>
    <el-select
        v-model="cdata.year"
        filterable
        placeholder="请选择年份"
        @input="filterYear()"
      >
      <el-option
        v-for="item in years"
        :key="item"
        :value="item"
        >
      </el-option>
    </el-select>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      drawTiming: null,
      cdata: {
        weekCategory: [],
        radarData: [],
        radarDataAvg: [],
        maxData: 12000,
        weekMaxData: [],
        weekLineData: [],
        indicator: [],
        data: [],
        filterYearData: [],
        thatday: '',  // 项目的第一天
        EndOfThatdayYear: '', // 项目第一天那年的最后一天
        year: '',
        today: '',   // 项目的最后一天
      },
      temp: null,
      d: this.$store.state,
      years: [], // 出现的年份列表
    }
  },
  components: {
    Chart,
  },
  beforeUpdate() {

  },
  beforeDestroy() {
    clearInterval(this.drawTiming);
  },
  methods: {
    drawTimingFn() {
    },
    setData() {
      // 清空轮询数据
      this.cdata.weekCategory = [];
      this.cdata.weekMaxData = [];
      this.cdata.weekLineData = [];
      this.cdata.radarData = [];
      this.cdata.radarDataAvg = [];

      // 周数据
      for (let i = 0; i < 7; i++) {
        // 日期
        let date = new Date();
        this.cdata.weekCategory.unshift([date.getMonth() + 1, date.getDate() - i].join("/"));

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

    },
    async fetchData(path) {
      let activityResponse = await axios.get(path + '/active_dates_and_times.json');
      let activityData = activityResponse.data;

      return this.processData(activityData)
    },
    processData(datas) {
      let radarDataAvg = [];
      let max = 0;
      let indicator = [];
      let years = [];
      let data = [];
      let year = '';

      // Calculate the sum of each year and find the max value
      for (let key in datas) {
        let year = key.split('-')[0];
        let sum = datas[key].reduce((a, b) => a + b, 0);
        if (years[year]) {
          years[year] += sum;
        } else {
          years[year] = sum;
        }
        if (years[year] > max) {
          max = years[year];
        }
      }

      // Push the sum and max value to radarDataAvg and indicator
      for (let year in years) {
        radarDataAvg.push(years[year]);
        indicator.push({ name: year, max: max });
      }


      let dates = Object.keys(datas);
      let thatday = dates[0].split('-').slice(0, 2).join('-') + '-01';
      years = Object.keys(datas).map(key => key.split('-')[0]);
      years = [...new Set(years)];

      dates.forEach(date => {
        let year = date.split('-')[0];
        let month = date.split('-')[1];
        let daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
        for (let i = 0; i < daysInMonth; i++) {
            let sum = 0;
            for (let j = 0; j < 6; j++) {
                sum += datas[date][i * 6 + j];
            }
            let day = i + 1 < 10 ? `0${i + 1}` : i + 1;
            data.push([`${year}-${month}-${day}`, sum]);
        }
    });
      year = years[0]
      let today = data[data.length - 1][0];
      return { radarDataAvg, indicator, data, today, thatday, years, year };
    },
    filterYear() {
      this.cdata.thatday = this.cdata.year + '-01-01';

        this.cdata.EndOfThatdayYear = this.cdata.year + '-12-31';

        this.cdata.data.forEach(date => {
          let theYear = date[0].split('-')[0];

          if (theYear == this.cdata.year) {
            this.cdata.filterYearData.push(date);
          }
      })
    }
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        this.temp = await this.fetchData('https://markdown-picture-1302861826.cos.ap-shanghai.myqcloud.com/top_300_metrics/' + newVal);
        this.cdata.radarDataAvg = this.temp.radarDataAvg;
        this.cdata.indicator = this.temp.indicator;
        this.cdata.data = this.temp.data;
        this.cdata.today = this.temp.today;
        this.cdata.thatday = this.temp.thatday;
        this.years = this.temp.years;
        this.cdata.year = this.temp.year;
        this.cdata.thatday = this.cdata.year + '-01-01';

        this.cdata.EndOfThatdayYear = this.cdata.year + '-12-31';

        this.cdata.data.forEach(date => {
          let theYear = date[0].split('-')[0];

          if (theYear == this.cdata.year) {
            this.cdata.filterYearData.push(date);
          }
      })
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped></style>