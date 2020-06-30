
const quarters = [
    {startDay:'01-01', endDay:'03-31'},
    {startDay:'04-01', endDay:'06-30'},
    {startDay:'07-01', endDay:'09-30'},
    {startDay:'10-01', endDay:'12-31'}
]
var Dbus = function (dbus, day=0){
    let startDay = ''
    let endDay = ''
    let date = new Date()
    // date.setDate(new Date())
    let today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()

    switch (dbus) {

        case '本周':
            endDay = today      //本周至今
            date.setDate(date.getDate() - date.getDay() + day)	    //本周第一天 可设置周一为第一天
            startDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()    
            return [startDay, endDay]

        case '上周':
            date.setDate(date.getDate() - date.getDay() + day)
            let theWeekStart = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()     //本周第一天
            startDay = (new Date(new Date(theWeekStart) - 7*24*60*60*1000)).toLocaleDateString().replace(/\//g,'-')
            endDay = (new Date(new Date(theWeekStart) - 24*60*60*1000)).toLocaleDateString().replace(/\//g,'-')
            return [startDay, endDay]

        case '本月':
            endDay = today  //本月至今
            date.setDate(1)
            startDay = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + "0"+date.getDate()  //本月第一天
            return [startDay, endDay]

        case '上月':
            let year = date.getFullYear()
            let month = date.getMonth()
            if(month===0){
                month=12
                year=year-1
            }
            if (month < 10) {
                month = "0" + month
            }
            startDay = year + "-" + month + "-" + "01";
            let lastDay = new Date(year, month, 0)
            endDay = year + "-" + month + "-" + lastDay.getDate()
            return [startDay, endDay]

        case '本季度':
            let _year = date.getFullYear()
            let _month = date.getMonth() + 1
            let _list = []
            if (_month <= 3) {
                _list = quarters[0]
            }
            if (_month >= 10) {
                _list = quarters[3]
            }
            if (3 < _month && _month <= 6) {
                _list = quarters[1]
            }
            if (6 < _month && _month<= 9) {
                _list = quarters[2]
            }
            startDay = _year + "-" + _list.startDay
            endDay = _year + "-" + _list.endDay
            return [startDay, endDay]

        case '上季度':
            let $year = date.getFullYear()
            let $month = date.getMonth() + 1
            let $list = []
            if ($month <= 3) {
                $list = quarters[3]
            }
            if ($month >= 10) {
                $list = quarters[2]
            }
            if (3 < $month && $month <= 6) {
                $list = quarters[0]
            }
            if (6 < $month && $month<= 9) {
                $list = quarters[1]
            }
            startDay = $year + "-" + $list.startDay
            endDay = $year + "-" + $list.endDay
            return [startDay, endDay]

        default:
            console.log('default')
            break
    }
}
module.exports = Dbus