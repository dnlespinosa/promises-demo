// console.log('this prints first');

// setTimeout(function() {
//     console.log('this prints third, one second later', 1000);
// })

// console.log('this prints second')

// let planet;

// $.getJSON("https://swapi.co/api/planets/1/", response => {
//     planet = response;
//     console.log(planet);
//     $.getJSON(planet.residents[0], response => {
//         resident = response;
//         console.log(resident)
//     })
// })


// axios is a promise based AJAX library. it will make a request for us 

// let url  = "https://swapi.co/api/planets/1/"
// let ourFirstPromise = axios.get(url);
// ourFirstPromise.then(data => {
//     console.log(data);
// })
// ourFirstPromise.catch(err => {
//     console.log('REJECTED', err);
// })

// let url = "https://swapi.co/api/planets/1/";
// axios.get(url)
//     .then(res => {
//         console.log(res)
//         axios.get(res.data.residents[0])
//             .then (res => console.log(res))
//             .catch(err => console.log('omgodERROR', err))
//     })
//     .catch(err => console.log(err, 'REJECTED'))

let url = "https://swapi.co/api/planets/1/";
axios
    .get(url)
    .then(res => {
        console.log(res.data)
        axios.get(res.data.residents[0])
        })
    .then(res => {
        console.log(res.data)
        return axios.get(res.data.films[0])
        })
    .then (res => {
        console.log(res.data)
    })
    .catch(err => console.log(err, 'REJECTED'))
    // this one catch will run for ANY .then above


function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        resolve(/*success value*/);
        reject(/* fail value*/);
    });
}

function waitThreeSeconds(){
    return new Promise ((resolve, reject) => {
        setTimeout(resolve, 3000)
    })
}

waitThreeSeconds()
    .then(() => console.log('All done'))
    .catch(() => console.log('ERROR'));

// pretend HTML
const h1 = document.querySelector('h1');

function changeColor(el, color) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            el.style.color = color; 
            resolve();
        }, 1000)
    })
}

changeColor(h1, 'teal')
    .then(() => {
        changeColor(h1, 'orange')
    })
    .then(() => {
        changeColor(h1, 'green')
    })
    .then(() => {
        changeColor(h1, 'blue')
    })
    .then(() => {
        changeColor(h1, 'red')
    })