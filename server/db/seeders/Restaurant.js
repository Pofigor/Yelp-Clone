/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Restaurant', [{
      name: '8MilePi Detroit',
      desc: 'Our pies are inspired by the famous pizzerias in Detroit Buddy and Luigi. Our thick rectangular pies are baked in special steel pans with mozzarella, brick cheese, the highest quality toppings, with our delicious homemade tomato sauce layered on top.',
      img: '/img/rest/8mile.jpg',
      away: true,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'KAIYŌ Rooftop',
      desc: 'KAIYŌ Rooftop is a tropical oasis in the sky, an immersive Nikkei experience that transports guests the moment they walk through the elevator door. Plants, rich textiles, colorful fabrics, soft lighting and stunning food/cocktails invite guests to explore the Japanese culinary influence within Peruvian culture.',
      img: '/img/rest/KAIYŌ Rooftop.jpg',
      away: true,
      deliwery: true,
      pay: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'KFC',
      desc: 'KFC Corporation, based in Louisville, Kentucky, is one of the few brands in America that can boast a rich, decades-long history of success and innovation. It all started with one cook who created a soon-to-be world-famous recipe more than 70 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. That cook was Colonel Harland Sanders, of course, and now KFC is the world most popular chicken restaurant chain, specializing in that same Original Recipe® along with Extra Crispy™ chicken, home-style sides, and buttermilk biscuits. ',
      img: '/img/rest/kfc.jpg',
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
