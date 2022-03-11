<template>
  <div class="container">
    <h1 >Hello Vue!</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  }
}
</script>
<style scoped>
  .container{ /*** Aplicando centralizar conteiner */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
