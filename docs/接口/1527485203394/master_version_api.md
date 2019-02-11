
## 接口列表

#### 一. 用户

|  接口  | 说明 |
|------ |----- |
|[/p/file/uploadApp](#uploadApp)| 管理员上传SecSpace版本|
|[/p/file/listApp](#listApp) | 显示所有SecSpace版本信息|
|[/p/org/deleteApp](#deleteApp) | 管理员删除版本 |
|[/p/org/authSecspace](#authSecspace)| 管理员更改SecSpace版本的状态|
|[/p/org/modifyVersion](#modifyVersion)|管理员修改版本的相关信息|

***

## 接口详情
* <span id = "uploadApp">管理员上传SecSpace版本</span>

    * 接口地址：/p/file/uploadApp

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/uploadApp

    * 接口备注：该接口用于管理员上传SecSpace版本。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |fila_data | string | true | file上传的信息 |
        |name | string |true| 版本名称 |
        |versioncode | string |true| 版本号 |
        |status | string |true| 状态(是否立即生效) |
        |describe| string |true| 文档描述信息 |
        |platform | string |true| 平台(android/ios) |
        |dev_type | string |true| 设备类型(phone/pad) |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |
        | file_url | string | 下载链接 |

    * JSON返回示例：

             {
                "rt": 0,
                "file_url": "/p/file/download?filename=SecSpace.apk"
             }


---

* <span id = "listApp">显示所有SecSpace版本信息</span>

    * 接口地址：/p/file/listApp

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/file/listApp

    * 接口备注：该接口用于管理员查看所有SecSpace版本信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |start_page | int | true | 分页功能页码数 |
        |page_length | int |true| 分页功能当前页记录数 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int | 状态码 |
        | appList | list | 版本的详细信息 |
        |start | int | 分页功能页码数 |
        |total_count | int | 总记录数|

    * JSON返回示例：

             {
                "rt": 0,
                "total_count": 0,
                "start": 0,
                "appList": []
             }


---

* <span id = "deleteApp">管理员删除版本</span>

    * 接口地址：/p/org/deleteApp

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/org/deleteApp

    * 接口备注：该接口用于管理员删除版本。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |versions | list | true | 版本的编号_id的数组 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int | 状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "listFile">管理员更改SecSpace版本的状态</span>

    * 接口地址：/p/org/authSecspace

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/org/authSecspace

    * 接口备注：该接口用于管理员更改SecSpace版本的状态。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        | sid | string | true | 管理员的session_id |
        |status | string |true| 状态 |
        |_id | string |true| 版本的编号 |
        |platform | string |true| 平台(android/ios) |
        |dev_type | string |true| 设备类型(phone/pad) |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }


---

* <span id = "modifyVersion">管理员修改版本的相关信息</span>

    * 接口地址：/p/org/modifyVersion

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/org/modifyVersion

    * 接口备注：该接口用于管理员修改版本的相关信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 | 说明 |
        | ----- | ------ | ---- | ---- |
        | sid | string | true | 管理员的session_id |
        | _id | list | true | 版本的编号 |
        | name | string | true | 版本名称 |
        | versioncode | string | true | 版本号 |
        | describe | string |true | 文档描述信息 |

        
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|---- |
        | rt | int　| 状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

