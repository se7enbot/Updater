// const data = {...}

try {
  if (data.ret[0] == "SUCCESS::调用成功" && (data.data?.extend?.code == "SUCCESS" || data.data?.data?.ext?.rewardValue)) {
    document.write(JSON.stringify({ result: true }))
  } else {
    document.write(JSON.stringify({ error: `任务失败，原因` + JSON.stringify(data) }))
  }
} catch (error) {
  document.write(JSON.stringify({ error: `接口错误，原因` + JSON.stringify(data) }))
}