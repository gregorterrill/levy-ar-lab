<template>
	<dl class="faq">
    <dt tabindex="0" @click="expandFaq(1)" :class="(faqsExpanded.includes(1)) ? 'is-expanded' : ''">What is this website?</dt>
    <dd :class="(faqsExpanded.includes(1)) ? 'is-expanded' : ''">
      <p>This is an <em>unofficial</em> visualization of Android: Netrunner set rotation and card legality. It should only be interpreted as a "best guess." Fantasy Flight Games may alter (and previously has altered) the rules around rotation at any time.</p>
      <p>Hovering over a product will show more details. Clicking on any product image or title will take you to a list of the included cards on NetrunnerDB. If a product includes banned cards or special notes, a red circle will appear next to it - hover for more info.</p>
    </dd>

    <dt tabindex="0" @click="expandFaq(2)" :class="(faqsExpanded.includes(2)) ? 'is-expanded' : ''">How do Netrunner releases work?</dt>
    <dd :class="(faqsExpanded.includes(2)) ? 'is-expanded' : ''">
      <p>Netrunner products come in two main forms:</p>
      <ol>
        <li>Data Packs, which are released once a month or so. A group of six Data Packs form a Cycle. Usually there will be a gap of a month to a few months between one Cycle ending and the next beginning.</li>
        <li>"Big boxes", which may be Core Sets, Deluxe Expansions, or Campaign Expansions. These products are usually (but not always) released between two Cycles.</li>
      </ol>
    </dd>

    <dt tabindex="0" @click="expandFaq(5)" :class="(faqsExpanded.includes(5)) ? 'is-expanded' : ''">How do I know if a specific Netrunner card is legal to play?</dt>
    <dd :class="(faqsExpanded.includes(5)) ? 'is-expanded' : ''">
      <p>There are a few questions to ask yourself to determine if a card is legal to include in your deck (beyond the basic deckbuilding rules concerning faction and influence):</p>
      <ol>
        <li>Is the set that the card belongs to currently legal? You can use this page to find out. The set a card belongs to can be identified by the symbol at the bottom right corner of the card. Note that all Data Packs in a Cycle share the same symbol, while "big box" products each have unique symbols.</li>
        <li>Is the card on the most recent <a :href="store.mwlUrl" target="_blank">Most Wanted List</a> (Netrunner's banned/restricted list)? Packs containing banned cards are shown on this site with a red circle indicating how many cards from that pack are banned. You can hover over the pack to see a list of the banned cards it includes. Note that restricted cards aren't indicated here, so refer to the list and/or your online deckbuilder of choice.</li>
        <li>Are there any special rules for the tournament or event you're playing in that would disallow the card? This really only applies to community-run events, not official Organized Play events (Game Night Kits, Store Championships, Regionals, Nationals, Worlds, etc).</li>
      </ol>
      <p>Most online deckbuilders like <a href="https://netrunnerdb.com" target="_blank">NetrunnerDB</a> will alert you if your deck is illegal.</p>
    </dd>    
  </dl>
</template>

<script>
import store from '../assets/store.js'

export default {
  name: 'Faq',
  components: {
  },
  data() {
    return {
    	store,
      faqsExpanded: []
    }
  },
  methods: {
    expandFaq(faqNum) {
      if (this.faqsExpanded.includes(faqNum)) {
        let index = this.faqsExpanded.indexOf(faqNum);
        this.faqsExpanded.splice( index, 1 );
      } else {
        this.faqsExpanded.push(faqNum);
      }
    }
  }
}
</script>

<style lang="scss">
.faq {
  text-align:left;
  max-width:720px;
  margin:auto;
  padding: 0 2rem;

  dl { margin:0; padding:0; }

  li {
    margin-bottom:0.5rem;
  }

  @media screen and (min-width:640px) {
    padding:0;
  }
}

dt {
  display:block;
  padding:0.5rem 2rem 0.5rem 0.5rem;
  margin:0;
  font-size:1rem;
  border-bottom:1px solid transparentize(white,0.5);
  position:relative;
  cursor:pointer;
  user-select:none;

  transition:background-color 0.2s ease;

  &::after {
    position:absolute;
    right:0.5rem;
    top:0.125rem;
    content:"+";
    font-size:1.5rem;
    transition:transform 0.2s ease;
    transform-origin:center center;
  }

  &:focus, &:hover {
    outline:none;
    background-color:transparentize(white,0.85);
  }

  &.is-expanded::after {
    transform:rotate(45deg);
  }
}

dd {
  font-size:0.875rem;
  display:none;
  padding:1rem 0.5rem 3rem;
  margin:0;
  border-bottom:1px solid transparentize(white,0.5);

  &:last-of-type { 
    padding-bottom:1rem;
    border-bottom:none;
  }

  &.is-expanded { display:block; }
}
</style>