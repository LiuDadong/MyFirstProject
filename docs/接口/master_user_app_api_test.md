
## 接口列表

#### 一. 用户

|  接口  | 说明 |
|------ |----- |
|[/p/org/addUser](#addUser)| 管理员添加用户|
|[/p/org/modifyUser](#modifyUser) | 管理员修改用户信息|
|[/p/org/delUser](#delUser) | 管理员删除用户|
|[/p/org/userList](#userList)| 显示所有用户信息|
|[/p/org/resetUserPw](#resetUserPw)|管理员重置用户密码|
|[/p/org/activeInvite](#activeInvite)| 激活邀请|
|[/p/org/userTagList](#userTagList)| 用户对应的标签列表|
|[/p/org/activeDevList](#activeDevList)| 激活设备列表|
|[/p/org/templateDownload](#templateDownload)| 批量导入用户（模版下载）|
|[/p/org/bulkLoad](#bulkLoad)| 批量导入用户|

***
#### 二.用户组
|  接口  | 说明 |
|------ |----- |
|[/p/org/addDepart](#addDepart)| 管理员添加用户组|
|[/p/org/updateDepart](#updateDepart) | 管理员修改用户组信息|
|[/p/org/delDepart](#delDepart) | 管理员删除用户组|
|[/p/org/getDepartList](#getDepartList)| 显示所有用户组信息| 
|[/p/org/departManagement](#departManagement_get)|用户组管理(用户组组内(外)用户信息)|
|[/p/org/departManagement](#departManagement_post)|用户组管理(用户组添加/删除用户)|
|[/p/org/members](#members)| 显示筛选的用户|
|[/p/org/getDepartById](#getDepartById)| 显示关联用户|
***
#### 三.用户标签
|  接口  | 说明 |
|------ |----- |
|[/p/org/addTag](#addTag)| 管理员添加标签 |
|[/p/org/updateTag](#updateTag) | 管理员修改用户标签|
|[/p/org/deleteTag](#deleteTag) | 管理员删除标签|
|[/p/org/tagList](#tagList)| 显示所有用户标签|
|[/p/org/tagManagement](#tagManagement_get)|标签管理(显示标签内(外)用户)|
|[/p/org/tagManagement](#tagManagement_post)|标签管理(标签添加/删除用户)|
***
#### 四. 应用商店
|  接口  | 说明 |
|------ |----- |
|[/p/app/upload](#appupload)| 管理员上传应用 |
|[/p/app/list](#applist) | 显示所有的应用程序 |
|[/p/app/del](#appdel) | 管理员删除应用程序 |
|[/p/app/modify](#appmodify)| 修改应用程序的信息 |
|[/p/org/authApp](#authApp)| 应用授权 |
|[/p/app/devByUserId](#devByUserId)| 查看应用安装的信息 |

***
#### 五. 应用标签
|  接口  | 说明 |
|------ |----- |
|[/p/org/addAppTag](#addAppTag)| 管理员添加标签 |
|[/p/org/appTagList](#appTagList) | 显示所有的标签 |
|[/p/org/deleteAppTag](#deleteAppTag) | 管理员删除标签 |
|[/p/org/updateAppTag](#updateAppTag)| 修改标签信息 |
|[/p/org/appTagManagement](#appTagManagement_get)| 标签管理(标签内(外)应用)|
|[/p/org/appTagManagement](#appTagManagement_post)| 标签管理(标签内添加／删除应用)|
|[/p/org/appInfoByAppTag](#appInfoByAppTag)| 筛选功能－标签内用户信息|
***
#### 六. 应用黑名单
|  接口  | 说明 |
|------ |----- |
|[/p/app/addBlackList](#addBlackList)| 管理员添加黑名单 |
|[/p/app/ShowBlackList](#ShowBlackList) | 显示黑名单 |
|[/p/app/delBlackList](#delBlackList) | 管理员删除黑名单 |
|[/p/app/updateBlackList](#updateBlackList)| 修改黑名单信息 |
|[/p/app/statusBlackList](#statusBlackList)| 黑名单管理 |
***
#### 七. 邮箱设置测试接口
|  接口  | 说明 |
|------ |----- |
|[/p/org/testEmail](#testEmail)| 邮箱设置测试 |
***
#### 八. 日志接口
|  接口  | 说明 |
|------ |----- |
|[/p/org/viewLog](#viewLog)| 管理员日志查询 |
|[/p/org/exportExcel](#exportExcel)| 管理员导出日志 |
***
## 接口详情
* <span id = "addUser">管理员添加用户</span>

    * 接口地址：/p/org/addUser

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/addUser

    * 接口备注：系统添加用户，设置用户的登陆信息及基本信息

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |account |string|true|用户账户|
        |active_code | string |true| 用户激活码 |
        |valid_time | string |true| 激活码有效期 |
        |email | string | true | 用户邮箱 |
        |name | string | true | 用户名称 |
        |phone| string | true | 用户手机号 |
        |depart_id | string | true | 所属部门编号 |
        |tag_id | list | true | 所属标签编号 |
        

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |
        |user_id | int|用户编号|
        |create_time | string | 创建时间 |

    * JSON返回示例：

             {
                 "rt": 0,
                 "user_id" : 1,
                 "create_time" : "2017-08-24 14:28:53"
             }


---


* <span id = "modifyUser"> 修改用户信息 </span>

    * 接口地址：/p/org/modifyUser

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/modifyUser

    * 接口备注：修改用户的基本信息／所属部门／所属标签

    * 请求参数说明：

 		| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |id |int|true|用户编号(唯一标识)|
        |email | string | true | 用户邮箱 |
        |name | string | true | 用户名称 |
        |phone| string | true | 用户手机号 |
        |depart_id | string | true | 所属用户组编号 |
        |tag_id | list | true | 所属标签编号 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码  |

    * JSON返回示例：

             {
                 "rt": 0
               }


---
* <span id = "delUser">管理员删除用户</span>

    * 接口地址：/p/org/delUser

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/delUser

    * 接口备注：管理员删除单个用户或多个用户

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        | sid |string|true|管理员session_id|
        | users | list |true| 用户编号列表 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                 "rt": 0
				｝
            
---

* <span id = "userList"> 显示所有的用户信息 </span>

    * 接口地址：/p/org/userList

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/userList?length=30&sid=kqmPuJkrEeeAu1JUABZkgg==&start=1

    * 接口备注：显示所有的用户信息

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |start | int | true | |
        |length | int | true | |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码 |

    * JSON返回示例：

             {
                 "rt": 0,
                 "total_count": 1,
                 "user_list": [
                 		{ "status" :0,
                 		  "account" : "test",
                 		  "name": "测试",
                 		  "depart_id": 5,
						  "id" : 33,
						  "phone": "18654891235",
						  "depart_name" : "秘书",
						  "email" : "test@163.com",
						  "tag_num" : 1,
						  "dev_num" : 0
						  }
                 	]
			}

---

* <span id = "resetUserPw"> 管理员重置密码 </span>

    * 接口地址：/p/org/resetUserPw

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/resetUserPw

    * 接口备注：管理员重置用户登陆客户端的密码

    * 请求参数说明：
    
        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |account | string | true | 用户账号|
        |pw | string | true | 用户密码|
        
    * 返回参数说明：
    
    	| 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码 |

    * JSON返回示例：

             {
				rt : 0
             }


---

* <span id = "activeInvite"> 激活邀请 </span>

    * 接口地址：/p/org/activeInvite

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/activeInvite
    
    * 接口备注：该接口用于给没有激活的用户发送邮件，提示激活。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |user_list | list | true | 邀请激活的用户的编号列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码

    * JSON返回示例：

             {
                 "rt": 0,
             }


---

* <span id = "userTagList"> 用户对应的标签列表 </span>

    * 接口地址：/p/org/userTagList

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/userTagList

    * 接口备注：该接口用于查看用户所属的标签列表。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |id | int |true| 用户的编号 |
        |sid | string |true|用户session id|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码 |
        | doc| object | 用户标签的相关信息|

    * JSON返回示例：

           { "rt": 0, 
             "doc": [
             { "available": 1, 
               "status": 0, 
               "users": [6], 
               "creator": "admin", 
               "name": "管理", 
               "authorized_app": [], 
               "create_time": "2017-08-31 10:38:24", 
               "modify_time": "2017-08-31 15:44:05", 
               "tag_type": 0, 
               "id": 10.0, 
               "description": ""
             }
            ]
           }

---


* <span id = "activeDevList"> 激活设备列表 </span>

    * 接口地址：/p/org/activeDevList

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/userTagList

    * 接口备注：该接口用于查看用户所登陆的设备。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |id | int | true | 用户的编号|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码|
        | doc | object| 设备相关信息|

    * JSON返回示例：

             {
                 "rt": 0,
                 "doc": [
                 	  { "dev_id": "c3c2751627f82236", 
                 		"login_time": "2017-09-15 14:19:09", 
                 		"online": 0, "uid": 24, 
                 		"policy_id": -1
                 	  }                 
                 	 ]
             }
                     
---
* <span id = "templateDownload"> 批量导入用户模版下载 </span>

    * 接口地址：/p/org/templateDownload

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/bulkLoad

    * 接口备注：该接口用于下载批量导入用户的正确模版。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |name| string | true | 模版名称 |

    * 返回参数说明：无

---

* <span id = "bulkLoad"> 批量导入用户 </span>

    * 接口地址：/p/org/bulkLoad

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/bulkLoad

    * 接口备注：通过excel文件批量导入用户。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |file_data | file | true | 上传的文件|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码
        | fail_user_list | object|导入失败的用户列表 |

    * JSON返回示例：

             {
                 "rt": 0,
                 "fail_user_list": {［］}
             }

---
* <span id = "addDepart"> 管理员添加用户组 </span>

    * 接口地址：/p/org/addDepart

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/addDepart

    * 接口备注：管理员添加用户组。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |name | string | true | 部门名称|
        |parent_id| int | true | 父级部门编号|
        |status | int | true | 用户组状态标识|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码|
        | depart_id | int | 用户组编号|
        | create_time | object|创建时间 |

    * JSON返回示例：

             {
               "rt":0,
               "depart_id":29,
               "createTime":"2017-09-16 12:59:10"
             }

---
* <span id = "updateDepart"> 管理员修改用户组信息 </span>

    * 接口地址：/p/org/updateDepart

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/updateDepart

    * 接口备注：管理员修改用户组信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |id | int | true | 用户组编号 |
        |name | string | true | 部门名称|
        |parent_id| int | true | 父级部门编号|
        |status | int | true | 用户组状态标识|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|错误码|

    * JSON返回示例：

             {
               "rt":0
             }

---

* <span id = "delDepart"> 管理员删除用户组 </span>

    * 接口地址：/p/org/delDepart

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/delDepart

    * 接口备注：管理员删除用户组。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |departs | list | true | 删除的用户组编号列表 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

             {
               "rt":0
             }

---

* <span id = "getDepartList"> 显示用户组的信息 </span>

    * 接口地址：/p/org/getDepartList

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/getDepartList？sid=kqmPuJkrEeeAu1JUABZkgg==&depart_id=0

    * 接口备注：管理员获取所有用户组的详细信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |depart_id | int | true | 用户组编号(获取所有根级部门时编号为0)|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        |depart_list| object | 所有用户组信息|

    * JSON返回示例：

             {
             	"rt": 0, 
             	"depart_list": [
             				{"status": 1, 
             				 "update_time": "2017-09-04 13:41:45", 
             				 "name": "usergroup3", 
             				 "creator": "admin", 
             				 "layer": 1, 
             				 "child_node": 1, 
             				 "current_num": 0, 
             				 "id": 17}, 
             				{"status": 1, 
             				 "update_time": "2017-09-04 13:41:23", 
             				 "name": "usersgroup1", 
             				 "creator": "admin", 
             				 "layer": 1, 
             				 "child_node": 1, 
             				 "current_num": 5, 
             				 "id": 15}
             				 ]
             }
---

* <span id = "departManagement_get"> 用户组组内(外)的用户信息 </span>

    * 接口地址：/p/org/departManagement

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/departManagement？sid=kqmPuJkrEeeAu1JUABZkgg==&depart_id=2

    * 接口备注：该接口用于查看选择的用户组的组内用户及组外用户。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |depart_id | int | true | 用户组编号|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        |depart_users| object | 用户组的组内用户信息|
        |available_users| object | 用户组的组外用户信息|

    * JSON返回示例：

             {
              "rt": 0, 
              "available_users": [
              			{"account": "guozhenxiang", 
              			 "depart_id": 5, 
              			 "name": "\u90ed\u632f\u76f8", 
              			 "id": 24}, 
              			{"account": "zhangjun", 
              			 "depart_id": 2, 
              			 "name": "\u5f20\u4fca", 
              			 "id": 6}], 
              "depart_users": [
              			{"account": "liuqiang", 
              			 "depart_id": 9, 
              			 "name": "\u5218\u5f3a", 
              			 "id": 32}
              			 ]
             }
---

* <span id = "departManagement_post"> 用户组添加／删除用户 </span>

    * 接口地址：/p/org/departManagement

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/departManagement
    
    * 接口备注：该接口用于像用户组内添加用户或者删除用户。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |depart_id | int | true | 用户组编号|
        |user_list| list | true | 用户编号列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

             {
              "rt": 0
             }
---

* <span id = "members"> (筛选功能)显示筛选的用户信息 </span>

    * 接口地址：/p/org/members

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/members
    
    * 接口备注：该接口用于根据筛选条件显示符合条件的用户信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |depart_id | int | false | 用户组编号|
        |tag_id | int | false | 标签编号 |
        |keyword| string | false | 模糊查询关键字|
        |start_page| int | true | 显示分页|
        |page_page| int | true | 显示分页|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        |user_list| object | 用户信息|
        |total_count | object | 用户数|
        | current_page | object | 当前页面数|

    * JSON返回示例：

           {
            "rt": 0, 
            "total_count": 1, 
            "current_page": 1, 
            "user_list": [
            		{"status": 0, 
            		 "account": "test", 
            		 "name": "测试", 
            		 "depart_id": 9, 
            		 "id": 32, 
            		 "phone": "13800138000", 
            		 "create_time": "2017-09-15 14:09:02", 
            		 "depart_name": "研发", 
            		 "email": "test@appssec.com", 
            		 "tag_num": 0, "dev_num":0}
            		 ]
           }
---

* <span id = "addTag"> 管理员添加用户标签 </span>

    * 接口地址：/p/org/addTag

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/addTag
    
    * 接口备注：该接口用于管理员添加标签。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |description | string | true | 标签的描述信息|
        |name| string | true | 标签名称|
        |tag_type| int | true | 标签类型|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

           {
            "rt": 0
           }
---

* <span id = "updateTag"> 管理员修改用户标签信息 </span>

    * 接口地址：/p/org/updateTag

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/updateTag
    
    * 接口备注：该接口用于管理员修改用户标签信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |tag_id | int | true | 标签的编号|
        |description | string | true | 标签的描述信息|
        |name| string | true | 标签名称|
        |tag_type| int | true | 标签类型|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

           {
            "rt": 0
           }
---

* <span id = "deleteTag"> 管理员删除用户标签 </span>

    * 接口地址：/p/org/deleteTag

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/deleteTag
    
    * 接口备注：该接口用于管理员删除用户标签。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |tag_ids | list | true | 标签编号的列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

           {
            "rt": 0
           }
---

* <span id = "tagList"> 显示所有的用户标签信息 </span>

    * 接口地址：/p/org/tagList

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/tagList
    
    * 接口备注：该接口用于管理员查看所有的标签信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |start_page | int | true ||
        |page_length| int | true ||

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | total_count | int | 标签数量|
        | tag_list | object | 标签的详细信息|

    * JSON返回示例：
    
          {
          "rt": 0, 
          "total_count": 2, 
          "tag_list": [
          			{"status": 1, 
          			"user_num": 0, 
          			"description": "gfdgsfdsgertwe", 
          			"creator": "admin", 
          			"name": "标签1", 
          			"create_time": "2017-08-30 18:06:55", 
          			"tag_type": 1, 
          			"id": 2.0},
          			{"status": 0, 
          			"user_num": 1, 
          			"description": "tyuo", 
          			"creator": "admin", 
          			"name": "标签2", 
          			"create_time": "2017-08-31 09:29:57", 
          			"tag_type": 1, 
          			"id": 7.0}
          		]
          }
---

* <span id = "tagManagement_get"> 标签管理(显示标签内(外)用户) </span>

    * 接口地址：/p/org/tagManagement

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/tagManagement?sid=kqmPuJkrEeeAu1JUABZkgg==&tag_id=1
    
    * 接口备注：该接口用于返回标签内(外)用户的信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string |true|用户session id|
        |tag_id | int | true | 标签的编号|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | tag_users | object | 标签内用户|
        | available_users | object | 标签外用户|

    * JSON返回示例：
    
          {"rt": 0,
          "tag_users": [
           		{"account": "zhangjun", 
           		 "name": "\u5f20\u4fca", 
           		 "id": 6}, 
           		 {"account": "niexinyu", 
           		 "name": "\u8042\u65b0\u5b87", 
           		 "id": 29}, {"account": "youli", "name": "\u5c24\u4e3d", "id": 33}
           		 ]
           "available_users": [
           		{"account": "guozhenxiang", 
           		 "name": "\u90ed\u632f\u76f8", 
           		 "id": 24}
           		 ]
          }
---

* <span id = "tagManagement_post"> 标签管理(标签添加/删除用户) </span>

    * 接口地址：/p/org/tagManagement

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/tagManagement
    
    * 接口备注：该接口用于管理员管理标签内的用户。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |tag_id | int | true | 标签的编号|
        |user_list | list | true | 用户编号列表| 

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：
    
          {
          	"rt": 0
          }
---

* <span id = "appupload"> 管理员上传应用</span>

    * 接口地址：/p/app/upload

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/upload
        
    * 接口备注：该接口用于管理员上传客户端应用。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |file | string | true | 安装包上传信息 |
        |name | string | true | 应用自定义名称|
        |platform | string | true | 应用安装的系统类型(android/ios)|
        |dev_type | string | true | 应用安装的设备类型(phone/pad/phone&pad)|
        |visit_type | int | true | 应用访问类型标识|
        |app_type| int | true | 应用类型标识|
        |install_type| string | true | 应用安装类型标识|
        |describe | string | true | 应用描述信息|
        |sysRequest | int | true | 系统最低要求|
        |apptag | int | true | 应用标签|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |

    * JSON返回示例：

			{
			 "rt": 0
			}
			
---

* <span id = "applist"> 显示所有的应用</span>

    * 接口地址：/p/app/list

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：
    
    		http://dev-server.appssec.cn/p/app/list?
    								sid=kqmPuJkrEeeAu1JUABZkgg==&start_length=1&page_length=10&platform=all
        
    * 接口备注：该接口用于管理员上传客户端应用查看上传的应用列表。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |platform | string | true | 系统类型(android/ios/all)|
        |start_page | int | true |分页显示功能页码数|
        |page_length| int | true |分页显示功能每页行数|
        |keyword| string |false |模糊查询功能，关键字|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |
        | app_list | object | 应用信息|
        | total_count | object |应用数量 |
        | start_page | int | 起始页|

    * JSON返回示例：

			{
			 "rt": 0, 
			 "apptag_list": [
			 		{"description": "\u63cf\u8ff01", 
			 		 "creator": "admin", 
			 		 "app_num": 1, 
			 		 "modify_time": "2017-09-12 15:11:32", 
			 		 "id": 1.0, 
			 		 "name": "\u5e94\u7528\u6807\u7b7e1"}
			 		 ], 
			 "total_count": 1
			}
---

* <span id = "appdel"> 管理员删除应用 </span>

    * 接口地址：/p/app/del

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/del
            
    * 接口备注：该接口用于管理员删除上传的应用。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|identify | list | true | 删除的应用的唯一标识|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "appmodify"> 管理员修改应用信息 </span>

    * 接口地址：/p/app/modify

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/modify
            
    * 接口备注：该接口用于管理员修改上传的应用的信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |id | int | true | 应用编号|
        |identify | string | true | 应用的唯一标识|
        |visit_type | int | true | 应用访问类型标识|
        |install_type| string | true | 应用安装类型标识|
        |describe | string | true | 应用描述信息|
        |sysRequest | int | true | 系统最低要求|
        |apptag | int | true | 应用标签|


    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 |


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "authApp"> 管理员授权应用 </span>

    * 接口地址：/p/org/authApp

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/authApp
            
    * 接口备注：该接口用于管理员针对用户／标签／用户组 授权不同的应用。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |state | int | true | 授权标识(1:授权/0:取消授权)|
        |user_list | list | false | 用户编号列表|
        |depart_id| list | false | 用户组编号列表|
        |tag_list | list | false | 标签编号列表|
		|identify | string | true | 应用的唯一标识|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
			
---
* <span id = "devByUserId"> 管理员查看应用的安装信息 </span>

    * 接口地址：
    * /p/app/devByUserId

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/app/devByUserId
            
    * 接口备注：该接口用于管理员针对用户／标签／用户组 授权不同的应用。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|identify | string | true | 应用的唯一标识|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        ｜doc｜list｜应用安装的信息｜


    * JSON返回示例：

			{
			 "rt": 0,
			 "doc": [
			 	{
			 	 "dev_name": "EVA-AL00,SM-G9006W,MHA-AL00,Nexus_6", 
			 	 "user_name": "test"
			 	 }
			 	]
			}
---

* <span id = "addAppTag"> 管理员添加应用标签 </span>

    * 接口地址：/p/org/addAppTag

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/addAppTag
            
    * 接口备注：该接口用于管理员添加应用标签。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |description | string | true | 标签描述信息 |
        |name | string | true | 标签名称 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "appTagList"> 显示标签信息 </span>

    * 接口地址：/p/org/appTagList

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/appTagList?page_length=30&sid=kqmPuJkrEeeAu1JUABZkgg==&start_page=1            
    
    * 接口备注：该接口用于显示所有的应用标签信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |start_page | int | true |  |
        |page_length | int | true |  |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        | total_count | int | 应用标签数量 |
        | apptag_list | object | 应用标签的信息|


    * JSON返回示例：

			{
			 "rt": 0, 
			 "apptag_list": [
			 		{"description": "测试", 
			 		 "creator": "admin", 
			 		 "app_num": 1, 
			 		 "modify_time": "2017-09-12 15:11:32", 
			 		 "id": 1.0, 
			 		 "name": "test"}
			 		 ], 
			 "total_count": 1
			}
---


* <span id = "deleteAppTag"> 管理员删除应用标签 </span>

    * 接口地址：/p/org/deleteAppTag

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/deleteAppTag
            
    * 接口备注：该接口用于管理员删除应用标签。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |apptag_ids | list | true | 标签编号的列表 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---


* <span id = "updateAppTag"> 管理员修改应用标签信息 </span>

    * 接口地址：/p/org/updateAppTag 

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/updateAppTag 
            
    * 接口备注：该接口用于管理员修改应用标签信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |apptag_id | int | true | 标签编号 |
        |name | string | true | 修改后的标签名称|
        |description | string | true | 修改后的标签描述信息 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "appInfoByAppTag"> 筛选功能－标签内应用的信息 </span>

    * 接口地址：/p/org/appInfoByAppTag 

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/appInfoByAppTag?page_length=30&sid=kqmPuJkrEeeAu1JUABZkgg==&start_page=1&id=2  
            
    * 接口备注：该接口用于应用商店的搜索功能，查看标签对应的应用的信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |id | int | true | 标签编号 |
        |start_page | int | true | |
        |page_length | int | true | |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        | total_count | int | 应用数量 |
        | start_page | int | 起始页 |
        | app_list | object | 应用信息 |


    * JSON返回示例：

			{ 
			 "rt": 0, 
			 "total_count": 1, 
			 "app_list": [
			 		{"app_name": "搜狗", 
			 		 "package_name": "com.wandoujia.phoenix2", 
			 		 "install_num": 0, 
			 		 "modified": "2017-09-13 18:13:44", 
			 		 "visit_type": "0", 
			 		 "operator": "admin", 
			 		 "tag_name": "test", 
			 		 "version": "5.51.20", 
			 		 "platform": 1, 
			 		 "download": "wandou.apk", 
			 		 "dev_num": 8, 
			 		 "id": 6.0, 
			 		 "apptag": 1}
			 		 ], 
			 "start_page": 1
			}
---

* <span id = "appTagManagement_get"> 应用标签管理(标签内(外)应用信息) </span>

    * 接口地址：/p/org/appTagManagement 

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/appTagManagement?sid=kqmPuJkrEeeAu1JUABZkgg==&apptag_id=2  
            
    * 接口备注：该接口用于查看标签内(外)应用信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |apptag_id | int | true | 标签编号 |

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        | tag_apps | object | 标签内的应用 |
        | available_apps | object | 标签外的应用 |


    * JSON返回示例：

			{
			 "rt": 0, 
			 "available_apps": [
			 		{"version": "2.6.1", 
			 		 "id": 4.0, 
			 		 "app_name": "爱奇艺"}
			 		 ]
			 "tag_apps": [
			 		{"version": "5.51.20", 
			 		 "id": 6.0, 
			 		 "app_name": "支付宝"}
			 		 ]
			}
---

* <span id = "appTagManagement_post"> 应用标签管理(标签内添加／删除应用) </span>

    * 接口地址：
    * /p/org/appTagManagement 

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/appTagManagement 
               
    * 接口备注：该接口用于管理员操作标签内添加／删除应用。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |apptag_id | int | true | 标签编号 |
        |app_list | list | true | 应用编号的列表|

    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "addBlackList"> 管理员添加应用黑名单 </span>

    * 接口地址：/p/app/addBlackList 

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/addBlackList 
               
    * 接口备注：该接口用于管理员添加应用黑名单。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |name | string | true | 黑名单名称 |
        |describe | string | true | 应用黑名单描述信息|
        |package_name | string | true | 包名|
        |app_name | string | true | 应用名称 |
 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---


* <span id = "ShowBlackList"> 显示所有的应用黑名单信息 </span>

    * 接口地址：/p/app/ShowBlackList 

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/app/ShowBlackList?page_length=10&sid=kqmPuJkrEeeAu1JUABZkgg==&start_page=1
               
    * 接口备注：该接口用于管理员查看所有的应用黑名单的信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
        |start_page | int | true |  |
        |page_length | int | true | |

 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        | app_list | object | 黑名单信息 |
        | total_count | int | 黑名单数量 |
        | start_page | int | 起始页 |


    * JSON返回示例：

			{
			 "rt": 0, 
			 "total_count": 1, 
			 "app_list": [
			 	{"status": 0, 
			 	 "app_name": "QQ", 
			 	 "package_name": "qq.apk", 
			 	 "describe": "QQ", 
			 	 "modified": "2017-09-13 09:45:49", 
			 	 "operator": "admin", 
			 	 "id": 3, 
			 	 "name": "QQ"}
			 	 ], 
			 "start_page": 1
			}
---


* <span id = "delBlackList"> 管理员删除黑名单 </span>

    * 接口地址：/p/app/delBlackList 

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/delBlackList
                   
    * 接口备注：该接口用于管理员删除应用黑名单。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|id | int | true | 黑名单编号 |

 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "updateBlackList"> 管理员修改黑名单的信息 </span>

    * 接口地址：/p/app/updateBlackList

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/updateBlackList
                   
    * 接口备注：该接口用于管理员修改应用黑名单的信息。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|id | int | true | 黑名单编号 |
		|name | string | true | 修改后的黑名单名称|
		|describe | string | true | 修改后的黑名单的描述信息|
		|app_name | string | true | 修改后的应用的名称 |
		|package_name | string | 修改后的包名 |

 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "statusBlackList"> 管理员启用／禁用黑名单 </span>

    * 接口地址：/p/app/statusBlackList

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/app/statusBlackList
                   
    * 接口备注：该接口用于管理员启用／禁用黑名单。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|id | int | true | 黑名单编号 |
		|flag | int | true | 操作标识|

 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "testEmail"> 管理员进行邮箱测试 </span>

    * 接口地址：/p/org/testEmail

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：http://dev-server.appssec.cn/p/org/testEmail
                   
    * 接口备注：该接口用于管理员设置邮箱信息时进行邮箱测试。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|email_server | string | true | 邮箱服务器地址信息 |
		|send_user | string | true | 邮件发送者信息 |
		|send_pwd | string | true | 邮件发送者授权码 |
		|recv_user | string | true | 邮件接收者邮箱信息 |

 
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---

* <span id = "viewLog"> 管理员查看日志 </span>

    * 接口地址：/p/org/viewLog

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/viewLog
                   
    * 接口备注：该接口用于管理员对管理端进行的操作日志进行查看。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|category | string | true | 日志类型 |
		|start_time | string | true | 日志查询起始时间 |
		|end_time | string | true | 日志查询结束时间 |
		|log_type | string | true | 日志操作类型 |
		|keyword | string | true | 查询关键字 |
		|start_page | string | true | 分页显示页码数 |
		|page_length | string | true | 分页显示长度 |
		
 	
 	* 备注:
 	
 		category参数－日志类型说明
 		
 		| 名称 | 说明 |
 		|----- |------|
        |userLog|用户管理日志	|					
        |appLog|应用管理日志|
        |devLog|设备管理日志|
        |policyLog|策略管理日志|
        |fileLog|内容管理日志|
        |adminLog|管理员日志|
		|clientLog|客户端日志|
		|clientAppLog|应用日志|					
		|violationLog|违规情况日志|								
	* 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 
        | logInfo | list | 查询的日志信息 |
        | total_count | int| 日志总数 |


    * JSON返回示例：

			{
			 "rt": 0,
			 "total_count": 2, 
			 "logInfo": [
			 	{"effect_target": "test110", 
			 	 "creator": "admin", 
			 	 "opt_time": "2018-01-24 16:07:31", 
			 	 "state": "成功", 
			 	 "operate": "修改用户", 
			 	 "log_type": "用户操作"}, 
			 	{"effect_target": "test1", 
			 	 "creator": "admin", 
			 	 "opt_time": "2018-01-11 14:48:36", 
			 	 "state": "成功", 
			 	 "operate": "删除用户", 
			 	 "log_type": "用户操作"}
			 	}
			 ]
			}
---

* <span id = "exportExcel"> 管理员导出日志 </span>

    * 接口地址：/p/org/exportExcel

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：http://dev-server.appssec.cn/p/org/exportExcel
                   
    * 接口备注：该接口用于管理员导出相应的日志，日志格式为xls。

    * 请求参数说明：
    
    	| 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid | string | true | 用户session id |
		|category | string | true | 日志类型 |
		
	 * 备注:
 	
 		category参数－日志类型说明
 		
 		| 名称 | 说明 |
 		|----- |------|
        |userLog|用户管理日志	|					
        |appLog|应用管理日志|
        |devLog|设备管理日志|
        |policyLog|策略管理日志|
        |fileLog|内容管理日志|
        |adminLog|管理员日志|
		|clientLog|客户端日志|
		|clientAppLog|应用日志|					
		|violationLog|违规情况日志|
		
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int| 错误码 | 


    * JSON返回示例：

			{
			 "rt": 0
			}
---