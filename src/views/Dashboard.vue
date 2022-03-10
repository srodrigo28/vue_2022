<template>
    <div class="box">
        <h1> {{ mensagem }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data(){
            return{
                mensagem: "Tela Dashboard"
            }
        }
    }
</script>

<style scoped>
    h1{
        color: red
    }
</style>