export default{
    methods:{
        skip(router,query){
            this.$router.push({name:router , query:query})
        }
    }
}