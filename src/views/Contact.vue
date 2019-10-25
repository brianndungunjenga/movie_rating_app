<template>
  <v-layout class="contact">
    <HelloWorld msg="This is our contact page"/>
  </v-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'contact',
  components: {
    HelloWorld,
  },
};
</script>
