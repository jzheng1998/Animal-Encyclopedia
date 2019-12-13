const slideImages = {
  "aardvark": {
    location: require('../assets/images/regions/africa.png'),
    images: [
      require('../assets/images/animals/aardvark/1.jpg'),
      require('../assets/images/animals/aardvark/2.jpg'),
      require('../assets/images/animals/aardvark/3.jpg'),
      require('../assets/images/animals/aardvark/4.jpg')
    ],
  },
  "armadillo": {
    location: require('../assets/images/regions/north_america.png'),
    images: [
      require('../assets/images/animals/armadillo/1.jpg'),
      require('../assets/images/animals/armadillo/2.jpg'),
      require('../assets/images/animals/armadillo/3.jpg')
    ],
  },
  "beaver": {
    location: require('../assets/images/regions/north_america.png'),
    images: [
      require('../assets/images/animals/beaver/1.jpg'),
      require('../assets/images/animals/beaver/2.jpg'),
      require('../assets/images/animals/beaver/3.jpg'),
      require('../assets/images/animals/beaver/4.jpg'),
      require('../assets/images/animals/beaver/5.jpg'),
      require('../assets/images/animals/beaver/6.jpg')
    ],
  },
  "black_bear": {
    location: require('../assets/images/regions/north_america.png'),
    images: [
      require('../assets/images/animals/blackbear/1.jpg'),
      require('../assets/images/animals/blackbear/2.jpg'),
      require('../assets/images/animals/blackbear/3.jpg'),
      require('../assets/images/animals/blackbear/4.jpg')
    ],
  },
  "buffalo": {
    location: require('../assets/images/regions/north_america.png'),
    images: [
      require('../assets/images/animals/buffalo/1.jpg'),
      require('../assets/images/animals/buffalo/2.jpg'),
      require('../assets/images/animals/buffalo/3.jpg'),
      require('../assets/images/animals/buffalo/4.jpg')
    ],
  },
  "cheetah": {
    location: require('../assets/images/regions/africa.png'),
    images: [
      require('../assets/images/animals/cheetah/1.jpg'),
      require('../assets/images/animals/cheetah/2.jpg'),
      require('../assets/images/animals/cheetah/3.jpg'),
      require('../assets/images/animals/cheetah/4.jpg')
    ],
  },
  "panda": {
    location: require('../assets/images/regions/asia.png'),
    images: [
      require('../assets/images/animals/panda/1.jpg'),
      require('../assets/images/animals/panda/2.jpg'),
      require('../assets/images/animals/panda/3.jpg'),
      require('../assets/images/animals/panda/4.jpg')
    ],
  }
}

export { slideImages as slideImages }

const DATA = [
  {
    category: 'A',
    data: [
      {
        name: 'Aardvark',
        description: 'One of the most incredible aardvark facts is that they can eat 50,000 ants in one meal. The aardvark looks like an amazing combination of several animals. It has a pig-like rubbery snout, a rabbits ears, the long sticky tongue of an anteater, and a naked tail like a opossum.',
        classification: {
          class: 'Mammalia',
          order: 'Tubulidentata',
          family: 'Orycteropodidae',
          genus: 'Orycteropus',
          species: 'afer'
        },
        location: require('../assets/images/regions/africa.png'),
        imageSource: require('../assets/images/animals/aardvark/portrait.jpg'),
        images: [
          require('../assets/images/animals/aardvark/1.jpg'),
          require('../assets/images/animals/aardvark/2.jpg'),
          require('../assets/images/animals/aardvark/3.jpg'),
          require('../assets/images/animals/aardvark/4.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Aardvark-facts.html'
      },
      {
        name: 'Armadillo',
        description: 'One of the more amazing armadillo facts is that nine-banded armadillos always have quadruplets - four babies at a time, all of the same sex. Remarkable in every way, the armadillo is the only mammal with a shell. It has plates of bone covered with leathery skin across its back and tail, and bony armor scales on the head and face. There are softer, more flexible bands between the plates that allow for movement, and one species, the three banded armadillo from Brazil, can roll itself up in a ball for protection. The other species rely on stealth and speed to avoid predators, but if they are cornered, simple frustration can save their lives. Many a coyote, bear or badger has been put off by the hard upper shell of the armadillo, and walked away without a meal, never realizing the armor plates do not extend underneath, and that the armadillos belly is completely unprotected.',
        classification: {
          class: 'Mammalia',
          order: 'Cingulata',
          family: 'Chlamyphoridae',
          genus: 'Calyptophractus',
          species: 'retusus'
        },
        location: require('../assets/images/regions/north_america.png'),
        imageSource: require('../assets/images/animals/armadillo/portrait.jpg'),
        images: [
          require('../assets/images/animals/armadillo/1.jpg'),
          require('../assets/images/animals/armadillo/2.jpg'),
          require('../assets/images/animals/armadillo/3.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Armadillo-facts.html'
      }
    ]
  },
  {
    category: 'B',
    data: [
      {
        name: 'Beaver',
        description: "The social, industrious beaver is a lovely, fascinating animal that has been exploited and misunderstood for centuries. At weights of up to 70 pounds, they are one of the largest rodents in the world, second only to the South American capybara. And are second only to human beings in their ability to completely alter their environment. Beavers are round, well-furred animals, with small ears, large, orange-colored front teeth, beady eyes, and webbed hind feet. Their most distinctive physical feature, though, is a flat, naked, and leathery tail. The tail is shaped like a flounder, and used as a rudder when swimming, a powerful, stabilizing tripod as the beaver sits up on it's haunches, and a storehouse for body fat, which may be necessary in rough winters. But despite the myth, beavers do not use their tails to carry mud, or pack it down.",
        classification: {
          class: 'Mammalia',
          order: 'Rodentia',
          family: 'Castoridae',
          genus: 'Castor',
          species: 'canadensis'
        },
        location: require('../assets/images/regions/north_america.png'),
        imageSource: require('../assets/images/animals/beaver/portrait.jpg'),
        images: [
          require('../assets/images/animals/beaver/1.jpg'),
          require('../assets/images/animals/beaver/2.jpg'),
          require('../assets/images/animals/beaver/3.jpg'),
          require('../assets/images/animals/beaver/4.jpg'),
          require('../assets/images/animals/beaver/5.jpg'),
          require('../assets/images/animals/beaver/6.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Beaver-facts.html'
      },
      {
        name: 'Black Bear',
        description: "Of the eight species of bears, the American black bear is right in the middle size-wise, but on it's home continent of North America it is the smallest native bear, dwarfed by the polar bear and the grizzly. Black bears are solitary animals who socialize only during the brief mating season. They have large territories that they mark with droppings, scatch marks and urine sprays. Black bears use trees called 'bear trees' by trackers and hunters to define the perimeter of their range.",
        classification: {
          class: 'Mammalia',
          order: 'Carnivora',
          family: 'Ursidae',
          genus: 'Ursus',
          species: 'americanus'
        },
        location: require('../assets/images/regions/north_america.png'),
        imageSource: require('../assets/images/animals/blackbear/portrait.jpg'),
        images: [
          require('../assets/images/animals/blackbear/1.jpg'),
          require('../assets/images/animals/blackbear/2.jpg'),
          require('../assets/images/animals/blackbear/3.jpg'),
          require('../assets/images/animals/blackbear/4.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Black-bear-facts.html'
      },
      {
        name: 'Buffalo',
        description: 'The American buffalo is one of the icons of the United States of America and, along with the bald eagle, can be found depicted on various coins and flags throughout the nations history. In recent times it is considered by some to be more accurate to refer to the New World buffalo as a bison, since it is not in the same genus as the two buffalo of the Old World.',
        classification: {
          class: 'Mammalia',
          order: 'Artiodactyla',
          family: 'Bovidae',
          genus: 'Bison',
          species: 'bison'
        },
        location: require('../assets/images/regions/north_america.png'),
        imageSource: require('../assets/images/animals/buffalo/portrait.jpg'),
        images: [
          require('../assets/images/animals/buffalo/1.jpg'),
          require('../assets/images/animals/buffalo/2.jpg'),
          require('../assets/images/animals/buffalo/3.jpg'),
          require('../assets/images/animals/buffalo/4.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Buffalo-facts.html'
      }
    ]
  },
  {
    category: 'C',
    data: [
      {
        name: 'Cheetah',
        description: 'The cheetah is the fastest animal on earth and a very unique cat. Living in hot and arid areas of Africa and with a small population in Iran, they hunt gazelle, rabbits and immature zebra and wildebeast by stalking to within 30 to 50 yards and then running them down with blistering speed.',
        classification: {
          class: 'Mammalia',
          order: 'Carnivora',
          family: 'Felidae',
          genus: 'Acynonix',
          species: 'jubatus'
        },
        location: require('../assets/images/regions/africa.png'),
        imageSource: require('../assets/images/animals/cheetah/portrait.jpg'),
        images: [
          require('../assets/images/animals/cheetah/1.jpg'),
          require('../assets/images/animals/cheetah/2.jpg'),
          require('../assets/images/animals/cheetah/3.jpg'),
          require('../assets/images/animals/cheetah/4.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Cheetah-facts.html'
      }
    ]
  },
  {
    category: 'P',
    data: [
      {
        name: 'Panda',
        description: "The giant panda is one of the world's eight species of true bears. Although for a number of decades there was some controversy over whether the panda was actually a bear at all, the recent consensus is that the panda is, in fact, all bear. Some scientists argued that the giant panda and the red panda which share many characteristics were both more closely related to raccoons than bears. Closer study of the giant pandas molecular structure, however, puts them in the family ursidae - the true bears. Giant pandas live in the densely vegetated mountains of central China, where mist, heavy rains, and high humidity promote thick forests. The panda dines almost exclusively on one type of plant material, bamboo, which makes up over 95% of its diet. On rare occasions pandas will consume other types of plants, small animals, or insects, but the bamboo diet is so dominant, and has been consumed by the panda for so many thousands of years, that it has evolved into a bamboo eating machine, and has even evolved special paws with bony 'pseudo thumbs' for handling bamboo shoots.",
        classification: {
          class: 'Mammalia',
          order: 'Carnivora',
          family: 'Ursidae',
          genus: 'Ailuropoda',
          species: 'melanoleuca'
        },
        location: require('../assets/images/regions/asia.png'),
        imageSource: require('../assets/images/animals/panda/portrait.jpg'),
        images: [
          require('../assets/images/animals/panda/1.jpg'),
          require('../assets/images/animals/panda/2.jpg'),
          require('../assets/images/animals/panda/3.jpg'),
          require('../assets/images/animals/panda/4.jpg')
        ],
        redirectLink: 'https://www.animalfactsencyclopedia.com/Giant-Panda-facts.html'
      }
    ]
  }
]

export default DATA;