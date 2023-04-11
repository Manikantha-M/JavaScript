// ES6  class

class Counter {
    constructor(element, initVal){
        this.counter = element;
        this.value = initVal;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.decreaseBtn.addEventListener('click', this.decrease)
        this.increaseBtn.addEventListener('click', this.increase)
        this.resetBtn.addEventListener('click', this.reset)
    }
    increase(){
        this.value++;
        this.valueDOM.textContent = this.value;
    }
    
    decrease(){
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset(){
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
        return element
    }
    throw new Error(`please check "${selection}" selector, no such element exists`)
}
