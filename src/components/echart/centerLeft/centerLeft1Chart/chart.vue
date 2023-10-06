<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="220px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import { mapState } from 'vuex'
import axios from 'axios'
const https = require('https');

export default {
  data () {
    return {
      options: {},
      Languages: {}
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
        this.options = {
          color: [
            "#37a2da",
            "#9fe6b8",
            "#ffdb5c",
            "#ff9f7f",
            "#fb7293",
            "#e7bcf3",
            "#8378ea"
          ],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {d}%"
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
            show: false,
            orient: "horizontal",
            icon: "circle",
            bottom: 0,
            x: "center",
            data: newData.xData,
            textStyle: {
              color: "#fff"
            }
          },
          series: [
            {
              name: "项目语言统计",
              type: "pie",
              radius: [20, 70],
              center: ["50%", "55%"],
              data: newData.seriesData
            }
          ]
        }
      },
      immediate: true,
      deep: true
    },
    currentRepository: {
      handler: async function (newVal) {
        let tmp = await this.fetchData(newVal)
        this.cdata.xData = tmp.xData
        this.cdata.seriesData = tmp.seriesData

        this.$store.commit('setLanguages', tmp)
      },
      deep: true,
      immediate: true
    }
  },
  computed: {
    ...mapState(['currentRepository']),
    ...mapState(['languages'])
  },
  methods: {
    async fetchData(path) {
      const agent = new https.Agent({
        rejectUnauthorized: false
      });
      try {
        let participantsResponse = await axios.get(
            'https://api.github.com/repos/' + path + '/languages',
            {
              httpsAgent: agent
            }
        );
        let results = this.transformLanguageData(participantsResponse.data)
        return results

      } catch (error) {
        this.$message.error('您输入的仓库名无效, 请检查后重新输入');
      }


    },
    parseParticipants(participantsData) {
      const keys = Object.keys(participantsData);
      const latestMonth = keys[keys.length - 2];
      const latestValue = participantsData[latestMonth];

      return latestValue;
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

<style lang="scss" scoped>
</style>