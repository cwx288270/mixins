export const mixObj = {
    created() {
        this.hello();
    },
    methods: {
        hello(){
            console.log(`Hello from Mixins`)
        }
    },
}


export const minObjAnother = {
    created() {
        this.prompt();
    },
    methods: {
        prompt(){
            console.log(`Prompt from Mixin Another`)
        },
        hello(){
            console.log(`Hello from Mixin Another`)
        }
    },
}