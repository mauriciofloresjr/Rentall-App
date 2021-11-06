// This is a dummy data list for rentals. Currently only used to prove we can pull data in but eventually
// need to find a way to pull this kind of data from database instead.
const rentals = [
    {
        id: 1,
        name: 'BBQ Pit',
        price: '7',
        img: require('../public/images/bbq-pit.jpg'),
        desc: 'BBQ pit, barely used. Works like new! No BBQ tools included in rental.'
    },
    {
        id: 2,
        name: 'Crock Pot',
        price: '4',
        img: require('../public/images/crock-pot.png'),
        desc: 'Crock pot perfect for family meals! Minor wear, but works perfectly fine.'
    },
    {
        id: 3,
        name: 'Stand Mixer',
        price: '5',
        img: require('../public/images/stand-mixer.png'),
        desc: 'Stand mixer. Looks a little beat up but does the job!'
    },
    {
        id: 4,
        name: 'Baking Pans',
        price: '3',
        img: require('../public/images/baking-pans.png'),
        desc: 'Multiple baking pans for rent! Very useful for large baking projects without breaking the bank!'
    },
    {
        id: 5,
        name: 'Blender',
        price: '2',
        img: require('../public/images/blender.jpg'),
        desc: 'Blender. Fully working, minor wear.'
    },
    {
        id: 6,
        name: 'Cooking Utensils',
        price: '3',
        img: require('../public/images/cooking-utensils.jpg'),
        desc: 'Huge assortment of cooking utensils! Perfect for large cooking sessions!'
    }

];

export default rentals;
