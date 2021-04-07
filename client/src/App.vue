<template>
  
  <div class="container">
 
    <FormAddCoin />

    <div class="rounded bg-light p-3 px-4 mt-5 shadow-lg">
      <div class="row">
        <CoinCard v-for="(currency, index) in currencies" :key="index" :currency="currency" :imageName="imageNames[index]" />
      </div>
    </div>

  </div>

</template>

<script>
import CoinCard from './components/CoinCard.vue'
import FormAddCoin from './components/FormAddCoin.vue'

export default {
    name: 'App',

    components: {
        CoinCard,
        FormAddCoin
    },

    data() {
        return {
            socket: null,

            // coins: {},
            currencies: ['Bitcoin', 'Origin Token', 'Harmony One', 'Chainlink'],
            imageNames: ['bitcoin.png', 'origin.png', 'one.png', 'link.png'],
            prices: [0.0, 0.0, 0.0, 0.0]
        }
    },

    created() {
        // this.socket = io("http://localhost:3000", {transports:['websocket']});
    },

    mounted() {
        // var that = this
        // this.socket.on('price-change', data => {

        //     for (const [key, value] of Object.entries(data)) 
        //     {
        //         // console.log(key, value)
        //         that.price = parseFloat(value.price).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        //     }
        // })


        // this.socket.on('coins-data', data => {
        //     this.coins = data;
        // })
    }
    
}
</script>



<style>

body {
    width: 100%;
    height: 100%;
    display: block;
    font-family: 'Roboto', sans-serif;
}

body::after {
    content: "";
    background: url("./assets/background.jpg");
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
}

#app {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
