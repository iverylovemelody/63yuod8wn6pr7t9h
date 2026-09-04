const STORES = [
  {
    "region": "北區",
    "county": "台北",
    "name": "Funbox 三越南西",
    "url": "https://line.me/R/ti/p/@626iceit"
  },
  {
    "region": "北區",
    "county": "台北",
    "name": "Funbox 天母SOGO",
    "url": "https://line.me/R/ti/p/@377cbfue"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 比漾廣場",
    "url": "https://line.me/R/ti/p/@ufq5307a"
  },
  {
    "region": "北區",
    "county": "台北",
    "name": "Funbox 美麗華",
    "url": "https://line.me/R/ti/p/@660hextn"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 板橋遠東",
    "url": "https://line.me/R/ti/p/@083zoknr"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 中和環球",
    "url": "https://line.me/R/ti/p/@zgq9395a"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 板橋大遠百",
    "url": "https://line.me/R/ti/p/@585clqqg"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 汐科遠雄",
    "url": "https://line.me/R/ti/p/@mhb3876c"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 樹林秀泰",
    "url": "https://line.me/R/ti/p/@046txnme"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 淡水禮萊廣場",
    "url": "https://line.me/R/ti/p/@944creff"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 宏匯廣場",
    "url": "https://line.me/R/ti/p/@513vgbqo"
  },
  {
    "region": "北區",
    "county": "新北",
    "name": "Funbox 新店裕隆城",
    "url": "https://line.me/R/ti/p/@491uicsm"
  },
  {
    "region": "北區",
    "county": "宜蘭",
    "name": "Funbox 宜蘭新月",
    "url": "https://line.me/R/ti/p/@027iendl"
  },
  {
    "region": "北區",
    "county": "台北",
    "name": "Funbox 南港lalaport",
    "url": "https://line.me/R/ti/p/@924ngwfb"
  },
  {
    "region": "北區",
    "county": "新竹",
    "name": "Funbox 新竹遠雄",
    "url": "https://line.me/R/ti/p/@agl4214l"
  },
  {
    "region": "桃竹苗",
    "county": "桃園",
    "name": "Funbox 桃園站前",
    "url": "https://line.me/R/ti/p/@fcm1241y"
  },
  {
    "region": "桃竹苗",
    "county": "桃園",
    "name": "Funbox 桃園環球A19",
    "url": "https://line.me/R/ti/p/@403qwxdn"
  },
  {
    "region": "桃竹苗",
    "county": "新竹",
    "name": "Funbox 新竹遠東",
    "url": "https://line.me/R/ti/p/@822rfnmr"
  },
  {
    "region": "桃竹苗",
    "county": "桃園",
    "name": "Funbox 中壢SOGO",
    "url": "https://line.me/R/ti/p/@xcs3672w"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 台中中友",
    "url": "https://line.me/R/ti/p/@815dstuy"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 台中遠東",
    "url": "https://line.me/R/ti/p/@147vfxjr"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 廣三SOGO",
    "url": "https://line.me/R/ti/p/@526bsjmb"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 台中三越",
    "url": "https://line.me/R/ti/p/@833rhkmr"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 台中新時代",
    "url": "https://line.me/R/ti/p/@hdg3289a"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 漢神洲際",
    "url": "https://line.me/R/ti/p/@218xxrbx"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 文心秀泰",
    "url": "https://line.me/R/ti/p/@605dilqq"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 豐原太平洋",
    "url": "https://line.me/R/ti/p/@094mvrhb"
  },
  {
    "region": "中區",
    "county": "台中",
    "name": "Funbox 台中港三井",
    "url": "https://line.me/R/ti/p/@816xpruh"
  },
  {
    "region": "中區",
    "county": "雲林",
    "name": "Funbox 來玩聚斗六",
    "url": "https://line.me/R/ti/p/@rsp8657s"
  },
  {
    "region": "中區",
    "county": "彰化",
    "name": "Funbox 來玩聚彰化",
    "url": "https://line.me/R/ti/p/@766sgllj"
  },
  {
    "region": "中區",
    "county": "彰化",
    "name": "Funbox 來玩聚員林",
    "url": "https://line.me/R/ti/p/@958tzuco"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 高雄漢神",
    "url": "https://line.me/R/ti/p/@897upgfr"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 漢神巨蛋",
    "url": "https://line.me/R/ti/p/@ldh6278d"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 高雄左營",
    "url": "https://line.me/R/ti/p/@obz8096l"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 夢時代二館",
    "url": "https://line.me/R/ti/p/@ott3541o"
  },
  {
    "region": "南區",
    "county": "屏東",
    "name": "Funbox 屏東環球",
    "url": "https://line.me/R/ti/p/@xhi2668e"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 高雄大立",
    "url": "https://line.me/R/ti/p/@917hatdy"
  },
  {
    "region": "南區",
    "county": "高雄",
    "name": "Funbox 義享天地",
    "url": "https://line.me/R/ti/p/@777nkbeo"
  }
];

const DRAWS = [
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/safDqUe"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/wYrNdRC"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/T5Wn9bw"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SCIl52o"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8BKFd8T"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vneOzIi"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oD41qlW"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5WCU1Vh"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ueidV90"
  },
  {
    "date": "09/04",
    "store": "Funbox 三越南西",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/XJIS7rA"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/sFJRqbL"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/sVMalX9j"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qo0YNUu"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uReFQuK"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WjfQVWWP"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/6uMADK5"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5PW6o5y"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rgYFBku"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/z9mO3Wy"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/XK5mj0F"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZxPrRKL"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rYCfiRS"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/z17m9mM1"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/785PX2p"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tldmGpM"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/wSof0Vt"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/89pxHTa"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ryTwnfS"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/X0ssk1w"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/wWzOz0G"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/SX7w6tZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/ZAbTKi7"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/85UmwDEM"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/y1zKx5W"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/YEjtQAn"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/ojSXOr2"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/TUogZd8"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/zqKWBXd"
  },
  {
    "date": "09/04",
    "store": "Funbox 美麗華",
    "item": "BX-00 蒼龍神劍 3-60F V2（$350）",
    "url": "https://lin.ee/xO0pNXN"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/zfyVDku"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PLbLMXo"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qW7Oiqi"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/9sGjpih"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/nziJiOE"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/n4KT7gJ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/UNUtlZi"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tXdvUyb"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ogsBWHC7"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Tw4w7OtZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/O57EuiK"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TlCMsiu"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RnPWYrN"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/7JT3H0I"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/N8zhtwT"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/yxOXnmz"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ymToMDv"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pm0qB4X"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YtvvOG9"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/p6sOG89"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/QGvGCW5"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8SN35Rs"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/OeEFp2B"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YPG2HJk"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vYDc43J"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pyNpoPN"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/OVePkZs"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RcSDDix"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tFot4Guw"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pJjYgWw"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/txDNS4N"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/6MXlzET"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/6kgjSJZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/QlgZ79L"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ydwCkmY"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uEkeETF"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/Pka1ku2"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/uVpfV2j"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/XRRYfC9"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/z6TXHvM"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/U85OY6B"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/W4YWfXL"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/yfX1zfA"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/zAUGc8K"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/yMjKKC4"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/5wyZSJ5"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/pVFQ7jG"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/vSA7Zxu5"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/vuaxC68d"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/saH4yrT"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/TJZp8s4"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/6HZKxMr"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/8fWeyhW"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/si7qji9"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/UtwAzrjf"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/PLfF01V"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/nar6FMu"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/n5cDwZA"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/wzgWKRj"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/59VBJso"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/TkeJqInx"
  },
  {
    "date": "09/04",
    "store": "Funbox 樹林秀泰",
    "item": "BX-00 暴風天馬（$350）",
    "url": "https://lin.ee/VayWbgb"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/PGX5Uk9"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/TUTxeDL"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/nfZ9huC"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/oNFsjPf"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/9nllAXf"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/pP9d1Px"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/wd23sQ4"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/ykm8MFh"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/sus7G3a"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/QD9kqwf"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/ZImHXO1"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/yWF0nkm"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/oiAxd9G"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/YcPOIlw"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/p589taI"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/QSrsrke"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/xJjqiUa"
  },
  {
    "date": "09/04",
    "store": "Funbox 板橋遠東",
    "item": "BX-00 暴風天馬3-70RA（$350）",
    "url": "https://lin.ee/ZTOaK7Q"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/qEcNM9w"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/wmiuE0n"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/THnVN62k"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/vhFWT494"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/OizZgb2"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/WlCghWy"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/yCscH9nD"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/xI92MJV"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/s1gxucV"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/N6Iy9Or"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/rv8By2l"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/5t8EJHI"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/WgeCVL5"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/O4ie6qM"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/vmG73a5"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/OA3c7Mr"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/rFOFhMp"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/vWcxLus"
  },
  {
    "date": "09/04",
    "store": "Funbox 桃園站前",
    "item": "BX-26 獨角刺心（$295）",
    "url": "https://lin.ee/YeQUSWK"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠東",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PuaKA54"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠東",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ReA7kmv"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠東",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PuWtTsF"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠東",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uJJrE9X"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍 3-60F（$350）",
    "url": "https://lin.ee/P0vmXLA"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍 3-60F（$350）",
    "url": "https://lin.ee/yNi1yX5"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍 3-60F（$350）",
    "url": "https://lin.ee/5ZrY4s6R"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍 3-60F（$350）",
    "url": "https://lin.ee/pXZEoGWs"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/q9afulW"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uixtQ7J"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/W8dqSOf"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tlk2QNR"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/UMIOOkmT"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RmJTjQn"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZtrW6ke"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/VvzQGlp"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/n87rEJR"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/OUoa2Ev"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uxugz55"
  },
  {
    "date": "09/04",
    "store": "Funbox 新竹遠雄",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RVMevOZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oXP77Qm"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/W7q8ksN"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/t39px7A"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Z1oedsf"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Q2gUwSd"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8KBl0s8"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YAjVHF3"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Pk6JXRW"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ybawIZ1"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TQ5vTNk"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oIIWBGh"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/T45MJ8f"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5wXjFF9"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/yKL0pwG"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tVP1tAG"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/77EHwdT"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8C3KTYn"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ztU0NOd"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/7A2qdwJ"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/99LNJYx"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ypginpV"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tKcUgat"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中港三井",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WhqVa84"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RhOq9MT"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vwLhYfb"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/9ECer6h"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/91eNlQH"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/XybrZ2g"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/94by55q"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/7FEy4nT"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Te56iHk"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/nXDPrFf"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PqJKUQu"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/NOzqhRa"
  },
  {
    "date": "09/04",
    "store": "Funbox 豐原太平洋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/x5Mnd76"
  },
  {
    "date": "09/04",
    "store": "Funbox 豐原太平洋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/xcqK2MJ"
  },
  {
    "date": "09/04",
    "store": "Funbox 豐原太平洋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SDfhjGG"
  },
  {
    "date": "09/04",
    "store": "Funbox 豐原太平洋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YL4kdql"
  },
  {
    "date": "09/04",
    "store": "Funbox 豐原太平洋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/QmiHujG"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ngzFqq5"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vHTh2fr"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZTHaxuMA"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TdJJNdD"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RQW1WlZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/z6eMZzU"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WJGwiNg"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5J7epgw"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZVGzZqL"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rVw1u7T"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Oo3V5j1"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZpDUuZo"
  },
  {
    "date": "09/04",
    "store": "Funbox 廣三SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/u9Cf9zG"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/945EI9W"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YBUqfLK"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pNhZWfLz"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/S8vUnc0"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PaJzq7K"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ufz64rZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SP2pkLX"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/OUWCEv9"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qg29KTt"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/sawIsWZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uKyhKKQ"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vnyQJ78"
  },
  {
    "date": "09/04",
    "store": "Funbox 台中中友",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/T2OZYar"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/7XcJJo4"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SZOfAYf"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pQN4k1f"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/o09RTzy"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TCXZzJP"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/87IKYP9"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/nB9Vqqv"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YR2xt1Z"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YSQxBoR"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/VqWZhZ5"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rD7kipo"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZKX159K"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vuLmnJJ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/tIEVifl"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vJLGMpQ"
  },
  {
    "date": "09/04",
    "store": "Funbox 來玩聚斗六",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RRZW8v7"
  },
  {
    "date": "09/04",
    "store": "Funbox 來玩聚斗六",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ujJuXj0"
  },
  {
    "date": "09/04",
    "store": "Funbox 來玩聚斗六",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/N9ztcQs"
  },
  {
    "date": "09/04",
    "store": "Funbox 來玩聚斗六",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ny8t5uU"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/NoSbfkR"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/o3NsYxR"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pIJWrfq"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oM6CRPO"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TSZ5FQE"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/U2KWNuL"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8BJX2yK"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qqqDOUZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/u4fiNfk"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Sl3A2uA"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/YEGguuP"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5dtP2gm"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/V15nma7"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SQvSNiU"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Q3pRqMb"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/UHT7qrf"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Skh4K4R"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Sbbc7b3"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5MB46Qa"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SJISlmx"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/5GC8Xm0"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/XrYFXZU"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/p81NHiP"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rHnY56d"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/yuuhvBz"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/8HVSpxQ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/QajWDao"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/wH7tTAW"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/O5JzpAd"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/uKhH03c"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/zWD4896"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/RzAR0WX"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/SCjf8Pt"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/T5PanVd"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/yTHSS03"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ULfcxtt"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WAmUxCJ"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/n8lxSgq"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/9OdIzi6"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qBNBah4"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/z4Xr29Y"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/paNzbYe"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/somWdT3"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/O4VfVqx"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/ssEJkSe"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/RktIzwz"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/sNFUKbu"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/qFCWjG4"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/7W178Rr"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/ZUnAWhg"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/VBUblsr"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/tQ335Ei"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/Prwl6sA"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/UrKx6l6"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/PNfiHFIP"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/XugP5r2"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄大立",
    "item": "BX-10 極限衝擊戰鬥盤（$850）",
    "url": "https://lin.ee/pzaSLnl"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/oFyah9u"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/Nxqnbx5"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/nGWR09K"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/P9fVJdE"
  },
  {
    "date": "09/04",
    "store": "Funbox 漢神巨蛋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oQKPtS8"
  },
  {
    "date": "09/04",
    "store": "Funbox 漢神巨蛋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/ZbFrmNk"
  },
  {
    "date": "09/04",
    "store": "Funbox 漢神巨蛋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/P6ltc6D6"
  },
  {
    "date": "09/04",
    "store": "Funbox 漢神巨蛋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/QwByvhE"
  },
  {
    "date": "09/04",
    "store": "Funbox 漢神巨蛋",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WWR41GV"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/rbePBBj"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/63ZT7vI"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/qJ5o20i"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/yvcElyIT"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/5HzMX8D"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/sT5p3Au"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/7GwqTnP"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍3-60FV2（$350）",
    "url": "https://lin.ee/StMmmLn"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍3-60FV2（$350）",
    "url": "https://lin.ee/UGl6zqC"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍3-60FV2（$350）",
    "url": "https://lin.ee/596HcyS"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/W7INUo3"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/PZS71MA"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/w9R0Z0X"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/7DpHc7N"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/zpiUEf32"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/TpOgYvP"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/rjyAy1U"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/9MXfMGS"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/XZ5CzHZ"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/Rm7phzL"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/pc5MdzF"
  },
  {
    "date": "09/04",
    "store": "Funbox 高雄漢神",
    "item": "BX-00 蒼龍神劍（$350）",
    "url": "https://lin.ee/O3VflGc"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/shYffrl"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Q3wsLGe"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/s0rB9dT"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/qqtB3oA"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/n08Wj10"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Wz5MtDq"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/t5Vhfj5"
  },
  {
    "date": "09/04",
    "store": "Funbox 屏東環球",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/XEL6JmL"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/zBADrxA"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/q22Xnoi"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PhWqcc0"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Vp4aUiB"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/7UbdwSO"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/UVlBzJmk"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/r4EoEPI"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/WfiQkkY"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/TvWlXi0"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/o2QZhWI"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/r9MQCqb"
  },
  {
    "date": "09/04",
    "store": "Funbox 宜蘭新月",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/90DcANj"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/PxecvZO"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/oLqgoyM"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Z2K2FV0"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/6mhTk9K"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/vtj8HYW"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/z8C63dF"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/xlHg3Hb"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/pZaZ0gp"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/rbMX4MmW"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/NafDqhz"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/OYapa7T"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/6v3nifek"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/xLRQmB44"
  },
  {
    "date": "09/04",
    "store": "Funbox 天母SOGO",
    "item": "BX-00 蒼龍神劍3-60F V2（$350）",
    "url": "https://lin.ee/Sz9eBXS"
  }
];
