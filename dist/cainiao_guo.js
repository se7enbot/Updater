"use strict";var JD_API_HOST="https://api.m.jd.com/client.action?functionId=";function init(){$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.taskSimpleList=["TASK_1637751015073","TASK_1617282636980","TASK_1622627291825","TASK_1634814927365","TASK_1616987126124","TASK_1568776632733"],$.taskComplexList=["TASK_1568776632733","TASK_1631686311645","TASK_1604582761571","TASK_1639462303886"],$.taskStep=1,$.UA="User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1",$.cookie=$.cookie.replace(/\s/g,"");try{$.tk=$.cookie.match(/_m_h5_tk=(\w+)/)[1],$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}catch(a){$.error="Cookie\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\uFF01",document.write(JSON.stringify($))}}function cloudTip(){$.message="\u76EE\u524D\u6307\u4EE4\u53EA\u80FD\u505A\u90E8\u5206\u4EFB\u52A1\uFF0C\u5176\u4ED6\u4EFB\u52A1\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}function doSimpleTask(){return($.to="Func.logicHandler",$.call=["doSimpleTask"],$.taskId=$.taskSimpleList.shift(),!$.taskId)?($.to="",$.call.pop(),$.message="\u5DF2\u5B8C\u6210\u6240\u6709\u7B80\u5355\u4EFB\u52A1~",void document.write(JSON.stringify($))):($.callback="Func.request",void takeRequest("doSimpleTaskURL"))}function taskInitForFarm(){return $.callback="Func.request",void takeRequest("taskInitForFarm")}function friendListInitForFarm(){return $.callback="Func.request",void takeRequest("friendListInitForFarm")}function help(){return($.to="Func.logicHandler",$.call=["help"],$.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteId=$.inviteList.shift(),!$.inviteId||$.selfHelpMax)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):($.message="".concat($.UserName,"\u53BB\u52A9\u529B\uFF0C\u5BF9\u65B9\u52A9\u529B\u7801:\n").concat($.inviteId),$.callback="Func.request",void takeRequest("helpInvite"))}function signForFarm(){var a;if(!(null!==(a=$.farmTask.signInit)&&void 0!==a&&a.todaySigned)){return $.callback="Func.request",void takeRequest("signForFarm")}else{var b,c;$.message="\u4ECA\u5929\u5DF2\u7B7E\u5230,\u8FDE\u7EED\u7B7E\u5230".concat(null===(b=$.farmTask.signInit)||void 0===b?void 0:b.totalSigned,",\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(null===(c=$.farmTask.signInit)||void 0===c?void 0:c.signEnergyEachAmount,"g"),document.write(JSON.stringify($))}}function browseAdTaskForFarm(){var a,b,c,d;return($.to="Func.logicHandler",$.call=["browseAdTaskForFarm"],$.oneTask=null===(a=$.farmTask.gotBrowseTaskAdInit)||void 0===a||null===(b=a.userBrowseTaskAds)||void 0===b?void 0:b.shift(),$.advertId=null===(c=$.oneTask)||void 0===c?void 0:c.advertId,null!==(d=$.farmTask.gotBrowseTaskAdInit)&&void 0!==d&&d.f||!$.oneTask)?($.to="",$.call.pop(),$.message="\u6D4F\u89C8\u4EFB\u52A1\u5DF2\u7ECF\u5168\u90E8\u5B8C\u6210~",void document.write(JSON.stringify($))):($.oneTask.hadFinishedTimes>=$.oneTask.limit&&document.write(JSON.stringify($)),$.taskType=0,$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.mainTitle," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takeRequest("browseAdTaskForFarm"))}function doTenWater(){if($.to="Func.logicHandler",$.call=["doTenWater"],$.waterCount=$.waterCount||0,$.waterCount+$.farmTask.totalWaterTaskInit.totalWaterTaskTimes<$.farmTask.totalWaterTaskInit.totalWaterTaskLimit){return $.callback="Func.request",void takeRequest("waterGoodForFarm")}else return $.to="",$.call.pop(),$.message="\u4ECA\u65E5\u5DF2\u5B8C\u621010\u6B21\u6D47\u6C34\u4EFB\u52A1",void document.write(JSON.stringify($))}function gotStageAwardForFarm(){var a,b,c,d;return 0===(null===(a=$.waterResult)||void 0===a?void 0:a.waterStatus)&&10===(null===(b=$.waterResult)||void 0===b?void 0:b.treeEnergy)?($.callback="Func.request",$.taskType="1",$.waterResult.waterStatusMsg="\u679C\u6811\u53D1\u82BD\u4E86",void takeRequest("gotStageAwardForFarm")):1===(null===(c=$.waterResult)||void 0===c?void 0:c.waterStatus)?($.callback="Func.request",$.taskType="2",$.waterResult.waterStatusMsg="\u679C\u6811\u5F00\u82B1\u4E86",void takeRequest("gotStageAwardForFarm")):2===(null===(d=$.waterResult)||void 0===d?void 0:d.waterStatus)?($.callback="Func.request",$.taskType="3",$.waterResult.waterStatusMsg="\u679C\u6811\u7ED3\u679C\u4E86",void takeRequest("gotStageAwardForFarm")):($.message="\u6682\u65E0\u9636\u6BB5\u5956\u52B1",void document.write(JSON.stringify($)))}function firstWaterTaskForFarm(){return void taskInitForFarm()}function totalWaterTaskForFarm(){if(!$.farmTask.totalWaterTaskInit.f&&$.farmTask.totalWaterTaskInit.totalWaterTaskTimes>=$.farmTask.totalWaterTaskInit.totalWaterTaskLimit){return $.callback="Func.request",void takeRequest("totalWaterTaskForFarm")}else $.farmTask.totalWaterTaskInit.totalWaterTaskTimes<$.farmTask.totalWaterTaskInit.totalWaterTaskLimit&&($.message="\u3010\u5341\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u4EFB\u52A1\u672A\u5B8C\u6210\uFF0C\u4ECA\u65E5\u6D47\u6C34".concat($.farmTask.totalWaterTaskInit.totalWaterTaskTimes,"\u6B21"));document.write(JSON.stringify($))}function takeRequest(a){var b="",c="",d="";"doSimpleTaskURL"===a?(d="https://service-daubfate-1251309300.gz.apigw.tencentcs.com/release/api?activityId=Cainiao_guo&tk=".concat($.tk,"&api=mtop.cncreditmarket.task.checkfinish&guoguo=").concat($.taskId),c=getRequest(d)):"doSimpleTask"===a?(d=$.url,c=getRequest(d)):"signForFarm"===a?(b="{}",c=getRequest("signForFarm",b,"GET")):"browseAdTaskForFarm"===a?(b="{\"advertId\":\"".concat($.advertId,"\",\"type\":\"").concat($.taskType,"\"}"),c=getRequest("browseAdTaskForFarm",b,"GET")):"waterGoodForFarm"===a?(b="{}",c=getRequest("waterGoodForFarm",b,"GET")):"helpInvite"===a?(b="{\"imageUrl\":\"\",\"nickName\":\"\",\"shareCode\":\"".concat($.inviteId,"\",\"babelChannel\":\"3\",\"version\":2,\"channel\":1}"),c=getRequest("initForFarm",b,"GET")):"gotStageAwardForFarm"===a?(b="{\"type\":".concat($.taskType,"}"),c=getRequest("gotStageAwardForFarm",b,"GET")):($.error="takeRequest \u9519\u8BEF".concat(a),void 0);$.request=c,document.write(JSON.stringify($))}function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"GET",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},e={Accept:"*/*","Accept-Encoding":"gzip, deflate, br",Cookie:d.Cookie||"",Host:"h5api.m.tmall.com",Connection:"keep-alive","User-Agent":$.UA,Referer:d.Referer||"https://h5api.m.tmall.com","Accept-Language":"en-US,en;q=0.9 Host: h5api.m.tmall.com"};return{url:a,method:c,headers:e,body:b}}function getPostBody(a){var b="";return b="helpInvite"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:2,inviteId:$.inviteId,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"pkHelp"===a?"functionId=zoo_pk_assistGroup&body=".concat(JSON.stringify({confirmFlag:1,inviteId:$.pkInviteId,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_collectProduceScore"===a?"functionId=zoo_collectProduceScore&body=".concat(JSON.stringify({ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_getWelfareScore"===a?"functionId=zoo_getWelfareScore&body=".concat(JSON.stringify({type:2,currentScence:$.currentScence,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"add_car"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:$.taskId,taskToken:$.taskToken,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"functionId=".concat(a,"&body=").concat(JSON.stringify({taskId:$.oneTask.taskId,actionType:1,taskToken:$.oneActivityInfo.taskToken,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"),b}function dealReturn(a,b){var c;switch(b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u60C5\u51B5\uFF01"),a){case"doSimpleTaskURL":b.url?$.url=b.url:$.error="\u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8\u94FE\u63A5\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01";break;case"doSimpleTask":if(b.ret&&"SUCCESS::\u8C03\u7528\u6210\u529F"==b.ret[0]){var d,e;$.message=null!==(d=b.data)&&void 0!==d&&null!==(e=d.result)&&void 0!==e&&e.finish?"\u7ED3\u679C\uFF1A\u4EFB\u52A1\u5B8C\u6210":"\u7ED3\u679C\uFF1A\u4EFB\u52A1\u5931\u8D25 ".concat(JSON.stringify(b))}else b.ret&&"FAIL_SYS_SESSION_EXPIRED::Session\u8FC7\u671F"==b.ret[0]?$.error="\u51FA\u9519\u4E86\u8BF7\u68C0\u67E5 Cookie \u662F\u5426\u6B63\u786E\u4E14\u672A\u8FC7\u671F\uFF0C\u7ED3\u679C\uFF1A".concat(JSON.stringify(b)):$.message="\u7ED3\u679C\uFF1A\u4EFB\u52A1\u9519\u8BEF ".concat(JSON.stringify(b));break;case"friendListInitForFarm":$.friendList=b;break;case"signForFarm":$.message="0"===b.code?"\u3010\u7B7E\u5230\u6210\u529F\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u7B7E\u5230\u7ED3\u679C:  ".concat(JSON.stringify(b));break;case"gotWaterGoalTaskForFarm":"0"===b.code&&($.message="\u3010\u88AB\u6C34\u6EF4\u7838\u4E2D\u3011\u83B7\u5F97".concat(b.addEnergy,"g\uD83D\uDCA7"));break;case"browseAdTaskForFarm":$.browseResult=b;break;case"browseAdTaskForFarmHandle":$.message="0"===b.code?"\u5B8C\u6210\u4EFB\u52A1\uFF0C\u83B7\u5F97".concat(null===b||void 0===b?void 0:b.amount,"g\uD83D\uDCA7"):"\u6D4F\u89C8\u4EFB\u52A1\u7ED3\u679C: ".concat(JSON.stringify(b));break;case"helpInvite":switch(null===(c=b.helpResult)||void 0===c?void 0:c.code){case"0":$.message="\u52A9\u529B\u6210\u529F\uFF0C\u83B7\u5F97".concat(b.helpResult.salveHelpAddWater,"g\u6C34\u6EF4");break;case"8":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u60A8\u4ECA\u5929\u52A9\u529B\u6B21\u6570\u5DF2\u8017\u5C3D",$.selfHelpMax=!0;break;case"9":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u5DF2\u7ECF\u52A9\u529B\u8FC7\u8BE5\u597D\u53CB";break;case"10":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u8BE5\u597D\u53CB\u5DF2\u6EE1\u4E94\u4EBA\u52A9\u529B";break;default:$.message="\u52A9\u529B\u5931\u8D25\uFF1A".concat(JSON.stringify(b.message));}break;case"waterGoodForFarm":if($.waterResult=b,"0"!==$.waterResult.code)$.message="\u6D47\u6C34\u51FA\u73B0\u5931\u8D25\u5F02\u5E38,\u8DF3\u51FA\u4E0D\u5728\u7EE7\u7EED\u6D47\u6C34",$.to="",$.call.pop();else if($.message="\u6210\u529F\u6D47\u6C34 ".concat(++$.waterCount," \u6B21\uFF0C\u5269\u4F59\u6C34\u6EF4").concat($.waterResult.totalEnergy,"g"),$.waterResult.finished){var f;$.error="\u3010\u23F0 \u63D0\u9192\u3011".concat(null===(f=$.farmInfo.farmUserPro)||void 0===f?void 0:f.name,"\u5DF2\u53EF\u9886\u53D6\n\u8BF7\u53BB\u4EAC\u4E1CAPP\u6216\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u67E5\u770B");break}else if(10>$.waterResult.totalEnergy){$.message="\u6C34\u6EF4\u4E0D\u591F\uFF0C\u7ED3\u675F\u6D47\u6C34",$.to="",$.call.pop();break}break;case"gotStageAwardForFarm":"0"===b.code&&($.message="\u3010".concat($.waterResult.waterStatusMsg,"\u3011\u5956\u52B1").concat(b.addEnergy,"g\uD83D\uDCA7"));break;case"firstWaterTaskForFarm":$.message="0"===b.code?"\u3010\u9996\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u9886\u53D6\u9996\u6B21\u6D47\u6C34\u5956\u52B1\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"totalWaterTaskForFarm":$.message="0"===b.code?"\u3010\u5341\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u83B7\u5F97".concat(b.totalWaterTaskEnergy,"g\uD83D\uDCA7"):"\u9886\u53D610\u6B21\u6D47\u6C34\u5956\u52B1\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"gotThreeMealForFarm":$.message="0"===b.code?"\u3010\u5B9A\u65F6\u9886\u6C34\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u5B9A\u65F6\u9886\u6C34\u6210\u529F\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"waterFriendForFarm":if("0"===b.code){var g;$.message="\u4E3A\u7B2C".concat(null===(g=$.farmTask.waterFriendTaskInit)||void 0===g?void 0:g.waterFriendCountKey,"\u4E2A\u597D\u53CB\u6D47\u6C34\u6210\u529F")}else"11"===b.code&&($.message="\u6D47\u6C34\u5931\u8D25\uFF1A\u6C34\u6EF4\u4E0D\u591F");break;default:$.error="\u672A\u5224\u65AD\u7684\u5F02\u5E38".concat(a);}}function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a}