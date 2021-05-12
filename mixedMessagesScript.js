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
let randomHoroscope = [];

//iterating through object
for (let key in collectiveMessage){
    let idx = generateRandomNum(collectiveMessage[key].length)

    //Pushing options to randomHoroscope array
    switch(key) {
        case 'starSign':
            randomHoroscope.push(`Your star sign today is: ${collectiveMessage[key][idx]}.`)
            break
        case 'horoscopeOutput':
            randomHoroscope.push(`This means you will have: ${collectiveMessage[key][idx]}.`)
            break
        case 'advice':
            randomHoroscope.push(`I'd advise to: ${collectiveMessage[key][idx]}.`)
            break
        default:
            collectiveMessage.push('The world is coming to the end.');
    }
};

const connectHoroscope = (horoscope) => {
    const connectedArray = randomHoroscope.join('\n');
    console.log(connectedArray);
};

connectHoroscope(randomHoroscope);