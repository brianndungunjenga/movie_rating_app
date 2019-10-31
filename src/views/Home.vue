<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card class="card">
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn rounded outlined color="purple"
                v-bind:to="`/movies/${movie._id}`">
                {{ movie.name }}
              </v-btn>
            </div>
            <span class="grey--text">{{ movie.release_year }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
        <!--<v-card-actions>
          <v-btn text color="purple">Rate this movie</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>-->
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script type="text/javascript">
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      return axios({
        method: 'get',
        url: 'http://localhost:8081/movies',
      })
        .then((response) => {
          this.movies = response.data.movies;
        })
        .catch(() => {

        });
    },
  },
};
</script>
