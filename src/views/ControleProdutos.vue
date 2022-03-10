<template>
    <div class="box">
        <h1> {{ mensagem }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Produtos',
        data(){
            return{
                mensagem: "Tela de Produtos"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: red
    }
</style>