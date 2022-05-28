"use strict";function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}$.Utils=Utils();function init(){$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.rebateCode=[],$.taskStep=1,$.uuid=$.Utils.randomString(40),$.UA="jdapp;iPhone;10.2.0;13.1.2;".concat($.uuid,";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),$.self={},$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}function cloudTip(){$.message="\u6307\u4EE4\u5DF2\u8FD0\u884C\u5B8C\u6BD5\uFF01\n\u5176\u4ED6\u529F\u80FD\u548C\u4EFB\u52A1\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}function JingDongBean(){return $.callback="Func.request",void takeRequest("JingDongBean")}function JingDongGetCash(){return $.callback="Func.request",void takeRequest("JingDongGetCash")}function JDSecKilling(){return $.callback="Func.request",void takeRequest("JDSecKilling")}function help(){document.write(JSON.stringify($))}function doNHSign(){switch($.to="Func.logicHandler",$.call=["doNHSign"],$.taskStep++){case 1:getNHSignInfo();break;case 2:$.encryptProjectId&&queryInteractiveInfo($.encryptProjectId,"aceaceglqd20211215");break;case 3:var a,b=new RegExp(new Date().getDate()+""),c=_createForOfIteratorHelper($.self.data);try{for(c.s();!(a=c.n()).done;){var d=a.value;d.assignmentName.match(b)?doInteractiveAssignment($.encryptProjectId,d.encryptAssignmentId,"aceaceglqd20211215",0):"\u7B7E\u5230"==d.assignmentName&&($.self.item=d)}}catch(a){c.e(a)}finally{c.f()}document.body.innerText||doInteractiveAssignment($.encryptProjectId,$.self.item.encryptAssignmentId,"aceaceglqd20211215");break;default:$.to="",$.call.pop(),$.taskStep=1,$.self.data=void 0,document.write(JSON.stringify($));}}function getNHSignInfo(){return"getNHSignInfo"==$.call[$.call.length-1]||$.call.push("getNHSignInfo"),$.callback="Func.request",void takeRequest("getNHSignInfo")}function queryInteractiveInfo(a,b){return"queryInteractiveInfo"==$.call[$.call.length-1]||$.call.push("queryInteractiveInfo"),$.sourceCode=b,$.callback="Func.request",void takeRequest("queryInteractiveInfo")}function doInteractiveAssignment(a,b,c,d){return"doInteractiveAssignment"==$.call[$.call.length-1]||$.call.push("doInteractiveAssignment"),$.sourceCode=c,$.AssignmentId=b,$.taskType=d,$.callback="Func.request",void takeRequest("doInteractiveAssignment")}function takeRequest(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{},d=c.log,e=c.random,f="",g="",h="";"JingDongBean"===a?(g="https://api.m.jd.com/client.action",f="functionId=signBeanIndex&appid=ld",h=getRequest(g,f)):"JingDongGetCash"===a?(g="https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111",h=getRequest(g,f,"GET")):"JDSecKilling"===a?(g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=homePageV2&appid=SecKill2020",h=getRequest(g,f,"POST",headers)):"JDSecKillingNext"===a?(g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat($.taskType.projectId,"%22%2C%22encryptAssignmentId%22%3A%22").concat($.taskType.taskId,"%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020"),h=getRequest(g,f,"POST",headers)):"getNHSignInfo"===a?(g="https://prodev.m.jd.com/mall/active/fARfxZh3zdMqs4tkFBhpqaQKTGA/index.html",headers={ContentType:"null"},h=getRequest(g,f,"GET")):"queryInteractiveInfo"===a?(g="https://api.m.jd.com/client.action?functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat($.encryptProjectId,"%22%2C%22sourceCode%22%3A%22").concat($.sourceCode,"%22%7D&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType="),f="",h=getRequest(g,f)):"doInteractiveAssignment"===a?(f={encryptProjectId:$.encryptProjectId,encryptAssignmentId:$.AssignmentId,sourceCode:$.sourceCode,completionFlag:!0},0===$.taskType&&(f={encryptProjectId:$.encryptProjectId,encryptAssignmentId:$.AssignmentId,sourceCode:$.sourceCode,completionFlag:!0,ext:{exchangeNum:1}}),g="https://api.m.jd.com/client.action?functionId=doInteractiveAssignment&body=".concat(JSON.stringify(f),"&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType="),g=encodeURI(g),f="",h=getRequest(g,f)):"zoo_bdCollectScore"===a?(f=getPostBody(a),h=getRequest("zoo_bdCollectScore",f)):"qryCompositeMaterials"===a?(f="functionId=qryCompositeMaterials&body={\"qryParam\":\"[{\\\"type\\\":\\\"advertGroup\\\",\\\"mapTo\\\":\\\"resultData\\\",\\\"id\\\":\\\"05371960\\\"}]\",\"activityId\":\"2s7hhSTbhMgxpGoa9JDnbDzJTaBB\",\"pageId\":\"\",\"reqSrc\":\"\",\"applyKey\":\"jd_star\"}&client=wh5&clientVersion=1.0.0",h=getRequest("qryCompositeMaterials",f)):"zoo_boxShopLottery"===a?(f="functionId=zoo_boxShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),h=getRequest("zoo_boxShopLottery",f)):"zoo_wishShopLottery"===a?(f="functionId=zoo_wishShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),h=getRequest("zoo_boxShopLottery",f)):"zoo_myMap"===a?(f="functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0",h=getRequest("zoo_myMap",f)):"zoo_getWelfareScore"===a?(f=getPostBody(a),h=getRequest("zoo_getWelfareScore",f)):"jdjrTaskDetail"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\"}",h=getRequest("listTask",f)):"jdjrAcceptTask"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\",\"id\":\"".concat($.taskId,"\"}"),h=getRequest("acceptTask",f)):"add_car"===a?(f="functionId=funny_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"HWJhPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"actionType\":1}&client=wh5&clientVersion=1.0.0&uuid=c67093f5dd58d33fc5305cdc61e46a9741e05c5b&appid=o2_act"),h=getRequest("funny_collectScore",f)):($.error="takeRequest \u9519\u8BEF".concat(a),void 0);$.request=h,document.write(JSON.stringify($))}function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"POST",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},e={Accept:"application/json, text/plain, */*",Origin:d.Origin||"https://h5.m.jd.com","Accept-Encoding":"gzip, deflate, br","Cache-Control":"no-cache",Cookie:$.cookie,"Content-Type":d.ContentType||"application/x-www-form-urlencoded",Host:"api.m.jd.com",Connection:"keep-alive","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","User-Agent":$.UA||"jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:d.Referer||"https://home.m.jd.com/myJd/newhome.action","Accept-Language":"zh-cn"};return{url:a,method:c,headers:e,body:b}}function getPostBody(a){var b="";return b="helpInvite"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:2,inviteId:$.inviteId,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"pkHelp"===a?"functionId=zoo_pk_assistGroup&body=".concat(JSON.stringify({confirmFlag:1,inviteId:$.pkInviteId,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_collectProduceScore"===a?"functionId=zoo_collectProduceScore&body=".concat(JSON.stringify({ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_getWelfareScore"===a?"functionId=zoo_getWelfareScore&body=".concat(JSON.stringify({type:2,currentScence:$.currentScence,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"add_car"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:$.taskId,taskToken:$.taskToken,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"functionId=".concat(a,"&body=").concat(JSON.stringify({taskId:$.oneTask.taskId,actionType:1,taskToken:$.oneActivityInfo.taskToken,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"),b}function dealReturn(a,b){var c,d,e,f;b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8D26\u53F7cookie\u662F\u5426\u8FC7\u671F\u6216\u9519\u8BEF");var g=$.Utils.stringify(b);switch(a){case"JingDongBean":if(3===b.code)$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else if(g.match(/跳转至拼图/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u9700\u8981\u62FC\u56FE\u9A8C\u8BC1 \u26A0\uFE0F";else if(!g.match(/\"status\":\"?1\"?/))$.message=g.match(/(已签到|新人签到)/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":b.match(/人数较多|S101/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u7B7E\u5230\u4EBA\u6570\u8F83\u591A \u26A0\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";else if(g.match(/dailyAward/)){var h,i,j;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(h=b.data)||void 0===h||null===(i=h.dailyAward)||void 0===i||null===(j=i.beanAward)||void 0===j?void 0:j.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(g.match(/continuityAward/)){var k,l,m;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(k=b.data)||void 0===k||null===(l=k.continuityAward)||void 0===l||null===(m=l.beanAward)||void 0===m?void 0:m.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(g.match(/新人签到/)){var C=g.match(/beanCount\":\"(\d+)\".+今天/);$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(C?C[1]:"\u65E0")+"\u4EAC\u8C46 \uD83D\uDC36"}else $.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: \u65E0\u4EAC\u8C46 \uD83D\uDC36";break;case"JingDongGetCash":if(null!==(c=b.data)&&void 0!==c&&c.success&&null!==(d=b.data)&&void 0!==d&&d.result){var n,o;$.message="\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u6210\u529F, \u660E\u7EC6: ".concat((null===(n=b.data)||void 0===n||null===(o=n.result)||void 0===o?void 0:o.signCash)||"\u65E0","\u73B0\u91D1 \uD83D\uDCB0")}else $.message=g.match(/\"bizCode\":201|已经签过/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":g.match(/\"code\":300|退出登录/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";break;case"JDSecKilling":203==b.code||3==b.code||101==b.code?$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":null!==(e=b.result)&&void 0!==e&&e.projectId&&null!==(f=b.result)&&void 0!==f&&f.taskId?$.taskType={projectId:b.result.projectId,taskId:b.result.taskId}:$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u6682\u65E0\u6709\u6548\u6D3B\u52A8 \u26A0\uFE0F";break;case"JDSecKillingNext":if(0==b.code&&0==b.subCode){var D=g.match(/"discount":(\d.*?),/)[2];$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u6210\u529F, \u660E\u7EC6: ".concat(D||"\u65E0","\u7EA2\u5305 \uD83E\uDDE7")}else $.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, ".concat(103==b.subCode?"\u539F\u56E0: \u5DF2\u9886\u53D6":b.msg?b.msg:"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F");break;case"getNHSignInfo":try{$.encryptProjectId=b.match(/"projectId":"(.*?)"/)[1],$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u6210\u529F, \u660E\u7EC6: \u6D4B\u8BD5\u6210\u529F"}catch(a){$.encryptProjectId=null,$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u5931\u8D25, \u660E\u7EC6: \u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8ID \u26A0\uFE0F"}$.data={};break;case"queryInteractiveInfo":"0"===b.code?($.self.data=b.assignmentList,$.message="\u83B7\u53D6\u4EA4\u4E92\u4FE1\u606F\u6210\u529F"):$.message="\u83B7\u53D6\u4EA4\u4E92\u4FE1\u606F\u5931\u8D25";break;case"doInteractiveAssignment":if("0"===b.subCode){var p,q,r,s,t,u,v,w,x,y,z,A,B;$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u6210\u529F, \u660E\u7EC6: ".concat((null===(p=b.rewardsInfo)||void 0===p?void 0:p.successRewards[10])&&(null===(q=b.rewardsInfo)||void 0===q?void 0:q.successRewards[10][0].rewardName)+"--\u4F18\u60E0\u5238--"+(null===(r=b.rewardsInfo)||void 0===r?void 0:r.successRewards[10][0].usageThreshold)+"-"+(null===(s=b.rewardsInfo)||void 0===s?void 0:s.successRewards[10][0].quota)||(null===(t=b.rewardsInfo)||void 0===t?void 0:t.successRewards[12])&&(null===(u=b.rewardsInfo)||void 0===u?void 0:u.successRewards[12][0].rewardName)+"--\u652F\u4ED8\u5238--"+(null===(v=b.rewardsInfo)||void 0===v?void 0:v.successRewards[12][0].usageThreshold)+"-"+(null===(w=b.rewardsInfo)||void 0===w?void 0:w.successRewards[12][0].quota)||(null===(x=b.rewardsInfo)||void 0===x?void 0:x.successRewards[11])&&(null===(y=b.rewardsInfo)||void 0===y?void 0:y.successRewards[11][0].rewardName)+"--\u7EA2\u5305--"+(null===(z=b.rewardsInfo)||void 0===z?void 0:z.successRewards[11][0].usageThreshold)+"-"+(null===(A=b.rewardsInfo)||void 0===A?void 0:A.successRewards[11][0].quota)||JSON.stringify(null===(B=b.rewardsInfo)||void 0===B?void 0:B.successRewards))}else $.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u5931\u8D25, \u660E\u7EC6: "+b.msg;break;default:}}function Utils(){return{randomString:function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a},stringify:function stringify(a){try{if("string"==typeof JSON.stringify(a))return JSON.stringify(a)}catch(b){return a}}}}