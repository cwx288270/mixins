<template>
    <div class="hello">
        <h1 v-hello>{{ message }}</h1>
        <div class="actions">
            <button @click="update">更新</button>
            <button @click="uninstall">卸载</button>
            <button @click="install">安装</button>
        </div>
    
    </div>
</template>

<script>
import { mixObj, minObjAnother } from '../mixins/mixins.js'
export default {
    name: 'HelloWorld',
    data() {
        return {
            message: 'Hi, W3cplus.com'
        }
    },
    mixins: [mixObj, minObjAnother],
    methods: {

    },
    mounted() {

    },
    created() {
        // console.log(`来自组件的内容!`)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
