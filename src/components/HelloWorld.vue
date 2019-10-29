<template>
  <v-layout>
    {{msg}}
    <!--<div v-text="msg"></div>-->
  </v-layout>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};

</script>
