<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";

const kategoriak = ref([]);
// const valamik = ref([]);
const valasztottKategoriaId = ref();
const kiválasztottFestmények = ref([]);

// onMounted(() => {
//   // Ez akkor fut le, amikor betöltődik a HomeView komponens
// })

DataService.getAllKategoria()
  .then((resp) => {
    kategoriak.value = resp;
    //console.log(kategoriak.value);
  })
  .catch((err) => {
    console.log(err);
  });

// DataService.getAllValami()
//   .then((resp) => {
//     valamik.value = resp;
//     //console.log(valamik.value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const valaszto = async () => {
  kiválasztottFestmények.value = await DataService.getPaintsByCategoryId(valasztottKategoriaId.value)
  console.log(kiválasztottFestmények.value);
};
</script>

<template>
  <select v-model="valasztottKategoriaId" @change="valaszto">
    <option v-for="kategoria in kategoriak" :value="kategoria.id">{{ kategoria.name }}</option>
  </select>

  <div class="row">
    <div v-for="festmény in kiválasztottFestmények" class="col-12 col-md-6 col-xl-4">
      <div class="card w-100">
        <img :src="festmény.imageUrl"
          class="card-img-top p-3">
        <div class="card-body">
          <p class="card-text">
            {{ festmény.description }}
          </p>
          <hr>
          <p>
            Starting price: {{ festmény.startingPrice }}- Ft
          </p>
          <p>
            Number of <span class="bids" data-bs-toggle="modal" data-bs-target="#exampleModal">bids</span>: {{ festmény.numberOfBids }}, highest
            bid: {{ festmény.maxBid }}- Ft
          </p>
        </div>
        <div class="card-footer text-center">
          <!-- <a href="bid.html?image=image_7H2YnCkv_1679590561688_raw.jpg" class="btn btn-primary">Bid</a>
           -->
           <router-link :to="`/bid/${festmény.id}`" class="btn btn-primary">Bid</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
