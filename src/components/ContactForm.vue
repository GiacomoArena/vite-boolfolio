  <script>
  export default {
    name:'ContactForm',

    data(){
      return{
        name:'',
        email:'',
        message:'',
      }
    },
    methods:{

      sendForm(){
        const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        }
        console.log(data);
      }
    }
  }
  </script>


<template>
  
  <form @submit.prevent="sendForm()">
  <div class="mb-3">
    <div class="mb-3">
      <label  class="form-label">Name</label>
      <input v-model.trim="name" type="text" class="form-control" name="name" placeholder="Name">
    </div>
    <label  class="form-label">Email address</label>
    <input v-model.trim="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="mb-3">
      <label  class="form-label">Message</label>
      <textarea v-model.trim="message" type="text" class="form-control" name="name" placeholder="Write something"></textarea>
    </div>
  
  <button type="submit" class="btn btn-dark">Send</button>
</form>

</template>


<style lang="scss" scoped >

</style>