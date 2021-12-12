module.exports = {
    "id": "zqyd",
    "name": "钟情阅读",
    "keys": ["zqydurl","zqydbody","zqydurl2","zqydbody2","zqydurl3","zqydbody3","zqydurl4","zqydbody4","zqydurl5","zqydbody5","zqydurl6","zqydbody6","zqydurl7","zqydbody7","zqydurl8","zqydbody8","zqydurl9","zqydbody9","zqydurl10","zqydbody10"],
    "author": "@tom",
    "settings": [{
      "id": "zqydSuffix",
      "name": "当前账号",
      "val": "1",
      "type": "number",
      "desc": "当前抓取ck记录的账号序号，如：1、2、3、4"
    }, {
      "id": "zqydCount",
      "name": "账号个数",
      "val": "10",
      "type": "number",
      "desc": "指定任务最多跑几个账号，根据抓取的账号数据个数来设值"
    }, {
      "id": "zqydXH",
      "name": "循环获取ck",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydTXTX",
      "name": "txtx",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydSC",
      "name": "sc",
      "val": "0",
      "type": "number",
      "desc": "0关闭，1打开，默认关闭"
    }, {
      "id": "zqydnotifyttt",
      "name": "推送控制",
      "val": "1",
      "type": "number",
      "desc": "0关闭，1推送,默认12点以及23点推送"
    }, {
      "id": "zqydnotifyInterval",
      "name": "通知控制",
      "val": "2",
      "type": "number",
      "desc": "0关闭，1为 所有通知，2为 12，23 点通知，3为 6，12，18，23 点通知"
    }, {
      "id": "zqydMinutes",
      "name": "推送-通知 分钟控制",
      "val": "10",
      "type": "number",
      "desc": "推送以及通知控制在什么分钟段，可设置0-59,默认0到10"
    }],
    "repo": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icons": ["https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg", "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg"],
    "script": "https://gitee.com/tom210120/tom/raw/master/ZQ/zq.js",
    "icon": "https://gitee.com/tom210120/tom/raw/master/Tom/Tom.jpg",
    "favIcon": "mdi-star-outline",
    "favIconColor": "grey",
    "datas": [{
      "key": "zqydurl",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639300456&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=Y2JgR8oZr6IU%3DBK2nvoRwxmOsVcWKt51QQuh1vzs__v-B&s_im=PCWwRj3eGxCw%3DkANSeLM_gV37-Mit4PdQXA%3D%3D&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=77f7cb96937558c46bd4c22bf5827ac5"
    },{
      "key": "zqydbody",
      "val": "p=GcTMBiVxDAfc=NMpl7bj8OMk3DmUk0Mw_ozDnTHCfzi7iu3XUPArkgS5BC-uFmuGvhnRnt1aEgXCfDS5QRAAqhv9lc3tWhuAKrxXqVa2iLlJsE9aZbqk-powWbfJHn9kBF5dL9GJGuZcyvfRKTG8DVVkuoa4a45xWKgUIQNAMyMY7nYonvFkybldhaG1WEMcWXqkDEfAe7wynjPQD41EmTz5O4zKo_rF63ZFVc4YGHKgf86jMrtCyW2pVn4Hn4r9riai8busglk5j5JmJCR5OvKTba3K9Q3A8Icv-Sd1zj8B4gfmM20AyWcrW07fk2gcfUNeNbHlX7QONR8yiWwtinpsYnIOPE3X9gNp5LiugOTXZ17UMvjQtw9yCoKM4Qo-YHiDNgfgxa06-WGSmRNPATVAlTfuMI-uyFqDHKurbKD8GUbOIVrRJVuT8wVEnSLgI1Ukm0trOBhXPV39C4RKxd6FR6J73QaRbLycWS1epKgZh7TrhjrgwZseXVoNkLA3qiu6Xk8nC3KY7jKGL_GooRabP8WKcWV-lbBHydQsJIgTc8_uIeP0UTKL7pUoXPhf7pCWQFAdTXIiYB6Y-Xv9KwcdsEwz8F-JHKcLfQMi97aFn0O3GlcuEkUntOUnOreeBredDTkGLQRyKwMg_4mAO1YieDYjskTJlhPsGTRBMRRatcHS6-wx_ag52Klfvrk_3ECJgC6bX_hpgFCawW7vERzaU1AuqebhJWbdDGFAFyP2JUeO03M-RzPh_xXEYSZ9KfGJDKqwrf4jEg4kJwXxzLEUIgJGUdgcdDCXSdigRRuHHNcjdtWzMAx5oJOP_7XmhHZ3tC3TvaD2NnT9_RV0CrbbI8NkGh-3-ZpoJ4pbhQFW-3Gj_2aI2h7DF3TWHViI9-wvKs4qQE-qB8QpdEpisKvVymYx5R8P1j8kRI21C--1e2OiLYe1WryiwiFj163LZijJrHKnjzPhMDC726Z_-CVC2gpmv6HaFZBwsi7rDbipDjPjVyr7L_5He7anIVQ-gmf4Z3QHg-HkYJ4ScWFDaQlorjqmWQGyE0ypXhhq4iKi0lHW2yKNADR1zHbEzvh-KGqm3UUuuWdyBdiBo2PqW0YZUtp5T1nLny0Vg-bOfmEsV8u8SPR_ec9O5b9mYBB0J3rAGJRLQ1IYpv7Zc-FECMJuK1CXLkH58CA==D"
    },{
      "key": "zqydurl2",
      "val": ""
    },{
      "key": "zqydbody2",
      "val": ""
    },{
      "key": "zqydurl3",
      "val": ""
    },{
      "key": "zqydbody3",
      "val": ""
    },{
      "key": "zqydurl4",
      "val": ""
    },{
      "key": "zqydbody4",
      "val": ""
    },{
      "key": "zqydurl5",
      "val": ""
    },{
      "key": "zqydbody5",
      "val": ""
    },{
      "key": "zqydurl6",
      "val": ""
    },{
      "key": "zqydbody6",
      "val": ""
    },{
      "key": "zqydurl7",
      "val": ""
    },{
      "key": "zqydbody7",
      "val": ""
    },{
      "key": "zqydurl8",
      "val": ""
    },{
      "key": "zqydbody8",
      "val": ""
    },{
      "key": "zqydurl9",
      "val": ""
    },{
      "key": "zqydbody9",
      "val": ""
    },{
      "key": "zqydurl10",
      "val": ""
    },{
      "key": "zqydbody10",
      "val": ""
    }],
    "sessions": [],
    "isLoaded": true
  }
