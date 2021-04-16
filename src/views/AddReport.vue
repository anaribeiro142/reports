<template>

    <div class="container">
      <form action="POST" class="register-fraude">
        <h2>Form to declare a fraude</h2>
        <div class="form-group1">
          <Form></Form>
        </div>
      </form>
    </div>

</template>

<script>
   import Form from '@/components/Form.vue';
   export default {
       components: {
            Form
        },
   };
</script>

<style lang="scss" scoped>
.container {
    width: 586px;
    background: #F0F8FF;
    margin-left: 165px;
    border-radius: 15px;
    
}

.register-fraude{
    padding: 30px 60px 70px;
}


@media screen and (max-width: 1024px) {
    .container {
        margin: 0 auto;
    }
}
@media screen and (max-width: 768px) {
    
    .container {
        width: calc( 100% - 30px);
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .register-fraude {
        padding: 30px 30px 70px 30px;
    }
}
</style>