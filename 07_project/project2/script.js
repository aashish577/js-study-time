// Body mass index = weigh in kg / (height in meter)^2

const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    // to prevent empty value
    e.preventDefault()

    const heightinCM = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = (document.querySelector('#results'))

    if (heightinCM === '' || height <0 || isNaN(heightinCM)) {
        results.innerHTML = `Please give a valid height ${height}`
    }else if (weight === '' || weight <0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        let height = heightinCM/100
        const bmi = (weight / (height * height)).toFixed(2)

        //show the result 

        results.innerHTML= `<span>${bmi}</span>`
        if (bmi < 18.6) {
        results.innerHTML= `<span>${bmi} You have under weight</span>`
            
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML= `<span>${bmi} You have normal weight</span>`
            
        }else if (bmi < 24.9 ){
            results.innerHTML= `<span>${bmi} You have over weight</span>`
        }else{

        }
    }
} )


// const form = document.querySelector('form')

// form.addEventListener('submit', function (e){

//     e.preventDefault()
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const results = document.querySelector('#results')

//     if (height === '' || height == 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height ${height}`
//     }else if (weight === '' || weight == 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight ${weight} `
//     }else{
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2)

//         results.innerHTML = `<span>${bmi}</span>`
//     }

// })



