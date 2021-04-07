<template>
    <div class="col-md-6 col-sm-12">
        <div class="coin-card d-flex rounded bg-white p-3 my-3 shadow-lg">
            <img class="coin-image image-responsive" :src="require(`../assets/coins/${imageName}`)" :alt="`${currency} image`">
            <div class="d-flex align-items-start flex-column bd-highlight ms-3 w-50">
                <div class="mb-3 fs-5 fw-bold p-2 bd-highlight">{{currency}}</div>
                <div class="p-2 fs-5 text-success bd-highlight">$ {{price}}</div>
            </div>
            <div class="d-flex align-items-end flex-column bd-highlight w-50">
                <div class="p-2 bd-highlight fw-bold text-success">23.5%</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoinCard',

    data() {
        return {
            // currency: "",
            currencyApiName: "",
            price: 0.0,
            // imageName: "",
        }
    },

    props: {
        currency: String,
        imageName: String
    }
}
</script>

<style scoped>

.coin-image {
    width: 100px;
    height: 100px;
}

.coin-card:hover {
    cursor: pointer;
    opacity: 0.8;
}

</style>