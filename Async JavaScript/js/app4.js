//Reject example
// "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg"
const url = '';
const loadImage = (url) => {
    return new Promise((resolve, reject)=>{
        let img = new Image();
        img.addEventListener('load',()=>{
            resolve(img)
        });
        img.addEventListener('error',()=>{
           reject(new Error('failed to load image from source'))
        });
        img.src = url
    })
}
const container = document.querySelector('.img-container');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    loadImage(url).then(data => container.appendChild(data)).
    catch(err => console.log(err))
});

