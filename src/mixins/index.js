export default{
    methods:{
        //路由跳转
        skip(router,query){
            this.$router.push({name:router , query:query})
        }
    }
}