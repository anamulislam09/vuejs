<template>
    <div>
        <li class="nav-item">
            <a href="/checkout" class="btn btn-warning btn-sm">
                Cart {{ itemCount }}
            </a>
        </li>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemCount: "",
        };
    },
    created() {
        // this.$root.$on('changeInCart', (item) => {
        //     this.itemCount = item;
        // })
        this.get_cart_items();
    },
    methods: {
        async get_cart_items() {
            await axios.post("/cart");
            this.itemCount = response.data.items;
            console.log(response.data.items);
        },
    },
    // created(){
    //     this.getCartItemsOnPageLoad();
    // }
};
</script>
