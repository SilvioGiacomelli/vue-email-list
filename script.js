const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      mailArray: [],
    };
  },

  methods: {
    getApi() {
      for (let i = 0; i < 10; i++) {
        axios
          .get(this.apiUrl)
          .then((risposta) => {
            console.log(risposta.data);
            console.log("----->>> ", risposta.data.response);
            this.mailArray.push(risposta.data.response);
          })
          .catch((errore) => {
            console.log("MESSAGGIO DI ERRORE");
            console.log(errore.message);
          });
      }
      console.log(this.mailArray)
    },
  },
  mounted() {
    this.getApi();
  },
}).mount("#app");
