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

const DRAWS = [];
