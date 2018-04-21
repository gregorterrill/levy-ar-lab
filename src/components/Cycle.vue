<template>
  <div v-show="displaySet" :class="'product product--' + set.type + ' product--' + selectedFormatLegality">
    <h2 class="product__name"><a :href="'https://netrunnerdb.com/en/cycle/' + set.nrdb" target="_blank">{{ set.name }} Cycle (#{{ set.cycleNum }})<span :class="'icon icon-' + set.nrdb"></span></a></h2>
    <div class="product__packs">
      <Pack v-for="product in set.products" :key="product.nrdb" :set="set" :product="product"></Pack>
    </div>
  </div>
</template>

<script>
import store from '../assets/store.js'
import Pack from './Pack.vue'

export default {
  name: 'Cycle',
  components: {
    Pack
  },
  data() {
    return {
      store
    }
  },
  props: {
    set: Object
  },
  computed: {
    displaySet() {
      if (store.selectedLegality.includes(this.selectedFormatLegality) && store.selectedProducts.includes(this.set.type)) {
        return true;
      }
      return false;
    },
    selectedFormatLegality() {
      if (store.selectedFormat == 'cache') {
        return this.set.crLegality;
      } 
      return this.set.legality;
    },
    released() {
      return this.set.products[0].released;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
