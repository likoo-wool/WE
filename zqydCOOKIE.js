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
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=1453&op=0&behot_time=0&oid=0&video_catid=0&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639302058&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=5XPkPrW1Kghg%3DWrDKTD9racHdFgX7wsylAqPfjbr-1M13&s_im=0YdVi_XPUOzA%3DE6pYN3wl-pU5-VZdj_VcBg%3D%3DwE&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=ab9b6ed28532fcfe6e210ae893d540f8"
    },{
      "key": "zqydbody",
      "val": "p=vYdVi_XPUOzA=cAnw_9nbsumVjGd2xUAO-byDAKZoR7R7apJvLEYgmcV76n1BRVS_1c83XMSZqR1lyJ6Se0xRvmrGFdwXdMRrpWZq0Jjyz6iq4ZBUyweSn14sehq7GPdccVVYzn2d-obmAtY0xGk083HfPbU-i0WkXipwTzGEW1J6QyvNGaLkUFhJ00A5dDmggZ4hKy8TfORuyVvczYX_o7PisW79D4ObM0REkuzQnoo30B3SWNbhuD6l27oIjzGGHejY9-uoPpvKIZBM7aXm5gsXgo3-bDVhWWX5j--Kzj9Z5q4cBf5vC4oQsGdXFnAA9itl6ABwg9fq9PoUWQs1U_RV4qfuvr-5lXGzCuaeBXXSRD6uBe3kUIQz8V2IQkDcD4pW9xgdJx-w61O1vazRsmWSfTOWcoazzxSsqmM3hcTEL59Bs4hi5_OUrE1JyeZ8AnCaa_m1UQ0H7ix8EIOnnd6NUy78sUpfckd2ZI3sFZst1dckzioebtIxnMyCCnomW48xIMUon5JVCAewO14fjOWg_EUMG2YMkjZw2ge6MSPKUn-bP8EJM5s2WshEGbKmvF6gPD72rr499CCPXcTb3j72pIFURe1kyMHGJV4mic0vD2lHo6uACEwdLVszsY-x0RHaIM_R0mCvwCfFNtp1LuU7EMMYp10lLBrnVTh0dy8cnf8D0haFcgWJtU5Wi6AoaU-x9Imk_iAH01p4wysj-E0HEABnz5wrvnq0KDVRgwsekpyumNAxSHrftysDnUczcTsFqsB6Nts75CkKIQ4VLeh1BVnB3phQNaTH0ZWFASkdVns0L4UKgbeTQ1bEOcTBsXXcPH4bZ3NNq0sxdT7lgKclSfTRGEP_oWvC32RG2QF3mRm-ei6d44QwjvYlHyTKgMOYQ7QD_ZXOjYHb2oxp83L0naybhNBELIACHtqNQba5D5nTOo0fCusOJp7zQOkEpESNjT685vJWOisowDyf2dCsrff2wbJMuut3UT7_jGb9nwWXk1oMh0JbbDD5m4e2EeX-Pw0X5961C0lwCZznV27zfQ0WYCDixfe88fiLY92rM0dM3uNXx7mr87Bm5CEX5q8X3euR2_cIsNkXkldMwgOHWj3CK_f5vVDXm3QezVu0N1gBkrsHHDcEv9O3klvR8HecslsQVTShgYNZsjkTrKoFums-TMrbsKHGwNTkXH-UvD"
    },{
      "key": "zqydurl2",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639368957&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=9FbVGOYyXwIo%3DJvDFs5ho7UL0dP6Rhkr3un2owLWm8I60k&s_im=CFbVGOYyXwIo%3DF3mX2j4dIn5cgJpVhdqUKA%3D%3D9&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=64166b06515eace2b5c50fcc62c89f6a"
    },{
      "key": "zqydbody2",
      "val": "p=dCWwRj3eGxCw=r_eNlWKYuMeKCD0GRCZiId7C1AVNRQUdYBKApsKgataCzAkhWvtXXKo7wIP7lAYBaqQ1DK0_8qwML8FK0GeU_daNSUGnjZiAwv6ntTthJ4T6f9tqKL_dFMQSjAO5-QMrlZ0AR7YU3s2qOkiYkJxpkbNde6r6SfPT1y6_xJiQ_MGw0sp1wEC3MSFGEVOi3_DVP6vGqc1yGq_02r67bGWhtrwFe0PzucKe-SQI0gsHpomRLBI9OmWB_tfG7lUypXJSTjho2wrPudy-ra5tsmMxCGP3LifWXuTOdZLGz7dhlEwHSASoxoGlRZquHK3Z8Me2JbUZleqZAIk7ozUWTf3ayHYrVpfy25uCws9C51MRjnMNN8jEQCNI0Zfn6zCir7LwRg0ZFS4jlkge4eArsU7GPktvJP0s0g8EOWMGNUuCVTqsSu9ESn0xwvwNheuAwpoht81uk8yxN2QfhlQeZtAosI0pmhcQ8Q-M3sRSM4_d9ncZK4wQh07QAna5SNYbSBMppfx0pawe98hi_xKYpdsaXmYS7-QBb-evS_dlyI0uKI8olQvFu6d8av3ZEtoFZyIvD6e614jKzXSg3oQsBHPb8tq9hm-Ln4Nd-YGLHMJe1aHeyWfbW55IDajvK8ednB7vUREVFK-QoKzD5ZM1hBnnGyRs_2EjeTJzxpaS9nfTYYuv2UsY3N04lNX8n_eghR0Mwk_Qhe49zoBjepR3eenkLhfCWnG4iX18y3NrO7QothMi3EM9r5ODVchWLz6XeDm6l-qkpORo0gaF-EYKlb2RsZW5rb0_MRMsas7fuYCUY6apl1YPUuAesijm8CqPhLR70s6v49XPRttNE_tUwveSntSiZncwfMXZC1nmu_i7hS-OmEfwuYu1lFmymUv57Jl7m5P7o9GINhXHm09Rjh3vcZkKJ5xLxClkJOBA_Pg-so2K6lafk9idbm-MOIJNkts9LIGZNBmltcIpZyW5hJR23Sk7N_Pw_p67QOVlljMgDuAfK8xOYaH7stk2B6yceT_wU-HVJNJINTkK3NsPqw61xEGOeQJpEG8GHTVD_nrnfU5vvceQCe9FZIsh_icf18dK8n_8q0HPUH2U391z6q_W53iTh8hi0fVA7l3c8__Cuuy7KVi1nkleRs4ZdBQ0L39rInOD09Yb6FpCn2B-MgmNJknSEsVTUALH"
    },{
      "key": "zqydurl3",
      "val": "https://kandian.wkandian.com/v3/article/lists.json?catid=0&op=0&behot_time=0&oid=0&video_catid=1453&access=4G&app_name=zqkd_app&app_version=3.5.5&carrier=CHN-UNICOM&channel=c4096&device_brand=samsung&device_id=55467832&device_model=SM-A7000&device_platform=android&device_type=android&dpi=480&inner_version=202108181034&language=zh-CN&memory=1&mi=0&mobile_type=1&net_type=2&network_type=4G&openudid=7c544a49ba475b24&os_api=23&os_version=MMB29M.A7000ZCU1CRC2&phone_sim=1&request_time=1639368975&resolution=1080x1920&rom_version=MMB29M.A7000ZCU1CRC2&s_ad=dCWwRj3eGxCw%3DYt0q9SlgLn-QOacJUSZ6TE8n6ZmSagek&s_im=DYdVi_XPUOzA%3DE6pYN3wl-pU5-VZdj_VcBg%3D%3DrA&sm_device_id=20210913191348778e096e2230a8d6f60483126c18b696013b246616d64200&storage=11.78&uid=58964914&version_code=63&zqkey=MDAwMDAwMDAwMJCMpN-w09Wtg5-Bb36eh6CPqHualIejl7B1z2Sxp5-xhXyp4LDPyGl9onqkj3ZqYJa8Y898najWsJupZLDdn7GEjHbgrrmyapqGcXY&zqkey_id=2dd1e188838da6cf8c23df90b38bdd22&sign=17b74ad454fd1b2de65b343221caa744"
    },{
      "key": "zqydbody3",
      "val": "p=dCWwRj3eGxCw=r_eNlWKYuMeKCD0GRCZiId7C1AVNRQUdYBKApsKgataCzAkhWvtXXKo7wIP7lAYBaqQ1DK0_8qwML8FK0GeU_daNSUGnjZiAwv6ntTthJ4T6f9tqKL_dFMQSjAO5-QMrlZ0AR7YU3s2qOkiYkJxpkbNde6r6SfPT1y6_xJiQ_MGw0sp1wEC3MSFGEVOi3_DVP6vGqc1yGq_02r67bGWhtrwFe0PzucKe-SQI0gsHpomRLBI9OmWB_tfG7lUypXJSTjho2wrPudy-ra5tsmMxCGP3LifWXuTOdZLGz7dhlEwHSASoxoGlRZquHK3Z8Me2JbUZleqZAIk7ozUWTf3ayHYrVpfy25uCws9C51MRjnMNN8jEQCNI0Zfn6zCir7LwRg0ZFS4jlkge4eArsU7GPktvJP0s0g8EOWMGNUuCVTqsSu9ESn0xwvwNheuAwpoht81uk8yxN2QfhlQeZtAosI0pmhcQ8Q-M3sRSM4_d9ncZK4wQh07QAna5SNYbSBMppfx0pawe98hi_xKYpdsaXmYS7-QBb-evS_dlyI0uKI8olQvFu6d8av3ZEtoFZyIvD6e614jKzXSg3oQsBHPb8tq9hm-Ln4Nd-YGLHMJe1aHeyWfbW55IDajvK8ednB7vUREVFK-QoKzD5ZM1hBnnGyRs_2EjeTJzxpaS9nfTYYuv2UsY3N04lNX8n_eghR0Mwk_Qhe49zoBjepR3eenkLhfCWnG4iX18y3NrO7QothMi3EM9r5ODVchWLz6XeDm6l-qkpORo0gaF-EYKlb2RsZW5rb0_MRMsas7fuYCUY6apl1YPUuAesijm8CqPhLR70s6v49XPRttNE_tUwveSntSiZncwfMXZC1nmu_i7hS-OmEfwuYu1lFmymUv57Jl7m5P7o9GINhXHm09Rjh3vcZkKJ5xLxClkJOBA_Pg-so2K6lafk9idbm-MOIJNkts9LIGZNBmltcIpZyW5hJR23Sk7N_Pw_p67QOVlljMgDuAfK8xOYaH7stk2B6yceT_wU-HVJNJINTkK3NsPqw61xEGOeQJpEG8GHTVD_nrnfU5vvceQCe9FZIsh_icf18dK8n_8q0HPUH2U391z6q_W53iTh8hi0fVA7l3c8__Cuuy7KVi1nkleRs4ZdBQ0L39rInOD09Yb6FpCn2B-MgmNJknSEsVTUALH"
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
