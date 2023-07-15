<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">任务通过率</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <CenterLeft1Chart />
      </div>
      <!-- 4个主要的数据 -->
      <div class="bottom-data">
        <div class="item-box mt-2" v-for="(item, index) in numberData" :key="index">
          <div class="d-flex">
            <span class="coin">￥</span>
            <dv-digital-flop class="dv-digital-flop" :config="item.number" />
          </div>
          <p class="text" style="text-align: center;">
            {{ item.text }}
            <span class="colorYellow">(人)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeft1Chart from '@/components/echart/centerLeft/centerLeft1Chart'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      numberData: [
        {
          number: {
            number: [1659],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '活跃贡献者'
        },
        {
          number: {
            number: [490],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '非活跃贡献者'
        }
      ],
      refreshFlag: false
    }
  },
  components: {
    CenterLeft1Chart
  },
  mounted() {
    this.changeTiming()
  },
  methods: {
    changeTiming() {
    },
    changeNumber() {
    },
    async fetchData(path) {
      let participantsResponse = await axios.get(path + '/inactive_contributors.json');
      let participantsData = participantsResponse.data;
      let latestParticipants = this.parseParticipants(participantsData);


      let inactiveParticipantsResponse = await axios.get(path + '/participants.json');
      let inactiveParticipantsData = inactiveParticipantsResponse.data;
      let inactiveLatestParticipants = this.parseParticipants(inactiveParticipantsData);

      return { latestParticipants, inactiveLatestParticipants }
    },
    parseParticipants(participantsData) {
      const keys = Object.keys(participantsData);
      const latestMonth = keys[keys.length - 2];
      const latestValue = participantsData[latestMonth];

      return latestValue;

    },
    forceUpdate() {
      this.refreshFlag = !this.refreshFlag;
    },
    refreshComponent() {
      this.refreshFlag = !this.refreshFlag;
    }
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        let tmp = await this.fetchData('https://markdown-picture-1302861826.cos.ap-shanghai.myqcloud.com/top_300_metrics/' + newVal)
        this.numberData = [
        {
          number: {
            number: [tmp.latestParticipants],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '活跃贡献者'
        },
        {
          number: {
            number: [tmp.inactiveLatestParticipants],
            toFixed: 0,
            textAlign: 'left',
            content: '{nt}',
            style: {
              fontSize: 24
            }
          },
          text: '非活跃贡献者'
        }
        ]
        console.log(this.numberData)
        this.forceUpdate()
        this.refreshComponent()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
$box-width: 300px;
$box-height: 410px;

#centerLeft1 {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 10px;

  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }

  .text {
    color: #c3cbde;
  }

  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }

  .bottom-data {
    .item-box {
      &>div {
        padding-right: 5px;
      }

      font-size: 14px;
      float: right;
      position: relative;
      width: 50%;
      color: #d3d6dd;

      .dv-digital-flop {
        width: 120px;
        height: 30px;
      }

      // 金币
      .coin {
        position: relative;
        top: 6px;
        font-size: 20px;
        color: #ffc107;
      }

      .colorYellow {
        color: yellowgreen;
      }

      p {
        text-align: center;
      }
    }
  }
}</style>
