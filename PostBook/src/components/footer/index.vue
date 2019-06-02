<template>
    <b-card-footer class="footer">Plovdiv 2019</b-card-footer>
</template>

<script>
    export default {
        name: 'index',
        data(){
            return {
              year: new Date().getFullYear()
            };
        }
    }
</script>

<style scoped>
    .footer{
        margin-top: 5px;
        background-color: rgb(43, 153, 255);
        text-align: center;
        color: white;
        padding: 12px 18px;
    }
</style>