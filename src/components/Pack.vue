<template>
  <a :href="'https://netrunnerdb.com/en/set/' + product.nrdb" target="_blank" :class="'product__pack product__pack--' + this.released">
    <img class="product__image" :src="'../img/' + product.code.toLowerCase() + '_main.png'" />
    <span class="product__warning" v-if="hasMwl">{{ mwlCount }}</span>
    <div class="product__info">
      <h3 class="product__name">{{ product.name }}</h3>
      <span class="product__code">Data Pack ({{ product.code }})</span>
      <span class="product__release">{{ releaseDateText }}</span>
      <span v-if="product.mwlBanned" class="product__bans">Banned Cards: <span v-for="ban in product.mwlBanned">{{ ban }}<span class="product__bans-connect">, </span></span></span>
      <span v-if="product.mwlRestricted" class="product__bans">Restricted Cards: <span v-for="restrict in product.mwlRestricted">{{ restrict }}<span class="product__bans-connect">, </span></span></span>
    </div>
  </a>
</template>

<script>
import store from '../assets/store.js'

export default {
  name: 'Pack',
  props: {
    set: Object,
    product: Object
  },
  data() {
    return {
      store
    }
  },
  computed: {
    released() {
      let releaseDate = new Date(this.product.released);
      let now = new Date();

      if (this.product.released && now > releaseDate) {
        return this.set.legality[store.selectedFormat]
      } else {
        return 'unreleased';
      }
    },
    hasMwl() {
      return (this.product.mwlBanned || this.product.mwlRestricted);
    },
    mwlCount() {
      let count = 0;

      if (this.product.mwlBanned) {
        count += this.product.mwlBanned.length;
      }

      if (this.product.mwlRestricted) {
        count += this.product.mwlRestricted.length;
      }

      return count;
    },
    releaseDateText() {
      let releaseDate = new Date(this.product.released);
      let now = new Date();

      if (this.product.released) {
        if (now > releaseDate) {
          return 'Released: ' + this.product.released;
        } else {
          return 'Releases: ' + this.product.released;
        }
      } else {
        return 'Unreleased';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
