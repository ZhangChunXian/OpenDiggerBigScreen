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
        xData: ["TypeScript", "JavaScript", "CSS", "其他语言"],
        seriesData: [
          { value: 5211981, name: "TypeScript" },
          { value: 26845, name: "JavaScript" },
          { value: 3941, name: "CSS" },
          { value: 2604, name: "其他语言" },
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