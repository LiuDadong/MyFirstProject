
## 接口列表

#### 登录相关接口
|  接口  | 说明 |
|------ |----- |
|[/p/global/strategy](#strategy)|请求全局策略|
|[/p/user/userLogin](#login) | 用户登录接口|
|[/p/user/userLogout](#userLogout) | 用户退出 |

#### 密码相关接口
|  接口  | 说明 |
|------ |----- |
|[/p/user/userUpdatePw](#userUpdatePw) | 修改密码|
|[/p/user/resetPw](#resetPw) | 忘记密码 |
|[/p/user/setPassword](#setPassword) | 设置密码 |
|[/p/user/verifyRegisterCaptcha](#verifyRegCaptcha) | 提交验证码 |
|[/p/user/sendRegisterCaptcha](#getCaptcha) | 获取验证码 |

#### Fido相关接口
|  接口  | 说明 |
|------ |----- |
|[/p/fido/regReq](#regReq) | 开启指纹认证|
|[/p/fido/trustApp](#trustApp) | FidoSDK请求信任设备信息|
|[/p/fido/regResp](#regResp) | FIDO服务器认证	|
|[/p/fido/reginReq](#reginReq) | 获取需要解绑的设备的信息 |
|[/p/fido/deregReq](#deregReq) | 解除指纹认证 |

#### 其他接口
|  接口  | 说明 |
|------ |----- |
|[/p/user/backupApp](#backupApp) | 应用备份	|
|[/p/user/restoreApp](#restoreApp) | 应用还原|
|[/p/dev/download](#download) | 检查更新|
|[/p/org/clientUploadLog](#uploadClientLog) | 上传日志 |
|[/p/org/clientErrorLog](#clientErrorLog) | 客户端上传崩溃日志 |
|[/p/push/pushMessage](#pushMessage) | 注册JPush (未使用)|

#### 应用商店接口列表
|  接口  | 说明 |
|------ |----- |
|[/p/app/install_count](#install_count) | 应用安装数统计 |
|[/p/org/authAppList](#authAppList) |授权应用列表，搜索返回应用列表|
|[/p/org/orgGetSettings](#orgGetSettings) | 设置最大下载数 |
|[/p/market/updateAppList](#updateAppList) | 需要更新应用列表 |


#### 设备管理接口列表
|  接口  | 说明 |
|------ |----- |
|[/p/user/getPolicy](#getPolicy) | 根据用户获取策略 |
|[/p/dev/updateDevInfo](#updateDevInfo) |上传设备硬件信息</font> |
|[/p/dev/updateDevAppList](#updateDevAppList) | 上传设备应用信息 |
|[/p/dev/uploadLocation](#uploadLocation) | 上传设备位置信息 |
|[/p/user/getAllPolicy](#getAllPolicy) | 用户获取所有类型策略 |
|[/p/user/getFinalPolicy](#getFinalPolicy) | 获取用户端合并后的最终策略 |

#### 文件管理接口列表

|  接口  | 说明 |
|------ |----- |
|[/p/file/authFileList](#authFileList)| 获取授权或非授权文件列表|
|[/p/file/downloadFile](#downloadFile) | 文档下载 |
|[/p/file/viewFile](#viewFile) | 用户查看文档统计 |

#### 接口合并
|  接口  | 说明 |
|------ |----- |
|[/p/user/getAllPolicyAndAuthApp](#getAllPolicyAndAuthApp)|获取所有授权应用列表及所有策略|
|[/p/dev/uploadLocationAndDevInfo](#uploadLocationAndDevInfo) |上传位置信息及设备信息|

#### 备份推送指令
|  接口  | 说明 |
|------ |----- |
|[/p/push/commandStatus](#commandStatus)|更改推送命令状态|
|[/p/push/getAllCommand](#getAllCommand) |获取所有的未执行的推送的命令|

## 接口详情
* <span id = "strategy">全局策略</span>

    * 接口地址：/p/global/strategy

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/global/strategy

    * 接口备注：通过用户信息，请求获得全局策略，包括登录方式（Fido登录，本地Fido登录，普通登录等）、推送地址等信息

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |marking |string|true|企业标识|
        |account | string |true|用户名|
        |pw | string |true|用户密码|
        |platform | string |true|系统类型(android/ios)|
        


    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码
        |data | object|具体数据|
        |identify_method | int|登录方式|
        |send_url | string|推送地址|

    * JSON返回示例：
       
             {
                 "rt": 0,
                 "data": {
                     "identify_method": "3",
                     "send_url": "118.190.70.55:80"
                 }
              }
       

---


* <span id = "login"> 登录接口 </span>

    * 接口地址：/p/user/userLogin

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/user/userLogin

    * 接口备注：获取用户信息

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |dev_id |string|true|设备唯一标识|
        |account | string |true|用户名|
        |pw| string |true|用户密码|
        |reg_id| string |true|极光推送注册ID|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码
        |doc | object|具体数据，内容较多不做具体说明|
        | sid| string|用户session id|
        | reg_id| string|极光推送注册ID|


    * JSON返回示例：
       
             {
                 "rt": 0,
                 "doc": {
                     "info": {
                         "departId": 5,
                         "unauthorized_app": [
                             "com.tencent.mobileqq"
                         ],
                         "create_time": "2017-01-09 12:53:10",
                         "name": "123456@qq.com",
                         "phone": "12345678910",
                         "department": "测试部门",
                         "email": "123456@qq.com",
                         "avatar": "",
                         "sex": "1"
                     },
                     "policy": {
                         "dev_limit": {
                             "mockLocation": 1,
                             "bluetooth": 1,
                             "recording": 1,
                             "notifications": 1,
                             "camera": 1,
                             "infrared": 1,
                             "gps": 1
                         },
                         "version": "1",
                         "name": "产品",
                         "dev_security": {
                             "pw_min_len": "6",
                             "available_time": "30",
                             "pw_fail_count": "3",
                             "passwd_type": "0",
                             "pw_validity": "undefined"
                         },
                         "id": 7
                     }
                 },
                 "sid": "FjU/npbPEeeEEwAWPgaaog=="
               }
       


---

* <span id = "regReq"> 开启指纹认证 </span>

    * 接口地址：/p/fido/regReq

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/fido/regReq?userName=123456@qq.com*4ffd6f5190300dd5&sid=FjU/npbPEeeEEwAWPgaaog==

    * 接口备注：获取用户信息

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |userName |string|true|fido认证用户名，该值为"username*dev_id"|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码
        |uafRequest | object|fido服务器返回数据|

    * JSON返回示例：
        
       		{
            "rt": 0,
            "uafRequest": "[
            		{"challenge":"MC45MjkyOTM5NzEwOTcyMTk5",
            		 "header":{
            		 		"appID":"https://192.168.1.25:1443/p/fido/trustApp",
            		 		"op":"Reg",
            		 							"serverData":"eyJ0aW1lc3RhbXAiOiIxNjYyODAwMTgzMDAwIiwiY2hhbGxlbmdlIjoiTUM0NU1qa3lPVE01TnpFd09UY3lNVGs1IiAsICJleHBpcmVEYXRlIjogIjIwMjItMDktMTAgMTY6NTY6MjMiLCJkb3dubG9hZENlciI6ICJmYWxzZSJ9",
            		 		"upv":{"major":1,
            		 			   "minor":0}},
            		 		"policy":{"accepted":[[{"aaid":["004B#0001"],
            		 				  "authenticatorVersion":1}]]},
            		 		"username":"123456@qq.com*4ffd6f5190300dd5"}]"
        }
       
---

* <span id = "trustApp"> 请求信任设备信息 </span>

    * 接口地址：/p/fido/trustApp

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/fido/trustApp

    * 接口备注：该接口由Fido SDK调用以请求信息设备信息，该接口的获取在[开启指纹认证](#regReq)的返回值中。

    * 请求参数说明：无

    * 返回参数说明：返回值由黑盒Fido SDK处理，不做详解。

    * JSON返回示例：
       
             {
                 "trustedFacets": [
                     {
                         "version": {
                             "major": 1,
                             "minor": 0
                         },
                         "ids": [
                              "https://192.168.1.25:1443/p/fido/trustApp",
                              "android:apk-key-hash:Pe4d4Cw0RPCn96qj7LRrWPtfRKU",
                              "android:apk-key-hash:6URnT6fxySeiTmb5b2PfIqGhHDM",
                              "android:apk-key-hash:8/Ou1ec/fda0+mOwxkEPbSk9atE"
                         ]
                     }
                 ]
             }
        

---

* <span id = "regResp"> FIDO服务器认证 </span>

    * 接口地址：/p/fido/regResp

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/fido/regResp?regResp=""&sid=nFuDCJbZEeeEEwAWPgaaog==

    * 接口备注：该接口用于设备在服务器做认证，其中参数regResp为SDK处理获得。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |regResp |string|true|认证参数|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码
        |description | object|fido服务器返回数据|

    * JSON返回示例：
       
             {
                 "rt": 0,
                 "description": "{
                 			"authenticatorsSucceeded":{
                 					"aaid":"004B#0001",
                 					"description":"SEC FIDO UAF AUTHENTICATOR",
                 					"keyID":"YTJjNzQ1NWQ1NTQ2ZDMzZDcxYjEzYWVhYmNlOWJkNDA",
                 					"userName":"123456@qq.com*4ffd6f5190300dd5"},
                 					"statusMsg":"Registration completed successfully."}"
             }
        

---

* <span id = "backupApp"> 应用备份 </span>

    * 接口地址：/p/user/backupApp

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/user/backupApp

    * 接口备注：该接口用于进行插件应用的备份。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |data |string|true|备份数据|
        |sid | string |true|用户session id|
        |datetime | long |true|备份时间|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码 |

    * JSON返回示例：
        
             { "rt": 0 }

        
-----------


* <span id = "restoreApp"> 应用还原 </span>

    * 接口地址：/p/user/restoreApp

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/user/restoreApp?sid=KR9BopdTEeeEEwAWPgaaog==

    * 接口备注：该接口用于插件应用的还原。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码|
        | data | object|具体数据|
        | datetime | long|时间|

    * JSON返回示例：
        
             {
                 "rt": 0,
                 "data": {
                     "appInfoList": [
                         {
                             "app_name": "北京互联网地税局",
                             "visit_type": "0",
                             "check_security": "1",
                             "describe": "",
                             "download": "hlwdsj.apk",
                             "appSize": "1.06MB",
                             "id": 224,
                             "from": "",
                             "package_name": "InternetTax.Android",
                             "app_rule": {
                                 "time": {
                                     "workday": "00:00-24:00",
                                     "weekend": "00:00-24:00"
                                 },
                                 "update": 0,
                                 "uninstall": 0
                             },
                             "platform": 1,
                             "version": "2.0.083",
                             "app_name_pinyin": "beijinghulianwangdeshuiju",
                             "icon": "images/0caf631ad7b12f9e49e65366d6fcfc1d.png",
                             "users": [],
                             "app_type": "1",
                             "md5": "6f77f201bbca08c32fae0e9ea9978926",
                             "created": "2017-07-07 11:26:24",
                             "install_type": "1",
                             "install_num": 0,
                             "modified": "2017-07-07 11:26:24",
                             "unauthorized_depart": []
                         }
                     ],
                     "datetime": 1505183322
                 }
             }
        

---

* <span id = "download"> 检查更新 </span>

    * 接口地址：/p/dev/download

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/dev/download

    * 接口备注：检查应用是否有新的版本。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |platform | string |true| 系统平台类型(android/ios)|
        |dev_type | string |true| 设备类型(phone/pad)|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码｜
        | data | object|更新包的相关信息(无更新则为空对象) |

    * JSON返回示例：
        
             {
                 "rt": 0,
                 "data": {
                     "status": "1",
                     "update_time": "2017-08-12 16:50:18",
                     "name": "SecSpace",
                     "url": "/p/file/download?filename=secspace-release-4.2.6.apk",
                     "describe": "",
                     "filename": "secspace-release-4.2.6.apk",
                     "create_time": "2017-08-12 16:50:18",
                     "size": 21744891,
                     "version": "4.2.6",
                     "versioncode": "4.2.6",
                     "path": "/p/file/download?filename=secspace-release-4.2.6.apk",
                     "_id": 4,
                     "delete": 0
                 }
             }
        

---

* <span id = "userUpdatePw"> 修改密码 </span>

    * 接口地址：/p/user/userUpdatePw

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/user/userUpdatePw

    * 接口备注：修改用户登录密码。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |new_pw | string |true|新密码|
        |account | string |true|用户名|
        |pw | string |true|原密码|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码 |

    * JSON返回示例：
   
             {"rt": 0}

---

* <span id = "pushMessage"> 注册JPush </span>

    * 接口地址：/p/push/pushMessage

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/push/pushMessage

    * 接口备注：注册Jpush。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |reg_id | string |true|注册ID|
        |dev_id | string |true|设备ID|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | uafResponse | object| Fido服务器返回数据 |

    * JSON返回示例：
     
             {"rt": 0}
        
---
* <span id = "userLogout"> 用户退出 </span>

    * 接口地址：/p/user/userLogout

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/user/userLogout?dev_id=c3c2751627f82236&sid=4R5W9JdmEeeEEwAWPgaaog==

    * 接口备注：用户退出。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |dev_id | string |true|设备唯一标识|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

         {"rt": 0}
        
---
* <span id = "uploadLog"> 上传应用状态 </span>

    * 接口地址：/p/org/uploadLog

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/org/uploadLog

    * 接口备注：上传应用状态。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |operation | string |true|操作|
        |app | string |false|应用名|
        |app_version | string |false|应用版本|
        |app_type | string |false|应用类型|
        |location | string |false|位置|
        |device | string |true|设备类型|
        |device_imei | string |true|设备imei|
        |auth | string |true||
        |result | string |true||
        |time | string |true|时间|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
        
             {"rt": 0}
        
---
* <span id = "reginReq"> 获取需要解绑的设备的信息 </span>

    * 接口地址：/p/fido/reginReq

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/fido/reginReq

    * 接口备注：获取需要解绑的设备的信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |userName | string |true|解绑用户名（username*dev_id）|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | uafResponse | object| Fido服务器返回数据 |

    * JSON返回示例：
        
             {
                  "rt": 0,
                  "uafResponse": "{
                  		"authenticators":[
                  			{"aaid":"004B#0001",
                  			 "description":"",
                  			 "keyID":"M2E0NjdiM2U4NWYxMDYzNTYyNDVhMWQzNjNlY2Y3YTc",
                  			 "userName":"123456@qq.com*c3c2751627f82236"}
                  			 ]
                  		}"
             }
        
---
* <span id = "deregReq"> 解除指纹认证 </span>

    * 接口地址：/p/fido/deregReq

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/fido/deregReq

    * 接口备注：解除指纹认证。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |aaid | string |true||
        |keyID | string |true||

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | uafResponse | object| Fido服务器返回数据 |

    * JSON返回示例：
        
             {
                  "rt": 0,
                  "uafResponse": "[
                  			{"authenticators":[
                  				{"aaid":"004B#0001",
                  				 "keyID":"M2E0NjdiM2U4NWYxMDYzNTYyNDVhMWQzNjNlY2Y3YTc"}
                  				 ],
                  			 "header":{"appID":"https://192.168.1.25:1443/p/fido/trustApp",
                  			 		   "op":"Dereg",
                  			 		   "upv":{"major":1,"minor":0}}}
                  			 		]"
             }
        

---


* <span id = "install_count"> 应用安装数统计 </span>

    * 接口地址：/p/app/install_count

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/app/install_count
    
    * 接口备注：应用安装数统计。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |package_name | string |true|安装的应用|
        |status | int |true|1代表安装，-1代表卸载|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |


    * JSON返回示例：

             {
                 "rt": 0
             }
  

---

* <span id = "authAppList"> 授权应用列表，搜索返回应用列表 </span>

    * 接口地址：/p/org/authAppList

    * 返回格式：Json

    * 请求方式：get

    * 请求示例：
    
    		https://192.168.1.25:1443/p/org/authAppList?sid=7XQofJm8EeeEEwAWPgaaog==&account=005@qq.com&start_page=1&page_length=30&platform="ios"&dev_type=phone

    * 接口备注：获取授权应用列表，搜索返回应用列表。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |account | string |true|用户的邮箱|
        |platform | string |true|系统平台类型(android/ios)|
        |dev_type | string |true|设备类型(phone/pad)|
        |start_page | int |true|获取的页数|
        |page_length | int |true|每页的长度|
        |keyword | string |false|代表应用商店搜索功能传递参数获取搜索列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | total_count | int| 应用总数 |
        | app_list | object| 应用列表 |
        | start_page | int| 起始页 |


    * JSON返回示例：
    
          {  
          	"rt": 0, 
 			"total_count": 1, 
 			"app_list":[
 				{ "app_name": "亚威办公", 
 				  "name": "亚威",
 	 			  "package_name": "yawei.jhoa.mobileyawei", 
 	 			  "describe": "", 
 	 			  "download": "yaweibangong.ipa", 
 	 			  "appSize": "8.66MB", 
 	 			  "app_type": "1", 
 	 			  "version": "1.4.1", 
 	 			  "md5": "cd3634e302649ddb2ed8043b409351fb", 
 	 			  "icon": "images/7c0b3a5c185e1433634f687711c4cae5.png", 
 	 			  "install_type": "0", 
 	 			  "modified": "2017-11-24 10:14:21", 
 	 			}
 			  ], 
 			"start_page": 1
 			}    
 			
	* 返回数据 *** app_list *** 说明：

	
		| 名称 | 类型 |
        |----- |------|
        |app_name | 应用名称(ipa包解析的) |
        |name | 应用自定义名称(管理员命名的) |
        |package_name | 包名 |
        |describe | 应用描述信息 |
        |download | 应用下载 |
        |appSize | 应用大小 |
        |app_type | 。。。 |
        |version | 版本号 |
        |md5 | 应用的md5 |
        |icon | 应用图标下载 |
        |install_type | 应用安装类型(0:强制安装／1:非强制安装)|
        |modified | 更改应用信息时间 |
			   
---


* <span id = "orgGetSettings"> 设置最大下载数 </span>

    * 接口地址：/p/org/orgGetSettings

    * 返回格式：Json

    * 请求方式：get

    * 请求示例：https://192.168.1.25:1443/p/org/orgGetSettings?sid=7XQofJm8EeeEEwAWPgaaog==

    * 接口备注：获取最大下载数。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | doc | object| 全局策略 |


    * JSON返回示例：
 
          {
              "rt": 0,
              "doc": {
                  "identify_method": "3",
                  "manager_email": "",
                  "allow_remember_pw": "0",
                  "session_expire_time": "480",
                  "frozen_time": "1",
                  "manager_name": "admin",
                  "pw_max_try_times": "3",
                  "company_domain": "www.appssec.cn",
                  "max_download": "3",
                  "send_url": "118.190.70.55:80",
                  "company_name": "AppsSec",
                  "address": null,
                  "icon": "images/c9c2bce82b74978a3e87079f2ce6e52b.png",
                  "product_name": "安全管理平台",
                  "avatar": "images/9051639106abc9b9f1508982d580462d.png"
              }
          }
  

---

* <span id = "updateAppList"> 需要更新应用列表 </span>

    * 接口地址：/p/market/updateAppList

    * 返回格式：Json

    * 请求方式：get

    * 请求示例： https://192.168.1.25:1443/p/market/updateAppList?app_info={"com.tencent.androidqqmail":"5.3.2","com.jh.c6.activity":"V3.8.6","InternetTax.Android":"2.0.083"}&sid=7XQofJm8EeeEEwAWPgaaog==

    * 接口备注：获取最大下载数。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |app_info | json |true|已安装应用的信息|
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | app_list | object| 需要更新的应用列表 |


    * JSON返回示例：
   
         {
             "rt": 0,
             "app_list": []
         }
   

---

* <span id = "getPolicy"> 根据用户获取相应类型的策略 </span>

    * 接口地址：/p/user/getPolicy

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/user/getPolicy

    * 接口备注：根据用户获取策略。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |account | string |true|用户唯一标识|
        |policy_type | string |true|获取的策略类型|
        
    * policy_type参数说明：
    
    	| 字段名称 | 说明 |
		|-----|-----|
		| device | 设备策略 |
		| complicance | 合规策略 |
		| geofence | 地理围栏策略 |
		| timefence | 时间围栏策略 |
		| whiteapp | 白名单策略 |
		| blackapp | 黑名单策略 |
		| limitaccess | 限制访问策略 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | data | object| 用户策略数据 |


    * JSON返回示例：
   
        	{
             "data": {
                 "network": {
                     "wifi_whitelist": [],
                     "mms": 0,
                     "allow_mobile_network": "",
                     "only_emergency_phone": 0,
                     "data_backup": 0,
                     "allow_wifi": ""
                 },
                 "dev_security": {
                     "pw_min_len": "4",
                     "available_time": "30",
                     "lock_time": "15",
                     "passwd_type": "4",
                     "pw_validity": "0",
                     "pw_fail_count": "3"
                 },
                 "wifi": [
                     {
                         "password": "",
                         "type": "",
                         "ssid": ""
                     }
                 ],
                 "dev_limit": {
                     "mockLocation": 0,
                     "bluetooth": 0,
                     "recording": 0,
                     "notifications": 0,
                     "camera": 0,
                     "infrared": 0,
                     "gps": 0
                 },
                 "create_time": "2017-09-12 11:11:57",
                 "version": "1",
                 "id": 66,
                 "name": "test12345"
             },
             "rt": 0
             }
    
---

* <span id = "updateDevInfo"> 上传设备硬件信息 </span>

    * 接口地址：/p/dev/updateDevInfo

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/dev/updateDevInfo

    * 接口备注：用户登录成功后，上传设备硬件信息 。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |dev_name | string |true|设备名称|
        |dev_system | string |true|设备系统版本|
        |dev_info | string |true|设备信息|
        |dev_type | string |true|设备类型(phone/pad)|
        |platform | string |true|系统类型()android/ios|


    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
      
           {"rt": 0}
        

---

* <span id = "updateDevAppList"> 上传设备应用信息 </span>

    * 接口地址：/p/dev/updateDevAppList

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/dev/updateDevAppList?sid=7XQofJm8EeeEEwAWPgaaog==&mAppinfolist="xxx"

    * 接口备注：根据用户获取策略。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |mAppinfolist | string |true|设备应用信息列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
     
        {"rt": 0}
     

---

* <span id = "uploadLocation"> 上传设备位置信息 </span>

    * 接口地址：/p/dev/uploadLocation

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/dev/uploadLocation?sid=7XQofJm8EeeEEwAWPgaaog==&dev_id="shebei"&position="xx"

    * 接口备注：根据用户获取策略。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |dev_id | string |true|设备id|
        |position | string |true|设备经纬度|


    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
        {"rt": 0}
    
---


* <span id = "uploadClientLog"> 上传设备位置信息 </span>

    * 接口地址：/p/org/clientUploadLog

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/org/clientUploadLog

    * 接口备注：上传用户日志

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |logs | string |true|日志消息|



    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
        {"rt": 0}
    
---

* <span id = "resetPw"> 忘记密码 </span>

    * 接口地址：/p/user/resetPw

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/user/resetPw

    * 接口备注：验证码正确之后,重新设置密码

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |pw | string |true|密码|



    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
        {"rt": 0}
    

---

* <span id = "setPassword"> 设置密码 </span>

    * 接口地址：/p/user/setPassword

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/user/setPassword

    * 接口备注：第一次时需要激活,激活之后设置密码

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |pw | string |true|密码|
        |code | string |true|激活码|



    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
        {"rt": 0}
    
---


* <span id = "verifyRegCaptcha"> 提交验证码 </span>

    * 接口地址：/p/user/verifyRegisterCaptcha

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/user/verifyRegisterCaptcha

    * 接口备注：忘记密码时提交验证码

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |captcha | string |true|激活码|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
   
        {"rt": 0}
    
---

* <span id = "getCaptcha"> 获取验证码 </span>

    * 接口地址：/p/user/sendCaptchaEmail

    * 返回格式：Json

    * 请求方式：post

    * 请求示例：https://192.168.1.25:1443/p/user/sendCaptchaEmail

    * 接口备注：忘记密码时获取验证码

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
        	{"rt": 0}

---


* <span id = "getAllPolicy">用户获取所有的类型策略</span>

    * 接口地址：/p/user/getAllPolicy

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://devserver.appssec.cn/p/user/getAllPolicy?sid=7XQofJm8EeeEEwAWPgaaog==

    * 接口备注：用户登陆成功后，获取到所有的策略

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |sid  | string |true| 用户的session_id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int | 状态码 |
        | data | dict | 所有策略 |


    * JSON返回示例：
        
             {
                 "rt": 0,
                 "data":
                 	{
                 		"device" : []
                 		"geofence" : []
        				"timefence" : []
        				"complicance" : []
        				"blackapp" : []
        				"whiteapp_list" : []
        				"limitaccess_list" : []
                 	}
             }
       

---

* <span id = "getFinalPolicy">获取用户端合并后的最终策略</span>

    * 接口地址：/p/user/getFinalPolicy

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev－server.appssec.cn/p/user/getFinalPolicy

    * 接口备注：用户获取用户端合并后的最终策略。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid  | string |true| 用户的session_id|
        |policy  | string |true| 最终策略信息|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int | 状态码 |


    * JSON返回示例：

             {
                 "rt": 0
             }

---

* <span id = "clientErrorLog">客户端上传崩溃日志</span>

    * 接口地址：/p/org/clientErrorLog

    * 返回格式：Json

    * 请求方式：POST

    * 请求示例：http://dev－server.appssec.cn/p/org/clientErrorLog

    * 接口备注：客户端上传崩溃日志。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |errorlogs | string |true| 错误日志信息 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int | 状态码 |


    * JSON返回示例：

      {
           "rt": 0
      }
 
---

* <span id = "authFileList"> 授权文件列表，搜索返回文件列表 </span>

    * 接口地址：/p/file/authFileList

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/authFileList
    
    * 接口备注：获取授权文件列表，搜索返回文件列表。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |account | string |true|用户唯一标识|
        |state | int |true|1代表授权，0代表非授权|
        |start_page | int |true|获取的页数|
        |page_length | int |true|每页的长度|
        |keyword | string |false|代表文件搜索功能传递参数获取搜索列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | total_count | int| 应用总数 |
        | file_list | object| 应用列表 |
        | start_page | int| 起始页 |


    * JSON返回示例：

           {
               "rt": 0,
               "total_count": 0,
               "file_list": [],
               "start_page": 1
           }
---

* <span id = "downloadFile">文档下载</span>

    * 接口地址：/p/file/downloadFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/downloadFile

    * 接口备注：该接口用于用户下载文档。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |filename | string | true | 下载的文档名称 |
        |version | string |true| 下载文档的版本号 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "viewFile">用户查看文档记录</span>

    * 接口地址：/p/file/viewFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/viewFile

    * 接口备注：该接口用于用户下载文档。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |filename | string | true | 下载的文档名称 |
        |version | string |true| 下载文档的版本号 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "getAllPolicyAndAuthApp">获取所有策略及所有授权应用信息</span>

    * 接口地址：/p/user/getAllPolicyAndAuthApp

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/user/getAllPolicyAndAuthApp?sid=7XQofJm8EeeEEwAWPgaaog==&&account=test&&platform=android&&dev_type=phone

    * 接口备注：该接口用于获取当前用户所有策略及所有授权应用信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |account | string |true|用户名|
        |sid  | string |true| 用户的session_id|
        |platform  | int |true| 策略id编号|
        |dev_type  | string |true| 策略类型|
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |
        | all_policy | list | 所有策略 |
        | auth_app |  list | 所有授权应用信息 |

    * JSON返回示例：

             {
                "rt": 0,
                "all_policy": [],
                "auth_app": []
             }

---

* <span id = "uploadLocationAndDevInfo">上传设备信息及位置信息</span>

    * 接口地址：/p/dev/uploadLocationAndDevInfo

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/dev/uploadLocationAndDevInfo

    * 接口备注：该接口用于上传当前设备的设备信息以及定位的位置信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid  | string |true| 用户的session_id|
        |dev_info  | int |true| 策略id编号|
        |dev_name  | string |true| 设备名称|
        |dev_system  | string |true| 设备系统的版本号|
        |platform  | string |true| 设备系统类型(android/ios)|
        |dev_type  | string |true| 设备类型(phone/pad)|
        |dev_id  | string |true| 设备唯一编号|
        |position  | string |true| 位置信息|
        |upload_time  | string |true| 上传位置信息的当前时间|
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "commandStatus">更改推送指令状态</span>

    * 接口地址：/p/push/commandStatus

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/push/commandStatus

    * 接口备注：该接口用于更改推送指令状态。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |dev_id  | string |true| 设备唯一标识|
        |command  | string |true| 已经被执行的指令的标识|
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---


* <span id = "getAllCommand">更改推送指令状态</span>

    * 接口地址：/p/push/getAllCommand

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/push/getAllCommand

    * 接口备注：该接口用于更改推送指令状态。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid  | string |true| 用户的session_id|
        |dev_id  | string |true| 设备唯一标识|
        
    * 返回参数说明：

        | 名称 | 类型 | 说明 |
        |----- |------|----|
        | rt | int| 状态码 |
        | allCommands | list| 包含所有未执行指令的数组 |

    * JSON返回示例：

             {
                "rt": 0,
                "allCommands": []
             }

---