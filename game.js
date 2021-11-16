var counter;

function setCount(num=0){
    counter = num;
}

function inc(){
    counter++;
}

function dec(){
    counter--;
}

function getCount(){
    return counter;
}

module.exports = {
    inc: inc,
    dec: dec,
    setCount: setCount,
    getCount: getCount,
};