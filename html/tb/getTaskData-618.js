// const app = `618cat`
// const data = ``
// const loopTime = ``
const $ = {}
const items = []
// 共用与云端已送的 fromToken
let fromToken = ''

let task = taskBaseData()
const firstTask = [
  {
    cloud: {
      title: '云端推送',
      type: 'cloud',
      urlScheme: `HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&fromToken=${fromToken}&spm=a217e.xzrwy.1.1&sceneId=3399&sourceType=other&hd_from_id=100155&deliveryId=`,
      textEnd: 'str1&implId=str2',
      item: [
        '29447 cloudsail_15_316568002420001_29447_0',
        '29447 cloudsail_15_316568002420002_29447_0',
        '29447 cloudsail_15_316568002420003_29447_0',
        '29447 cloudsail_15_316568002420004_29447_0',
        '29447 cloudsail_15_316568002420005_29447_0',
        '29447 cloudsail_15_316568002420006_29447_0',
        '29447 cloudsail_15_316568002420007_29447_0',
        '29447 cloudsail_15_316568002420008_29447_0',
        '29447 cloudsail_15_316568002420009_29447_0',
        '29447 cloudsail_15_316568002420000_29447_0',
        '29239 cloudsail_20_331754501620001_29239_0',
        '29239 cloudsail_20_331754501620002_29239_0',
        '29239 cloudsail_20_331754501620003_29239_0',
        '29604 cloudsail_12_315603000440001_29604_0',
        '29604 cloudsail_12_315603000440002_29604_0',
        '29598 cloudsail_12_317403003680001_29598_0',
        '29598 cloudsail_12_317403003680002_29598_0',
        '28572 cloudsail_29_331303000380001_28572_0',
        '28572 cloudsail_29_331303000380002_28572_0',
        '28572 cloudsail_29_331303000380003_28572_0',
        '28572 cloudsail_29_331303000380004_28572_0',
        '28572 cloudsail_29_331303000380005_28572_0',
        '28572 cloudsail_29_331303000380006_28572_0',
        '28572 cloudsail_29_331303000380007_28572_0',
        '28572 cloudsail_29_331303000380008_28572_0',
        '28572 cloudsail_29_331303000380009_28572_0',
        '28572 cloudsail_29_331303000380000_28572_0'
      ]
    }
  },
  {
    stars: {
      title: '去往淘宝',
      type: 'stars',
      urlScheme:
        'HTTPS://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES&qd_from=zfbbanner1&bc_fl_src=zfb_banner1&prismFrom=zfb&slk_gid=gid_er_normal&hd_from_id=100155&sceneId=3399&deliveryId=',
      textEnd: 'str1&implId=str2',
      item: ['28911 other_0_918001_28911_0']
    }
  },
  {
    stars: {
      title: '惊喜礼盒 无支付宝请取消勾选',
      type: 'stars',
      urlScheme:
        'alipays://platformapi/startapp?appId=68687592&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020380000000087%2Findex.html%3FcaprMode%3Dsync%26chInfo%3DTAOBAO_BOX&titlePenetrate=YES&ttb=always&chInfo=TAOBAO_BOX&abv=NO&transparentTitle=always',
      textEnd: '',
      item: ['1 0']
    }
  },
  {
    stars: {
      title: '前往支付宝 无支付宝请取消勾选',
      type: 'stars',
      urlScheme:
        'alipays://platformapi/startapp?appId=68687592&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020380000000087%2Findex.html%3FcaprMode%3Dsync%26chInfo%3DTAOBAO_TASK&titlePenetrate=YES&ttb=always&chInfo=TAOBAO_TASK&abv=NO&transparentTitle=always',
      textEnd: '',
      item: ['1 0']
    }
  }
]

taskHandle(data)
// 后面会对数组对象进行操作，则需要进行深拷贝
task[app].task[0].main.item = [...items]
loopTime == '1' && (task[app].task = task[app].task.concat(firstTask))
$.task = task
document.write(JSON.stringify($))

function taskHandle(data) {
  if (data.ret && data.ret[0] == 'SUCCESS::调用成功' && data.data && data.data.model) {
    for (const item of data.data.model) {
      if (item.progress.needTimes !== '0') {
        let times = Number(item.progress.needTimes)
        for (let i = 0; i < times; i++) {
          let deliveryId = item.taskParams.deliveryId
          if (deliveryId == '28646' || deliveryId == '28228' || deliveryId == '23176') continue
          let title = (item.assets && item.assets.title) || 'null'
          let implId = item.taskParams.implId.match(/(.*)_/g) + i
          fromToken = item.taskParams.fromToken
          items.push(
            `${deliveryId}-${title} fromToken=${fromToken}&deliveryId=${deliveryId}&implId=${implId}`
          )
          if (app == 'Taojb') break
        }
      }
    }
  } else {
    $.error = `出错了请检查 Cookie 是否正确且未过期，也可以运行普通模式 ${JSON.stringify(data)}`
  }
}

function taskBaseData() {
  return {
    '618cat': {
      version: '数据最后更新于:6.2.2',
      pv: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.tb.cn/h.UeVQFtT',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fm.tb.cn%2Fh.UeVQFtT',
        taobaolite: 'taobaolite://m.tb.cn/h.UeVQFtT'
      },
      main: {
        taobao: 'taobao://m.taobao.com/tbopen/index.html?h5Url=https://m.taobao.com',
        tmall: 'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fwww.tmall.com%2F',
        taobaolite:
          'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&h5Url=taobaolite%3A%2F%2Fm.ltao.com%2Fhomepage%3F'
      },
      home: {
        taobao: 'taobao://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20220618%2Fgamehome%3FdisableNav%3DYES',
        taobaolite: 'taobaolite://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES'
      },
      end: {
        taobao: 'taobao://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES',
        tmall:
          'tmall://page.tm/appLink?&action=ali.open.nav&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fhdwk%2F20220618%2Fgamehome%3FdisableNav%3DYES',
        taobaolite: 'taobaolite://pages.tmall.com/wow/z/hdwk/20220618/gamehome?disableNav=YES'
      },
      app: {
        淘宝: 'taobao',
        天猫: 'tmall',
        淘宝特价版: 'taobaolite'
      },
      help: {
        gitter:
          'https://gitter.im/api/v1/rooms/6170e0576da03739848855d7/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100',
        code: 'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/random_mutual_618.js',
        link: 'https://gitter.im/leecobaby-shortcuts/1111?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
        lodash: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
      },
      code: {
        getCookieData:
          'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getCookieData-618.js',
        getTaskData:
          'https://leecobaby.coding.net/p/shortcuts/d/Updater/git/raw/coding/html/tb/getTaskData-618.js'
      },
      task: [
        {
          main: {
            title: '领喵币',
            type: 'stars',
            urlScheme:
              'HTTPS://zhiben.m.tmall.com/?shop_id=531204400&adTrace=310450003070001__shop_home.browse__21206d9816542473682441428ec224__I__L__6&adScene=2022618-card-wall-6&sceneId=3399&sourceType=other&hd_from_id=100155&',
            textEnd: 'str1&implId=str2'
          }
        }
      ]
    }
  }
}
