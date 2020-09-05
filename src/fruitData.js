const fruitData = [
    {
        id: "0",
        name: "Banana",
        image: './assets/banana.svg',
        fact1: "The banana plant is the largest herbaceous flowering plant.",
        fact2: "The word banana is thought to be of West African origin, possibly from the Wolof word banaana, and passed into English via Spanish or Portuguese.",
        fact3: "The earliest domestication of bananas (Musa spp.) were initially from naturally occurring parthenocarpic (seedless) individuals of Musa acuminata banksii in New Guinea.",
        active: false
    },
    {
        id: "1",
        name: "Apples",
        image: "./assets/apple.svg",
        fact1: "The original wild ancestor of Malus domestica was Malus sieversii, found growing wild in the mountains of Central Asia in southern Kazakhstan, Kyrgyzstan, Tajikistan, and Xinjiang, China.",
        fact2: "In Norse mythology, the goddess Iðunn is portrayed in the Prose Edda (written in the 13th century by Snorri Sturluson) as providing apples to the gods that give them eternal youthfulness.",
        fact3: "Many apples grow readily from seeds. However, more than with most perennial fruits, apples must be propagated asexually to obtain the sweetness and other desirable characteristics of the parent.",
        active: false
    },
    {
        id: "2",
        name: "Grapes",
        image: "./assets/grape.svg",
        fact1: "The cultivation of the domesticated grape began 6,000–8,000 years ago in the Near East.",
        fact2: "According to the Food and Agriculture Organization (FAO), 75,866 square kilometers of the world are dedicated to grapes.",
        fact3: "Anthocyanins tend to be the main polyphenolics in purple grapes, whereas flavan-3-ols (i.e. catechins) are the more abundant class of polyphenols in white varieties.",
        active: true
    },
    {
        id: "3",
        name: "Lime",
        image: "./assets/lime.svg",
        fact1: "Raw limes are 88% water, 10% carbohydrates and less than 1% each of fat and protein.",
        fact2: "The use of dried limes (called black lime or loomi) as a flavouring is typical of Persian cuisine and Iraqi cuisine, as well as in Persian Gulf-style baharat (a spice mixture that is also called kabsa or kebsa).",
        fact3: "Contact with lime peel or lime juice followed by exposure to ultraviolet light may lead to phytophotodermatitis, which is sometimes called margarita photodermatitis or lime disease.",
        active: false
    },
    {
        id: "4",
        name: "Oranges",
        image: "./assets/orange.svg",
        fact1: "The orange originated in a region comprising Southern China, Northeast India, and Myanmar, and the earliest mention of the sweet orange was in Chinese literature in 314 BC.",
        fact2: "An enormous number of cultivars have, like the sweet orange, a mix of pomelo and mandarin ancestry.",
        fact3: "Acidless oranges are an early-season fruit with very low levels of acid. They also are called sweet oranges in the United States, with similar names in other countries.",
        active: false
    },
    {
        id: "5",
        name: "Apricots",
        image: "./assets/apricot.svg",
        fact1: "A 2019 genetic study concludes that apricots were independently domesticated three times, twice in Central Asia and once in China, with extensive cross pollination between wild and domesticated species across Eurasia.",
        fact2: "In a 100-gram amount, raw apricots supply 48 calories and are composed of 11% carbohydrates, 1% protein, less than 1% fat and 86% water.",
        fact3: "The apricot is the national fruit of Armenia, mostly growing in the Ararat plain. It is often depicted on souvenirs.",
        active: false
    },
    {
        id: "6",
        name: "Asparagus",
        image: "./assets/asparagus.svg",
        fact1: "It is pictured as an offering on an Egyptian frieze dating to 3000 BC. In ancient times, it was also known in Syria and in Spain.",
        fact2: "Only young asparagus shoots are commonly eaten: once the buds start to open, the shoots quickly turn woody.",
        fact3: "Certain compounds in asparagus are metabolized to yield ammonia and various sulfur-containing degradation products, including various thiols and thioesters, which give urine a characteristic smell.",
        active: false
    },
    {
        id: "7",
        name: "Avocado",
        image: "./assets/avocado.svg",
        fact1: "Avocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world.",
        fact2: "Persea americana, or the avocado, possibly originated in the Tehuacan Valley in the state of Puebla, Mexico, although fossil evidence suggests similar species were much more widespread millions of years ago.",
        fact3: "The fruit of horticultural cultivars has a markedly higher fat content than most other fruit, mostly monounsaturated fat, and as such serves as an important staple in the diet of consumers who have limited access to other fatty foods.",
        active: false
    },
    {
        id: "8",
        name: "Blackberries",
        image: "./assets/blackberry.svg",
        fact1: "What distinguishes the blackberry from its raspberry relatives is whether or not the torus picks with (i.e., stays with) the fruit.",
        fact2: "One of the earliest known instances of blackberry consumption comes from the preserved remains of the Haraldskær Woman, the naturally preserved bog body of a Danish woman dating from approximately 2,500 years ago.",
        fact3: "Blackberry leaves are food for certain caterpillars; some grazing mammals, especially deer, are also very fond of the leaves.",
        active: false
    },
    {
        id: "9",
        name: "Blueberries",
        image: "./assets/blueberry.svg",
        fact1: "Five species of blueberries grow wild in Canada, including Vaccinium myrtilloides, Vaccinium angustifolium, and Vaccinium corymbosum which grow on forest floors or near swamps.",
        fact2: "These may then be used in a variety of consumer goods, such as jellies, jams, blueberry pies, muffins, snack foods, or as an additive to breakfast cereals.",
        fact3: "Commercially offered blueberries are usually from species that naturally occur only in eastern and north-central North America.",
        active: false
    },
    {
        id: "10",
        name: "Chestnuts",
        image: "./assets/chestnut.svg",
        fact1: "Chestnuts belong to the family Fagaceae, which also includes oaks and beeches. The four main species groups are commonly known as American, European, Chinese, and Japanese chestnuts.",
        fact2: "Chestnut trees are of moderate growth rate (for the Chinese chestnut tree) to fast-growing for American and European species.",
        fact3: "Chestnuts depart from the norm for culinary nuts as they have little protein or fat; their calories come chiefly from carbohydrates.",
        active: false
    },
    {
        id: "11",
        name: "Cranberries",
        image: "./assets/cranberry.svg",
        fact1: "Cranberries are related to bilberries, blueberries, and huckleberries, all in Vaccinium subgenus Vaccinium.",
        fact2: "In North America, the Narragansett people of the Algonquian nation in the regions of New England appeared to be using cranberries in pemmican for food and for dye.",
        fact3: "Raw cranberries are 87% water, 12% carbohydrates, and contain negligible protein and fat. In a 100 gram reference amount, raw cranberries supply 46 calories and moderate levels of vitamin C.",
        active: false
    },
    {
        id: "12",
        name: "Figs",
        image: "./assets/fig.svg",
        fact1: "Ficus carica is a gynodioecious, deciduous tree or large shrub that grows up to 7–10 metres (23–33 ft) tall, with smooth white bark.",
        fact2: "The common fig tree has been cultivated since ancient times and grows wild in dry and sunny locations with deep and fresh soil, and in rocky locations that are at sea level to 1,700 metres in elevation.",
        fact3: "The edible fig is one of the first plants that were cultivated by humans. Nine subfossil figs of a parthenocarpic (and therefore sterile) type dating to about 9400–9200 BC were found in the early Neolithic village Gilgal I.",
        active: false
    },
    {
        id: "13",
        name: "Grapefruit",
        image: "./assets/grapefruit.svg",
        fact1: "One story of the fruit's origin is that a certain Captain Shaddock brought pomelo seeds to Jamaica and bred the first fruit, although it probably originated as a naturally occurring hybrid between the two plants some time after they had been introduced there.",
        fact2: "Grapefruit and grapefruit juice have been found to interact with numerous drugs and in many cases, to result in adverse direct and/or side effects.",
        fact3: "Raw grapefruit is 90% water, 8% carbohydrates, 1% protein, and negligible fat. In a 100-g reference amount, raw grapefruit provides 33 Calories and is a rich source of vitamin C",
        active: false
    },
    {
        id: "14",
        name: "Kale",
        image: "./assets/kale.svg",
        fact1: "Kale originated in the eastern Mediterranean and Asia Minor, where it was cultivated for food beginning by 2000 BC at the latest.",
        fact2: "Kale is usually an annual plant grown from seed with a wide range of germination temperatures.",
        fact3: "Raw kale is composed of 84% water, 9% carbohydrates, 4% protein, and 1% fat. In a 100 g (3 1⁄2 oz) serving, raw kale provides 207 kilojoules (49 kilocalories) of food energy and a large amount of vitamin K",
        active: false
    },
    {
        id: "15",
        name: "Lemon",
        image: "./assets/lemon.svg",
        fact1: "The tree's ellipsoidal yellow fruit is used for culinary and non-culinary purposes throughout the world, primarily for its juice, which has both culinary and cleaning uses.",
        fact2: "The origin of the lemon is unknown, though lemons are thought to have first grown in Assam (a region in northeast India), northern Burma or China.",
        fact3: "Lemon is a rich source of vitamin C, providing 64% of the Daily Value in a 100 g reference amount. Other essential nutrients are low in content.",
        active: false
    },
    {
        id: "16",
        name: "Mango",
        image: "./assets/mango.svg",
        fact1: "Mangoes have been cultivated in South Asia for thousands of years and reached Southeast Asia between the fifth and fourth centuries BCE.",
        fact2: "Mangoes are widely used in cuisine. Sour, unripe mangoes are used in chutneys, pickles, dhals and other side dishes in Bengali cuisine, or may be eaten raw with salt, chili, or soy sauce.",
        fact3: "The energy value per 100 g (3.5 oz) serving of the common mango is 250 kJ (60 kcal), and that of the apple mango is slightly higher (330 kJ (79 kcal) per 100 g). ",
        active: false
    },
    {
        id: "17",
        name: "Nectarines",
        image: "./assets/nectarine.svg",
        fact1: "Nectarine, smooth-skinned peach of the family Rosaceae that is grown throughout the warmer temperate regions of both the Northern and Southern hemispheres.",
        fact2: "When peaches are crossed or self-pollinated, resulting seeds that carry the recessive allele for smooth skin will give rise to nectarines, while those that carry the dominant allele will be peaches.",
        fact3: "Cultivation of nectarines is essentially the same as for peaches, with best results usually obtained on well-drained sandy or gravelly loams enriched with nitrogen.",
        active: false
    },
    {
        id: "18",
        name: "Peaches",
        image: "./assets/peach.svg",
        fact1: "Fossil endocarps with characteristics indistinguishable from those of modern peaches have been recovered from late Pliocene deposits in Kunming, dating to 2.6 million years ago.",
        fact2: "Although its botanical name Prunus persica refers to Persia (present Iran) from where it came to Europe, genetic studies suggest peaches originated in China, where they have been cultivated since the neolithic period.",
        fact3: "Peach trees are prone to a disease called leaf curl, which usually does not directly affect the fruit, but does reduce the crop yield by partially defoliating the tree.",
        active: false
    },
    {
        id: "19",
        name: "Pineapple",
        image: "./assets/pineapple.svg",
        fact1: "The pineapple is a herbaceous perennial, which grows to 1.0 to 1.5 m (3.3 to 4.9 ft) tall, although sometimes it can be taller.",
        fact2: "The wild plant originates from the Paraná–Paraguay River drainages between southern Brazil and Paraguay.",
        fact3: "The flesh and juice of the pineapple are used in cuisines around the world. In many tropical countries, pineapple is prepared and sold on roadsides as a snack.",
        active: false
    },
    {
        id: "20",
        name: "Plums",
        image: "./assets/plum.svg",
        fact1: "Three of the most abundant cultivars are not found in the wild, only around human settlements: Prunus domestica has been traced to East European and Caucasian mountains, while Prunus salicina and Prunus simonii originated in Asia.",
        fact2: "Plums are a diverse group of species. The commercially important plum trees are medium-sized, usually pruned to 5–6 metres (16–20 ft) height. The tree is of medium hardiness.",
        fact3: "Plum remains have been found in Neolithic age archaeological sites along with olives, grapes and figs.",
        active: false
    },
    {
        id: "21",
        name: "Pomegranate",
        image: "./assets/pomegranate.svg",
        fact1: "Red-purple in color, the pomegranate fruit husk has two parts: an outer, hard pericarp, and an inner, spongy mesocarp, which comprises the fruit inner wall where seeds attach.",
        fact2: "P. granatum is grown for its fruit crop, and as ornamental trees and shrubs in parks and gardens. Mature specimens can develop sculptural twisted-bark multiple trunks and a distinctive overall form.",
        fact3: "After the pomegranate is opened by scoring it with a knife and breaking it open, the seeds are separated from the peel and internal white pulp membranes.",
        active: false
    },
    {
        id: "22",
        name: "Potatoes",
        image: "./assets/potato.svg",
        fact1: "Potato plants are herbaceous perennials that grow about 60 cm (24 in) high, depending on variety, with the leaves dying back after flowering, fruiting and tuber formation.",
        fact2: "There are about 5,000 potato varieties worldwide. Three thousand of them are found in the Andes alone, mainly in Peru, Bolivia, Ecuador, Chile, and Colombia.",
        fact3: "The potato was first domesticated in the region of modern-day southern Peru and northwestern Bolivia between 8000 and 5000 BC. It has since spread around the world and become a staple crop in many countries.",
        active: false
    },
    {
        id: "23",
        name: "Quince",
        image: "./assets/quince.svg",
        fact1: "Four other species previously included in the genus Cydonia are now treated in separate genera. These are Pseudocydonia sinensis and the three flowering quinces of eastern Asia in the genus Chaenomeles.",
        fact2: "Quince is native to rocky slopes and woodland margins in Western Asia, Azerbaijan, Turkey, Georgia, northern Iran to Afghanistan, although it thrives in a variety of climates and can be grown successfully at latitudes as far north as Scotland.",
        fact3: "The Greeks associated it with Cydonia on Crete, as the Cydonian pome, and Theophrastus, in his Enquiry into Plants, noted that quince was one of many fruiting plants that do not come true from seed.",
        active: false
    },
    {
        id: "24",
        name: "Radishes",
        image: "./assets/radish.svg",
        fact1: "Varieties of radish are now broadly distributed around the world, but almost no archeological records are available to help determine their early history and domestication.",
        fact2: "Radishes are annual or biennial brassicaceous crops grown for their swollen tap roots which can be globular, tapering, or cylindrical.",
        fact3: "In a 100-gram (3 1⁄2-ounce) reference serving, raw radishes provide 66 kilojoules (16 kilocalories) of food energy and have a moderate amount of vitamin C.",
        active: false
    },
    {
        id: "25",
        name: "Raspberries",
        image: "./assets/rasberry.svg",
        fact1: "Raspberries are traditionally planted in the winter as dormant canes, although planting of tender, plug plants produced by tissue culture has become much more common.",
        fact2: "In 2018, world production of raspberries was 870,209 tonnes, with Russia as the leading producer, supplying 19% of the world total. Other major producers were Mexico, Serbia, and Poland.",
        fact3: "Raw raspberries are 86% water, 12% carbohydrates, and have about 1% each of protein and fat. In a 100 gram amount, raspberries supply 53 calories and 6.5 grams of dietary fiber.",
        active: false
    },
    {
        id: "26",
        name: "Rhubarb",
        image: "./assets/rhubarb.svg",
        fact1: "The precise origin of culinary rhubarb is unknown. The species Rheum rhabarbarum and R. rhaponticum were grown in Europe before the 18th century and used for medicinal purposes.",
        fact2: "Rhubarb is grown widely, and with greenhouse production it is available throughout much of the year.",
        fact3: "The Chinese call rhubarb the great yellow (dà huáng 大黃), and have used rhubarb root for medicinal purposes for thousands of years.",
        active: false
    },
    {
        id: "27",
        name: "Strawberries",
        image: "./assets/strawberry.svg",
        fact1: "Artificial strawberry flavorings and aromas are also widely used in products such as candy, soap, lip gloss, perfume, and many others.",
        fact2: "The first garden strawberry was grown in Brittany, France, during the late 18th century.",
        fact3: "One serving (100 g; see Table) of strawberries contains approximately 33 kilocalories, is an excellent source of vitamin C.",
        active: false
    },
    {
        id: "28",
        name: "Sweet Potatoes",
        image: "./assets/sweet-potato.svg",
        fact1: "The first Europeans to taste sweet potatoes were members of Christopher Columbus's expedition in 1492. Later explorers found many cultivars under an assortment of local names, but the name which stayed was the indigenous Taino name of batata.",
        fact2: "The origin and domestication of sweet potato occurred in either Central or South America. In Central America, domesticated sweet potatoes were present at least 5,000 years ago, with the origin possibly between the Yucatán Peninsula and the mouth of the Orinoco River. ",
        fact3: "Although the sweet potato is not closely related botanically to the common potato, they have a shared etymology.",
        active: false
    },
    {
        id: "29",
        name: "Tangerines",
        image: "./assets/tangerine.svg",
        fact1: "Tangerines were first grown and cultivated as a distinct crop in the Americas by a Major Atway in Palatka, Florida. Atway was said to have imported them from Morocco (more specifically its third-largest city Tangier), which was the origin of the name. ",
        fact2: "Tangerines contain 85% water, 13% carbohydrates, and negligible amounts of fat and protein (table). Among micronutrients, only vitamin C is in significant content.",
        fact3: "Until the 1970s, the Dancy was the most widely grown tangerine in the US;[17] the popularity of the fruit led to the term tangerine being broadly applied as a marketing name.",
        active: false
    },
    {
        id: "30",
        name: "Turnips",
        image: "./assets/turnip.svg",
        fact1: "The most common type of turnip is mostly white-skinned apart from the upper 1 to 6 centimetres (1⁄2 to 2 1⁄2 inches), which protrude above the ground and are purple or red or greenish where the sun has hit.",
        fact2: "Boiled green leaves of the turnip top provide 84 kilojoules (20 kilocalories) of food energy in a reference serving of 100 grams (3 1⁄2 oz), and are 93% water, 4% carbohydrates, and 1% protein, with negligible fat.",
        fact3: "Wild forms of the turnip and its relatives, the mustards and radishes, are found over western Asia and Europe. Starting as early as 2000 BC.",
        active: false
    },
    {
        id: "31",
        name: "Watermelon",
        image: "./assets/watermelon.svg",
        fact1: "The sweet watermelon was formally described by Carl Linnaeus in 1753 and given the name Cucurbita citrullus. It was reassigned to the genus Citrullus in 1836, under the replacement name Citrullus vulgaris, by the German botanist Heinrich Adolf Schrader.",
        fact2: "The watermelon is a flowering plant that originated in West Africa, where it can also be found growing in the wild.",
        fact3: "Watermelon fruit is 91% water, contains 6% sugars, and is low in fat. The amino acid citrulline is produced in watermelon rind.",
        active: false
    }
]

export default fruitData