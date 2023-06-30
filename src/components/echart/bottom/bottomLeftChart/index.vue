<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      cdata: {
        month: [
          "市区",
          "万州",
          "江北",
          "南岸",
          "北碚",
          "綦南",
          "长寿",
          "永川",
          "璧山",
          "江津",
          "城口",
          "大足",
          "垫江",
          "丰都",
          "奉节",
          "合川",
          "江津区",
          "开州",
          "南川",
          "彭水",
          "黔江",
          "石柱",
          "铜梁",
          "潼南",
          "巫山",
          "巫溪",
          "武隆",
          "秀山",
          "酉阳",
          "云阳",
          "忠县",
          "川东",
          "检修"
        ],
        starData: [
          18092,
          20728,
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          56061,
          62677,
          59521,
          67560,
          18092,
          20728,
          24045,
          28348,
          32808,
          36097,
          39867,
          44715,
          48444,
          50415,
          36097,
          39867,
          44715,
          48444,
          50415,
          50061,
          32677,
          49521,
          32808
        ],
        forkData: [
          4600,
          5000,
          5500,
          6500,
          7500,
          8500,
          9900,
          12500,
          14000,
          21500,
          23200,
          24450,
          25250,
          33300,
          4600,
          5000,
          5500,
          6500,
          7500,
          8500,
          9900,
          22500,
          14000,
          21500,
          8500,
          9900,
          12500,
          14000,
          21500,
          23200,
          24450,
          25250,
          7500
        ],
        issueData: []
      },
      d: this.$store.state
    };
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
    // 根据自己的业务情况修改
    setBottomLeftData() {
      this.$store.commit('setBottomLeftData', this.cdata);
    },
    readFileToCdata() {
      this.$store.commit('readFileToCdata', this.cdata);
    },
    async fetchData(path) {
      let starResponse = await axios.get(path + '/stars.json');
      let starData = await starResponse.data;
      let forkResponse = await axios.get(path + '/technical_fork.json');
      let forkData = await forkResponse.data;
      let issueResponse = await axios.get(path + '/issues_new.json');
      let issueData = await issueResponse.data;

      // 获取所有的键
      let starKeys = Object.keys(starData);
      let forkKeys = Object.keys(forkData);
      let issueKeys = Object.keys(issueData);

      // 找出公共的键
      let commonKeys = starKeys.filter(value => forkKeys.includes(value) && issueKeys.includes(value));

      // 创建新的json对象
      let data = {
        month: commonKeys,
        starData: commonKeys.map(key => starData[key]),
        forkData: commonKeys.map(key => forkData[key]),
        issueData: commonKeys.map(key => issueData[key]),
      }
      return data
    }
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        this.cdata = await this.fetchData('https://markdown-picture-1302861826.cos.ap-shanghai.myqcloud.com/top_300_metrics/' + newVal);
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>