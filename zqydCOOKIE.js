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
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=0&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639302058&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=5XPkPrW1Kghg%3DWrDKTD9racHdFgX7wsylAqPfjbr-1M13&s_im=0YdVi_XPUOzA%3DE6pYN3wl-pU5-VZdj_VcBg%3D%3DwE&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=ab9b6ed28532fcfe6e210ae893d540f8"
    },{
      "key": "zqydbody",
      "val": "p=JXU6PBNNsHKc=bTzFskkR0W7gqAuRMDKEfACEJP78H--B625lGh1W-_HpKyEsVpMfQBwEFHVJU7XddCyltyIKDy5n5nrvnGbmSm4nazOOK8FgtXhUtf0HGWSMDzJGtFA7qci6ccb2WeHn6MnzII6tFL0gzIDLurLSMBty33tJEZU4ausWLnE5bfxj4dP9r3fsZ_Q7Hb_FMDp1RKdnEafw6nKdfG7kAVY_8xQYJAuFTuP7YpAp9ud675RdxjkDquer9xRJu2sMVj3hPEmYzglpIESVdhcbSQS4crLv815DX5RlwWrf1AcD8jvGKShYKPiVlGhC_zgesEX8OPSI_fdKdLlopKOUWU4QoAfK-b13M7kQi6S5MuYGT2qz_2zn358ZpxVeadve-OiU7sN42BowFv6xkdfylMyzR3W-oLm17u0DTPYhoTmCROSApZmTaaS-Wy4dNmNpOn57rqNWJoJnBcDykTsFaKhh-_m0ITviGTZs9-hBlaTGYAGREww0guKvR8g8M5s7Q1hyGjuN3WjLtlMReCi7M3Hjv3frP8rlEFmHdeIelANw2Tq5SP29eYYXELFIwd9bQkYHkxOljpnsEArrOMmP4j3Q20OQ8i6AOrbRSf471wfpTz8vpcvPnNd8M7O_H3cRw7Tq1eqtLDBSku7NNtrJOnwe0AU5VxEO73PADPOZVTkq_sKqe3YPPk31CJZMBO39e9ZVNl0IASUGFKVWJ0p4IRB9xKcvZV2J2Nd5WORGGQmf-mHMB_OtpT45ieRHemZbjfBmOA49yoir07C8rf8pbKn5auFAuosJXa-ovA5ZSp2DWSX6DsxYSVchCwuhlGjoKpSoWs9simdaJQz1xdhe4c-dC9myQQ34SilKjdI0W3NHw44Dh9ksttpDGUdhb73vBn5YULgECOpFzpSAYh917x-Z865IgsgIZY8vqG4ipbl-9noWeXTO0h8JQcJw9KOGuOCzG4Qwu2Pa0NsDxYbl6RgveJz_cSZleG2-kdNkXDTjEPYE-oynckFmKz_FYQFqb515YNii0ziqQQELLnU4dpbp1NsQXpbtdwrqpjNkXOmnBygkq_PzjalkdoWJHf59vM0enrEPVpR8D9Ev8difl2jY98l3dAOAszXORZuQu4vjc0d8lYS9mrzCIokGSqg1jxELhOHlL2hnNzcTK8ozqy6xLA==f"
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
