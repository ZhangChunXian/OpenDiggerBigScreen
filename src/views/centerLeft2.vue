<template>
  <div id="centerLeft1">
    <div class="bg-color-black">
      <div class="d-flex">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <el-tooltip class="item" effect="dark" content="贡献者词云, 文字越大表示贡献值越大 数据来源: X-lab2017/open-digger" placement="top">
            <span style="font-size: 0.9rem; font-weight: bold;">贡献者词云</span>
            <dv-decoration-3 class="dv-dec-3" />
          </el-tooltip>
        </div>
      </div>
      <div class="d-flex jc-center">
        <CenterLeft2Chart />
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeft2Chart from "@/components/echart/centerLeft/centerLeft2Chart";
export default {
  components: {
    CenterLeft2Chart
  },
};
</script>

<style lang="scss" scoped>
#centerLeft1 {
  $box-width: 300px;
  $box-height: 410px;
  padding: 16px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
    background-color: rgb(12, 17, 33);
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
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