const formats = [
	{
	  'value': 'standard',
	  'name': 'Standard',
	  'infoHtml': "<p>Standard is the <em>official</em> format defined by FFG. All products are legal, except the original Core Set and first two cycles (Genesis and Spin), which rotated out of legal play on October 1, 2017.</p>",
	  'legal': ['core2','cac','hap','lunar','oac','sansan','dad','mumbad','flashpoint','td','red-sand','kitara','rar'],
	  'limited': {},
	}, {
	  'value': 'cache',
	  'name': 'Cache Refresh',
	  'infoHtml': "<p>Cache Refresh is an <em>official</em> alternative format introduced by FFG with a smaller card pool. In this format, each deck can include cards from:</p><ol><li>1 copy of the Revised Core Set</li><li>1 copy of the Terminal Directive Campaign Expansion</li><li>1 Deluxe Expansion (your Corp/Runner decks can use different Deluxes)</li><li>The 2 most recent Cycles (including in-progress Cycles)</li></ol>",
	  'legal': ['td','red-sand','kitara'],
	  'limited' : {
	  	'core2': 'Only one copy of the Revised Core Set may be used in Cache Refresh.',
	  	'cac': 'Cards from only one Deluxe expansion may be used for each of your decks in Cache Refresh. Your Corp and Runner decks may use cards from different Deluxe expansions.',
	  	'oac': 'Cards from only one Deluxe expansion may be used for each of your decks in Cache Refresh. Your Corp and Runner decks may use cards from different Deluxe expansions.',
	  	'hap': 'Cards from only one Deluxe expansion may be used for each of your decks in Cache Refresh. Your Corp and Runner decks may use cards from different Deluxe expansions.',
	  	'dad': 'Cards from only one Deluxe expansion may be used for each of your decks in Cache Refresh. Your Corp and Runner decks may use cards from different Deluxe expansions.',
	  	'rar': 'Cards from only one Deluxe expansion may be used for each of your decks in Cache Refresh. Your Corp and Runner decks may use cards from different Deluxe expansions.'
	  }
	}, {
	  'value': 'modded',
	  'name': 'Modded',
	  'infoHtml': "<p>Modded is an <em>unofficial</em> format, popularized by the Australian Netrunner community after the release of the Revised Core Set. This format aims to keep the card pool smaller for new players. It currently consists of the Revised Core and the latest cycle.</p>",
	  'legal': ['core2','kitara'],
	  'limited': {},
	}
]

export default formats