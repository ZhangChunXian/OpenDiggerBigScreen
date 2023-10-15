<template>
  <div>
    <CenterRight2Chart :cdata="cdata" :fullscreen="fullscreen"/>
  </div>
</template>

<script>
import CenterRight2Chart from "./centerRight2Chart.vue";

export default {
  data() {
    return {
      cdata: {
        data: [
          {
            "category": "三一派",
            "name": "vercel/next.js",
            "value": 1639.58,
            "symbolSize": 1639.58
          },
          {
            "category": "正面派",
            "name": "ant-design/ant-design",
            "value": 978.07,
            "symbolSize": 978.07
          },
          {
            "category": "三一派",
            "name": "NervJS/taro",
            "value": 282.95,
            "symbolSize": 282.95
          },
          {
            "category": "正面派",
            "name": "umijs/umi",
            "value": 243.37,
            "symbolSize": 243.37
          },
          {
            "category": "三一派",
            "name": "ant-design/pro-components",
            "value": 224.64,
            "symbolSize": 224.64
          },
          {
            "category": "正面派",
            "name": "ant-design/ant-design-pro",
            "value": 98.61,
            "symbolSize": 98.61
          },
          {
            "category": "三一派",
            "name": "umijs/dumi",
            "value": 85.97,
            "symbolSize": 85.97
          },
          {
            "category": "正面派",
            "name": "alibaba/hooks",
            "value": 73.25,
            "symbolSize": 73.25
          },
          {
            "category": "三一派",
            "name": "Tencent/tdesign-react",
            "value": 72.38,
            "symbolSize": 72.38
          },
          {
            "category": "正面派",
            "name": "ant-design/ant-design-mobile",
            "value": 71.29,
            "symbolSize": 71.29
          },
          {
            "category": "三一派",
            "name": "FE-Struggler/doctor",
            "value": 26.68,
            "symbolSize": 26.68
          },
          {
            "category": "正面派",
            "name": "react-component/image",
            "value": 26.26,
            "symbolSize": 26.26
          },
          {
            "category": "三一派",
            "name": "react-component/picker",
            "value": 14.52,
            "symbolSize": 14.52
          },
          {
            "category": "正面派",
            "name": "ant-design/antd-style",
            "value": 13.11,
            "symbolSize": 13.11
          },
          {
            "category": "三一派",
            "name": "react-component/select",
            "value": 13.08,
            "symbolSize": 13.08
          },
          {
            "category": "正面派",
            "name": "ant-design/ant-design-icons",
            "value": 12.07,
            "symbolSize": 12.07
          },
          {
            "category": "三一派",
            "name": "react-component/tree",
            "value": 11.38,
            "symbolSize": 11.38
          },
          {
            "category": "正面派",
            "name": "react-component/color-picker",
            "value": 11.2,
            "symbolSize": 11.2
          },
          {
            "category": "三一派",
            "name": "react-component/slider",
            "value": 11.06,
            "symbolSize": 11.06
          },
          {
            "category": "正面派",
            "name": "react-component/table",
            "value": 10.73,
            "symbolSize": 10.73
          },
          {
            "category": "三一派",
            "name": "ant-design/create-next-app-antd",
            "value": 9.94,
            "symbolSize": 9.94
          },
          {
            "category": "正面派",
            "name": "react-component/trigger",
            "value": 8.71,
            "symbolSize": 8.71
          },
          {
            "category": "三一派",
            "name": "ant-design/cssinjs",
            "value": 7.76,
            "symbolSize": 7.76
          },
          {
            "category": "正面派",
            "name": "react-component/field-form",
            "value": 6.03,
            "symbolSize": 6.03
          },
          {
            "category": "三一派",
            "name": "react-component/cascader",
            "value": 5.74,
            "symbolSize": 5.74
          },
          {
            "category": "正面派",
            "name": "react-component/drawer",
            "value": 5.42,
            "symbolSize": 5.42
          },
          {
            "category": "三一派",
            "name": "react-component/util",
            "value": 5.25,
            "symbolSize": 5.25
          },
          {
            "category": "正面派",
            "name": "react-component/tabs",
            "value": 5.19,
            "symbolSize": 5.19
          },
          {
            "category": "三一派",
            "name": "react-component/menu",
            "value": 4.41,
            "symbolSize": 4.41
          },
          {
            "category": "正面派",
            "name": "react-component/virtual-list",
            "value": 2.77,
            "symbolSize": 2.77
          },
          {
            "category": "三一派",
            "name": "react-component/input-number",
            "value": 2.65,
            "symbolSize": 2.65
          }
        ],
        links: [
          {
            "source": "ant-design/ant-design",
            "target": "react-component/select",
            "value": 59.5
          },
          {
            "source": "react-component/picker",
            "target": "ant-design/ant-design",
            "value": 56.73
          },
          {
            "source": "umijs/umi",
            "target": "ant-design/ant-design",
            "value": 53.93
          },
          {
            "source": "react-component/image",
            "target": "ant-design/ant-design",
            "value": 52.72
          },
          {
            "source": "ant-design/pro-components",
            "target": "ant-design/ant-design",
            "value": 51.48
          },
          {
            "source": "ant-design/pro-components",
            "target": "umijs/umi",
            "value": 49.12
          },
          {
            "source": "umijs/dumi",
            "target": "ant-design/ant-design",
            "value": 44.37
          },
          {
            "source": "ant-design/pro-components",
            "target": "ant-design/ant-design-pro",
            "value": 36.38
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "ant-design/ant-design",
            "value": 33.36
          },
          {
            "source": "vercel/next.js",
            "target": "ant-design/ant-design",
            "value": 33.28
          },
          {
            "source": "react-component/cascader",
            "target": "ant-design/ant-design",
            "value": 31.4
          },
          {
            "source": "react-component/field-form",
            "target": "ant-design/ant-design",
            "value": 30.83
          },
          {
            "source": "ant-design/cssinjs",
            "target": "ant-design/ant-design",
            "value": 30.35
          },
          {
            "source": "umijs/dumi",
            "target": "umijs/umi",
            "value": 29.63
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "ant-design/ant-design",
            "value": 24.88
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/menu",
            "value": 24.48
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/tree",
            "value": 24.31
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/table",
            "value": 23.49
          },
          {
            "source": "react-component/picker",
            "target": "react-component/image",
            "value": 23.35
          },
          {
            "source": "react-component/color-picker",
            "target": "ant-design/ant-design",
            "value": 23.25
          },
          {
            "source": "react-component/picker",
            "target": "react-component/select",
            "value": 21.6
          },
          {
            "source": "react-component/drawer",
            "target": "ant-design/ant-design",
            "value": 21.12
          },
          {
            "source": "alibaba/hooks",
            "target": "ant-design/ant-design",
            "value": 20.32
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "ant-design/ant-design",
            "value": 20.09
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/slider",
            "value": 19.79
          },
          {
            "source": "react-component/trigger",
            "target": "ant-design/ant-design",
            "value": 19.33
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/select",
            "value": 19.07
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/ant-design",
            "value": 18.71
          },
          {
            "source": "umijs/umi",
            "target": "ant-design/ant-design-pro",
            "value": 18.41
          },
          {
            "source": "react-component/image",
            "target": "react-component/select",
            "value": 17.9
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/input-number",
            "value": 17.45
          },
          {
            "source": "react-component/virtual-list",
            "target": "ant-design/ant-design",
            "value": 16.8
          },
          {
            "source": "react-component/tree",
            "target": "react-component/select",
            "value": 16.63
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/tabs",
            "value": 16.06
          },
          {
            "source": "umijs/umi",
            "target": "react-component/select",
            "value": 15.81
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "ant-design/ant-design",
            "value": 15.74
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/select",
            "value": 15.27
          },
          {
            "source": "react-component/image",
            "target": "react-component/cascader",
            "value": 15.11
          },
          {
            "source": "react-component/picker",
            "target": "react-component/cascader",
            "value": 15.04
          },
          {
            "source": "NervJS/taro",
            "target": "ant-design/ant-design",
            "value": 14.72
          },
          {
            "source": "react-component/image",
            "target": "ant-design/ant-design-mobile",
            "value": 13.8
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "ant-design/ant-design",
            "value": 13.77
          },
          {
            "source": "react-component/picker",
            "target": "react-component/field-form",
            "value": 13.7
          },
          {
            "source": "react-component/picker",
            "target": "react-component/tree",
            "value": 13.55
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/select",
            "value": 13.41
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/select",
            "value": 13.27
          },
          {
            "source": "ant-design/ant-design-pro",
            "target": "ant-design/ant-design",
            "value": 13.16
          },
          {
            "source": "react-component/select",
            "target": "react-component/menu",
            "value": 13.07
          },
          {
            "source": "ant-design/ant-design",
            "target": "react-component/util",
            "value": 12.98
          },
          {
            "source": "react-component/picker",
            "target": "ant-design/ant-design-mobile",
            "value": 12.97
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/tree",
            "value": 12.46
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/picker",
            "value": 12.16
          },
          {
            "source": "react-component/image",
            "target": "react-component/tree",
            "value": 12.09
          },
          {
            "source": "react-component/picker",
            "target": "react-component/drawer",
            "value": 11.92
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/select",
            "value": 11.64
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/trigger",
            "value": 11.55
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/select",
            "value": 11.1
          },
          {
            "source": "react-component/image",
            "target": "react-component/trigger",
            "value": 10.93
          },
          {
            "source": "react-component/picker",
            "target": "umijs/umi",
            "value": 10.9
          },
          {
            "source": "ant-design/cssinjs",
            "target": "umijs/umi",
            "value": 10.74
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/select",
            "value": 10.73
          },
          {
            "source": "react-component/cascader",
            "target": "ant-design/ant-design-mobile",
            "value": 10.73
          },
          {
            "source": "umijs/dumi",
            "target": "ant-design/pro-components",
            "value": 10.72
          },
          {
            "source": "react-component/image",
            "target": "react-component/drawer",
            "value": 10.56
          },
          {
            "source": "react-component/slider",
            "target": "react-component/select",
            "value": 10.24
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/image",
            "value": 10.16
          },
          {
            "source": "react-component/image",
            "target": "react-component/tabs",
            "value": 10.1
          },
          {
            "source": "react-component/picker",
            "target": "react-component/tabs",
            "value": 10
          },
          {
            "source": "react-component/picker",
            "target": "react-component/virtual-list",
            "value": 9.91
          },
          {
            "source": "react-component/picker",
            "target": "react-component/trigger",
            "value": 9.87
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/image",
            "value": 9.66
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/tree",
            "value": 9.56
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/cascader",
            "value": 9.51
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/cascader",
            "value": 9.43
          },
          {
            "source": "react-component/picker",
            "target": "umijs/dumi",
            "value": 9.42
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/image",
            "value": 9.03
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/menu",
            "value": 8.92
          },
          {
            "source": "react-component/picker",
            "target": "react-component/menu",
            "value": 8.79
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/field-form",
            "value": 8.76
          },
          {
            "source": "react-component/picker",
            "target": "react-component/slider",
            "value": 8.75
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "vercel/next.js",
            "value": 8.72
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/select",
            "value": 8.52
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/input-number",
            "value": 8.48
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/util",
            "value": 8.47
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/tree",
            "value": 8.45
          },
          {
            "source": "react-component/select",
            "target": "react-component/tabs",
            "value": 8.44
          },
          {
            "source": "react-component/picker",
            "target": "react-component/input-number",
            "value": 8.4
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "umijs/umi",
            "value": 8.38
          },
          {
            "source": "react-component/picker",
            "target": "react-component/util",
            "value": 8.37
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "alibaba/hooks",
            "value": 8.35
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/cascader",
            "value": 8.34
          },
          {
            "source": "ant-design/antd-style",
            "target": "umijs/umi",
            "value": 8.32
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/input-number",
            "value": 8.3
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/tree",
            "value": 8.27
          },
          {
            "source": "umijs/umi",
            "target": "react-component/cascader",
            "value": 8.23
          },
          {
            "source": "umijs/dumi",
            "target": "ant-design/ant-design-icons",
            "value": 8.22
          },
          {
            "source": "react-component/image",
            "target": "react-component/color-picker",
            "value": 8.15
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/tree",
            "value": 8.1
          },
          {
            "source": "react-component/select",
            "target": "react-component/table",
            "value": 8.09
          },
          {
            "source": "ant-design/cssinjs",
            "target": "ant-design/ant-design-mobile",
            "value": 8.03
          },
          {
            "source": "react-component/picker",
            "target": "react-component/color-picker",
            "value": 8.03
          },
          {
            "source": "ant-design/pro-components",
            "target": "NervJS/taro",
            "value": 8.01
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/tabs",
            "value": 7.87
          },
          {
            "source": "react-component/tree",
            "target": "react-component/menu",
            "value": 7.81
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/tabs",
            "value": 7.64
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/input-number",
            "value": 7.64
          },
          {
            "source": "react-component/image",
            "target": "react-component/input-number",
            "value": 7.42
          },
          {
            "source": "react-component/image",
            "target": "react-component/menu",
            "value": 7.37
          },
          {
            "source": "umijs/umi",
            "target": "react-component/tree",
            "value": 7.36
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/menu",
            "value": 7.36
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/select",
            "value": 7.35
          },
          {
            "source": "react-component/tree",
            "target": "react-component/tabs",
            "value": 7.34
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/drawer",
            "value": 7.34
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/tree",
            "value": 7.31
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/drawer",
            "value": 7.3
          },
          {
            "source": "react-component/field-form",
            "target": "ant-design/ant-design-mobile",
            "value": 7.29
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/slider",
            "value": 7.16
          },
          {
            "source": "umijs/umi",
            "target": "vercel/next.js",
            "value": 7.08
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/cascader",
            "value": 7.08
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/select",
            "value": 7.06
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/trigger",
            "value": 7.03
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/select",
            "value": 7
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/cascader",
            "value": 6.96
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/select",
            "value": 6.92
          },
          {
            "source": "react-component/util",
            "target": "react-component/select",
            "value": 6.92
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/select",
            "value": 6.83
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/select",
            "value": 6.76
          },
          {
            "source": "react-component/image",
            "target": "umijs/umi",
            "value": 6.76
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/input-number",
            "value": 6.75
          },
          {
            "source": "react-component/image",
            "target": "react-component/util",
            "value": 6.74
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/tabs",
            "value": 6.73
          },
          {
            "source": "react-component/image",
            "target": "ant-design/ant-design-icons",
            "value": 6.7
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/tabs",
            "value": 6.68
          },
          {
            "source": "react-component/field-form",
            "target": "umijs/umi",
            "value": 6.68
          },
          {
            "source": "react-component/picker",
            "target": "react-component/table",
            "value": 6.57
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/tree",
            "value": 6.51
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/util",
            "value": 6.45
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/image",
            "value": 6.42
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/picker",
            "value": 6.42
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/trigger",
            "value": 6.4
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/trigger",
            "value": 6.39
          },
          {
            "source": "alibaba/hooks",
            "target": "vercel/next.js",
            "value": 6.35
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/menu",
            "value": 6.32
          },
          {
            "source": "NervJS/taro",
            "target": "umijs/umi",
            "value": 6.28
          },
          {
            "source": "alibaba/hooks",
            "target": "ant-design/ant-design-icons",
            "value": 6.25
          },
          {
            "source": "umijs/umi",
            "target": "react-component/slider",
            "value": 6.2
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/tabs",
            "value": 6.19
          },
          {
            "source": "react-component/picker",
            "target": "ant-design/ant-design-icons",
            "value": 6.17
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/menu",
            "value": 6.13
          },
          {
            "source": "react-component/image",
            "target": "react-component/table",
            "value": 6.07
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/util",
            "value": 6
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/drawer",
            "value": 5.93
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/tree",
            "value": 5.83
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "ant-design/ant-design-mobile",
            "value": 5.81
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/table",
            "value": 5.81
          },
          {
            "source": "react-component/drawer",
            "target": "ant-design/ant-design-mobile",
            "value": 5.8
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/field-form",
            "value": 5.8
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/table",
            "value": 5.8
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/tabs",
            "value": 5.79
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/util",
            "value": 5.78
          },
          {
            "source": "react-component/slider",
            "target": "react-component/tree",
            "value": 5.76
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/slider",
            "value": 5.74
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/select",
            "value": 5.7
          },
          {
            "source": "ant-design/cssinjs",
            "target": "ant-design/ant-design-icons",
            "value": 5.67
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/pro-components",
            "value": 5.6
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/input-number",
            "value": 5.6
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/cascader",
            "value": 5.57
          },
          {
            "source": "umijs/umi",
            "target": "ant-design/ant-design-mobile",
            "value": 5.52
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/trigger",
            "value": 5.49
          },
          {
            "source": "react-component/virtual-list",
            "target": "umijs/umi",
            "value": 5.46
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/tabs",
            "value": 5.44
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/util",
            "value": 5.42
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/table",
            "value": 5.36
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/image",
            "value": 5.36
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/virtual-list",
            "value": 5.31
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/menu",
            "value": 5.24
          },
          {
            "source": "ant-design/cssinjs",
            "target": "umijs/dumi",
            "value": 5.23
          },
          {
            "source": "alibaba/hooks",
            "target": "ant-design/ant-design-mobile",
            "value": 5.23
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/color-picker",
            "value": 5.21
          },
          {
            "source": "react-component/util",
            "target": "react-component/tabs",
            "value": 5.21
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/cascader",
            "value": 5.2
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/tree",
            "value": 5.19
          },
          {
            "source": "ant-design/cssinjs",
            "target": "vercel/next.js",
            "value": 5.09
          },
          {
            "source": "react-component/cascader",
            "target": "react-component/color-picker",
            "value": 5.02
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/slider",
            "value": 5
          },
          {
            "source": "umijs/umi",
            "target": "react-component/input-number",
            "value": 4.97
          },
          {
            "source": "umijs/dumi",
            "target": "ant-design/ant-design-mobile",
            "value": 4.95
          },
          {
            "source": "react-component/menu",
            "target": "react-component/table",
            "value": 4.94
          },
          {
            "source": "react-component/image",
            "target": "react-component/slider",
            "value": 4.92
          },
          {
            "source": "react-component/tree",
            "target": "react-component/util",
            "value": 4.9
          },
          {
            "source": "umijs/umi",
            "target": "react-component/drawer",
            "value": 4.87
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/menu",
            "value": 4.78
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/color-picker",
            "value": 4.76
          },
          {
            "source": "ant-design/pro-components",
            "target": "ant-design/ant-design-mobile",
            "value": 4.73
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/field-form",
            "value": 4.7
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/image",
            "value": 4.67
          },
          {
            "source": "umijs/umi",
            "target": "react-component/util",
            "value": 4.65
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/tree",
            "value": 4.62
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/table",
            "value": 4.6
          },
          {
            "source": "react-component/picker",
            "target": "ant-design/pro-components",
            "value": 4.56
          },
          {
            "source": "react-component/picker",
            "target": "vercel/next.js",
            "value": 4.48
          },
          {
            "source": "react-component/virtual-list",
            "target": "ant-design/ant-design-mobile",
            "value": 4.38
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/input-number",
            "value": 4.34
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/slider",
            "value": 4.33
          },
          {
            "source": "alibaba/hooks",
            "target": "ant-design/pro-components",
            "value": 4.33
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/trigger",
            "value": 4.3
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/slider",
            "value": 4.3
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/slider",
            "value": 4.29
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/slider",
            "value": 4.22
          },
          {
            "source": "umijs/dumi",
            "target": "alibaba/hooks",
            "value": 4.2
          },
          {
            "source": "react-component/slider",
            "target": "react-component/table",
            "value": 4.19
          },
          {
            "source": "react-component/field-form",
            "target": "vercel/next.js",
            "value": 4.19
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "vercel/next.js",
            "value": 4.15
          },
          {
            "source": "react-component/tree",
            "target": "react-component/table",
            "value": 4.13
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/drawer",
            "value": 4.13
          },
          {
            "source": "umijs/umi",
            "target": "react-component/trigger",
            "value": 4.11
          },
          {
            "source": "ant-design/cssinjs",
            "target": "react-component/slider",
            "value": 4.05
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/input-number",
            "value": 4.05
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/tabs",
            "value": 4.04
          },
          {
            "source": "umijs/dumi",
            "target": "NervJS/taro",
            "value": 3.98
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/tabs",
            "value": 3.98
          },
          {
            "source": "react-component/slider",
            "target": "react-component/menu",
            "value": 3.96
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/tree",
            "value": 3.94
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/tree",
            "value": 3.91
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/util",
            "value": 3.88
          },
          {
            "source": "umijs/umi",
            "target": "react-component/tabs",
            "value": 3.87
          },
          {
            "source": "react-component/virtual-list",
            "target": "ant-design/ant-design-icons",
            "value": 3.86
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/field-form",
            "value": 3.85
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/menu",
            "value": 3.84
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/select",
            "value": 3.83
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "umijs/dumi",
            "value": 3.83
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/tree",
            "value": 3.79
          },
          {
            "source": "ant-design/antd-style",
            "target": "umijs/dumi",
            "value": 3.76
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/input-number",
            "value": 3.74
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/input-number",
            "value": 3.73
          },
          {
            "source": "umijs/umi",
            "target": "react-component/table",
            "value": 3.72
          },
          {
            "source": "ant-design/pro-components",
            "target": "ant-design/ant-design-icons",
            "value": 3.72
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/cssinjs",
            "value": 3.71
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/drawer",
            "value": 3.7
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/ant-design-pro",
            "value": 3.65
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/tree",
            "value": 3.65
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/color-picker",
            "value": 3.64
          },
          {
            "source": "react-component/drawer",
            "target": "vercel/next.js",
            "value": 3.58
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/tabs",
            "value": 3.51
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/trigger",
            "value": 3.51
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/table",
            "value": 3.5
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/slider",
            "value": 3.46
          },
          {
            "source": "react-component/drawer",
            "target": "react-component/util",
            "value": 3.45
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "ant-design/cssinjs",
            "value": 3.45
          },
          {
            "source": "react-component/tabs",
            "target": "react-component/table",
            "value": 3.44
          },
          {
            "source": "react-component/image",
            "target": "vercel/next.js",
            "value": 3.43
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/table",
            "value": 3.4
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/cascader",
            "value": 3.4
          },
          {
            "source": "umijs/dumi",
            "target": "ant-design/ant-design-pro",
            "value": 3.35
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/table",
            "value": 3.34
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/table",
            "value": 3.34
          },
          {
            "source": "react-component/virtual-list",
            "target": "vercel/next.js",
            "value": 3.22
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/select",
            "value": 3.21
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/table",
            "value": 3.2
          },
          {
            "source": "react-component/util",
            "target": "react-component/table",
            "value": 3.16
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/util",
            "value": 3.14
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/table",
            "value": 3.1
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/picker",
            "value": 3.08
          },
          {
            "source": "react-component/picker",
            "target": "NervJS/taro",
            "value": 3.04
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/table",
            "value": 3.04
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/menu",
            "value": 3.02
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/picker",
            "value": 3.01
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/cascader",
            "value": 2.99
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "umijs/umi",
            "value": 2.97
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/drawer",
            "value": 2.96
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/tree",
            "value": 2.95
          },
          {
            "source": "react-component/menu",
            "target": "react-component/tabs",
            "value": 2.95
          },
          {
            "source": "alibaba/hooks",
            "target": "umijs/umi",
            "value": 2.92
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "vercel/next.js",
            "value": 2.83
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "umijs/umi",
            "value": 2.8
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/tabs",
            "value": 2.77
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/virtual-list",
            "value": 2.76
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/cascader",
            "value": 2.76
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/menu",
            "value": 2.7
          },
          {
            "source": "vercel/next.js",
            "target": "ant-design/ant-design-mobile",
            "value": 2.7
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/input-number",
            "value": 2.69
          },
          {
            "source": "umijs/umi",
            "target": "react-component/menu",
            "value": 2.68
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/cascader",
            "value": 2.65
          },
          {
            "source": "umijs/umi",
            "target": "react-component/color-picker",
            "value": 2.64
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/menu",
            "value": 2.64
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/virtual-list",
            "value": 2.62
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/util",
            "value": 2.6
          },
          {
            "source": "react-component/field-form",
            "target": "ant-design/ant-design-icons",
            "value": 2.59
          },
          {
            "source": "alibaba/hooks",
            "target": "NervJS/taro",
            "value": 2.52
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/menu",
            "value": 2.51
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/slider",
            "value": 2.46
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/tabs",
            "value": 2.46
          },
          {
            "source": "react-component/input-number",
            "target": "react-component/table",
            "value": 2.45
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/input-number",
            "value": 2.43
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/field-form",
            "value": 2.42
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "umijs/umi",
            "value": 2.41
          },
          {
            "source": "alibaba/hooks",
            "target": "react-component/field-form",
            "value": 2.4
          },
          {
            "source": "NervJS/taro",
            "target": "react-component/color-picker",
            "value": 2.37
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/slider",
            "value": 2.35
          },
          {
            "source": "ant-design/cssinjs",
            "target": "ant-design/pro-components",
            "value": 2.32
          },
          {
            "source": "react-component/slider",
            "target": "react-component/util",
            "value": 2.29
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/menu",
            "value": 2.29
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/table",
            "value": 2.28
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/color-picker",
            "value": 2.23
          },
          {
            "source": "react-component/trigger",
            "target": "react-component/menu",
            "value": 2.22
          },
          {
            "source": "react-component/slider",
            "target": "react-component/tabs",
            "value": 2.16
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/menu",
            "value": 2.12
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/input-number",
            "value": 2.1
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/color-picker",
            "value": 2.1
          },
          {
            "source": "react-component/field-form",
            "target": "ant-design/pro-components",
            "value": 2.09
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "ant-design/ant-design-icons",
            "value": 2.05
          },
          {
            "source": "react-component/virtual-list",
            "target": "NervJS/taro",
            "value": 2.02
          },
          {
            "source": "react-component/virtual-list",
            "target": "react-component/menu",
            "value": 1.96
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/drawer",
            "value": 1.92
          },
          {
            "source": "alibaba/hooks",
            "target": "react-component/trigger",
            "value": 1.92
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/color-picker",
            "value": 1.9
          },
          {
            "source": "ant-design/cssinjs",
            "target": "Tencent/tdesign-react",
            "value": 1.85
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/drawer",
            "value": 1.85
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "react-component/select",
            "value": 1.85
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "react-component/virtual-list",
            "value": 1.85
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/trigger",
            "value": 1.84
          },
          {
            "source": "react-component/field-form",
            "target": "NervJS/taro",
            "value": 1.83
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/menu",
            "value": 1.81
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/image",
            "value": 1.77
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/trigger",
            "value": 1.75
          },
          {
            "source": "ant-design/ant-design-pro",
            "target": "react-component/select",
            "value": 1.72
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/util",
            "value": 1.72
          },
          {
            "source": "react-component/slider",
            "target": "react-component/input-number",
            "value": 1.7
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/drawer",
            "value": 1.66
          },
          {
            "source": "NervJS/taro",
            "target": "ant-design/ant-design-pro",
            "value": 1.65
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/tabs",
            "value": 1.64
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "umijs/dumi",
            "value": 1.62
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/image",
            "value": 1.6
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/cascader",
            "value": 1.59
          },
          {
            "source": "ant-design/ant-design-mobile",
            "target": "react-component/color-picker",
            "value": 1.58
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/tree",
            "value": 1.56
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/color-picker",
            "value": 1.56
          },
          {
            "source": "umijs/dumi",
            "target": "vercel/next.js",
            "value": 1.54
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/create-next-app-antd",
            "value": 1.53
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/slider",
            "value": 1.53
          },
          {
            "source": "NervJS/taro",
            "target": "vercel/next.js",
            "value": 1.52
          },
          {
            "source": "ant-design/cssinjs",
            "target": "alibaba/hooks",
            "value": 1.51
          },
          {
            "source": "react-component/virtual-list",
            "target": "alibaba/hooks",
            "value": 1.51
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/tree",
            "value": 1.51
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/color-picker",
            "value": 1.51
          },
          {
            "source": "alibaba/hooks",
            "target": "react-component/select",
            "value": 1.51
          },
          {
            "source": "react-component/field-form",
            "target": "react-component/color-picker",
            "value": 1.48
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/color-picker",
            "value": 1.48
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "react-component/color-picker",
            "value": 1.43
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/util",
            "value": 1.33
          },
          {
            "source": "react-component/image",
            "target": "NervJS/taro",
            "value": 1.26
          },
          {
            "source": "ant-design/antd-style",
            "target": "vercel/next.js",
            "value": 1.17
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/slider",
            "value": 1.17
          },
          {
            "source": "vercel/next.js",
            "target": "react-component/table",
            "value": 1.17
          },
          {
            "source": "ant-design/pro-components",
            "target": "vercel/next.js",
            "value": 1.17
          },
          {
            "source": "ant-design/antd-style",
            "target": "ant-design/ant-design-icons",
            "value": 1.14
          },
          {
            "source": "NervJS/taro",
            "target": "ant-design/ant-design-mobile",
            "value": 1.13
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/util",
            "value": 1.1
          },
          {
            "source": "ant-design/antd-style",
            "target": "react-component/slider",
            "value": 1.06
          },
          {
            "source": "react-component/color-picker",
            "target": "react-component/tabs",
            "value": 1.06
          },
          {
            "source": "ant-design/antd-style",
            "target": "NervJS/taro",
            "value": 1.04
          },
          {
            "source": "ant-design/ant-design-pro",
            "target": "react-component/table",
            "value": 1.01
          },
          {
            "source": "ant-design/ant-design-pro",
            "target": "react-component/util",
            "value": 1.01
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "ant-design/ant-design-mobile",
            "value": 0.95
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/trigger",
            "value": 0.93
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/util",
            "value": 0.92
          },
          {
            "source": "umijs/dumi",
            "target": "react-component/input-number",
            "value": 0.88
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/trigger",
            "value": 0.86
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/input-number",
            "value": 0.86
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/virtual-list",
            "value": 0.85
          },
          {
            "source": "FE-Struggler/doctor",
            "target": "react-component/menu",
            "value": 0.8
          },
          {
            "source": "Tencent/tdesign-react",
            "target": "react-component/table",
            "value": 0.78
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "ant-design/ant-design-icons",
            "value": 0.77
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/slider",
            "value": 0.74
          },
          {
            "source": "ant-design/create-next-app-antd",
            "target": "react-component/table",
            "value": 0.74
          },
          {
            "source": "ant-design/pro-components",
            "target": "react-component/slider",
            "value": 0.67
          },
          {
            "source": "alibaba/hooks",
            "target": "react-component/cascader",
            "value": 0.63
          },
          {
            "source": "ant-design/ant-design-icons",
            "target": "NervJS/taro",
            "value": 0.59
          },
          {
            "source": "alibaba/hooks",
            "target": "react-component/table",
            "value": 0.59
          }
        ],
      }
    }
  },
  components: {
    CenterRight2Chart,
  },
  mounted () {
  },
  methods: {
  },
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>