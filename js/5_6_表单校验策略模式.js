let strategies = {
  // 不为空
  isNotEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  // 限制最小长度
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  // 手机号格式
  isMobile: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
}
