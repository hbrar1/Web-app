<template>
  <div>
    <h1>Sign Up</h1>
    <form v-on:submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User Email:</label>
            <input type="text" class="form-control" v-model="user.email">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User Name:</label>
            <input type="text" class="form-control" v-model="user.name">
          </div>
        </div>
      </div>      
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Company:</label>
            <input type="text" class="form-control" v-model="user.company">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Telephone:</label>
            <input type="text" class="form-control" v-model="user.telephone">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-check-label">Official Visit:
            <input type="checkbox" class="form-check-input" v-model="user.visit">
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-check-label">Escort Required:
            <input type="checkbox" class="form-check-input" v-model="user.esc">
            </label>
          </div>
        </div>
      </div>
      <div class="row" v-if=" user.esc == true ">
        <div class="col-md-6">
          <div class="form-group">
            <label>Escort Name:</label>
            <input type="text" class="form-control" v-model="user.esc_name">  
          </div>
        </div>
      </div><br />
      <div class="form-group">
        <button class="btn btn-danger">Sign up</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          user:{
            name: '',
            email: '',
            telephone: '',
            company: '',
            visit: false,
            esc: false,
            esc_name: ''
          }
        }
    },
    methods: {
      addUser(){
        let uri = 'http://localhost:4000/users/add';        
        this.axios.post(uri, this.user).then((response) => {
          this.$router.push({name: 'CreateUser'})
        });
        this.user = {};
      }
    }
  }
</script>
