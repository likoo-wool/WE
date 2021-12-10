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
      "val": "1",
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
      "val": "https://kandian.wkandian.com/v3/user/getinfo.json?access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639112365&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=ZCWwRj3eGxCw%3DYt0q9SlgLn-QOacJUSZ6TE8n6ZmSagek&s_im=ZCWwRj3eGxCw%3DkANSeLM_gV37-Mit4PdQXA%3D%3D&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=04f7898dbad29a1dda18e5a8155f99c3"
    },{
      "key": "zqydbody",
      "val": "p=HUJybc31G2V0=voWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW8r6f3EaZcdZOoRldAOdLj-Bleh2gvlYk2jW4nsCZlW2vzKiuBxu99G8idnNZUg3Gf6JaOsG3oqa6eeIibwh6wpBcWjrSZ9RmsLdFj4uaDdUrrRF_Ajaesjh1b_Ab24Hs4SndeRYoS46SysVjlCfOyHgoqMnZqHZV8lpvoS5QImS4EcYmsnggXVy4oo3zNZQ0Ltvt3Wbx8oVqeDQPEJLLee7z4FsjRNEdyFbz8HZ90Hzx4mbXwhKs47Un6lNG1QP3hq4-vJMKAUxFJceHiHzZdzvrtDTpHftXems1JAdZ6kzBknNJc14QdRtfapiCwbQgU0_dkMPYqeN0d9h1wuurlkhnrygVaNtmpNfYRl3Ic_44MfHl26bRdXZieqUV78TiN9C07FVkpulm_K0fuOQ5WXHexATSK6zWFvQghV6FOZaRVJ5l-fd5pwUvzgFdvD6t6wYhaHbwfHhkETbUR81XOXZKCZzwPCaCPsCaTatwcCWfN7rqXEJF72kZ5j_bZPR4Zy7Fmxm6Iv8KTOQjQ7yTJZdY3wjkos_U8KZ7pZu0z-TSy36tL2XfXE_tFZljgk5c2G2mS1OgJeVeksXu4SJRIKc3VBh-_-J_zA_MVYcfpIIfk8S1dbQjCUWNZHlKD-2t6ii8U0nqTFMtKvrcm4GE6dE6v7ZVI86AVNLwzrreBEsKY9cpSIZd3j3OvAfYPptdkCIowQvRd3EmrCrSRBxVy7IGdyShSGBJKAek0iB7knsqjYhZ5pvCiYOKRAld44WclJYQIt2w1gGHZWi3D0I6_cOnsxjcMFbqdsdWeFFzzcTzhefd5FqvY9kX8q_kwDG6H4CcIjESLeoO3DdP2zMrwz7ZimaB5RStOFCmcfjrECVRF1TO_xvqzA9G4kIInRCCPwmmiU9NipHu0g1dKXl5kvA1zRnOw7jtN0WvpaFcDKHIafkk-tkZy98rEd6Hh5_JkDGPM2iN3fQ6oE1FI-hs3iT-Db2dkRndgp1eQyThujPagTZe-3fuprJql5uRtoC1h0AioCSFsucRuOF8q_2JqovgcZuN78BFrxrHxTh12aXB7i1m5h-uSAuNnCc8i8qnBluH8Qzjou242z97wqPeQki-ILjRf27GoaTKd3jcMxTI"
    },{
      "key": "zqydurl2",
      "val": "https://kandian.wkandian.com/v3/user/getinfo.json?access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639112365&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=ZCWwRj3eGxCw%3DYt0q9SlgLn-QOacJUSZ6TE8n6ZmSagek&s_im=ZCWwRj3eGxCw%3DkANSeLM_gV37-Mit4PdQXA%3D%3D&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=04f7898dbad29a1dda18e5a8155f99c3"
    },{
      "key": "zqydbody2",
      "val": "p=HUJybc31G2V0%3DvoWtRZZLNIRPNhwckmkQdyhJSIDwF2L02F_FSFAMBtrWj6nS_VuzRW8r6f3EaZcdZOoRldAOdLj-Bleh2gvlYk2jW4nsCZlW2vzKiuBxu99G8idnNZUg3Gf6JaOsG3oqa6eeIibwh6wpBcWjrSZ9RmsLdFj4uaDdUrrRF_Ajaesjh1b_Ab24Hs4SndeRYoS46SysVjlCfOyHgoqMnZqHZV8lpvoS5QImS4EcYmsnggXVy4oo3zNZQ0Ltvt3Wbx8oVqeDQPEJLLee7z4FsjRNEdyFbz8HZ90Hzx4mbXwhKs47Un6lNG1QP3hq4-vJMKAUxFJceHiHzZdzvrtDTpHftXems1JAdZ6kzBknNJc14QdRtfapiCwbQgU0_dkMPYqeN0d9h1wuurlkhnrygVaNtmpNfYRl3Ic_44MfHl26bRdXZieqUV78TiN9C07FVkpulm_K0fuOQ5WXHexATSK6zWFvQghV6FOZaRVJ5l-fd5pwUvzgFdvD6t6wYhaHbwfHhkETbUR81XOXZKCZzwPCaCPsCaTatwcCWfN7rqXEJF72kZ5j_bZPR4Zy7Fmxm6Iv8KTOQjQ7yTJZdY3wjkos_U8KZ7pZu0z-TSy36tL2XfXE_tFZljgk5c2G2mS1OgJeVeksXu4SJRIKc3VBh-_-J_zA_MVYcfpIIfk8S1dbQjCUWNZHlKD-2t6ii8U0nqTFMtKvrcm4GE6dE6v7ZVI86AVNLwzrreBEsKY9cpSIZd3j3OvAfYPptdkCIowQvRd3EmrCrSRBxVy7IGdyShSGBJKAek0iB7knsqjYhZ5pvCiYOKRAld44WclJYQIt2w1gGHZWi3D0I6_cOnsxjcMFbqdsdWeFFzzcTzhefd5FqvY9kX8q_kwDG6H4CcIjESLeoO3DdP2zMrwz7ZimaB5RStOFCmcfjrECVRF1TO_xvqzA9G4kIInRCCPwmmiU9NipHu0g1dKXl5kvA1zRnOw7jtN0WvpaFcDKHIafkk-tkZy98rEd6Hh5_JkDGPM2iN3fQ6oE1FI-hs3iT-Db2dkRndgp1eQyThujPagTZe-3fuprJql5uRtoC1h0AioCSFsucRuOF8q_2JqovgcZuN78BFrxrHxTh12aXB7i1m5h-uSAuNnCc8i8qnBluH8Qzjou242z97wqPeQki-ILjRf27GoaTKd3jcMxTI"
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
    }],
    "sessions": [],
    "isLoaded": true
  }
