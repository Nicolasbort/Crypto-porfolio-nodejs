<template>
    <div class="rounded bg-light p-3 mt-5 shadow-lg">
        <form action="http://localhost:3000/addCoin" method="POST" @submit.prevent="addNewCoin()">
            <div class="row">
                <div class="col-12 mb-4 text-center">
                    <h2 class="fw-bold">Insert a new Cryptocurrency</h2>
                </div>

                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="currency" placeholder="Crypto name to insert" required />
                        <!-- <input type="text" class="form-control" name="currency" placeholder="Crypto name to insert" required/> -->
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="currencyApiName" placeholder="Binance name e.g. BTCUSDT" required />
                        <!-- <input type="text" class="form-control" name="currencyApiName" placeholder="Binance name e.g. BTCUSDT" required /> -->
                    </div>
                </div>

                <div class="col-md-6">
                    <select class="form-select">
                        <option value="" disabled selected>Fiat Currency</option>
                        <option value="USDT">USDT</option>
                        <option value="BRL">BRL</option>
                    </select>
                </div>

                <div class="col-12 my-3 d-flex justify-content-center">
                    <!-- <button type="button" v-on:click="addNewCoin()" class="btn btn-success w-25 fw-bold">Save</button> -->
                    <button type="submit" class="btn btn-success w-25 fw-bold">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'FormAddCoin',
    data() {
        return {
            currency: "",
            currencyApiName: "",
        }
    },

    methods: {
        addNewCoin()
        {
            let data = {}
            data["currency"] = this.currency;
            data["currencyApiName"] = this.currencyApiName;

            this.formatStrings(data);

            console.table(data)

            const options = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            axios.post("http://localhost:3000/coin/add", JSON.stringify( data ), options).then(response => (console.log(response)))  
        },

        formIsValid(data = {})
        {
            if (!data) return false;
            
            for (var key in data) {
                if ( !data[key] )
                    return false;
            }
            return true;
        },

        formatStrings(data = {})
        {
            if (!data) return false;

            data.currency = this.currency.charAt(0).toUpperCase() + this.currency.slice(1).toLowerCase()
            data.currencyApiName = this.currencyApiName.toUpperCase();
        }

    }
}
</script>