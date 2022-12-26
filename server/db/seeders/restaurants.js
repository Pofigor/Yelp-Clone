/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Restaurants', [{
      name: 'Beit Rima',
      desc: 'Established in 2019. Since opening in 2019, Beit Rima has been voted Best New Restaurant by San Franciscans via SF Weekly and Top 100 Restaurant from the SF Chronicle along with rave reviews from food critics. In 2020, Beit Rima was recognized on a national level when we were listed as a semi finalist for Best New Restaurant via the prestigious James Beard Awards. Follow us on Instagram @beitrima to stay updated on seasonal specials! We look forward to having you!',
      img: '/img/rest/BeitRima.jpg',
      away: true,
      deliwery: false,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'KAIYŌ Rooftop',
      desc: 'KAIYŌ Rooftop is a tropical oasis in the sky, an immersive Nikkei experience that transports guests the moment they walk through the elevator door. Plants, rich textiles, colorful fabrics, soft lighting and stunning food/cocktails invite guests to explore the Japanese culinary influence within Peruvian culture.',
      img: '/img/rest/KAIYŌRooftop.jpg',
      away: false,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Loquat',
      desc: 'Loquat Corporation, based in Louisville, Kentucky, is one of the few brands in America that can boast a rich, decades-long history of success and innovation. It all started with one cook who created a soon-to-be world-famous recipe more than 70 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. That cook was Colonel Harland Sanders, of course, and now KFC is the world most popular chicken restaurant chain, specializing in that same Original Recipe® along with Extra Crispy™ chicken, home-style sides, and buttermilk biscuits. ',
      img: '/img/rest/Loquat.jpg',
      away: true,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'The Snug',
      desc: 'Established in 2017. Four friends look to share their passion for great food, strong drinks, and the best beer and wine California has to offer.',
      img: '/img/rest/Snug.jpg',
      away: true,
      deliwery: false,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Damansara',
      desc: 'Our pies are inspired by the famous pizzerias in Detroit Buddy and Luigi. Our thick rectangular pies are baked in special steel pans with mozzarella, brick cheese, the highest quality toppings, with our delicious homemade tomato sauce layered on top.',
      img: '/img/rest/Damansara.jpg',
      away: true,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lily',
      desc: 'Lily in the sky, an immersive Nikkei experience that transports guests the moment they walk through the elevator door. Plants, rich textiles, colorful fabrics, soft lighting and stunning food/cocktails invite guests to explore the Japanese culinary influence within Peruvian culture.',
      img: '/img/rest/Lily.jpg',
      away: true,
      deliwery: false,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Savor',
      desc: 'Savor based in Youta, Michigan, in America that can boast a rich, decades-long history of success and innovation. It all started with one cook who created a soon-to-be world-famous recipe more than 70 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. That cook was Colonel Harland Sanders, of course, and now KFC is the world most popular chicken restaurant chain, specializing in that same Original Recipe® along with Extra Crispy™ chicken, home-style sides, and buttermilk biscuits. ',
      img: '/img/rest/Savor.jpg',
      away: true,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sotto Mare',
      desc: 'Established in 2017. Four friends look to share their passion for great food, strong drinks, and the best beer and wine California has to offer.',
      img: '/img/rest/SottoMare.jpg',
      away: false,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
