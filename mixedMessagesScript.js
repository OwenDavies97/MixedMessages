// Object storing message components
const collectiveMessage = {
    starSign: ['Nebula', 'Lunar', 'Solar', 'Solstice', 'Equinox'],
    horoscopeOutput: ['The best day', 'The worst day', 'A mediocre day', 'Some good news', 'Some bad news'],
    advice: ['Call a friend', 'Go grab a McDonalds', 'Go for a run', 'Sleep all day', 'Watch some netflix']
};

//Random number function
const generateRandomNum = (num) => {
    return Math.floor(Math.random()*num)
};

//Empty array for horoscope
let horoscope = [];
