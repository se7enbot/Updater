"use strict";function Next(a){switch(a){case"JDSecKilling_next":$.callback="",dealReturn("JDSecKilling",$.data),$.taskType?($.callback="Func.request",$.next=1,takeRequest("JDSecKillingNext"),!document.body.innerText&&($.callback="",$.next=0,dealReturn("JDSecKillingNext",$.data),document.write(JSON.stringify($)))):document.write(JSON.stringify($));break;case"JDSecKilling_next_next":document.body.innerText||($.callback="",$.next=0,dealReturn("JDSecKillingNext",$.data),document.write(JSON.stringify($)));break;case"getNHSignInfo_next":$.callback="",$.call.pop(),dealReturn("getNHSignInfo",$.data),document.write(JSON.stringify($));break;case"queryInteractiveInfo_next":$.callback="",$.call.pop(),dealReturn("queryInteractiveInfo",$.data),document.write(JSON.stringify($));break;case"doInteractiveAssignment_next":$.callback="",$.call.pop(),dealReturn("doInteractiveAssignment",$.data),document.write(JSON.stringify($));break;case"get618ZCInfo_next":$.callback="",$.call.pop(),dealReturn("get618ZCInfo",$.data),document.write(JSON.stringify($));break;case"do618ZCReward_next":$.callback="",$.call.pop(),dealReturn("do618ZCReward",$.data),document.write(JSON.stringify($));break;case"get618ZCTaskList_next":$.callback="",$.call.pop(),dealReturn("get618ZCTaskList",$.data),document.write(JSON.stringify($));break;case"do618ZCBrowseTask_next":if($.callback="",dealReturn("do618ZCBrowseTask",$.data),$.callbackInfo&&0==$.callbackInfo.code){var b;return $.wait=5,$.next=1,$.callback="Func.request",$.itemId=null===(b=$.callbackInfo.data)||void 0===b?void 0:b.itemId,void takeRequest("qryViewkitCallbackResult")}else $.message="\u6D4F\u89C8\u4EFB\u52A1\u5931\u8D25\uFF1A\u9047\u5230\u672A\u77E5\u9519\u8BEF\u6216ID".concat($.contentId,"\u5185\u5BB9\u4E0D\u5B58\u5728"),document.write(JSON.stringify($));break;case"do618ZCBrowseTask_next_next":$.callback="",$.wait=0,dealReturn("qryViewkitCallbackResult",$.data),document.write(JSON.stringify($));break;case"get618SuperBrandInfo_next":$.callback="",$.call.pop(),dealReturn("get618SuperBrandInfo",$.data),document.write(JSON.stringify($));break;case"get618SuperBrandSign_next":$.callback="",$.call.pop(),dealReturn("get618SuperBrandSign",$.data),document.write(JSON.stringify($));break;case"do618SuperBrandLottery_next":$.callback="",$.call.pop(),dealReturn("do618SuperBrandLottery",$.data),document.write(JSON.stringify($));break;case"doBeanSign_next":$.callback="",$.call.pop(),dealReturn("doBeanSign",$.data),document.write(JSON.stringify($));break;case"getBeanBrowseTaskAward_next":$.callback="",$.call.pop(),dealReturn("getBeanBrowseTaskAward",$.data),document.write(JSON.stringify($));break;case"getBeanTaskList_next":$.callback="",$.call.pop(),dealReturn("getBeanTaskList",$.data),document.write(JSON.stringify($));break;case"doBeanTask_next":if(9==$.taskType||8==$.taskType){return $.wait=$.oneTask.waitDuration||5,$.next=1,$.callback="Func.request",void takeRequest("doBeanWaitTask",$.data)}else $.callback="",dealReturn("doBeanTask",$.data),document.write(JSON.stringify($));break;case"doBeanTask_next_next":$.wait=1,$.next=0,$.callback="",dealReturn("doBeanWaitTask",$.data);break;default:$.callback="";var c=(a+"").replace("_next","");dealReturn(c,$.data),document.write(JSON.stringify($));}}