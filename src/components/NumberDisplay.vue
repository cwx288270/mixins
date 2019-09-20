<template>
    <div>
        <h2>{{storeState.numbers}}</h2>
    </div>
</template>
<script>
import {EventBus} from '../plugins/event-bus'
import {store}  from '../store/store'
export default {
    name:'NumberDisplay',
    data:()=>({
        numbers:[1,2,3],
        storeState:store.state
    }),
    created(){
        // EventBus.$on('number-add',number=>{
        //     this.numbers.push(number);
        // })
    }
}
</script>
