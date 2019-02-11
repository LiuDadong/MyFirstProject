
## 接口列表

#### 一. 用户

|  接口  | 说明 |
|------ |----- |
|[/p/file/uploadFile](#uploadFile)| 管理员上传文档|
|[/p/file/updateFile](#updateFile) | 管理员修改文档信息|
|[/p/file/deleteFile](#deleteFile) | 管理员删除文档|
|[/p/file/listFile](#listFile)| 显示所有文档信息|
|[/p/file/viewFileStatus](#viewFileStatus)|管理员查看文档已看/已下载情况|
|[/p/file/authFile](#authFile)| 管理员文档授权|

***

## 接口详情
* <span id = "uploadFile">管理员上传文档</span>

    * 接口地址：/p/file/uploadFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/uploadFile

    * 接口备注：该接口用于管理员上传用于分发的文档。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |file_data | string | true | file类型表单名称 |
        |version | string |true| 版本号 |
        |describe| string |true| 文档描述信息 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }


---

* <span id = "updateFile">管理员修改文档信息</span>

    * 接口地址：/p/file/updateFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/updateFile

    * 接口备注：该接口用于管理员对已经上传的文档进行信息修改。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |id | int | true | 文档的编号id |
        |version | string |true| 版本号 |
        |describe| string |true| 文档描述信息 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }


---

* <span id = "deleteFile">管理员删除文档</span>

    * 接口地址：/p/file/deleteFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/deleteFile

    * 接口备注：该接口用于管理员删除文档。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        |sid |string | true | 管理员的session_id |
        |id | list | true | 文档的编号id的数组 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "listFile">管理员查看文档</span>

    * 接口地址：/p/file/listFile

    * 返回格式：Json

    * 请求方式：Get

    * 请求示例：https://192.168.1.25:1443/p/file/listFile

    * 接口备注：该接口用于管理员查看上传的所有的文档信息。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        | sid | string | true | 管理员的session_id |
        | start_page | int | true | 分页显示功能－页码数 |
        | page_length | int | true | 分页显示功能－信息数 |
        | keyword | string | false | 模糊查询关键字 |
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|----|
        | rt | int|状态码 |
        | file_list | list | 查询结果 |
        | start_page | int | 页码数 |
        | total_count | int | 符合查询条件的数据总数 |

    * JSON返回示例：

             {
                "rt": 0,
                "file_list": [],
                "start_page": 1,
                "total_count": 0
             }


---

* <span id = "authFile">管理员授权文档</span>

    * 接口地址：/p/file/authFile

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/authFile

    * 接口备注：该接口用于管理员对上传的所有的文档进行用户授权。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        | sid | string | true | 管理员的session_id |
        | ids | list | true | 被授权文档的编号id数组 |
        | state | int | true | 授权标识 |
        | user_list | list | false | 用户编号列表 |
        | depart_list | list | false | 用户组编号列表 |
        | tag_list | list | false | 编号编号列表 |
        
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|---- |
        | rt | int　| 状态码 |

    * JSON返回示例：

             {
                "rt": 0
             }

---

* <span id = "viewFileStatus">管理员查看文档状态</span>

    * 接口地址：/p/file/viewFileStatus

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:1443/p/file/viewFileStatus

    * 接口备注：该接口用于管理员查看文档状态。

    * 请求参数说明：

        | 名称 | 类型 | 必填 |说明|
        |----- |------| ---- |----|
        | sid | string | true | 管理员的session_id |
        | id | int | true | 文档的编号id |
        | flag | string | true | 查看相关信息的标识(view/download) |
        
        
    * 返回参数说明：

        | 名称 | 类型 |说明|
        |----- |------|---- |
        | rt | int　| 状态码 |
        | data | list　| 查询结果 |

    * JSON返回示例：

             {
                "rt": 0,
                "data": []
             }

---