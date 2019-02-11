Date.prototype.__defineGetter__('ago', function () {
    var diff = Math.floor(((new Date()).getTime() - this.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);
    return day_diff == 0 && (
        diff < 60 && diff+"秒前"
        || diff < 3600 && Math.floor(diff / 60) + "分钟前"
        || diff < 86400 && Math.floor(diff / 3600) + "小时前"
    )
        || day_diff == 1 && "昨天"
        || day_diff == 2 && "前天"
        || day_diff < 30 && day_diff + "天前"
})
t=new Date("16:15:00 10/25/2018");
console.log(t.ago);