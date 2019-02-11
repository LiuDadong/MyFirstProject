var login_url = 'https://cemm.zhizhangyi.com:3000/emm';
var base_url = 'http://cemm.zhizhangyi.com:8081/';

//var base_url = 'http://localhost:8081/';
//var base_url = 'http://192.168.1.124:8080/';
/*    var base_url = 'http://192.168.3.248:8080/uusafe-emm-dv-rest';*/

var token = sessionStorage.getItem('token');
//var headers = {'getAuthorization':getAuthorization(),'Content-Type':'text/plain;charset=UTF-8'};


function getAuthorization() {
//    var companyCode = '9c8QUVzvtfC04vqT/ZM/oA==';
    var companyCode;
     var companyCodeFromSession = sessionStorage.getItem('companyCode');
     if(companyCodeFromSession!=null){
             companyCode = companyCodeFromSession;
     }else{
             var param = window.location.search;
             if(param==''||param.length<1||param==""){
                     console.log('param is null---'+param);
                     window.location.href = login_url;
             }
             console.log('param='+param);
 //          var code = decryptByUuid(param.substring(1,param.length));
 //          console.log('code='+code);
 //          if(code==''||code=='undefine'){
 //                  console.log('code is null');
 //                  window.location.href = login_url;
 //          }
 //          var cc = code.split("=");
 //          var cc = param;
             var code = param.substring(1,param.length);
             console.log('code='+code);
             if(code==''||code=='undefine'||code==""){
                     console.log('code is null');
                     window.location.href = login_url;
             }
             if(code.length>1){
                     //妫€楠宑ompanyCode鏄惁瀛樺湪
                     var codeFlag = checkCompanyCodeExists(code);
                     if(codeFlag==0){
                             companyCode = code;
                             sessionStorage.setItem("companyCode",code);
                     }else{
                             console.log('code is not true');
                             window.location.href = login_url;
                     }
         }else{
                     console.log('code is null');
                     window.location.href = login_url;
             }

         //var lastLoginTime = new Date().getTime();
         //var token = sessionStorage.getItem('token');
         //var userID = sessionStorage.getItem('userId')
         //var code = sessionStorage.getItem('code')
         //var msg = 'companyCode=uusafe';
         //console.log(encryptByUuid(msg));//Z2p6oyE59PfRnAyVZgtTuc4vT/CV8vXRdecMDI3RduY=
         //console.log(decryptByUuid('Z2p6oyE59PfRnAyVZgtTuc4vT/CV8vXRdecMDI3RduY='));
     }
    var userID = 81;
	//companyCode = 'uusafe';
	var message = userID+'|deviceType|deviceId|${token}|${lastLoginTime}|appVer|'+companyCode;
	var key = 'uusafeuusafeuusafeuusafe';
	return encrypt(message, key)//CryptoJS鍔犲瘑
}

// 鍔犲瘑鍑芥暟
function encrypt(msg,key){
    var keyHex = CryptoJS.enc.Utf8.parse(key)
    var encrypted = CryptoJS.TripleDES.encrypt(msg, keyHex, {
        iv: CryptoJS.enc.Utf8.parse('01234567'),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString()
}

function decryptByDESModeEBC(msg) {
    var keyHex = CryptoJS.enc.Utf8.parse('uusafeuusafeuusafeuusafe');
    var encrypted = CryptoJS.TripleDES.decrypt({ciphertext:CryptoJS.enc.Base64.parse(msg)}, keyHex, {
        iv:CryptoJS.enc.Utf8.parse('01234567'),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString(CryptoJS.enc.Utf8);
}

//鐢熸垚uuid鐨勫嚱鏁�
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        var r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}

// 鍔犲瘑鍑芥暟鍔爑uid
function encryptByUuid(msg){
    var key = 'uusafeuusafeuusafeuusafe';
    var startFourString = uuid(4,16);
    var endFourString = uuid(4,16);
    msg = startFourString + msg + endFourString;

    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.TripleDES.encrypt(msg, keyHex, {
        iv: CryptoJS.enc.Utf8.parse('01234567'),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    })
    return encrypted.toString();
}

//瑙ｅ瘑鍑芥暟鍔爑uid
function decryptByUuid(msg) {
    var keyHex = CryptoJS.enc.Utf8.parse('uusafeuusafeuusafeuusafe');
    var decrypted = CryptoJS.TripleDES.decrypt({ciphertext:CryptoJS.enc.Base64.parse(msg)}, keyHex, {
        iv:CryptoJS.enc.Utf8.parse('01234567'),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7});
    var afterDecrypt = decrypted.toString(CryptoJS.enc.Utf8);
    var afterSubstring = afterDecrypt.substring(4,afterDecrypt.length-4);
    return afterSubstring;
}
// ajax璇锋眰鎷︽埅鍣�
$.ajaxSetup({
    headers: {
        'Authorization': getAuthorization()
    }
})

function checkCompanyCodeExists(companyCode){
    var codeFlag ;
    $.ajax({
        url:base_url+'emm/dv/rest/checkCompanyCodeExists',
        data:{
            'companyCode':companyCode,
        },
        async: false,
        success:function(result){
            if(result){
                var res = JSON.parse(result);
                codeFlag = res.code;
            }else{
                console.log('code is not true');
                codeFlag = 999;
            }
        },
        error:function(errorMsg){
            console.log(errorMsg);
            codeFlag = 999;
        }
    })
    return codeFlag;
}

//alert
function alert(e){
    $("body").append("<div id='msg'><span>"+e+"</span></div>");
    clearmsg();
}
function clearmsg(){
    var t = setTimeout(function(){
        $("#msg").remove();
    },2000)
};



var now = new Date();
//杩斿洖鏈�.鏃�
function formatDate(now) {
    var month=now.getMonth()+1;
    var date=now.getDate();
    return month+"."+date;
}
//杩斿洖骞存湀鏃�
function formatDateYear(now){
    var year = now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    return year+'.'+month+"."+date;
}
Date.prototype.format = function(format) {
    var o = {
        "M+": this.getMonth() + 1,
        //month
        "d+": this.getDate(),
        //day
        "h+": this.getHours(),
        //hour
        "m+": this.getMinutes(),
        //minute
        "s+": this.getSeconds(),
        //second
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
};
//鑾峰彇鐜板湪鐨勬椂闂�
function nowDateTime(unit){
    var now = new Date();
    // 瀹氫箟鏃堕棿
    var year = now.getFullYear();   //鑾峰彇绯荤粺鐨勫勾锛�
    var month = now.getMonth()+1;
    var day = now.getDate()-1;
    var hour = now.getHours();
    var min =now.getMinutes();
    var dn="AM";
    if (hour>12){
        dn="PM";
        hour=hour-12;
    }
    if (hour==0) hour=12;
    if(month<10){
    	month = "0"+month;
    }
    if(day<10){
    	day = "0"+day;
    }
    var nowTime = year+'.'+month+'.'+day+' '+ dn + ' '+hour+':'+min;
    var nowDate = year+'-'+month+'-'+day;
    if(unit == 'day'){
        //day = now.getDate()-1;
        var internetTime = new Date().getTime();
        var internetTimeOld= internetTime-24*3600*1000*1;  //涓€澶�
        var selsectDate = new Date(internetTimeOld).format('yyyy-MM-dd');
    }else if(unit == 'week'){
        var internetTime = new Date().getTime();
        var internetTimeOld= internetTime-7*24*3600*1000;
        var selsectDate = new Date(internetTimeOld).format('yyyy-MM-dd');
        //day = now.getDate()-8;
        //var selsectDate = year+'-'+month+'-'+day;
    }else if(unit == 'month'){
        /*day = now.getDate()-1;
        month = now.getMonth();
        var selsectDate = year+'-'+month+'-'+day;*/
        var internetTime = new Date().getTime();
        var internetTimeOld= internetTime-30*24*3600*1000;
        var selsectDate = new Date(internetTimeOld).format('yyyy-MM-dd');
    }
    // nowTime:浠婂ぉ,2017.01.01 AM 05:12 nowDate:浠婂ぉ2017-01-01,selectDate锛岄€夋嫨鐨勬槰澶╋紝2017-01-01
    return [nowTime,nowDate,selsectDate];
}
// 鑾峰彇寮€濮嬫棩鏈熷埌缁撴潫鏃ユ湡涓棿鐨勬墍鏈夊ぉ
function getDays(d1,d2){
    // 鑾峰彇鍏ュ弬瀛楃涓插舰寮忔棩鏈熺殑Date鍨嬫棩鏈�
    var st1 = Date.parse(d1)
    var st2 = Date.parse(d2)
    var arr = []
    var days = dateDiff(d1,d2)
    while(st1 < st2){
        var date = (new Date(st1).getMonth()+1) + '-' + new Date(st1).getDate()
        arr.unshift(date)

        if(days>=6){
            st1+=(Math.ceil(dateDiff(d1,d2)/7)*(24*3600*1000))
        }
        // 褰揳rr.length===6鏃讹紝
        //else if(days==15){
        //    st1+=(2*24*3600*1000)
        //}
        else{
            st1+=24*3600*1000
        }

    }
    ////褰揳rr.length===6鏃讹紝鎵嬪姩鍔犱簡涓€涓紝鍚庢湡瑕佷紭鍖�
    //if(arr.length === 5 && days>7){
    //    arr.push((new Date(st2).getMonth()+1) + '-' + (new Date(st2).getDate()-1))
    //}

    arr.unshift((new Date(st2).getMonth()+1) + '-' + new Date(st2).getDate())
    if(arr.length>=8){
        arr.splice(6,1)
    }
    if(arr.length==5){
        arr.push('','')
    }
    if(arr.length==6){
        arr.push('')
    }
    return arr;
}
// 璁＄畻鐩稿樊澶╂暟
function dateDiff(d1,d2){
    var dateSpan = Math.abs(Date.parse(d2)-Date.parse(d1));
    return Math.floor(dateSpan/(24*3600*1000));
}