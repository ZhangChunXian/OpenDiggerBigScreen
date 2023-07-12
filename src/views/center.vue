<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in titleItem"
        :key="item.title"
      >
        <p class="colorWhite" style="font-size: 0.8rem">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop ml-1 mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2 mb-1 pl-3">年度负责人组件达标榜</span>
        <dv-scroll-ranking-board class="dv-scr-rank-board mt-1" :config="ranking" />
      </div>
      <div class="percent">
        <div class="item bg-color-black">
          <span>今日任务通过率</span>
          <CenterChart
            :id="rate[0].id"
            :tips="rate[0].tips"
            :colorObj="rate[0].colorData"
          />
        </div>
        <div class="item bg-color-black">
          <span>今日任务达标率</span>
          <CenterChart
            :id="rate[1].id"
            :tips="rate[1].tips"
            :colorObj="rate[1].colorData"
          />
        </div>
        <div class="water">
          <dv-water-level-pond class="dv-wa-le-po" :config="water" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterChart from '@/components/echart/center/centerChartRate'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      titleItem: [
        {
          title: '累计star',  // 累计star总数
          number: {
            number: [108380],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '累计fork',  // 累计fork总数
          number: {
            number: [49195],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '累计参与人数', // 累计
          number: {
            number: [38251],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '累计PR',
          number: {
            number: [13208],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '累计issue',
          number: {
            number: [25832],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        },
        {
          title: '累计贡献者',
          number: {
            number: [1890],
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 26
            }
          }
        }
      ],
      ranking: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '新乡2',
            value: 80
          },
          {
            name: '新乡3',
            value: 80
          },
          {
            name: '新乡4',
            value: 80
          },
          {
            name: '新乡5',
            value: 80
          },
          {
            name: '新乡6',
            value: 80
          }
        ],
        carousel: 'single',
        unit: '人'
      },
      water: {
        data: [24, 45],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3
      },
      // 通过率和达标率的组件复用数据
      rate: [
        {
          id: 'centerRate1',
          tips: 60,
          colorData: {
            textStyle: '#3fc0fb',
            series: {
              color: ['#00bcd44a', 'transparent'],
              dataColor: {
                normal: '#03a9f4',
                shadowColor: '#97e2f5'
              }
            }
          }
        },
        {
          id: 'centerRate2',
          tips: 40,
          colorData: {
            textStyle: '#67e0e3',
            series: {
              color: ['#faf3a378', 'transparent'],
              dataColor: {
                normal: '#ff9800',
                shadowColor: '#fcebad'
              }
            }
          }
        }
      ]
    }
  },
  components: {
    CenterChart
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
    },
    titleItem: {
      deep: true, // 深度监听
      handler() {
        this.$forceUpdate(); // 强制组件重新渲染
      },
    },
  },
  methods: {
    async fetchData(path) {
      let sumArray = [];
      let allStarResponse = await axios.get(path + '/stars.json');
      let allStarData = await allStarResponse.data;
      let allStar = Object.values(allStarData).reduce((a, b) => a + b, 0);
      sumArray.push(allStar);

      let allForkResponse = await axios.get(path + '/technical_fork.json');
      let allForkData = await allForkResponse.data;
      let allFork = Object.values(allForkData).reduce((a, b) => a + b, 0);
      sumArray.push(allFork);

      let allParticipantResponse = await axios.get(path + '/participants.json');
      let allParticipantData = await allParticipantResponse.data;
      let allParticipant = Object.values(allParticipantData).reduce((a, b) => a + b, 0);
      sumArray.push(allParticipant);

      let allPResponse = await axios.get(path + '/change_requests.json');
      let allPRData = await allPResponse.data;
      let allPR = Object.values(allPRData).reduce((a, b) => a + b, 0);
      sumArray.push(allPR);

      let allIssueResponse = await axios.get(path + '/issues_new.json');
      let allIssueData = await allIssueResponse.data;
      let allIssue = Object.values(allIssueData).reduce((a, b) => a + b, 0);
      sumArray.push(allIssue);

      let allDistributorResponse = await axios.get(path + '/new_contributors.json');
      let allDistributorResponseData = await allDistributorResponse.data;
      let allDistributor = Object.values(allDistributorResponseData).reduce((a, b) => a + b, 0);
      sumArray.push(allDistributor);

      this.titleItem.forEach((item, index) => {
        this.$set(this.titleItem[index], 'number', {number: [sumArray[index]], textAlign: 'left', content: '{nt}', style: {fontSize: 26}});
      });
      return sumArray;
    }
  }
}
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
  .down {
    padding: 6px 4px;
    padding-bottom: 0;
    width: 100%;
    display: flex;
    height: 255px;
    justify-content: space-between;
    .bg-color-black {
      border-radius: 5px;
    }
    .ranking {
      padding: 10px;
      width: 59%;
      .dv-scr-rank-board {
        height: 225px;
      }
    }
    .percent {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        height: 120px;
        span {
          margin-top: 8px;
          font-size: 14px;
          display: flex;
          justify-content: center;
        }
      }
      .water {
        width: 100%;
        .dv-wa-le-po {
          height: 120px;
        }
      }
    }
  }
}
</style>
