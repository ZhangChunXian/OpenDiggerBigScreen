<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
import { mapState } from 'vuex'
import axios from 'axios'


export default {
  data() {
    return {
      cdata: [
        {
          "name": "303394539",
          "value": 15.05
        },
        {
          "name": "1123612483",
          "value": 11.16
        },
        {
          "name": "1247748612",
          "value": 12.81
        },
        {
          "name": "afc163",
          "value": 2165.5399999999995
        },
        {
          "name": "ibigbug",
          "value": 27.980000000000004
        },
        {
          "name": "simaQ",
          "value": 22.299999999999997
        },
        {
          "name": "yiminghe",
          "value": 99.38
        },
        {
          "name": "sorrycc",
          "value": 50.28000000000001
        },
        {
          "name": "warmhug",
          "value": 55.879999999999995
        },
        {
          "name": "zhujun24",
          "value": 25.89
        },
        {
          "name": "jljsj33",
          "value": 208.26000000000005
        },
        {
          "name": "shepherdwind",
          "value": 11.48
        },
        {
          "name": "benjycui",
          "value": 440.49
        },
        {
          "name": "dqaria",
          "value": 11.18
        },
        {
          "name": "zinkey",
          "value": 19.04
        },
        {
          "name": "falltodis",
          "value": 10.91
        },
        {
          "name": "joesonw",
          "value": 11.51
        },
        {
          "name": "silentcloud",
          "value": 13.45
        },
        {
          "name": "popomore",
          "value": 11.090000000000002
        },
        {
          "name": "ikobe",
          "value": 25.939999999999998
        },
        {
          "name": "wuzhao",
          "value": 17.439999999999998
        },
        {
          "name": "RaoHai",
          "value": 113.69
        },
        {
          "name": "chentony",
          "value": 10.59
        },
        {
          "name": "qiaolb",
          "value": 17.39
        },
        {
          "name": "ascoders",
          "value": 11.83
        },
        {
          "name": "bang88",
          "value": 78.77000000000001
        },
        {
          "name": "mention-bot",
          "value": 142.14000000000001
        },
        {
          "name": "TheWaWaR",
          "value": 10.030000000000001
        },
        {
          "name": "XUGAOBO",
          "value": 33.84
        },
        {
          "name": "dyf2015",
          "value": 32.050000000000004
        },
        {
          "name": "zhaozhiming",
          "value": 11.650000000000002
        },
        {
          "name": "Carrotzpc",
          "value": 13.760000000000002
        },
        {
          "name": "superRaytin",
          "value": 39.04
        },
        {
          "name": "jaredleechn",
          "value": 32.09
        },
        {
          "name": "luolonghao",
          "value": 11.450000000000001
        },
        {
          "name": "codering",
          "value": 32.400000000000006
        },
        {
          "name": "jzlxiaohei",
          "value": 13.500000000000002
        },
        {
          "name": "plandem",
          "value": 59.78
        },
        {
          "name": "Aggie123",
          "value": 14.56
        },
        {
          "name": "nikogu",
          "value": 71.68
        },
        {
          "name": "ranzhu123",
          "value": 10.930000000000001
        },
        {
          "name": "waywardmonkeys",
          "value": 41.49
        },
        {
          "name": "yesmeck",
          "value": 442.58000000000015
        },
        {
          "name": "fengmk2",
          "value": 13.82
        },
        {
          "name": "blade254353074",
          "value": 15.43
        },
        {
          "name": "kvetoslavnovak",
          "value": 41.199999999999996
        },
        {
          "name": "kairi1227",
          "value": 19.43
        },
        {
          "name": "wangdao",
          "value": 12.17
        },
        {
          "name": "liqi07",
          "value": 10.64
        },
        {
          "name": "flicker85",
          "value": 11.48
        },
        {
          "name": "WhatAKitty",
          "value": 13.290000000000001
        },
        {
          "name": "cagen",
          "value": 10.48
        },
        {
          "name": "abbish",
          "value": 19.060000000000002
        },
        {
          "name": "ddcat1115",
          "value": 152.87
        },
        {
          "name": "aw6658913",
          "value": 65.86
        },
        {
          "name": "manV",
          "value": 10.08
        },
        {
          "name": "whx76",
          "value": 17.3
        },
        {
          "name": "forthedamn",
          "value": 12.47
        },
        {
          "name": "EagleWolf",
          "value": 10.690000000000001
        },
        {
          "name": "dreamcatcher081210",
          "value": 19.419999999999998
        },
        {
          "name": "juneryo",
          "value": 10.46
        },
        {
          "name": "wuhaih",
          "value": 26.759999999999998
        },
        {
          "name": "kagawagao",
          "value": 20.37
        },
        {
          "name": "pixystone",
          "value": 15.87
        },
        {
          "name": "ystarlongzi",
          "value": 42.050000000000004
        },
        {
          "name": "laolu87",
          "value": 10.13
        },
        {
          "name": "zation",
          "value": 13.59
        },
        {
          "name": "xueqingxiao",
          "value": 32.879999999999995
        },
        {
          "name": "GrayChoi",
          "value": 19.61
        },
        {
          "name": "leejaen",
          "value": 10.24
        },
        {
          "name": "xutou12",
          "value": 22.67
        },
        {
          "name": "wufeng87",
          "value": 34.67
        },
        {
          "name": "lixiaoyang1992",
          "value": 17.35
        },
        {
          "name": "yeliex",
          "value": 11.45
        },
        {
          "name": "visvadw",
          "value": 49.63
        },
        {
          "name": "oeddyo",
          "value": 14.21
        },
        {
          "name": "infeng",
          "value": 67.19
        },
        {
          "name": "xieyihao",
          "value": 13.23
        },
        {
          "name": "MinJieLiu",
          "value": 15.88
        },
        {
          "name": "zhangchao828",
          "value": 15.200000000000001
        },
        {
          "name": "RifeWang",
          "value": 11.23
        },
        {
          "name": "zhulichao",
          "value": 13.14
        },
        {
          "name": "Sean-Snow",
          "value": 13.760000000000002
        },
        {
          "name": "zhonggithub",
          "value": 14.170000000000002
        },
        {
          "name": "qiaoyixuan",
          "value": 13.93
        },
        {
          "name": "eddyzhang1986",
          "value": 16.14
        },
        {
          "name": "ouzhou",
          "value": 12
        },
        {
          "name": "jeffycai",
          "value": 12.84
        },
        {
          "name": "coveralls",
          "value": 55.47
        },
        {
          "name": "pierreneter",
          "value": 13.4
        },
        {
          "name": "Frezc",
          "value": 21.17
        },
        {
          "name": "qq645381995",
          "value": 69.28
        },
        {
          "name": "djyde",
          "value": 20.599999999999998
        },
        {
          "name": "paranoidjk",
          "value": 74.5
        },
        {
          "name": "BoizZ",
          "value": 10.21
        },
        {
          "name": "JesperWe",
          "value": 24.75
        },
        {
          "name": "pinggod",
          "value": 10.51
        },
        {
          "name": "jdz321",
          "value": 15.030000000000001
        },
        {
          "name": "L-x-C",
          "value": 16.43
        },
        {
          "name": "avalanche1",
          "value": 27.189999999999998
        },
        {
          "name": "megawac",
          "value": 60.710000000000015
        },
        {
          "name": "jch254",
          "value": 14.64
        },
        {
          "name": "kossel",
          "value": 22.57
        },
        {
          "name": "vorlov",
          "value": 11.14
        },
        {
          "name": "vthinkxie",
          "value": 25.370000000000005
        },
        {
          "name": "froston",
          "value": 11.520000000000001
        },
        {
          "name": "aaronplanell",
          "value": 23.629999999999995
        },
        {
          "name": "NE-SmallTown",
          "value": 41.31
        },
        {
          "name": "CallMeXYZ",
          "value": 23.660000000000004
        },
        {
          "name": "SynChron1zed",
          "value": 25.03
        },
        {
          "name": "acomito",
          "value": 12.48
        },
        {
          "name": "yociduo",
          "value": 20.160000000000004
        },
        {
          "name": "yangbin1994",
          "value": 17.23
        },
        {
          "name": "codecov[bot]",
          "value": 787.9400000000002
        },
        {
          "name": "ant-design-bot",
          "value": 721.6800000000001
        },
        {
          "name": "mitchelldemler",
          "value": 20.43
        },
        {
          "name": "forever4313",
          "value": 14.68
        },
        {
          "name": "Kamahl19",
          "value": 22.75
        },
        {
          "name": "hansnow",
          "value": 20.520000000000003
        },
        {
          "name": "xyy94813",
          "value": 16.25
        },
        {
          "name": "henryzp",
          "value": 20.14
        },
        {
          "name": "otakustay",
          "value": 12.5
        },
        {
          "name": "kappa-gooner",
          "value": 11.57
        },
        {
          "name": "chj-damon",
          "value": 36.87
        },
        {
          "name": "junhwong",
          "value": 10.559999999999999
        },
        {
          "name": "handycode",
          "value": 10.72
        },
        {
          "name": "AhmedSayed77",
          "value": 15.24
        },
        {
          "name": "buxuku",
          "value": 16.93
        },
        {
          "name": "zachguo",
          "value": 23.83
        },
        {
          "name": "ybning",
          "value": 22.3
        },
        {
          "name": "clinyong",
          "value": 11.790000000000001
        },
        {
          "name": "abenhamdine",
          "value": 80.5
        },
        {
          "name": "newraina",
          "value": 15.72
        },
        {
          "name": "zheeeng",
          "value": 66.03
        },
        {
          "name": "xgqfrms-gildata",
          "value": 10.21
        },
        {
          "name": "damiangreen",
          "value": 13.530000000000001
        },
        {
          "name": "kwzm",
          "value": 10.05
        },
        {
          "name": "lewis617",
          "value": 13.860000000000001
        },
        {
          "name": "neekey",
          "value": 11.590000000000002
        },
        {
          "name": "nai6514531",
          "value": 11.97
        },
        {
          "name": "chenshuai2144",
          "value": 268.34999999999997
        },
        {
          "name": "eruca",
          "value": 12.31
        },
        {
          "name": "bryanberger",
          "value": 12.3
        },
        {
          "name": "twisger",
          "value": 10.77
        },
        {
          "name": "daskyrk",
          "value": 13.22
        },
        {
          "name": "vagusX",
          "value": 84.92
        },
        {
          "name": "lihqi",
          "value": 13.22
        },
        {
          "name": "khalibloo",
          "value": 20.560000000000002
        },
        {
          "name": "didmehh",
          "value": 10.040000000000001
        },
        {
          "name": "monkindey",
          "value": 10
        },
        {
          "name": "andriijas",
          "value": 18.22
        },
        {
          "name": "pdeva",
          "value": 19.240000000000002
        },
        {
          "name": "muzea",
          "value": 43.879999999999995
        },
        {
          "name": "apieceofbart",
          "value": 15.81
        },
        {
          "name": "chowsource",
          "value": 11.45
        },
        {
          "name": "Nokecy",
          "value": 16.22
        },
        {
          "name": "yutingzhao1991",
          "value": 92.91999999999997
        },
        {
          "name": "dengfuping",
          "value": 137.08999999999997
        },
        {
          "name": "kaoding",
          "value": 34.71
        },
        {
          "name": "mgrdevport",
          "value": 10.03
        },
        {
          "name": "Rohanhacker",
          "value": 22.380000000000003
        },
        {
          "name": "yanguoyu",
          "value": 11.9
        },
        {
          "name": "valleykid",
          "value": 10.010000000000002
        },
        {
          "name": "Airkro",
          "value": 10.63
        },
        {
          "name": "ChuckJonas",
          "value": 15.21
        },
        {
          "name": "Hughen",
          "value": 14.73
        },
        {
          "name": "mrgeorgegray",
          "value": 13.250000000000002
        },
        {
          "name": "urakozz",
          "value": 12.46
        },
        {
          "name": "hengkx",
          "value": 229.43
        },
        {
          "name": "steady-join",
          "value": 11.25
        },
        {
          "name": "eduludi",
          "value": 14.190000000000001
        },
        {
          "name": "xiaohuoni",
          "value": 27.910000000000004
        },
        {
          "name": "kanweiwei",
          "value": 22.970000000000002
        },
        {
          "name": "arvinxx",
          "value": 21.25
        },
        {
          "name": "Zero0331",
          "value": 14.1
        },
        {
          "name": "dependabot[bot]",
          "value": 249.64
        },
        {
          "name": "picodoth",
          "value": 64.19
        },
        {
          "name": "xgj1988",
          "value": 49.14
        },
        {
          "name": "zombieJ",
          "value": 1071.7199999999998
        },
        {
          "name": "whtsky",
          "value": 23.58
        },
        {
          "name": "hqzh",
          "value": 10.16
        },
        {
          "name": "pierre-H",
          "value": 10.39
        },
        {
          "name": "crudo",
          "value": 11.24
        },
        {
          "name": "mzohaibqc",
          "value": 11.430000000000001
        },
        {
          "name": "chillyistkult",
          "value": 11.61
        },
        {
          "name": "lock[bot]",
          "value": 76.01
        },
        {
          "name": "nuintun",
          "value": 62.989999999999995
        },
        {
          "name": "sosohime",
          "value": 19.54
        },
        {
          "name": "guxingke201",
          "value": 16.43
        },
        {
          "name": "tangjinzhou",
          "value": 44.19000000000001
        },
        {
          "name": "yoyo837",
          "value": 531.6599999999999
        },
        {
          "name": "ty-bt",
          "value": 29.72
        },
        {
          "name": "urrri",
          "value": 10.18
        },
        {
          "name": "spideeee",
          "value": 14.86
        },
        {
          "name": "aditya-padhi-kbl",
          "value": 15.000000000000002
        },
        {
          "name": "sbusch",
          "value": 20.49
        },
        {
          "name": "IssuehuntBot",
          "value": 58.8
        },
        {
          "name": "Yangzhedi",
          "value": 29.509999999999998
        },
        {
          "name": "chenxiaochun",
          "value": 12.860000000000001
        },
        {
          "name": "ilanus",
          "value": 34.54
        },
        {
          "name": "HeskeyBaozi",
          "value": 22.340000000000003
        },
        {
          "name": "HsuanXyz",
          "value": 14.1
        },
        {
          "name": "AshoneA",
          "value": 57.46000000000001
        },
        {
          "name": "JHanLu",
          "value": 10.48
        },
        {
          "name": "dancerphil",
          "value": 29.59
        },
        {
          "name": "Nouzbe",
          "value": 10.29
        },
        {
          "name": "wendzhue",
          "value": 31.839999999999996
        },
        {
          "name": "raptoria",
          "value": 10.469999999999999
        },
        {
          "name": "enjoy-wind",
          "value": 10.24
        },
        {
          "name": "ycjcl868",
          "value": 180.75000000000003
        },
        {
          "name": "gonenoob",
          "value": 24.259999999999998
        },
        {
          "name": "Fled8617",
          "value": 10.290000000000001
        },
        {
          "name": "jas0ncn",
          "value": 13.819999999999999
        },
        {
          "name": "rinick",
          "value": 44.69
        },
        {
          "name": "tolerance-go",
          "value": 10.72
        },
        {
          "name": "tylik1",
          "value": 10.1
        },
        {
          "name": "ztplz",
          "value": 139.00000000000003
        },
        {
          "name": "netlify[bot]",
          "value": 198.07999999999998
        },
        {
          "name": "zy410419243",
          "value": 60.730000000000004
        },
        {
          "name": "kimochg",
          "value": 14.770000000000001
        },
        {
          "name": "JLHwung",
          "value": 10.100000000000001
        },
        {
          "name": "fangkyi03",
          "value": 12.98
        },
        {
          "name": "Veveue",
          "value": 13.02
        },
        {
          "name": "accesslint[bot]",
          "value": 33.58
        },
        {
          "name": "morenyang",
          "value": 28.61
        },
        {
          "name": "wangxingkang",
          "value": 10.96
        },
        {
          "name": "Liu-Ya",
          "value": 22.68
        },
        {
          "name": "mraiguo",
          "value": 37.300000000000004
        },
        {
          "name": "shuozhang2016",
          "value": 10.36
        },
        {
          "name": "plainnany",
          "value": 10.290000000000001
        },
        {
          "name": "itellboy",
          "value": 10.71
        },
        {
          "name": "Veigar-C",
          "value": 10.280000000000001
        },
        {
          "name": "fwh1990",
          "value": 11.97
        },
        {
          "name": "babycannotsay",
          "value": 13.45
        },
        {
          "name": "wx1322",
          "value": 10.42
        },
        {
          "name": "Mathround",
          "value": 13.98
        },
        {
          "name": "jinliming2",
          "value": 23.24
        },
        {
          "name": "SamKirkland",
          "value": 14.580000000000002
        },
        {
          "name": "7Charlotte",
          "value": 10.01
        },
        {
          "name": "alexchen1875",
          "value": 11.340000000000002
        },
        {
          "name": "imhele",
          "value": 18.15
        },
        {
          "name": "DiamondYuan",
          "value": 43.83
        },
        {
          "name": "chiaweilee",
          "value": 19.209999999999997
        },
        {
          "name": "long-zhuge",
          "value": 15.23
        },
        {
          "name": "VoliBearCat",
          "value": 25.200000000000003
        },
        {
          "name": "Dolov",
          "value": 24.71
        },
        {
          "name": "willc001",
          "value": 11.780000000000001
        },
        {
          "name": "piscdong",
          "value": 12.42
        },
        {
          "name": "akaguny",
          "value": 10.16
        },
        {
          "name": "wangxingxing123654",
          "value": 12.46
        },
        {
          "name": "zheng1013757145",
          "value": 13.1
        },
        {
          "name": "jinxin0112",
          "value": 11.29
        },
        {
          "name": "MrHeer",
          "value": 80.83000000000001
        },
        {
          "name": "XianZhengquan",
          "value": 42.58
        },
        {
          "name": "buildsize[bot]",
          "value": 43.67000000000001
        },
        {
          "name": "Stephen2",
          "value": 11.030000000000001
        },
        {
          "name": "susiwen8",
          "value": 15.7
        },
        {
          "name": "request-info[bot]",
          "value": 11.55
        },
        {
          "name": "renovate[bot]",
          "value": 86.91
        },
        {
          "name": "alxkosov",
          "value": 17.85
        },
        {
          "name": "dependabot-preview[bot]",
          "value": 70.52
        },
        {
          "name": "rdmclin2",
          "value": 15.43
        },
        {
          "name": "devuxer",
          "value": 17.96
        },
        {
          "name": "lgtm-com[bot]",
          "value": 36.099999999999994
        },
        {
          "name": "k983551019",
          "value": 16.090000000000003
        },
        {
          "name": "todo[bot]",
          "value": 29.57
        },
        {
          "name": "zgoby",
          "value": 15.620000000000001
        },
        {
          "name": "Kermit-Xuan",
          "value": 74.5
        },
        {
          "name": "zouxiaomingya",
          "value": 14.92
        },
        {
          "name": "weekly-digest[bot]",
          "value": 12.110000000000001
        },
        {
          "name": "liangchaofei",
          "value": 10.11
        },
        {
          "name": "lhx6538665",
          "value": 10.1
        },
        {
          "name": "shaodahong",
          "value": 196.75000000000003
        },
        {
          "name": "binyellow",
          "value": 23.470000000000006
        },
        {
          "name": "Jiang-Xuan",
          "value": 11.48
        },
        {
          "name": "chenyizhongx",
          "value": 13.850000000000001
        },
        {
          "name": "jeessy2",
          "value": 16.39
        },
        {
          "name": "xrkffgg",
          "value": 415.08000000000004
        },
        {
          "name": "fa93hws",
          "value": 16.47
        },
        {
          "name": "xjh22222228",
          "value": 14.55
        },
        {
          "name": "ohhoney1",
          "value": 10.84
        },
        {
          "name": "orzyyyy",
          "value": 50.720000000000006
        },
        {
          "name": "Mohamed-Ghanem",
          "value": 12.72
        },
        {
          "name": "saeedrahimi",
          "value": 35.53
        },
        {
          "name": "keithort",
          "value": 17.94
        },
        {
          "name": "StallionV",
          "value": 18.25
        },
        {
          "name": "thisrabbit",
          "value": 11.010000000000002
        },
        {
          "name": "maxmeng93",
          "value": 15.120000000000001
        },
        {
          "name": "ShawDanon",
          "value": 16.72
        },
        {
          "name": "PeachScript",
          "value": 87.38
        },
        {
          "name": "eslint-disable-watcher[bot]",
          "value": 12.83
        },
        {
          "name": "ISBN9527",
          "value": 20.17
        },
        {
          "name": "theDoinb",
          "value": 10.9
        },
        {
          "name": "wangzongming",
          "value": 10.24
        },
        {
          "name": "hsuanxyz",
          "value": 12.24
        },
        {
          "name": "iicdii",
          "value": 10.94
        },
        {
          "name": "theprimone",
          "value": 11.93
        },
        {
          "name": "Rustin-Liu",
          "value": 49.209999999999994
        },
        {
          "name": "l745230",
          "value": 19.62
        },
        {
          "name": "JounQin",
          "value": 14.920000000000002
        },
        {
          "name": "huntdream",
          "value": 13.22
        },
        {
          "name": "codesandbox[bot]",
          "value": 227.3
        },
        {
          "name": "depfu[bot]",
          "value": 25.449999999999996
        },
        {
          "name": "liuchao233",
          "value": 10.93
        },
        {
          "name": "fengyun2",
          "value": 24.990000000000002
        },
        {
          "name": "mgcrea",
          "value": 10.88
        },
        {
          "name": "iamkun",
          "value": 15.530000000000001
        },
        {
          "name": "admiao",
          "value": 11.57
        },
        {
          "name": "lich-yoo",
          "value": 16.950000000000003
        },
        {
          "name": "abdih",
          "value": 10.81
        },
        {
          "name": "Catsbe",
          "value": 13.13
        },
        {
          "name": "GuichiZhao",
          "value": 10.97
        },
        {
          "name": "Rain120",
          "value": 10.56
        },
        {
          "name": "fred8617",
          "value": 12.13
        },
        {
          "name": "zhangzhi93",
          "value": 17.57
        },
        {
          "name": "piyushk96",
          "value": 19.36
        },
        {
          "name": "myeunhyuk",
          "value": 26.12
        },
        {
          "name": "crazyair",
          "value": 128.76999999999998
        },
        {
          "name": "krishangoelmt",
          "value": 12.29
        },
        {
          "name": "ionshaw",
          "value": 30.240000000000006
        },
        {
          "name": "specialorange",
          "value": 10.86
        },
        {
          "name": "Thanaen",
          "value": 10.11
        },
        {
          "name": "nicu-chiciuc",
          "value": 12.06
        },
        {
          "name": "crawler-django",
          "value": 14.31
        },
        {
          "name": "hugobarragon",
          "value": 11.48
        },
        {
          "name": "sdhr27",
          "value": 17.72
        },
        {
          "name": "kaysonwu",
          "value": 29.2
        },
        {
          "name": "jhoneybee",
          "value": 22.68
        },
        {
          "name": "mjfwebb",
          "value": 19.450000000000003
        },
        {
          "name": "phoema",
          "value": 22.259999999999998
        },
        {
          "name": "wendellhu95",
          "value": 19.86
        },
        {
          "name": "xiexingen",
          "value": 16.18
        },
        {
          "name": "israelKusayev",
          "value": 18.690000000000005
        },
        {
          "name": "geekrainy",
          "value": 10.48
        },
        {
          "name": "hihuangwei",
          "value": 24.8
        },
        {
          "name": "BugHiding",
          "value": 12.13
        },
        {
          "name": "fireairforce",
          "value": 54.36
        },
        {
          "name": "imhxc",
          "value": 13.260000000000002
        },
        {
          "name": "zpr1g",
          "value": 10.73
        },
        {
          "name": "linxianxi",
          "value": 55.48
        },
        {
          "name": "wwyx778",
          "value": 10.9
        },
        {
          "name": "huseyingoztok",
          "value": 14.72
        },
        {
          "name": "poyiding",
          "value": 23.859999999999996
        },
        {
          "name": "ElderJames",
          "value": 16.37
        },
        {
          "name": "zhangyu1818",
          "value": 14.860000000000001
        },
        {
          "name": "Yunfly",
          "value": 13.309999999999999
        },
        {
          "name": "AbhijeetGaware",
          "value": 11.43
        },
        {
          "name": "vVvlife",
          "value": 19.700000000000003
        },
        {
          "name": "07akioni",
          "value": 67.14
        },
        {
          "name": "jesse3mh9a",
          "value": 29.92
        },
        {
          "name": "XiaoJiuDYS",
          "value": 12.660000000000002
        },
        {
          "name": "cncolder",
          "value": 10.500000000000002
        },
        {
          "name": "hoho2017",
          "value": 18.150000000000002
        },
        {
          "name": "zhangchen915",
          "value": 20.29
        },
        {
          "name": "AlbertAZ1992",
          "value": 10.76
        },
        {
          "name": "github-actions[bot]",
          "value": 592.7499999999999
        },
        {
          "name": "Amour1688",
          "value": 12.590000000000002
        },
        {
          "name": "bihongbin3027",
          "value": 14.880000000000003
        },
        {
          "name": "HomyeeKing",
          "value": 18.04
        },
        {
          "name": "Bonnie8ni",
          "value": 10.3
        },
        {
          "name": "appleshell",
          "value": 16.65
        },
        {
          "name": "yingpengsha",
          "value": 11.65
        },
        {
          "name": "wangcch",
          "value": 24.37
        },
        {
          "name": "n0ruSh",
          "value": 18.950000000000003
        },
        {
          "name": "w602542704",
          "value": 11.67
        },
        {
          "name": "jueinin",
          "value": 12.18
        },
        {
          "name": "AlanCutFlim",
          "value": 38.220000000000006
        },
        {
          "name": "kerm1it",
          "value": 68.61999999999999
        },
        {
          "name": "eugene-matvejev",
          "value": 11.42
        },
        {
          "name": "heroboy",
          "value": 10.21
        },
        {
          "name": "hosseinmd",
          "value": 16.28
        },
        {
          "name": "semdy",
          "value": 10.23
        },
        {
          "name": "stygian-desolator",
          "value": 10.29
        },
        {
          "name": "mumiao",
          "value": 21.509999999999998
        },
        {
          "name": "Meowu",
          "value": 10.06
        },
        {
          "name": "huangkairan",
          "value": 24.669999999999995
        },
        {
          "name": "jameslahm",
          "value": 14.829999999999998
        },
        {
          "name": "DaoxingHuang",
          "value": 19.8
        },
        {
          "name": "jinchaofs",
          "value": 10.99
        },
        {
          "name": "tianyuan233",
          "value": 10.39
        },
        {
          "name": "YagamiNewLight",
          "value": 11.09
        },
        {
          "name": "acfasj",
          "value": 14.370000000000001
        },
        {
          "name": "zmbxy95",
          "value": 13.6
        },
        {
          "name": "izhouteng",
          "value": 10.55
        },
        {
          "name": "tempoeric",
          "value": 30.090000000000003
        },
        {
          "name": "ChocolateLoverRaj",
          "value": 12.48
        },
        {
          "name": "Map1en",
          "value": 18.770000000000003
        },
        {
          "name": "justanotheranonymoususer",
          "value": 11.36
        },
        {
          "name": "DerrickTel",
          "value": 15.220000000000002
        },
        {
          "name": "hmz22",
          "value": 14.39
        },
        {
          "name": "candy4290",
          "value": 11.48
        },
        {
          "name": "RiteshMakan",
          "value": 20.77
        },
        {
          "name": "boomler",
          "value": 15.780000000000001
        },
        {
          "name": "KAROTT7",
          "value": 24.66
        },
        {
          "name": "balboFK",
          "value": 18.22
        },
        {
          "name": "IonelLupu",
          "value": 11.92
        },
        {
          "name": "hydraZty",
          "value": 13.84
        },
        {
          "name": "cwjTerrace",
          "value": 11.82
        },
        {
          "name": "MadCcc",
          "value": 313.90999999999997
        },
        {
          "name": "LongHaoo",
          "value": 33.970000000000006
        },
        {
          "name": "ONLY-yours",
          "value": 12.129999999999999
        },
        {
          "name": "heiyu4585",
          "value": 112.07000000000001
        },
        {
          "name": "meseme",
          "value": 12.430000000000001
        },
        {
          "name": "TrickyPi",
          "value": 21.8
        },
        {
          "name": "kiner-tang",
          "value": 87.58000000000001
        },
        {
          "name": "zqran",
          "value": 20.759999999999998
        },
        {
          "name": "jrr997",
          "value": 15.65
        },
        {
          "name": "imoctopus",
          "value": 14.07
        },
        {
          "name": "miracles1919",
          "value": 25.509999999999998
        },
        {
          "name": "AntiMoron",
          "value": 10.75
        },
        {
          "name": "zpc7",
          "value": 12.52
        },
        {
          "name": "Dunqing",
          "value": 24.69
        },
        {
          "name": "mellis481",
          "value": 17.740000000000002
        },
        {
          "name": "yykoypj",
          "value": 24.6
        },
        {
          "name": "foryuki",
          "value": 41.54
        },
        {
          "name": "MuxinFeng",
          "value": 34.24
        },
        {
          "name": "li-jia-nan",
          "value": 173.92999999999998
        },
        {
          "name": "kungege",
          "value": 13.700000000000001
        },
        {
          "name": "alanhaledc",
          "value": 13.6
        },
        {
          "name": "Wxh16144",
          "value": 65.78
        },
        {
          "name": "RSS1102",
          "value": 12.879999999999999
        },
        {
          "name": "JarvisArt",
          "value": 46.56
        },
        {
          "name": "RexSkz",
          "value": 11.07
        },
        {
          "name": "edc-hui",
          "value": 14.14
        },
        {
          "name": "long76",
          "value": 12.370000000000001
        },
        {
          "name": "hms181231",
          "value": 15.05
        },
        {
          "name": "chunsch",
          "value": 11.34
        },
        {
          "name": "any1024",
          "value": 15.52
        },
        {
          "name": "azro352",
          "value": 14.389999999999999
        },
        {
          "name": "socket-security[bot]",
          "value": 12.7
        },
        {
          "name": "BoyYangzai",
          "value": 12.92
        },
        {
          "name": "Yuiai01",
          "value": 48.370000000000005
        },
        {
          "name": "xliez",
          "value": 11.42
        },
        {
          "name": "ds1371dani",
          "value": 11.979999999999999
        },
        {
          "name": "luo3house",
          "value": 11.01
        },
        {
          "name": "RedJue",
          "value": 14.48
        }
      ]
    }
  },
  components: {
    Chart,
  },
  mounted() {
  },
  methods: {
    async fetchData(path) {
      let activityResponse = await axios.get(path + '/activity_details.json');
      let activityData = await activityResponse.data;

      return this.processData(activityData);
    },
    processData(data) {
      const result = {};

      Object.values(data).forEach(arr => {
        arr.forEach(item => {
          const [name, value] = item;
          if (!result[name]) {
            result[name] = 0;
          }
          result[name] += value;
        });
      });

      const output = Object.entries(result)
        .filter(([, value]) => value >= 10)
        .map(([name, value]) => ({ name, value }));

      return output;
    }
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        this.cdata = await this.fetchData('https://oss.x-lab.info/open_digger/github/' + newVal);
      },
      deep: true
    }
  },
}
</script>

<style lang="scss" scoped></style>