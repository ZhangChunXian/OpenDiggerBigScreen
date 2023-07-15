<template>
  <div id="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2">产品销售渠道分析</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
        <centerRight2Chart1 />
      </div>
    </div>
  </div>
</template>

<script>
import centerRight2Chart1 from '@/components/echart/centerRight/centerRightChart'
import { mapState } from 'vuex'
import axios from 'axios'


export default {
  data() {
    return {
      config: {
        "data": [
          {
            "name": "gmail",
            "value": 3529
          },
          {
            "name": "qq",
            "value": 369
          },
          {
            "name": "github",
            "value": 351
          },
          {
            "name": "outlook",
            "value": 82
          },
          {
            "name": "163",
            "value": 76
          }
        ],
        "showValue": true
      }
    }
  },
  components: { centerRight2Chart1 },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        this.config = await this.fetchData('https://markdown-picture-1302861826.cos.ap-shanghai.myqcloud.com/top_300_metrics/' + newVal);
        console.log(this.config);
      },
      deep: true
    }
  },
  methods: {
    async fetchData(path) {
      let mailResponse = await axios.get(path + '/contributor_email_suffixes.json');
      let mailData = mailResponse.data;

      return this.processData(mailData);
    },

    processData(data) {
      const result = {};
      Object.values(data).forEach(arr => {
        arr.forEach(item => {
          let [name, value] = item;

          if (name === 'users.noreply.github.com') {
            name = 'github.com';
          }

          const index = name.indexOf('.');
          if (index !== -1) {
            name = name.substring(0, index);
          }

          if (!result[name]) {
            result[name] = 0;
          }
          result[name] += Number(value);
        });
      });
      let output = Object.entries(result)
        .filter(([, value]) => value >= 75)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value);

      const configs = {
        data: output,
        showValue: true
      };

      return configs;
    }
  }
}
</script>

<style lang="scss" scoped>
#centerRight2 {
  $box-height: 410px;
  $box-width: 340px;
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;

  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }

  .text {
    color: #c3cbde;
  }

  .body-box {
    border-radius: 10px;
    overflow: hidden;

    .dv-cap-chart {
      width: 100%;
      height: 350px;
    }
  }
}
</style>
