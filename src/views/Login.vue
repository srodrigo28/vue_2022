<template>
    <div class="box">
        <h1> {{ mensagem }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                mensagem: "Tela Login"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: red
    }
</style>