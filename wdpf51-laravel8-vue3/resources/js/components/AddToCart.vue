<template>
    <li>
        <a @click.prevent="addProducttoCart()" href="#"
            ><i class="fa fa-shopping-cart"></i
        ></a>
    </li>
</template>
<script>
import axios from "axios";
export default {
    props: ["pr_id"],
    methods: {
        addProducttoCart() {
            // alert("Yes,You have to clicked Id :" + this.pr_id);
            axios.post("cart", { prid: this.pr_id }).then(response => {
                // alert(response.data);
                console.log(response.data);
            });
        }
    }
};
</script>
<style></style>
