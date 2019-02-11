
## 接口列表

#### 一. 用户

|  接口  | 说明 |
|------ |----- |
|[/p/file/authFileList](#authFileList)| 获取授权或非授权文件列表|
|[/p/file/downloadFile](#downloadFile) | 文档下载 |
|[/p/file/viewFile](#viewFile) | 用户查看文档统计 |

***

## 接口详情
* <span id = "authFileList"> 授权文件列表，搜索返回文件列表 </span>

    * 接口地址：/p/file/authFileList

    * 返回格式：Json

    * 请求方式：Post

    * 请求示例：https://192.168.1.25:8002/p/file/authFileList
    
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