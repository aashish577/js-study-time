// const buttons = document.querySelectorAll('.button');


// const body = document.querySelector('body')

// buttons.forEach( (button) => {
//     button.addEventListener('click', () => {
//         const color = button.id
//         switch (color) {
//             case "grey":
//                 body.style.backgroundColor = 'grey'

                
//                 break;
//             case "white":
//                 body.style.backgroundColor = 'white'

                
//                 break;
//             case "blue":
//                 body.style.backgroundColor = 'blue'

                
//                 break;
//             case "yellow":
//                 body.style.backgroundColor = 'yellow'

                
//                 break;
        
//             default:
//                 body.style.backgroundColor = 'white'
//                 break;
//         }

//     })

// })

const buttons = document.querySelectorAll('.button')

// const buttons = document.querySelector('#colorswitcher'); // Selects all elements with the given ID
// console.log(buttons);


const body = document.querySelector('body');
// console.log(body);

// ----------------- FOR PRACTICE-------------

// buttons.forEach((button) => {
//     button.addEventListener('click', function () {
//         body.style.backgroundColor = 'red'; // Correct assignment
//     });
// });

// --------------- FOR USING ONLY QUERYSELECTOR NO NEED OF FOREACH METHOD------------

    // buttons.addEventListener('click', function () {
    //     body.style.backgroundColor = 'red'; // Correct assignment
    // });



buttons.forEach( (button) =>{
    button.addEventListener('click', function (e){
        if (e.target.id === 'grey') {
            body.style.backgroundColor  = e.target.id
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor  = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor  = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor  = e.target.id
        }

    })
    
} )

