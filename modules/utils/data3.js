const getElement =  (selection) =>  {
    const element = document.querySelector(selection);
    if(element) {
        return element
    }
    else{
        throw Error('no element found')
    }
}
export default getElement;