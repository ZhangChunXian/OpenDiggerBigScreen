<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">OpenDigger可视化大屏</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">作者: 张春贤</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">华东师范大学数据科学与工程学院</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">{{this.$store.state.currentRepository}}</span>
            </div>
            <div class="react-right mr-4 react-l-s" style="display: flex; align-items: center; justify-content: flex-end;">
<!--              <span class="react-after"></span>-->
<!--              <span class="text">-->
<!--                <el-select-->
<!--                  v-model="value"-->
<!--                  filterable-->
<!--                  placeholder="请选择"-->
<!--                  @input="setCurrentRepository()"-->
<!--                >-->
<!--                  <el-option-->
<!--                    v-for="item in options"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.label"-->
<!--                    >-->
<!--                  </el-option>-->
<!--                </el-select>-->
<!--                </span-->
<!--              >-->
              <!-- <span class="react-after"></span> -->
              <span class="text" style="padding-right: 30px; transform: skewX(45deg);">
                <el-tooltip class="item" effect="dark" content="输入格式: Github用户名/仓库名. 支持查询未在候选列表的仓库" placement="top">
                  <el-row>
                    <el-col :span="24">
                      <el-autocomplete
                          v-model="state1"
                          prefix-icon="el-icon-search"
                          :fetch-suggestions="querySearch"
                          placeholder="请输入仓库名"
                          @select="handleSelect"
                          @change="handleSelect"
                          clearable
                      ></el-autocomplete>
                    </el-col>
                  </el-row>
                </el-tooltip>
              </span>
            </div>
          </div>
        </div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <center />
            </div>
            <!-- 中间 -->
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <bottomRight />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from '../utils/index.js'
import centerLeft1 from './centerLeft1'
import centerLeft2 from './centerLeft2'
import centerRight1 from './centerRight1'
import centerRight2 from './centerRight2'
import center from './center'
import bottomLeft from './bottomLeft'
import bottomRight from './bottomRight'
import axios from 'axios'

export default {
  mixins: [ drawMixin ],
  data() {
    return {
      options: this.$store.state.Repositories,
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      decorationColor: ['#568aea', '#000000'],
      value: '',
      state1: '',
      repositories: []
    }
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft,
    bottomRight
  },
  mounted() {
    this.timeFn()
    this.cancelLoading()
    this.repositories = this.$store.state.Repositories
  },
  beforeDestroy () {
    clearInterval(this.timing)
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    setCurrentRepository() {
      this.$store.commit('setCurrentRepository', this.value)
    },
    querySearch(queryString, cb) {
      var repositories = this.repositories.map(item => {
        return {
          value: item.label,
          label: item.value
        };
      });
      var results = queryString ? repositories.filter(this.createFilter(queryString)) : repositories;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (repository) => {
        return (repository.value.indexOf(queryString) === 0);
      };
    },
    handleSelect(item) {
      if(typeof item == 'string') {
        if (this.state1) {
          if (this.checkRepoValidity(this.state1)) {
            this.$store.commit('setCurrentRepository', this.state1)
          }
        }
      } else {
        this.$store.commit('setCurrentRepository', item.value)
      }
    },
    checkRepoValidity(link) {
      return axios.get(`https://oss.x-lab.info/open_digger/github/` + link + '/stars.json')
          .then(response => {
            if (response.status === 200) {
              return 1;
            } else {
              this.$message.error('您输入的仓库名无效, 请检查后重新输入');
              return 0;
            }
          })
          .catch(() => {
            this.$message.error('您输入的仓库名无效, 请检查后重新输入');
            return 0;
          });
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/index.scss';
</style>
