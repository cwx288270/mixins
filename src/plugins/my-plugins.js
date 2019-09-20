export default {
  install(Vue, options) {
    Vue.$data = {
      firstName: '大漠',
      lastName: 'W3cPlus'
    };

    console.log(`${Vue.$data.firstName}_${Vue.$data.lastName}`)

    Vue.directive('hello', {
        
        bind: function () {
            console.log(`触发Bind钩子函数`)
        },
        inserted: function (el) {
            console.log('触发inserted钩子函数')
        },
        update:function(el){
            console.log('触发update钩子函数')
        },
        componentUpdated:function(el){
            console.log('触发componentUpdated钩子函数')
        },
        unbind:function(el){
            console.log('触发unbind钩子函数')
        }
    })

    Vue.mixin({
        methods: {
            update(){
                this.message = "Hi ! 大漠"
            },
            uninstall(){
                this.message = "";
            },
            install(){
                this.message = "Hello ! W3cplus"
            }
        },
    })

    Vue.prototype.$message = "我只是一直小小鸟....";
    Vue.prototype.showMessage = value =>{
        console.log("showMessage:"+value)
    }
  }
}
