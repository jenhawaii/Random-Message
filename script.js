const getRandQuote = () => {
    const random = Math.floor(Math.random() * 7);
    if(random === 0) {
        return 'Quote: "Act as if what you do makes a difference. It does.” William James';
    } else if(random === 1) {
        return `Quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.” Winston Churchill`;
    } else if(random === 2) {
        return `Quote: "We must be willing to let go of the life we planned so as to have the life that is waiting for us.” Joseph Campbell`;
    } else if(random === 3) {
        return `Quote: "You are never too old to set another goal or to dream a new dream.” C.S. Lewis`;
    } else if(random === 4) {
        return `Quote: "The bad news is time flies. The good news is you're the pilot.” Michael Altshuler`;
    } else if(random === 5) {
        return `Quote: "Truth is powerful and it prevails.” Sojourner Truth`;
    } else if(random === 6) {
        return `Quote: "Be yourself; everyone else is already taken.” Oscar Wilde`;
    }
}

const getRandFollow = () => {
    const random1 = Math.floor(Math.random() * 5);
    if(random1 === 0) {
        return `Will you follow the advice? No`;
    } else if(random1 === 1) {
        return `Will you follow the advice? Yes`;
    } else if(random1 === 2) {
        return `Will you follow the advice? Maybe`;
    } else if(random1 === 3) {
        return `Will you follow the advice? Definitely not`;
    } else if(random1 === 4) {
        return `Will you follow the advice? Definitely yes`;
    } 
}

const getRandomWeather = () => {
    const random2 = Math.floor(Math.random() * 5);
    if(random2 === 0) {
        return `Today’s weather: Sunny`;
    } else if(random2 === 1) {
        return `Today’s weather: Cloudy`;
    } else if(random2 === 2) {
        return `Today’s weather: Windy`;
    } else if(random2 === 3) {
        return `Today’s weather: Snowy`;
    } else if(random2 === 4) {
        return `WToday’s weather: Rainy`;
    } 
}

console.log(getRandQuote());
console.log(getRandFollow());
console.log(getRandomWeather());