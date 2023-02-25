<template>
    <div>
        <button class="btn btn-info" @click="addProductToCart()">
            Add to Cart
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },

    props: ["userId", "productId"],
    methods: {
        async addProductToCart() {
            // if (this.userId == 0) {
            //     alert("You need to login,To add this product Cart");
            //     return;
            // }
            let response = await axios
                .post("/cart", {
                    pid: this.productId
                })
                .then(function(res) {
                    console.log(res.data);
                });

            // alert(this.productId);
        }
    }
};
</script>
<style></style>
