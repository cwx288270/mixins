export default {
  install(Vue, options) {
    let opt = {
      times: '3000'
    }
    Vue.prototype.$toast = (tips) => {
      let tpl = Vue.extend({
        template: `<div class="toast">${tips}</div>`
      })
      //创建示例挂载到文档以后的地方
      let tpl_ = new tpl().$mount().$el

      document.body.appendChild(tpl_);

      setTimeout(() => {
        document.body.removeChild(tpl_)
      }, options.times)
    }
  }
}
