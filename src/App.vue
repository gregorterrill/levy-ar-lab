<template>
  <div id="app">

    <header>
      <h1>Levy AR Lab</h1>
      <p class="subtitle">Android: Netrunner Product Legality</p>
      <p class="last-updated">Updated 2018-03-25</p>

      <Faq></Faq>

    </header>

    <div class="container">

      <div class="filters">
        <h2>Filters</h2>

        <div class="filters__inner">

          <div class="filters__filter">
            <h3>Format</h3>
            <ul class="filters__type">
              <li v-for="format in store.formats">
                <input type="radio" :id="format.value" :value="format.value" v-model="store.selectedFormat" v-on:change="checkFormatSort">
                <label :for="format.value">{{ format.name }}</label>
              </li>
            </ul>
          </div>

          <div class="filters__filter">
            <h3>Sort By</h3>
            <ul class="filters__type">
              <li>
                <input type="radio" id="release" value="release" v-model="store.selectedSort">
                <label for="release">Release Date</label>
              </li>
              <li v-if="store.selectedFormat == 'standard'">
                <input type="radio" id="rotation" value="rotation" v-model="store.selectedSort">
                <label for="rotation">Rotation Date</label>
              </li>
              <li>
                <input type="radio" id="legality" value="legality" v-model="store.selectedSort">
                <label for="legality">Current Legality</label>
              </li>
            </ul>
          </div>

          <div class="filters__filter">
            <h3>Product Type</h3>
            <ul class="filters__type">
              <li v-for="type in store.productTypes">
                <input type="checkbox" :id="type.value" :value="type.value" v-model="store.selectedProducts">
                <label :for="type.value">{{ type.name }}</label>
              </li>
            </ul>
          </div>

          <div class="filters__filter">
            <h3>Current Legality</h3>
            <ul class="filters__type">
              <li v-for="type in store.legalityTypes" v-show="!(type.value == 'limited' && store.selectedFormat == 'standard')">
                <input type="checkbox" :id="type.value" :value="type.value" v-model="store.selectedLegality">
                <label :for="type.value">{{ type.name }}</label>
              </li>
            </ul>
          </div>

        </div>

      </div>

      <div v-if="store.selectedLegality.length == 0 || store.selectedProducts.length == 0">
        <h2>No products to show. Adjust your filters.</h2>
      </div>

      <div v-if="store.selectedSort == 'release'" class="sets">
        <Cycle v-for="set in store.sets" :key="set.nrdb" v-if="set.type == 'cycle'" :set="set"></Cycle>
        <Box v-else :key="set.nrdb" :set="set"></Box>
      </div>

      <template v-else-if="store.selectedSort == 'rotation'">
        <div v-for="rotation in store.rotations" class="set-group" v-if="sortedSets[rotation.number]">
          <h2>{{ rotation.name }}<span v-if="rotation.date">{{ rotation.date }}<span v-if="rotation.estimate"> (estimated)</span></span></h2>
          <p v-if="rotation.notes" v-html="rotation.notes" class="set-group__notes"></p>
          <div class="sets sets--sorted">
            <Cycle v-for="set in sortedSets[rotation.number]" :key="set.nrdb" v-if="set.type == 'cycle'" :set="set"></Cycle>
            <Box v-else :key="set.nrdb" :set="set"></Box>
          </div>
        </div>
      </template>

      <template v-else-if="store.selectedSort == 'legality'">
        <div v-for="legality in store.legalityTypes" class="set-group" v-if="sortedSets[legality.value]">
          <h2>{{ legality.name }}</h2>
          <div class="sets sets--sorted">
            <Cycle v-for="set in sortedSets[legality.value]" :key="set.nrdb" v-if="set.type == 'cycle'" :set="set"></Cycle>
            <Box v-else :key="set.nrdb" :set="set"></Box>
          </div>
        </div>
      </template>

    </div>

    <footer>
      <p class="footer__info">This unofficial fan resource is created and maintained by <a href="http://gregorterrill.com">Gregor Terrill</a>.<br>Please <a href="mailto:heygregor@gmail.com">email</a> or <a href="https://twitter.com/GregorTerrill">tweet</a> me with any feedback, corrections, or suggestions.<p>
      <p class="footer__disclaimer">Netrunner is a TM of R. Talsorian Games, Inc. Android is TM &amp; ©2018 Fantasy Flight Games. All rights reserved. Netrunner is licensed by Wizards of the Coast LLC. ©2018 Wizards.</p>
      <p class="footer__disclaimer">This website is not produced, endorsed, supported, or affiliated with Fantasy Flight Games, R. Talsorian Games, Inc., or Wizards of the Coast LLC.</p>
    </footer>

  </div>
</template>

<script>
import Faq from './components/Faq.vue'
import Box from './components/Box.vue'
import Cycle from './components/Cycle.vue'
import store from './assets/store.js'

export default {
  name: 'app',
  components: {
    Faq,
    Box,
    Cycle
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    const vm = this;

    //do initial rotation and legality checks on all the products
    store.sets.map(function(product) {
      let releaseDate = new Date(product.released);
      let rotationDate = new Date(store.rotations[product.rotation].date);
      let now = new Date();
      let legality = 'legal';
      let crLegality = 'illegal';

      //check legality for standard
      if (product.rotation != 0 && (rotationDate < now)) {
        legality = 'illegal';
      }
      if (now < releaseDate || product.released == false) {
        legality = 'unreleased';
      }
      vm.$set(product, 'legality', legality);

      //check legality for cache refresh
      if (store.cacheRefreshLegal.includes(product.nrdb)) {
        crLegality = 'legal';
      }
      if (product.type == 'deluxe') {
        crLegality = 'limited';
      }
      if (now < releaseDate || product.released == false) {
        crLegality = 'unreleased';
      }
      vm.$set(product, 'crLegality', crLegality);

      return product;
    });

  },
  computed: {
    sortedSets() {

      let newSets = {};

      if (store.selectedSort == 'rotation') {
       
        newSets = store.sets.reduce(function (groupedSets, set) { 

          if (!store.selectedLegality.includes(set.legality) || !store.selectedProducts.includes(set.type)) {
            return groupedSets;
          }

          if (!groupedSets[set.rotation]) {
            groupedSets[set.rotation] = [];
          }
          groupedSets[set.rotation].push(set);
          return groupedSets;
        }, {});
      
      } else if (store.selectedSort == 'legality') {

        if (store.selectedFormat == 'cache') {
          newSets = store.sets.reduce(function (groupedSets, set) { 

            if (!store.selectedLegality.includes(set.crLegality) || !store.selectedProducts.includes(set.type)) {
              return groupedSets;
            }

            if (!groupedSets[set.crLegality]) {
              groupedSets[set.crLegality] = [];
            }
            groupedSets[set.crLegality].push(set);
            return groupedSets;
          }, {});

        } else {

          newSets = store.sets.reduce(function (groupedSets, set) { 

            if (!store.selectedLegality.includes(set.legality) || !store.selectedProducts.includes(set.type)) {
              return groupedSets;
            }

            if (!groupedSets[set.legality]) {
              groupedSets[set.legality] = [];
            }
            groupedSets[set.legality].push(set);
            return groupedSets;
          }, {});

        }
      
      } else {

        newSets = store.sets;

      }

      return newSets;

    }
  },
  methods: {
    checkFormatSort() {
      //make sure you're not seeing an incompatible sort mode
      if (store.selectedFormat == 'cache' && store.selectedSort == 'rotation') {
        store.selectedSort = 'release';
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/netrunner-font.css';
html {
  background-color:black;
  margin:0;
  padding:0;
  background-image:url(./assets/img/hex.png);
  background-attachment:fixed;
  font-size:16px;
}

* {
  box-sizing:border-box;
}

body {
  margin:0;
  padding:0;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0.35) 30%, rgba(100,100,100,0.2) 80%);
  background-attachment:fixed;
  min-height:100vh;
}

a {
  color:white;
  text-decoration:underline;
}

p {
  line-height:1.5;
}

.container {
  display:block;
  margin:auto;
  max-width:1504px; //1440 + 64
  padding:0 2rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.filters {
  position:relative;
  display:block;
  margin:5rem auto 3rem;
  padding:2rem;
  text-align:left;
  max-width:720px;
  background-color:transparentize(black,0.5);
  border:1px solid transparentize(white,0.5);

  @media screen and (min-width:640px) {
    padding:1.5rem 1rem 1.5rem 2rem;
  }

  > h2 {
    background-color: white;
    color: black;
    position: absolute;
    top: -1rem;
    padding: 0 0.5rem;
  }

}

.filters__inner {
  display:grid;

  @media screen and (min-width:640px) {
    grid-template-columns:140px 1fr 1fr 1fr;
  }
}

.filters__type {
  list-style-type:none;
  margin:0;
  padding:0;
  font-size:0.875rem;
  line-height:1rem;
  input {
    width:0.9375rem;
    height:0.9375rem;
  }
  input,label { cursor:pointer; }
}

label[for="legal"]::after,
label[for="illegal"]::after,
label[for="unreleased"]::after,
label[for="limited"]::after {
  content: "";
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  vertical-align:baseline;
  line-height:1rem;
  margin-left: 0.25rem;
  border-radius:50%;
  opacity:0.75;
}

label[for="legal"]::after { background: #116f26; }
label[for="illegal"]::after { background: #b51725; }
label[for="unreleased"]::after { background: #093a71; }
label[for="limited"]::after { background: #8f9812; }


.set-group {
  margin-top:3rem;

  > h2 { 
    color:black;
    background-color:white;
    display:inline-block;
    padding:0.5rem 2rem;
    font-size:1.5rem; 
    margin-bottom:0; 
    line-height:1.25;

    span { font-size:1rem; line-height:1; margin-bottom:0.25rem;}
    span span { display:inline; }
  }
}

.set-group__notes {
  margin-left:auto;
  margin-right:auto;
  max-width:620px;
  font-size:0.875rem;
}

.sets {
  width:100%;
  max-width:1200px;
  margin:3rem auto 0;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.product {
  display:grid;
  align-content:center;
  position:relative;
  padding:2rem 0.5rem;
  flex-grow:1;
  flex-shrink:0;
  flex-basis:20rem;
  margin:0.5rem;

  @media screen and (min-width:640px) {
    padding:2rem;
  }
}

.product--illegal {
  background-color:transparentize(#b51725,0.75);
}

.product--legal {
  background-color:transparentize(#116f26,0.75);
}

.product--unreleased {
  background-color:transparentize(#093a71,0.75);
}

.product--limited {
  background-color:transparentize(#8f9812,0.75);
}

.product__name {
  .icon { margin-left:0.5rem; vertical-align:top; }
  a { text-decoration:none;}
}

.product__info {
  opacity:0;
  visibility:hidden;
  position:absolute;
  background:transparentize(black,0.1);
  color:white;
  padding:1rem;
  width:20rem;
  z-index:99;
  left:50%;
  margin-left:-10rem;

  &::before {
    content:"";
    position:absolute;
    top:-2rem;
    left:50%;
    margin-left:-1rem;
    border:1rem solid transparent;
    border-bottom-color:transparentize(black,0.1);
  }

  span { font-size:0.875rem; }
}

.product__image {
  width:8rem;
  height:8rem;
  display:block;
  margin:auto;
  transform-origin:center center;
  transition:transform 0.2s ease-in-out;
}

.product__packs {
  margin:0 auto -1rem;
  display:grid;
  align-content:center;
  justify-content: center;
  grid-template-columns:repeat(2,6rem);
  grid-template-rows:repeat(3,1fr);

  @media screen and (min-width:480px) {
    grid-template-columns:repeat(3,6rem);
    grid-template-rows:repeat(2,1fr);
  }

  @media screen and (min-width:920px) {
    grid-template-columns:repeat(6,8rem);
    grid-template-rows:1fr;
    margin:0 auto;
  }
}

.product--cycle {
  position:relative;

  @media screen and (min-width:920px) {
    flex-basis:48rem;
  }
}

.product__pack {
  margin-bottom:1rem;

  .product__image {
    width:6rem;
    height:6rem;

    @media screen and (min-width:920px) {
      width:8rem;
      height:8rem;
    }
  }

  @media screen and (min-width:920px) {
    margin-bottom:0;
  }
}

.product__box,
.product__pack {
  position:relative;
}

.product--unreleased,
.product__pack--unreleased {
  .product__image { opacity:0.5; }
}

.product__warning {
  color:red;
  position:absolute;
  bottom:-0.5rem;
  right:50%;
  margin-right:-4rem;
  width:1.25rem;
  height:1.25rem;
  font-size:0.75rem;
  line-height:1.25rem;
  background-color:red;
  color:white;
  text-align:center;
  border-radius:50%;
  display:block;
  opacity:0.75;
}

.product__pack .product__warning {
  right:1.5rem;
  margin-right:0;
}

.product__cache,
.product__bans {
  margin-top:0.25rem;
  font-size:0.75rem !important;
  color:red;
  span { display:inline; font-size:0.75rem !important; }
}

.product__bans > span:last-child .product__bans-connect { display:none; }



.product__box,
.product__pack {
  cursor:pointer;
  &:hover,&:focus {
    .product__info {
      opacity:1;
      visibility:visible;
    }
    .product__image {
      transform:scale(1.1);
    }
  }
}

h1,h2,h3,h4,h5,h6,dt {
  margin:0;
  font-weight:normal;
  font-family: 'Monkirta Pursuit NC', 'Avenir', Helvetica, Arial, sans-serif;
  line-height:1.5;
}

header {
  padding-top:3rem;
}

h1 {
  line-height:1;
  font-size:2rem;
  margin-top:0 !important;
  margin-bottom:0.375rem;
}

.subtitle {
  font-size:1.5rem;
  margin:0 auto;
}

h2 {
  margin-bottom:1.25rem;
  font-size:1.25rem;
}

h3 {
  font-size:1.125rem;
}

.last-updated {
  margin-top:0;
  font-size:1rem;
}

span {
  display:block;
}

p a {
  color:white;
}

header p {
  max-width:50rem;
  margin-left:auto;
  margin-right:auto;
}

footer {
  margin-top:5rem;
  padding-bottom:3rem;
}

.footer__info {
  border-top:1px solid transparentize(white,0.5);
  border-bottom:1px solid transparentize(white,0.5);
  padding:3rem 0;
  margin:3rem auto;
  max-width:720px;
}

.footer__disclaimer {
  font-size:0.875rem;
  margin:0;
}

</style>
