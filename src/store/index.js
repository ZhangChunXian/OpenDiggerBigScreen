import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Repositories: [
      {
        value: "选项1",
        label: "AdguardTeam/AdguardFilters",
      },
      {
        value: "选项2",
        label: "angular/angular",
      },
      {
        value: "选项3",
        label: "airbytehq/airbyte",
      },
      {
        value: "选项4",
        label: "angular/components",
      },
      {
        value: "选项5",
        label: "alibaba/nacos",
      },
      {
        value: "选项6",
        label: "ansible/ansible",
      },
      {
        value: "选项7",
        label: "ankidroid/Anki-Android",
      },
      {
        value: "选项8",
        label: "apache/airflow",
      },
      {
        value: "选项9",
        label: "ant-design/ant-design",
      },
      {
        value: "选项10",
        label: "apache/apisix",
      },
      {
        value: "选项11",
        label: "apache/arrow",
      },
      {
        value: "选项12",
        label: "apache/beam",
      },
      {
        value: "选项13",
        label: "apache/dolphinscheduler",
      },
      {
        value: "选项14",
        label: "apache/flink",
      },
      {
        value: "选项15",
        label: "apache/doris",
      },
      {
        value: "选项16",
        label: "apache/iceberg",
      },
      {
        value: "选项17",
        label: "apache/hudi",
      },
      {
        value: "选项18",
        label: "apache/pulsar",
      },
      {
        value: "选项19",
        label: "apache/spark",
      },
      {
        value: "选项20",
        label: "apache/shardingsphere",
      },
      {
        value: "选项21",
        label: "apache/tvm",
      },
      {
        value: "选项22",
        label: "apache/superset",
      },
      {
        value: "选项23",
        label: "apple/swift",
      },
      {
        value: "选项24",
        label: "archway-network/testnets",
      },
      {
        value: "选项25",
        label: "appsmithorg/appsmith",
      },
      {
        value: "选项26",
        label: "ArduPilot/ardupilot",
      },
      {
        value: "选项27",
        label: "argoproj/argo-cd",
      },
      {
        value: "选项28",
        label: "AUTOMATIC1111/stable-diffusion-webui",
      },
      {
        value: "选项29",
        label: "Automattic/jetpack",
      },
      {
        value: "选项30",
        label: "aws/aws-cdk",
      },
      {
        value: "选项31",
        label: "aws-amplify/amplify-cli",
      },
      {
        value: "选项32",
        label: "Automattic/wp-calypso",
      },
      {
        value: "选项33",
        label: "azerothcore/azerothcore-wotlk",
      },
      {
        value: "选项34",
        label: "Azure/azure-rest-api-specs",
      },
      {
        value: "选项35",
        label: "Azure/azure-powershell",
      },
      {
        value: "选项36",
        label: "Azure/azure-cli",
      },
      {
        value: "选项37",
        label: "Azure/azure-sdk-for-java",
      },
      {
        value: "选项38",
        label: "backstage/backstage",
      },
      {
        value: "选项39",
        label: "bioconda/bioconda-recipes",
      },
      {
        value: "选项40",
        label: "Azure/azure-sdk-for-js",
      },
      {
        value: "选项41",
        label: "Azure/azure-sdk-for-net",
      },
      {
        value: "选项42",
        label: "Azure/azure-sdk-for-python",
      },
      {
        value: "选项43",
        label: "bitnami/charts",
      },
      {
        value: "选项44",
        label: "bevyengine/bevy",
      },
      {
        value: "选项45",
        label: "brave/brave-browser",
      },
      {
        value: "选项46",
        label: "brave/brave-core",
      },
      {
        value: "选项47",
        label: "ccxt/ccxt",
      },
      {
        value: "选项48",
        label: "bitcoin/bitcoin",
      },
      {
        value: "选项49",
        label: "ceph/ceph",
      },
      {
        value: "选项50",
        label: "Chia-Network/chia-blockchain",
      },
      {
        value: "选项51",
        label: "cloudflare/cloudflare-docs",
      },
      {
        value: "选项52",
        label: "CleverRaven/Cataclysm-DDA",
      },
      {
        value: "选项53",
        label: "cilium/cilium",
      },
      {
        value: "选项54",
        label: "conda-forge/staged-recipes",
      },
      {
        value: "选项55",
        label: "conan-io/conan-center-index",
      },
      {
        value: "选项56",
        label: "ClickHouse/ClickHouse",
      },
      {
        value: "选项57",
        label: "cms-sw/cmssw",
      },
      {
        value: "选项58",
        label: "cypress-io/cypress",
      },
      {
        value: "选项59",
        label: "darktable-org/darktable",
      },
      {
        value: "选项60",
        label: "containers/podman",
      },
      {
        value: "选项61",
        label: "cockroachdb/cockroach",
      },
      {
        value: "选项62",
        label: "dbeaver/dbeaver",
      },
      {
        value: "选项63",
        label: "coolsnowwolf/lede",
      },
      {
        value: "选项64",
        label: "demisto/content",
      },
      {
        value: "选项65",
        label: "DataDog/datadog-agent",
      },
      {
        value: "选项66",
        label: "DefinitelyTyped/DefinitelyTyped",
      },
      {
        value: "选项67",
        label: "denoland/deno",
      },
      {
        value: "选项68",
        label: "directus/directus",
      },
      {
        value: "选项69",
        label: "department-of-veterans-affairs/va.gov-team",
      },
      {
        value: "选项70",
        label: "desktop/desktop",
      },
      {
        value: "选项71",
        label: "docker/docs",
      },
      {
        value: "选项72",
        label: "electron/electron",
      },
      {
        value: "选项73",
        label: "dotnet/aspnetcore",
      },
      {
        value: "选项74",
        label: "dotnet/AspNetCore.Docs",
      },
      {
        value: "选项75",
        label: "dotnet/docs",
      },
      {
        value: "选项76",
        label: "dotnet/efcore",
      },
      {
        value: "选项77",
        label: "elastic/elasticsearch",
      },
      {
        value: "选项78",
        label: "dotnet/maui",
      },
      {
        value: "选项79",
        label: "elastic/kibana",
      },
      {
        value: "选项80",
        label: "dotnet/runtime",
      },
      {
        value: "选项81",
        label: "dotnet/roslyn",
      },
      {
        value: "选项82",
        label: "education/GitHubGraduation-2022",
      },
      {
        value: "选项83",
        label: "element-fi/elf-council-frontend",
      },
      {
        value: "选项84",
        label: "element-plus/element-plus",
      },
      {
        value: "选项85",
        label: "espressif/esp-idf",
      },
      {
        value: "选项86",
        label: "expo/expo",
      },
      {
        value: "选项87",
        label: "elementor/elementor",
      },
      {
        value: "选项88",
        label: "ethereum/ethereum-org-website",
      },
      {
        value: "选项89",
        label: "Expensify/App",
      },
      {
        value: "选项90",
        label: "envoyproxy/envoy",
      },
      {
        value: "选项91",
        label: "files-community/Files",
      },
      {
        value: "选项92",
        label: "firebase/firebase-android-sdk",
      },
      {
        value: "选项93",
        label: "facebook/react-native",
      },
      {
        value: "选项94",
        label: "facebook/react",
      },
      {
        value: "选项95",
        label: "firebase/flutterfire",
      },
      {
        value: "选项96",
        label: "filecoin-project/filecoin-plus-large-datasets",
      },
      {
        value: "选项97",
        label: "firstcontributions/first-contributions",
      },
      {
        value: "选项98",
        label: "flathub/flathub",
      },
      {
        value: "选项99",
        label: "flutter/engine",
      },
      {
        value: "选项100",
        label: "flutter/flutter",
      },
      {
        value: "选项101",
        label: "flybywiresim/a32nx",
      },
      {
        value: "选项102",
        label: "flutter/plugins",
      },
      {
        value: "选项103",
        label: "freddier/hyperblog",
      },
      {
        value: "选项104",
        label: "gentoo/gentoo",
      },
      {
        value: "选项105",
        label: "gatsbyjs/gatsby",
      },
      {
        value: "选项106",
        label: "gitpod-io/gitpod",
      },
      {
        value: "选项107",
        label: "github/codeql",
      },
      {
        value: "选项108",
        label: "go-gitea/gitea",
      },
      {
        value: "选项109",
        label: "getsentry/sentry",
      },
      {
        value: "选项110",
        label: "github/docs",
      },
      {
        value: "选项111",
        label: "GoogleChrome/developer.chrome.com",
      },
      {
        value: "选项112",
        label: "google-test/signclav2-probe-repo",
      },
      {
        value: "选项113",
        label: "godotengine/godot",
      },
      {
        value: "选项114",
        label: "golang/go",
      },
      {
        value: "选项115",
        label: "gravitational/teleport",
      },
      {
        value: "选项116",
        label: "grafana/grafana",
      },
      {
        value: "选项117",
        label: "google/it-cert-automation-practice",
      },
      {
        value: "选项118",
        label: "gradle/gradle",
      },
      {
        value: "选项119",
        label: "grpc/grpc",
      },
      {
        value: "选项120",
        label: "grafana/loki",
      },
      {
        value: "选项121",
        label: "home-assistant/core",
      },
      {
        value: "选项122",
        label: "home-assistant/home-assistant.io",
      },
      {
        value: "选项123",
        label: "home-assistant/frontend",
      },
      {
        value: "选项124",
        label: "helix-editor/helix",
      },
      {
        value: "选项125",
        label: "hashicorp/terraform-provider-aws",
      },
      {
        value: "选项126",
        label: "hashicorp/terraform-provider-azurerm",
      },
      {
        value: "选项127",
        label: "hashicorp/vault",
      },
      {
        value: "选项128",
        label: "helium/denylist",
      },
      {
        value: "选项129",
        label: "Homebrew/homebrew-core",
      },
      {
        value: "选项130",
        label: "Homebrew/homebrew-cask",
      },
      {
        value: "选项131",
        label: "huggingface/transformers",
      },
      {
        value: "选项132",
        label: "idsb3t1/KEEP-pipeline-tests-resources",
      },
      {
        value: "选项133",
        label: "IntelRealSense/librealsense",
      },
      {
        value: "选项134",
        label: "JacksonKearl/testissues",
      },
      {
        value: "选项135",
        label: "influxdata/telegraf",
      },
      {
        value: "选项136",
        label: "JetBrains/swot",
      },
      {
        value: "选项137",
        label: "istio/istio",
      },
      {
        value: "选项138",
        label: "jitsi/jitsi-meet",
      },
      {
        value: "选项139",
        label: "jlord/patchwork",
      },
      {
        value: "选项140",
        label: "joomla/joomla-cms",
      },
      {
        value: "选项141",
        label: "JuliaLang/julia",
      },
      {
        value: "选项142",
        label: "Koenkk/zigbee2mqtt",
      },
      {
        value: "选项143",
        label: "keycloak/keycloak",
      },
      {
        value: "选项144",
        label: "Kaiserreich/Kaiserreich-4",
      },
      {
        value: "选项145",
        label: "JuliaRegistries/General",
      },
      {
        value: "选项146",
        label: "leanprover-community/mathlib",
      },
      {
        value: "选项147",
        label: "kubernetes/kubernetes",
      },
      {
        value: "选项148",
        label: "kubernetes/minikube",
      },
      {
        value: "选项149",
        label: "kubernetes/test-infra",
      },
      {
        value: "选项150",
        label: "kubernetes/website",
      },
      {
        value: "选项151",
        label: "laravel/framework",
      },
      {
        value: "选项152",
        label: "Lightning-AI/lightning",
      },
      {
        value: "选项153",
        label: "lensapp/lens",
      },
      {
        value: "选项154",
        label: "kubevirt/kubevirt",
      },
      {
        value: "选项155",
        label: "llvm/llvm-project",
      },
      {
        value: "选项156",
        label: "LeetCode-Feedback/LeetCode-Feedback",
      },
      {
        value: "选项157",
        label: "MarlinFirmware/Marlin",
      },
      {
        value: "选项158",
        label: "logseq/logseq",
      },
      {
        value: "选项159",
        label: "magento/magento2",
      },
      {
        value: "选项160",
        label: "macports/macports-ports",
      },
      {
        value: "选项161",
        label: "mattermost/mattermost-webapp",
      },
      {
        value: "选项162",
        label: "matrix-org/synapse",
      },
      {
        value: "选项163",
        label: "matplotlib/matplotlib",
      },
      {
        value: "选项164",
        label: "mastodon/mastodon",
      },
      {
        value: "选项165",
        label: "MetaMask/eth-phishing-detect",
      },
      {
        value: "选项166",
        label: "MetaMask/metamask-extension",
      },
      {
        value: "选项167",
        label: "metersphere/metersphere",
      },
      {
        value: "选项168",
        label: "metabase/metabase",
      },
      {
        value: "选项169",
        label: "mdn/content",
      },
      {
        value: "选项170",
        label: "mdn/translated-content",
      },
      {
        value: "选项171",
        label: "mozilla-mobile/fenix",
      },
      {
        value: "选项172",
        label: "microsoftgraph/microsoft-graph-docs",
      },
      {
        value: "选项173",
        label: "microsoft/azuredatastudio",
      },
      {
        value: "选项174",
        label: "MicrosoftDocs/azure-docs",
      },
      {
        value: "选项175",
        label: "MicrosoftDocs/microsoft-365-docs",
      },
      {
        value: "选项176",
        label: "microsoft/fluentui",
      },
      {
        value: "选项177",
        label: "MicrosoftDocs/msteams-docs",
      },
      {
        value: "选项178",
        label: "microsoft/onnxruntime",
      },
      {
        value: "选项179",
        label: "microsoft/PowerToys",
      },
      {
        value: "选项180",
        label: "microsoft/playwright",
      },
      {
        value: "选项181",
        label: "microsoft/terminal",
      },
      {
        value: "选项182",
        label: "microsoft/TypeScript",
      },
      {
        value: "选项183",
        label: "microsoft/vcpkg",
      },
      {
        value: "选项184",
        label: "microsoft/vscode",
      },
      {
        value: "选项185",
        label: "microsoft/vscode-jupyter",
      },
      {
        value: "选项186",
        label: "microsoft/winget-pkgs",
      },
      {
        value: "选项187",
        label: "microsoft/WSL",
      },
      {
        value: "选项188",
        label: "mlflow/mlflow",
      },
      {
        value: "选项189",
        label: "mrdoob/three.js",
      },
      {
        value: "选项190",
        label: "newrelic/docs-website",
      },
      {
        value: "选项191",
        label: "neovim/neovim",
      },
      {
        value: "选项192",
        label: "nrfconnect/sdk-nrf",
      },
      {
        value: "选项193",
        label: "mui/material-ui",
      },
      {
        value: "选项194",
        label: "mui/mui-x",
      },
      {
        value: "选项195",
        label: "nrwl/nx",
      },
      {
        value: "选项196",
        label: "NixOS/nixpkgs",
      },
      {
        value: "选项197",
        label: "nextcloud/server",
      },
      {
        value: "选项198",
        label: "nextcloud/desktop",
      },
      {
        value: "选项199",
        label: "nodejs/node",
      },
      {
        value: "选项200",
        label: "nuxt/framework",
      },
      {
        value: "选项201",
        label: "obsproject/obs-studio",
      },
      {
        value: "选项202",
        label: "o3de/o3de",
      },
      {
        value: "选项203",
        label: "odoo/odoo",
      },
      {
        value: "选项204",
        label: "open-mmlab/mmdetection",
      },
      {
        value: "选项205",
        label: "open-telemetry/opentelemetry-collector-contrib",
      },
      {
        value: "选项206",
        label: "opencv/opencv",
      },
      {
        value: "选项207",
        label: "OpenAPITools/openapi-generator",
      },
      {
        value: "选项208",
        label: "openshift/openshift-docs",
      },
      {
        value: "选项209",
        label: "openshift/release",
      },
      {
        value: "选项210",
        label: "openjdk/jdk",
      },
      {
        value: "选项211",
        label: "openhab/openhab-addons",
      },
      {
        value: "选项212",
        label: "openjournals/joss-reviews",
      },
      {
        value: "选项213",
        label: "openssl/openssl",
      },
      {
        value: "选项214",
        label: "openvinotoolkit/openvino",
      },
      {
        value: "选项215",
        label: "PaddlePaddle/Paddle",
      },
      {
        value: "选项216",
        label: "openwrt/openwrt",
      },
      {
        value: "选项217",
        label: "oppia/oppia",
      },
      {
        value: "选项218",
        label: "php/php-src",
      },
      {
        value: "选项219",
        label: "PaddlePaddle/PaddleOCR",
      },
      {
        value: "选项220",
        label: "pingcap/tidb",
      },
      {
        value: "选项221",
        label: "pandas-dev/pandas",
      },
      {
        value: "选项222",
        label: "PixelExperience/android-issues",
      },
      {
        value: "选项223",
        label: "PowerShell/PowerShell",
      },
      {
        value: "选项224",
        label: "ppy/osu",
      },
      {
        value: "选项225",
        label: "PrestaShop/PrestaShop",
      },
      {
        value: "选项226",
        label: "postmanlabs/postman-app-support",
      },
      {
        value: "选项227",
        label: "prisma/prisma",
      },
      {
        value: "选项228",
        label: "project-chip/connectedhomeip",
      },
      {
        value: "选项229",
        label: "prusa3d/PrusaSlicer",
      },
      {
        value: "选项230",
        label: "pytorch/pytorch",
      },
      {
        value: "选项231",
        label: "python/cpython",
      },
      {
        value: "选项232",
        label: "qmk/qmk_firmware",
      },
      {
        value: "选项233",
        label: "qgis/QGIS",
      },
      {
        value: "选项234",
        label: "qbittorrent/qBittorrent",
      },
      {
        value: "选项235",
        label: "rails/rails",
      },
      {
        value: "选项236",
        label: "quarkusio/quarkus",
      },
      {
        value: "选项237",
        label: "rapid7/metasploit-framework",
      },
      {
        value: "选项238",
        label: "rancher/rancher",
      },
      {
        value: "选项239",
        label: "raycast/extensions",
      },
      {
        value: "选项240",
        label: "ray-project/ray",
      },
      {
        value: "选项241",
        label: "redis/redis",
      },
      {
        value: "选项242",
        label: "Regalis11/Barotrauma",
      },
      {
        value: "选项243",
        label: "remix-run/remix",
      },
      {
        value: "选项244",
        label: "RocketChat/Rocket.Chat",
      },
      {
        value: "选项245",
        label: "RPCS3/rpcs3",
      },
      {
        value: "选项246",
        label: "renovatebot/renovate",
      },
      {
        value: "选项247",
        label: "ruffle-rs/ruffle",
      },
      {
        value: "选项248",
        label: "scikit-learn/scikit-learn",
      },
      {
        value: "选项249",
        label: "rstudio/rstudio",
      },
      {
        value: "选项250",
        label: "rust-lang/rust",
      },
      {
        value: "选项251",
        label: "scipy/scipy",
      },
      {
        value: "选项252",
        label: "SerenityOS/serenity",
      },
      {
        value: "选项253",
        label: "section-engineering-education/engineering-education",
      },
      {
        value: "选项254",
        label: "ShadowMario/FNF-PsychEngine",
      },
      {
        value: "选项255",
        label: "Skyrat-SS13/Skyrat-tg",
      },
      {
        value: "选项256",
        label: "solana-labs/solana",
      },
      {
        value: "选项257",
        label: "solana-labs/token-list",
      },
      {
        value: "选项258",
        label: "spack/spack",
      },
      {
        value: "选项259",
        label: "sourcegraph/sourcegraph",
      },
      {
        value: "选项260",
        label: "spyder-ide/spyder",
      },
      {
        value: "选项261",
        label: "strapi/strapi",
      },
      {
        value: "选项262",
        label: "sveltejs/kit",
      },
      {
        value: "选项263",
        label: "symfony/symfony",
      },
      {
        value: "选项264",
        label: "storybookjs/storybook",
      },
      {
        value: "选项265",
        label: "tachiyomiorg/tachiyomi",
      },
      {
        value: "选项266",
        label: "tachiyomiorg/tachiyomi-extensions",
      },
      {
        value: "选项267",
        label: "systemd/systemd",
      },
      {
        value: "选项268",
        label: "tailscale/tailscale",
      },
      {
        value: "选项269",
        label: "taosdata/TDengine",
      },
      {
        value: "选项270",
        label: "termux/termux-packages",
      },
      {
        value: "选项271",
        label: "TeamNewPipe/NewPipe",
      },
      {
        value: "选项272",
        label: "tensorflow/tensorflow",
      },
      {
        value: "选项273",
        label: "TP-Lab/tokens",
      },
      {
        value: "选项274",
        label: "trustwallet/assets",
      },
      {
        value: "选项275",
        label: "taozhiyu/TyProAction",
      },
      {
        value: "选项276",
        label: "tgstation/tgstation",
      },
      {
        value: "选项277",
        label: "trinodb/trino",
      },
      {
        value: "选项278",
        label: "type-challenges/type-challenges",
      },
      {
        value: "选项279",
        label: "Ultimaker/Cura",
      },
      {
        value: "选项280",
        label: "uBlockOrigin/uAssets",
      },
      {
        value: "选项281",
        label: "ultralytics/yolov5",
      },
      {
        value: "选项282",
        label: "vectordotdev/vector",
      },
      {
        value: "选项283",
        label: "unifyai/ivy",
      },
      {
        value: "选项284",
        label: "vercel/next.js",
      },
      {
        value: "选项285",
        label: "wjz304/Redpill_CustomBuild",
      },
      {
        value: "选项286",
        label: "ValveSoftware/Dota2-Gameplay",
      },
      {
        value: "选项287",
        label: "webcompat/web-bugs",
      },
      {
        value: "选项288",
        label: "ValveSoftware/Proton",
      },
      {
        value: "选项289",
        label: "void-linux/void-packages",
      },
      {
        value: "选项290",
        label: "vitejs/vite",
      },
      {
        value: "选项291",
        label: "xamarin/xamarin-macios",
      },
      {
        value: "选项292",
        label: "woocommerce/woocommerce",
      },
      {
        value: "选项293",
        label: "xbmc/xbmc",
      },
      {
        value: "选项294",
        label: "zero-to-mastery/start-here-guidelines",
      },
      {
        value: "选项295",
        label: "zephyrproject-rtos/zephyr",
      },
      {
        value: "选项296",
        label: "WordPress/gutenberg",
      },
      {
        value: "选项297",
        label: "yuzu-emu/yuzu",
      },
      {
        value: "选项298",
        label: "yt-dlp/yt-dlp",
      },
      {
        value: "选项299",
        label: "ziglang/zig",
      },
      {
        value: "选项300",
        label: "zulip/zulip",
      },
    ],
    currentRepository: "ant-design/ant-design",
    languages: {
      xData: ["TypeScript", "JavaScript", "CSS", "其他语言"],
      seriesData: [
        {
          "name": "TypeScript",
          "value": 5211992
        },
        {
          "name": "JavaScript",
          "value": 26845
        },
        {
          "name": "CSS",
          "value": 3941
        },
        {
          "name": "其他语言",
          "value": 2604
        }
      ]
    },
    bottomLeftData: {}
  },
  mutations: {
    setCurrentRepository(state, repository) {
      state.currentRepository = repository
    },
    setBottomLeftData(state, data) {
      state.bottomLeftData = data
    },
    setLanguages(state, languages) {
      state.languages = languages;
    }
  },
  actions: {},
  modules: {}
})