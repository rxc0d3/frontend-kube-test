<template>
  <section class="container">
    <div>
      <img src="~/assets/kubernetes-istio.png" alt="">
      <h2 class="subtitle">
        Testing App
      </h2>
      <div class="links">
        <a
          @click.prevent="loadData"
          href="#"
          target="_blank"
          class="button--green">Load Data Service</a>
      </div>
      <div style="padding-top:1em">
        <h4>result service :</h4>
        {{response}}
      </div>
      <div style="padding-top:1em">
        <h4>error service :</h4>
        {{error}}
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
      return {
        response:[],
        error:[],
      }
  },
  methods:{
    async loadData() {
      let url = `https://jsonplaceholder.typicode.com/todos/1`;
      try {
          this.response = await this.$axios.$get(url);
      } catch(err) {
          console.log(err);
          this.error = err.response;
      }
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
