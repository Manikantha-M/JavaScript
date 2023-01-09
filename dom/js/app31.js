// setInterval
/*
    setInterval - runs function repeatedly, at specfic intervals
    - pass function reference, duration, and other arguments.
    - duration in ms. Default is 0ms
    - returns a unique identifier
    - clearInterval to cancel
    - Available in window object
 */

    function showScore(name, score){
        console.log(`hello ${name}, your score is ${score}`);
    }

    // setInterval(showScore, 2000)

    const firstID = setInterval(showScore, 1000, 'bob', 45);
    const secondID = setInterval(showScore, 4000, 'susan', 88);

    clearInterval(firstID);