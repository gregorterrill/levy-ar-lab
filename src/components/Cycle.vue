<template>
  <div v-show="displaySet" :class="'product product--' + set.type + ' product--' + selectedFormatLegality">
    <h2 class="product__name"><a :href="'https://netrunnerdb.com/en/cycle/' + set.nrdb" target="_blank">{{ set.name }} Cycle<span :class="'icon icon-' + set.nrdb"></span></a></h2>
    <span class="product__warning" v-if="limitedNote">?</span>
    <div class="product__packs">
      <Pack v-for="product in set.products" :key="product.nrdb" :set="set" :product="product"></Pack>
    </div>
    <div class="product__info">
      <h3 class="product__name">{{ set.name }} Cycle</h3>
      <span class="product__code">Data Pack Cycle (#{{ set.cycleNum }})</span>
      <span class="product__release">First Release: {{ this.set.products[0].released }}</span>
      <span class="product__release">Final Release: {{ this.set.products[5].released }}</span>
      <span v-if="limitedNote" class="product__limited">{{ limitedNote }}</span>
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
      return this.set.legality[store.selectedFormat];
    },
    released() {
      return this.set.products[0].released;
    },
    limitedNote() {
      if (this.selectedFormatLegality == 'limited') {
        let selectedFormat = store.formats.find(function(format) { return format.value == store.selectedFormat; });
        return selectedFormat['limited'][this.set.nrdb];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
