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
          class="button--green">Load Data Service Normal</a>
      </div>
      <div class="links">
        <a
          @click.prevent="loadDataTesting"
          href="#"
          target="_blank"
          class="button--green">Load Data Service Witch Server Express</a>
      </div>
      <div style="padding-top:1em">
        <h4>result service :</h4>
        <pre>
          {{response}}
        </pre>
      </div>
      <div style="padding-top:1em">
        <h4>error service :</h4>
        <pre>
          {{error}}
        </pre>
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
      let url = `${this.$env.SVC_URL}/api/v1/clients`;
      try {
          this.response = await this.$axios.$get(url);
      } catch(err) {
          console.log(err);
          console.log(err.response);

      }
    },
    async loadDataTesting() {
      let url = `http://157.230.199.26/api/tests`;
      try {
          this.response = await this.$axios.$get(url);
      } catch(err) {
          console.log(err.response);
      }
    },

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
