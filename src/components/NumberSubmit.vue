
<template>
    <div class="from">
        <input type="number" v-model="numberInput">
        <button @click="addNumber(numberInput)">Add a number</button>
    </div>
</template>

<script>
import {EventBus} from '../plugins/event-bus'
import {store}  from '../store/store'
export default {
    name:'NumberSubmit',
    data:()=>({
        numberInput:0
    }),
    methods:{
        // addNumber(newNumber){
        //     EventBus.$emit('number-add',Number(this.number))
        // }
        addNumber(newNumber){
            store.addNumber(Number(newNumber))
        }
    }
}
</script>

