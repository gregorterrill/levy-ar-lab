<template>
  <div v-show="displaySet" :class="'product product--' + set.type + ' product--' + selectedFormatLegality">
    <h2 class="product__name"><a :href="'https://netrunnerdb.com/en/set/' + set.nrdb" target="_blank">{{ set.name }}<span :class="'icon icon-' + set.nrdb"></span></a></h2>
    <a :href="'https://netrunnerdb.com/en/set/' + set.nrdb" target="_blank" class="product__box">
      <img class="product__image" :src="'../img/' + set.code.toLowerCase() + '_main.png'" />
      <span class="product__warning" v-if="set.mwl">{{ set.mwl.length }}</span>
      <span class="product__warning" v-if="limitedNote">?</span>
      <div class="product__info">
        <h3 class="product__name">{{ set.name }}</h3>
        <span class="product__code">{{ boxType }} ({{ set.code }})</span>
        <span class="product__release">{{ releaseDateText }}</span>
        <span v-if="limitedNote" class="product__limited">{{ limitedNote }}</span>
        <span v-if="set.mwl" class="product__bans">Banned Cards: <span v-for="ban in set.mwl">{{ ban }}<span class="product__bans-connect">, </span></span></span>
      </div>
    </a>
  </div>
</template>

<script>
import store from '../assets/store.js'

export default {
  name: 'Box',
  props: {
    set: Object
  },
  data() {
    return {
      store
    }
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
    releaseDateText() {
      if (this.set.released) {
        return 'Released: ' + this.set.released;
      } else {
        return 'Unreleased';
      }
    },
    boxType() {
      if (this.set.type == 'core') {
        return 'Core Set';
      } else if (this.set.type == 'deluxe') {
        return 'Deluxe Expansion';
      } else if (this.set.type == 'campaign') {
        return 'Campaign Expansion';
      } else {
        return 'Expansion';
      }
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
