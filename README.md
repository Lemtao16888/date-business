# DateBusiness

```
npm install data-business
```


## Usage

``` js
var Dbus = require('date-business')

Dbus(dbus,day) // 


```



## params

* `dbus` **{String}**: 时间段
* `day` **{Number}**: 设置本周第一天从周几开始(0:周日，1:周一)


## eg

``` js
import Dbus from 'date-business' 

console.log( Dbus("本周") )
// [本周第一天，本周至今]

console.log( Dbus("本周"), 1 )
// 本周第一天将从周一开始 周日结束
//[本周第一天，本周至今]

//可选（本周、上周、本月、上月、本季度、上季度）

```
