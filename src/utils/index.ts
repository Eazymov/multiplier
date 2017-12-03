declare type iterateHandler = (index: number) => any

const iterate = (count: number, handler: iterateHandler) => {
  for (let index = 0; index < count; index++) {
    handler(index)
  }
}

export {
  iterate,
}

export default {
  iterate,
}
