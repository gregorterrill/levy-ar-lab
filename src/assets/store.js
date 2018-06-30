import sets from './data/sets.js'
import formats from './data/formats.js'

// Product and Legality Types
const productTypes = [{
  'value': 'core',
  'name': 'Core Sets'
}, {
  'value': 'deluxe',
  'name': 'Deluxe Expansions'
}, {
  'value': 'campaign',
  'name': 'Campaign Expansions'
}, {
  'value': 'cycle',
  'name': 'Cycles'
}]

const legalityTypes = [{
  'value': 'legal',
  'name': 'Legal'
}, {
  'value': 'limited',
  'name': 'Limited'
}, {
  'value': 'illegal',
  'name': 'Illegal'
}, {
  'value': 'unreleased',
  'name': 'Unreleased'
}]

// External Resources
const mwlUrl = 'https://images-cdn.fantasyflightgames.com/filer_public/ff/4e/ff4e6f89-6874-4c45-9273-6335e2ab3784/adn_mwl_v21compressed.pdf'

// Default Selections
const selectedFormat = 'standard'
const selectedProducts = ['core','deluxe','campaign','cycle']
const selectedLegality = ['legal','limited','illegal','unreleased']
const selectedSort = 'release'

export default {
  mwlUrl,
  sets,
  formats,
  productTypes,
  legalityTypes,
  selectedFormat,
  selectedProducts,
  selectedLegality,
  selectedSort
}
