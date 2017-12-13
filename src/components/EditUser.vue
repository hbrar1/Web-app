<template>
    <div>
        <h1>Update Item</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayUser' }" class="btn btn-success">Return to Items</router-link></div>
        </div>

        <form v-on:submit.prevent="updateItem">
            <div class="form-group">
                <label>Item Name</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>

            <div class="form-group">
                <label name="product_price">user Price</label>
                <input type="text" class="form-control" v-model="user.price">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                user:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/users/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.user = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/users/update/' + this.$route.params.id;
                this.axios.post(uri, this.user).then((response) => {
                  this.$router.push({name: 'DisplayUser'});
                });
            }
        }
    }
</script>
