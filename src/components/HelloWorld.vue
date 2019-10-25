<template>
  <v-layout>
    {{msg}}
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
