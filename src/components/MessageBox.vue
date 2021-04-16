<template>

   <div class="bar" :class="type">{{message}}</div>
</template>

<script>
    
    
    export default {
        props: {
            type: String,
            message: String
        },
    };
</script>

<style lang="scss" scoped>
.bar {
  padding: 10px;
  margin: 10px;
  color: #333;
  background: #fafafa;
  border: 1px solid #ccc;
}

.error {
  color: #ba3939;
  background: #ffe0e0;
  border: 1px solid #a33a3a;
}
</style>