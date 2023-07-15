<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  data () {
    return {
      cdata: {
        xData: ["活跃贡献者", "非活跃贡献者"],
        seriesData: [
          { value: 1659, name: "活跃贡献者" },
          { value: 490, name: "非活跃贡献者" },
        ]
      }
    }
  },
  components: {
    Chart,
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>