<template>
  <v-layout class="home">

    <HelloWorld msg="This is home"/>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
