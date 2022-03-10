<template>
    <div class="box">
        <h1> {{ mensagem }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Cliente',
        data(){
            return{
                mensagem: "Tela Cliente"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: red
    }
</style>