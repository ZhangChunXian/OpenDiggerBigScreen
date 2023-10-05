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
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true
          },
          calculable: true,
          legend: {
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
              name: "通过率统计",
              type: "pie",
              radius: [10, 50],
              center: ["50%", "40%"],
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
        let tmp = await this.fetchData('https://oss.x-lab.info/open_digger/github/' + newVal)
        this.cdata.xData = tmp.xData
        this.cdata.seriesData = tmp.seriesData
      },
      deep: true
    }
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  methods: {
    async fetchData(path) {
      let participantsResponse = await axios.get(path + '/participants.json');
      let participantsData = participantsResponse.data;
      let latestParticipants = this.parseParticipants(participantsData);


      let inactiveParticipantsResponse = await axios.get(path + '/inactive_contributors.json');
      let inactiveParticipantsData = inactiveParticipantsResponse.data;
      let inactiveLatestParticipants = this.parseParticipants(inactiveParticipantsData);

      let xData = ["活跃贡献者", "非活跃贡献者"];
      let seriesData = [
        {
          "value": latestParticipants,
          "name": "活跃贡献者"
        },
        {
          "value": inactiveLatestParticipants,
          "name": "非活跃贡献者"
        }
      ]
      return { xData, seriesData }
    },
    parseParticipants(participantsData) {
      const keys = Object.keys(participantsData);
      const latestMonth = keys[keys.length - 2];
      const latestValue = participantsData[latestMonth];

      return latestValue;
    }
  },
}
</script>

<style lang="scss" scoped>
</style>