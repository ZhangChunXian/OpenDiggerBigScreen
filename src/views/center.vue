<template>
  <div id="center">
    <div class="up">
      <div class="bg-color-black item" v-for="item in titleItem" :key="item.title">
        <p class="colorWhite" style="font-size: 0.8rem">{{ item.title }}</p>
        <div>
          <dv-digital-flop class="dv-dig-flop ml-1 mt-2 pl-3" :config="item.number" />
        </div>
      </div>
    </div>
    <div class="down">
      <div class="ranking bg-color-black">
        <el-tooltip class="item" effect="dark" content="有关OpenRank, 请查看
https://sourl.cn/9xTTGW 数据来源: X-lab2017/open-digger" placement="top">
          <span style="font-size: 0.9rem; font-weight: bold;">OpenRank变化趋势</span>
        </el-tooltip>
        <Echart :options="options"  style="height: 100%;"/>
      </div>
<!--      <div class="percent">-->
<!--        <div class="water">-->
<!--          <dv-water-level-pond class="dv-wa-le-po" :config="water" />-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import Echart from '@/common/echart';
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  data() {
    return {
      projects: [
        { "name": "AdguardTeam/AdguardFilters", "value": 503.27, "top": 12 },
        { "name": "airbytehq/airbyte", "value": 516.51, "top": 11 },
        { "name": "alibaba/nacos", "value": 158.31, "top": 85 },
        { "name": "angular/angular", "value": 318.03, "top": 33 },
        { "name": "angular/components", "value": 154.86, "top": 86 },
        { "name": "ankidroid/Anki-Android", "value": 164.76, "top": 83 },
        { "name": "ansible/ansible", "value": 153.08, "top": 87 },
        { "name": "ant-design/ant-design", "value": 457.75, "top": 15 },
        { "name": "apache/airflow", "value": 466.09, "top": 14 },
        { "name": "apache/apisix", "value": 141.47, "top": 91 },
        { "name": "apache/arrow", "value": 260.04, "top": 48 },
        { "name": "apache/beam", "value": 200.25, "top": 68 },
        { "name": "apache/dolphinscheduler", "value": 132.81, "top": 93 },
        { "name": "apache/doris", "value": 276.98, "top": 43 },
        { "name": "apache/flink", "value": 162.25, "top": 84 },
        { "name": "apache/hudi", "value": 249.36, "top": 51 },
        { "name": "apache/iceberg", "value": 208.44, "top": 63 },
        { "name": "apache/pulsar", "value": 171.45, "top": 81 },
        { "name": "apache/shardingsphere", "value": 241.28, "top": 53 },
        { "name": "apache/spark", "value": 283.96, "top": 41 },
        { "name": "apache/superset", "value": 307.13, "top": 36 },
        { "name": "apache/tvm", "value": 169.57, "top": 82 },
        { "name": "apple/swift", "value": 272.29, "top": 45 },
        { "name": "appsmithorg/appsmith", "value": 274.34, "top": 44 },
        { "name": "archway-network/testnets", "value": 22.03, "top": 99 },
        { "name": "ArduPilot/ardupilot", "value": 200.75, "top": 67 },
        { "name": "argoproj/argo-cd", "value": 254.2, "top": 49 },
        { "name": "AUTOMATIC1111/stable-diffusion-webui", "value": 736.73, "top": 7 },
        { "name": "Automattic/jetpack", "value": 186.14, "top": 73 },
        { "name": "Automattic/wp-calypso", "value": 430.83, "top": 17 },
        { "name": "aws/aws-cdk", "value": 406.68, "top": 20 },
        { "name": "aws-amplify/amplify-cli", "value": 196.36, "top": 69 },
        { "name": "azerothcore/azerothcore-wotlk", "value": 173.01, "top": 81 },
        { "name": "Azure/azure-cli", "value": 335.08, "top": 30 },
        { "name": "Azure/azure-powershell", "value": 182.96, "top": 76 },
        { "name": "Azure/azure-rest-api-specs", "value": 349.13, "top": 26 },
        { "name": "Azure/azure-sdk-for-java", "value": 251.87, "top": 50 },
        { "name": "Azure/azure-sdk-for-js", "value": 148.32, "top": 88 },
        { "name": "Azure/azure-sdk-for-net", "value": 392.95, "top": 21 },
        { "name": "Azure/azure-sdk-for-python", "value": 298.87, "top": 38 },
        { "name": "backstage/backstage", "value": 319.16, "top": 32 },
        { "name": "bevyengine/bevy", "value": 224.19, "top": 58 },
        { "name": "bioconda/bioconda-recipes", "value": 193.52, "top": 71 },
        { "name": "bitcoin/bitcoin", "value": 204.18, "top": 65 },
        { "name": "bitnami/charts", "value": 175.59, "top": 79 },
        { "name": "brave/brave-browser", "value": 215.72, "top": 60 },
        { "name": "brave/brave-core", "value": 336.61, "top": 29 },
        { "name": "ccxt/ccxt", "value": 256.69, "top": 48 },
        { "name": "ceph/ceph", "value": 261.54, "top": 46 },
        { "name": "Chia-Network/chia-blockchain", "value": 158.08, "top": 85 },
        { "name": "cilium/cilium", "value": 262.34, "top": 46 },
        { "name": "CleverRaven/Cataclysm-DDA", "value": 367.54, "top": 24 },
        { "name": "ClickHouse/ClickHouse", "value": 532.52, "top": 10 },
        { "name": "cloudflare/cloudflare-docs", "value": 203.1, "top": 66 },
        { "name": "cms-sw/cmssw", "value": 206.77, "top": 64 },
        { "name": "cockroachdb/cockroach", "value": 297.63, "top": 38 },
        { "name": "conan-io/conan-center-index", "value": 337.11, "top": 28 },
        { "name": "conda-forge/staged-recipes", "value": 195.86, "top": 69 },
        { "name": "containers/podman", "value": 212.28, "top": 62 },
        { "name": "coolsnowwolf/lede", "value": 100.41, "top": 97 },
        { "name": "cypress-io/cypress", "value": 482.59, "top": 13 },
        { "name": "darktable-org/darktable", "value": 175.38, "top": 79 },
        { "name": "DataDog/datadog-agent", "value": 214.94, "top": 60 },
        { "name": "dbeaver/dbeaver", "value": 307.54, "top": 35 },
        { "name": "DefinitelyTyped/DefinitelyTyped", "value": 332.39, "top": 31 },
        { "name": "demisto/content", "value": 179.89, "top": 77 },
        { "name": "denoland/deno", "value": 226.04, "top": 57 },
        {
          "name": "department-of-veterans-affairs/va.gov-team",
          "value": 260.73,
          "top": 47
        },
        { "name": "desktop/desktop", "value": 178.32, "top": 78 },
        { "name": "directus/directus", "value": 173.76, "top": 80 },
        { "name": "docker/docs", "value": 207.68, "top": 64 },
        { "name": "dotnet/aspnetcore", "value": 423.47, "top": 18 },
        { "name": "dotnet/AspNetCore.Docs", "value": 151.4, "top": 88 },
        { "name": "dotnet/docs", "value": 197.66, "top": 69 },
        { "name": "dotnet/efcore", "value": 183.46, "top": 75 },
        { "name": "dotnet/maui", "value": 504.94, "top": 11 },
        { "name": "dotnet/roslyn", "value": 449.74, "top": 15 },
        { "name": "dotnet/runtime", "value": 1173.57, "top": 3 },
        { "name": "education/GitHubGraduation-2022", "value": 4.44, "top": 100 },
        { "name": "elastic/elasticsearch", "value": 383.38, "top": 22 },
        { "name": "elastic/kibana", "value": 825.23, "top": 5 },
        { "name": "electron/electron", "value": 230.83, "top": 56 },
        { "name": "element-fi/elf-council-frontend", "value": 308.25, "top": 35 },
        { "name": "element-plus/element-plus", "value": 229.08, "top": 56 },
        { "name": "elementor/elementor", "value": 600.48, "top": 9 },
        { "name": "envoyproxy/envoy", "value": 339.98, "top": 28 },
        { "name": "espressif/esp-idf", "value": 248.62, "top": 51 },
        { "name": "ethereum/ethereum-org-website", "value": 189.82, "top": 72 },
        { "name": "Expensify/App", "value": 409.36, "top": 19 },
        { "name": "expo/expo", "value": 580.6, "top": 9 },
        { "name": "facebook/react", "value": 203.52, "top": 65 },
        { "name": "facebook/react-native", "value": 432.47, "top": 17 },
        {
          "name": "filecoin-project/filecoin-plus-large-datasets",
          "value": 291.26,
          "top": 39
        },
        { "name": "files-community/Files", "value": 250.92, "top": 51 },
        { "name": "firebase/firebase-android-sdk", "value": 161.53, "top": 85 },
        { "name": "firebase/flutterfire", "value": 141.98, "top": 90 },
        {
          "name": "firstcontributions/first-contributions",
          "value": 790.77,
          "top": 6
        },
        { "name": "flathub/flathub", "value": 163.48, "top": 84 },
        { "name": "flutter/engine", "value": 442.42, "top": 16 },
        { "name": "flutter/flutter", "value": 1534.97, "top": 2 },
        { "name": "flutter/plugins", "value": 112.35, "top": 96 },
        { "name": "flybywiresim/a32nx", "value": 99.67, "top": 97 },
        { "name": "freddier/hyperblog", "value": 147.71, "top": 89 },
        { "name": "gatsbyjs/gatsby", "value": 99.26, "top": 98 },
        { "name": "gentoo/gentoo", "value": 287.38, "top": 40 },
        { "name": "getsentry/sentry", "value": 389.4, "top": 21 },
        { "name": "github/codeql", "value": 193.54, "top": 71 },
        { "name": "github/docs", "value": 189.05, "top": 72 },
        { "name": "gitpod-io/gitpod", "value": 239.86, "top": 53 },
        { "name": "go-gitea/gitea", "value": 325.24, "top": 31 },
        { "name": "godotengine/godot", "value": 1158.5, "top": 3 },
        { "name": "golang/go", "value": 437.67, "top": 16 },
        { "name": "google/it-cert-automation-practice", "value": 890.45, "top": 5 },
        { "name": "google-test/signclav2-probe-repo", "value": 100.97, "top": 97 },
        { "name": "GoogleChrome/developer.chrome.com", "value": 210.5, "top": 62 },
        { "name": "gradle/gradle", "value": 299.95, "top": 37 },
        { "name": "grafana/grafana", "value": 900.29, "top": 4 },
        { "name": "grafana/loki", "value": 214.75, "top": 60 },
        { "name": "gravitational/teleport", "value": 284.12, "top": 41 },
        { "name": "grpc/grpc", "value": 208.07, "top": 63 },
        { "name": "hashicorp/terraform-provider-aws", "value": 402.51, "top": 20 },
        { "name": "hashicorp/terraform-provider-azurerm", "value": 407.3, "top": 19 },
        { "name": "hashicorp/vault", "value": 253.4, "top": 49 },
        { "name": "helium/denylist", "value": 48.42, "top": 98 },
        { "name": "helix-editor/helix", "value": 231.01, "top": 55 },
        { "name": "home-assistant/core", "value": 2387.11, "top": 1 },
        { "name": "home-assistant/frontend", "value": 216.04, "top": 59 },
        { "name": "home-assistant/home-assistant.io", "value": 286.29, "top": 40 },
        { "name": "Homebrew/homebrew-cask", "value": 368.08, "top": 23 },
        { "name": "Homebrew/homebrew-core", "value": 617.96, "top": 8 },
        { "name": "huggingface/transformers", "value": 503.12, "top": 12 },
        {
          "name": "idsb3t1/KEEP-pipeline-tests-resources",
          "value": 253.27,
          "top": 49
        },
        { "name": "influxdata/telegraf", "value": 135.17, "top": 92 },
        { "name": "IntelRealSense/librealsense", "value": 174.57, "top": 80 },
        { "name": "istio/istio", "value": 288.34, "top": 40 },
        { "name": "JacksonKearl/testissues", "value": 1.28, "top": 100 },
        { "name": "JetBrains/swot", "value": 335.15, "top": 29 },
        { "name": "jitsi/jitsi-meet", "value": 114.29, "top": 95 },
        { "name": "jlord/patchwork", "value": 440.22, "top": 16 },
        { "name": "joomla/joomla-cms", "value": 242.8, "top": 52 },
        { "name": "JuliaLang/julia", "value": 194.26, "top": 70 },
        { "name": "JuliaRegistries/General", "value": 208.2, "top": 63 },
        { "name": "Kaiserreich/Kaiserreich-4", "top": 1 },
        { "name": "keycloak/keycloak", "value": 419.8, "top": 19 },
        { "name": "Koenkk/zigbee2mqtt", "value": 382.43, "top": 23 },
        { "name": "kubernetes/kubernetes", "value": 1016.81, "top": 4 },
        { "name": "kubernetes/minikube", "value": 153.8, "top": 86 },
        { "name": "kubernetes/test-infra", "value": 124.72, "top": 94 },
        { "name": "kubernetes/website", "value": 479.63, "top": 13 },
        { "name": "kubevirt/kubevirt", "value": 163.51, "top": 83 },
        { "name": "laravel/framework", "value": 218.89, "top": 59 },
        { "name": "leanprover-community/mathlib", "value": 101.73, "top": 96 },
        { "name": "LeetCode-Feedback/LeetCode-Feedback", "value": 473.56, "top": 14 },
        { "name": "lensapp/lens", "value": 141.09, "top": 92 },
        { "name": "Lightning-AI/lightning", "value": 246.18, "top": 52 },
        { "name": "llvm/llvm-project", "value": 338.95, "top": 28 },
        { "name": "logseq/logseq", "value": 228.25, "top": 56 },
        { "name": "macports/macports-ports", "value": 153.29, "top": 87 },
        { "name": "magento/magento2", "value": 286.05, "top": 41 },
        { "name": "MarlinFirmware/Marlin", "value": 170.75, "top": 82 },
        { "name": "mastodon/mastodon", "value": 260.1, "top": 47 },
        { "name": "matplotlib/matplotlib", "value": 169.69, "top": 82 },
        { "name": "matrix-org/synapse", "value": 141.2, "top": 91 },
        { "name": "mattermost/mattermost-webapp", "value": 117.57, "top": 95 },
        { "name": "mdn/content", "value": 536.61, "top": 10 },
        { "name": "mdn/translated-content", "value": 314.42, "top": 34 },
        { "name": "metabase/metabase", "value": 295.44, "top": 39 },
        { "name": "MetaMask/eth-phishing-detect", "value": 279.85, "top": 42 },
        { "name": "MetaMask/metamask-extension", "value": 259.86, "top": 48 },
        { "name": "metersphere/metersphere", "value": 236.87, "top": 53 },
        { "name": "microsoft/azuredatastudio", "value": 234.11, "top": 55 },
        { "name": "microsoft/fluentui", "value": 300.89, "top": 37 },
        { "name": "microsoft/onnxruntime", "value": 315.24, "top": 33 },
        { "name": "microsoft/playwright", "value": 528.94, "top": 11 },
        { "name": "microsoft/PowerToys", "value": 784.08, "top": 6 },
        { "name": "microsoft/terminal", "value": 221.61, "top": 58 },
        { "name": "microsoft/TypeScript", "value": 458.4, "top": 15 },
        { "name": "microsoft/vcpkg", "value": 460.99, "top": 14 },
        { "name": "microsoft/vscode", "value": 1954.14, "top": 1 },
        { "name": "microsoft/vscode-jupyter", "value": 164.84, "top": 83 },
        { "name": "microsoft/winget-pkgs", "value": 1054.29, "top": 3 },
        { "name": "microsoft/WSL", "value": 325.16, "top": 32 },
        { "name": "MicrosoftDocs/azure-docs", "value": 1259.5, "top": 2 },
        { "name": "MicrosoftDocs/microsoft-365-docs", "value": 236.38, "top": 54 },
        { "name": "MicrosoftDocs/msteams-docs", "value": 207.33, "top": 64 },
        { "name": "microsoftgraph/microsoft-graph-docs", "value": 326.83, "top": 31 },
        { "name": "mlflow/mlflow", "value": 163.18, "top": 84 },
        { "name": "mozilla-mobile/fenix", "value": 116.9, "top": 95 },
        { "name": "mrdoob/three.js", "value": 145.13, "top": 89 },
        { "name": "mui/material-ui", "value": 424.56, "top": 18 },
        { "name": "mui/mui-x", "value": 342.87, "top": 27 },
        { "name": "neovim/neovim", "value": 283.26, "top": 42 },
        { "name": "newrelic/docs-website", "value": 201.25, "top": 66 },
        { "name": "nextcloud/desktop", "value": 134.03, "top": 93 },
        { "name": "nextcloud/server", "value": 365.15, "top": 24 },
        { "name": "NixOS/nixpkgs", "value": 2080.5, "top": 1 },
        { "name": "nodejs/node", "value": 429.3, "top": 18 },
        { "name": "nrfconnect/sdk-nrf", "value": 236.29, "top": 54 },
        { "name": "nrwl/nx", "value": 432.99, "top": 17 },
        { "name": "nuxt/framework", "value": 19.68, "top": 99 },
        { "name": "o3de/o3de", "value": 132.43, "top": 93 },
        { "name": "obsproject/obs-studio", "value": 201.04, "top": 67 },
        { "name": "odoo/odoo", "value": 877.05, "top": 5 },
        { "name": "open-mmlab/mmdetection", "value": 144.41, "top": 90 },
        {
          "name": "open-telemetry/opentelemetry-collector-contrib",
          "value": 253.01,
          "top": 50
        },
        { "name": "OpenAPITools/openapi-generator", "value": 185.39, "top": 73 },
        { "name": "opencv/opencv", "value": 179.59, "top": 77 },
        { "name": "openhab/openhab-addons", "value": 209.36, "top": 62 },
        { "name": "openjdk/jdk", "value": 336.81, "top": 29 },
        { "name": "openjournals/joss-reviews", "value": 325.18, "top": 32 },
        { "name": "openshift/openshift-docs", "value": 495.24, "top": 12 },
        { "name": "openshift/release", "value": 313.77, "top": 34 },
        { "name": "openssl/openssl", "value": 251.17, "top": 50 },
        { "name": "openvinotoolkit/openvino", "value": 308.39, "top": 35 },
        { "name": "openwrt/openwrt", "value": 304.34, "top": 37 },
        { "name": "oppia/oppia", "value": 201.01, "top": 67 },
        { "name": "PaddlePaddle/Paddle", "value": 615.23, "top": 8 },
        { "name": "PaddlePaddle/PaddleOCR", "value": 198.58, "top": 68 },
        { "name": "pandas-dev/pandas", "value": 400.28, "top": 20 },
        { "name": "php/php-src", "value": 175.96, "top": 78 },
        { "name": "pingcap/tidb", "value": 227.63, "top": 57 },
        { "name": "PixelExperience/android-issues", "value": 183.33, "top": 75 },
        { "name": "postmanlabs/postman-app-support", "value": 185.25, "top": 74 },
        { "name": "PowerShell/PowerShell", "value": 193.32, "top": 71 },
        { "name": "ppy/osu", "value": 186.75, "top": 72 },
        { "name": "PrestaShop/PrestaShop", "value": 348.39, "top": 27 },
        { "name": "prisma/prisma", "value": 365.35, "top": 24 },
        { "name": "project-chip/connectedhomeip", "value": 268.11, "top": 45 },
        { "name": "prusa3d/PrusaSlicer", "value": 275.12, "top": 43 },
        { "name": "python/cpython", "value": 595.01, "top": 9 },
        { "name": "pytorch/pytorch", "value": 1328.6, "top": 2 },
        { "name": "qbittorrent/qBittorrent", "value": 184.27, "top": 74 },
        { "name": "qgis/QGIS", "value": 279.81, "top": 43 },
        { "name": "qmk/qmk_firmware", "value": 334.03, "top": 30 },
        { "name": "quarkusio/quarkus", "value": 348.96, "top": 26 },
        { "name": "rails/rails", "value": 201.65, "top": 66 },
        { "name": "rancher/rancher", "value": 197.86, "top": 68 },
        { "name": "rapid7/metasploit-framework", "value": 171.68, "top": 81 },
        { "name": "ray-project/ray", "value": 494.29, "top": 13 },
        { "name": "raycast/extensions", "value": 383.87, "top": 22 },
        { "name": "redis/redis", "value": 141.56, "top": 91 },
        { "name": "Regalis11/Barotrauma", "value": 204.24, "top": 65 },
        { "name": "remix-run/remix", "value": 155.28, "top": 86 },
        { "name": "renovatebot/renovate", "value": 234.12, "top": 54 },
        { "name": "RocketChat/Rocket.Chat", "value": 272.79, "top": 44 },
        { "name": "RPCS3/rpcs3", "value": 227.78, "top": 57 },
        { "name": "rstudio/rstudio", "value": 144.17, "top": 90 },
        { "name": "ruffle-rs/ruffle", "value": 261.33, "top": 47 },
        { "name": "rust-lang/rust", "value": 948.9, "top": 4 },
        { "name": "scikit-learn/scikit-learn", "value": 232.93, "top": 55 },
        { "name": "scipy/scipy", "value": 182.81, "top": 76 },
        {
          "name": "section-engineering-education/engineering-education",
          "value": 17.92,
          "top": 99
        },
        { "name": "SerenityOS/serenity", "value": 218.99, "top": 59 },
        { "name": "ShadowMario/FNF-PsychEngine", "value": 178.77, "top": 77 },
        { "name": "Skyrat-SS13/Skyrat-tg", "value": 153.16, "top": 87 },
        { "name": "solana-labs/solana", "value": 213.46, "top": 61 },
        { "name": "solana-labs/token-list", "value": 75.39, "top": 98 },
        { "name": "sourcegraph/sourcegraph", "value": 306.01, "top": 36 },
        { "name": "spack/spack", "value": 266.56, "top": 46 },
        { "name": "spyder-ide/spyder", "value": 175.83, "top": 79 },
        { "name": "storybookjs/storybook", "value": 353.82, "top": 25 },
        { "name": "strapi/strapi", "value": 317.85, "top": 33 },
        { "name": "sveltejs/kit", "value": 214.39, "top": 61 },
        { "name": "symfony/symfony", "value": 290.21, "top": 39 },
        { "name": "systemd/systemd", "value": 310.42, "top": 34 },
        { "name": "tachiyomiorg/tachiyomi", "value": 130.49, "top": 94 },
        { "name": "tachiyomiorg/tachiyomi-extensions", "value": 298.5, "top": 38 },
        { "name": "tailscale/tailscale", "value": 242.47, "top": 52 },
        { "name": "taosdata/TDengine", "value": 213.09, "top": 61 },
        { "name": "taozhiyu/TyProAction", "value": 346.52, "top": 27 },
        { "name": "TeamNewPipe/NewPipe", "value": 110.1, "top": 96 },
        { "name": "tensorflow/tensorflow", "value": 355.63, "top": 25 },
        { "name": "termux/termux-packages", "value": 194.21, "top": 70 },
        { "name": "tgstation/tgstation", "value": 396.59, "top": 21 },
        { "name": "TP-Lab/tokens", "value": 125.14, "top": 94 },
        { "name": "trinodb/trino", "value": 334.7, "top": 30 },
        { "name": "trustwallet/assets", "value": 135.39, "top": 92 },
        { "name": "type-challenges/type-challenges", "value": 185.09, "top": 74 },
        { "name": "uBlockOrigin/uAssets", "value": 271.36, "top": 45 },
        { "name": "Ultimaker/Cura", "value": 355.43, "top": 25 },
        { "name": "ultralytics/yolov5", "value": 146.89, "top": 89 },
        { "name": "unifyai/ivy", "value": 349.8, "top": 26 },
        { "name": "ValveSoftware/Dota2-Gameplay", "value": 659.97, "top": 7 },
        { "name": "ValveSoftware/Proton", "value": 195.22, "top": 70 },
        { "name": "vectordotdev/vector", "value": 176.69, "top": 78 },
        { "name": "vercel/next.js", "value": 621.89, "top": 8 },
        { "name": "vitejs/vite", "value": 225.12, "top": 58 },
        { "name": "void-linux/void-packages", "value": 283.85, "top": 42 },
        { "name": "webcompat/web-bugs", "value": 387.1, "top": 22 },
        { "name": "wjz304/Redpill_CustomBuild", "value": 770.09, "top": 6 },
        { "name": "woocommerce/woocommerce", "value": 306.18, "top": 36 },
        { "name": "WordPress/gutenberg", "value": 538.9, "top": 10 },
        { "name": "xamarin/xamarin-macios", "value": 185.28, "top": 73 },
        { "name": "xbmc/xbmc", "value": 181.34, "top": 76 },
        { "name": "yt-dlp/yt-dlp", "value": 375.85, "top": 23 },
        { "name": "yuzu-emu/yuzu", "value": 152.31, "top": 88 },
        { "name": "zephyrproject-rtos/zephyr", "value": 645.31, "top": 7 },
        {
          "name": "zero-to-mastery/start-here-guidelines",
          "value": 183.3,
          "top": 75
        },
        { "name": "ziglang/zig", "value": 175.23, "top": 80 },
        { "name": "zulip/zulip", "value": 272.73, "top": 44 }
      ],
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
          { name: 'home-assistant/core', value: 2387.11 },
          { name: 'Kaiserreich/Kaiserreich-4', value: undefined },
          { name: 'microsoft/vscode', value: 1954.14 },
          { name: 'NixOS/nixpkgs', value: 2080.5 },
          { name: 'flutter/flutter', value: 1534.97 },
          { name: 'MicrosoftDocs/azure-docs', value: 1259.5 },
          { name: 'pytorch/pytorch', value: 1328.6 },
          { name: 'dotnet/runtime', value: 1173.57 },
          { name: 'godotengine/godot', value: 1158.5 },
          { name: 'microsoft/winget-pkgs', value: 1054.29 },
          { name: 'grafana/grafana', value: 900.29 },
          { name: 'kubernetes/kubernetes', value: 1016.81 },
          { name: 'rust-lang/rust', value: 948.9 },
          { name: 'elastic/kibana', value: 825.23 },
          { name: 'google/it-cert-automation-practice', value: 890.45 },
          { name: 'odoo/odoo', value: 877.05 },
          { name: 'firstcontributions/first-contributions', value: 790.77 },
          { name: 'microsoft/PowerToys', value: 784.08 },
          { name: 'wjz304/Redpill_CustomBuild', value: 770.09 },
          { name: 'AUTOMATIC1111/stable-diffusion-webui', value: 736.73 }
        ],
        carousel: 'single',
        unit: 'openrank'
      },
      water: {
        data: [15],
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
      ],
      options: {
        backgroundColor: "#0e1325",

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }

          },
        },
        grid: {
          borderWidth: 0,
          top: 40,
          bottom: 20,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: '46%',
          top: '6%',
          textStyle: {
            color: '#90979c',
          },
          data: ['OpenRank值']
        },
        calculable: true,
        xAxis: [{
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: [
            "2015-05",
            "2015-06",
            "2015-07",
            "2015-08",
            "2015-09",
            "2015-10",
            "2015-11",
            "2015-12",
            "2016-01",
            "2016-02",
            "2016-03",
            "2016-04",
            "2016-05",
            "2016-06",
            "2016-07",
            "2016-08",
            "2016-09",
            "2016-10",
            "2016-11",
            "2016-12",
            "2017-01",
            "2017-02",
            "2017-03",
            "2017-04",
            "2017-05",
            "2017-06",
            "2017-07",
            "2017-08",
            "2017-09",
            "2017-10",
            "2017-11",
            "2017-12",
            "2018-01",
            "2018-02",
            "2018-03",
            "2018-04",
            "2018-05",
            "2018-06",
            "2018-07",
            "2018-08",
            "2018-09",
            "2018-10",
            "2018-11",
            "2018-12",
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05",
            "2020-06",
            "2020-07",
            "2020-08",
            "2020-09",
            "2020-10",
            "2020-11",
            "2020-12",
            "2021-01",
            "2021-02",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
            "2021-08",
            "2021-09",
            "2021-10",
            "2021-11",
            "2021-12",
            "2022-01",
            "2022-02",
            "2022-03",
            "2022-04",
            "2022-05",
            "2022-06",
            "2022-07",
            "2022-08",
            "2022-09",
            "2022-10",
            "2022-11",
            "2022-12",
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
            "2023-08",
            "2023-09"
          ],
        }],

        yAxis: [{
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            }
          },

        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 18,

          "start": 75,
          "end": 100,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: "#5B3AAE",
          },
          textStyle:{
            color:"rgba(204,187,225,0.5)",
          },
          fillerColor:"rgba(67,55,160,0.4)",
          borderColor: "rgba(204,187,225,0.5)",

        }, {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [
          {
            name: "OpenRank值",
            type: "line",
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              color: "#c257F6",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              data: [{
                type: 'max',
                name: '最大值',

              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            data: [
              0.73,
              4.79,
              16.46,
              35.29,
              49.28,
              48.49,
              57.03,
              68.93,
              80.07,
              75.68,
              94.84,
              110.97,
              140.27,
              149.72,
              162.3,
              165.38,
              171.41,
              179.84,
              190.38,
              207.08,
              203.08,
              201.98,
              216.96,
              201.83,
              200.14,
              203.77,
              191.21,
              199.71,
              189.58,
              175.64,
              160.94,
              188.68,
              187.02,
              162.12,
              181.63,
              191.16,
              199.46,
              190.41,
              203.64,
              208.6,
              226.31,
              217.62,
              215.26,
              481.28,
              362.92,
              299.22,
              310.88,
              316.37,
              294.04,
              269.72,
              306.22,
              301.54,
              270.6,
              256.68,
              239.71,
              252.02,
              285.98,
              268.89,
              338.84,
              386.79,
              384.98,
              383.53,
              356.5,
              324.43,
              306.83,
              303.21,
              318.44,
              303.42,
              287.58,
              267.87,
              262.07,
              241.47,
              229.36,
              229.4,
              224.84,
              205.17,
              211.17,
              191,
              167.63,
              186.97,
              183.55,
              174.04,
              199.63,
              216.72,
              210.79,
              212.01,
              213.67,
              221.97,
              223.93,
              223.61,
              277.09,
              294.88,
              275.87,
              274.61,
              274.15,
              267.53,
              293.08,
              274.53,
              272.84,
              285.98,
              288.53
            ]
          }, ]
      },
    }
  },
  components: {
      Echart,
  },
  computed: {
    ...mapState(['currentRepository']),
  },
  watch: {
    currentRepository: {
      handler: async function (newVal) {
        this.cdata = await this.fetchData('https://oss.x-lab.info/open_digger/github/' + newVal, newVal);
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
    async fetchData(path, newVal) {
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
        this.$set(this.titleItem[index], 'number', { number: [sumArray[index]], textAlign: 'left', content: '{nt}', style: { fontSize: 26 } });
      });


      let result = this.projects.find(function (repo) {
        return repo.name == newVal;
      })
      if (result) {
        var topValue = []
        topValue.push(result.top)
        this.water = {
          data: topValue,
          shape: 'roundRect',
          formatter: '{value}%',
          waveNum: 3
        }
      } else {
        console.log("找不到匹配的对象");
      }

      let openrankResponse = await axios.get(path + '/openrank.json');
      let openrankData = await openrankResponse.data;
      const datePattern = /^\d{4}-(0[1-9]|1[0-2])$/;
      let filteredDatas = {};
      for (const key in openrankData) {
        if (datePattern.test(key)) {
          filteredDatas[key] = openrankData[key];
        }
      }

      let openrankMonth = Object.keys(filteredDatas)
      let openrankValues = Object.values(filteredDatas)
      
      openrankMonth.pop();
      openrankValues.pop();
      this.options = {
        backgroundColor: "#0e1325",

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }

          },
        },
        grid: {
          borderWidth: 0,
          top: 40,
          bottom: 20,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: '46%',
          top: '6%',
          textStyle: {
            color: '#90979c',
          },
          data: ['OpenRank值']
        },
        calculable: true,
        xAxis: [{
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: openrankMonth,
        }],

        yAxis: [{
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(204,187,225,0.5)",
            }
          },

        }],
        dataZoom: [{
          show: true,
          height: 30,
          xAxisIndex: [0],
          bottom: 18,
          

          "start": 75,
          "end": 100,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle: {
            color: "#5B3AAE",
          },
          textStyle:{
            color:"rgba(204,187,225,0.5)",
          },
          fillerColor:"rgba(67,55,160,0.4)",
          borderColor: "rgba(204,187,225,0.5)",

        }, {
          type: "inside",
          show: true,
          height: 15,
          start: 1,
          end: 35,
          minSpan: 20,
        }],
        series: [
          {
            name: "OpenRank值",
            type: "line",
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
              color: "#c257F6",
            },
            markPoint: {
              label: {
                normal: {
                  textStyle: {
                    color: '#fff'
                  }
                }
              },
              data: [{
                type: 'max',
                name: '最大值',

              }, {
                type: 'min',
                name: '最小值'
              }]
            },
            data: openrankValues,
          }, ]
      };

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
      width: 100%;

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
        height: 250px;

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
          height: 250px;
        }
      }
    }
  }
}
</style>
