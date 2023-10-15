<template>
  <div id="bottomLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2"  style="display: flex; align-items: center;" >
        <span>
          <icon name="chart-bar" class="text-icon"></icon>
        </span>
        <el-tooltip class="item" effect="dark" content="star, issue, PR统计图 数据来源: X-lab2017/open-digger" placement="top">
          <div class="d-flex" >
            <span class="font-size: 0.9rem; font-weight: bold" >数据统计图</span>
            <dv-decoration-3 class="dv-dec-3" />
          </div>
        </el-tooltip>
      </div>
      <div>
        <BottomLeftChart />
      </div>
    </div>
  </div>
</template>

<script>
import BottomLeftChart from '@/components/echart/bottom/bottomLeftChart'
export default {
  components: {
    BottomLeftChart
  }
}
</script>

<style lang="scss" scoped>
$box-height: 520px;
$box-width: 100%;
#bottomLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 35px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
