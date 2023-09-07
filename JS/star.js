// const stars = document.querySelectorAll('.star');

// stars.forEach(function(star, index){
//     star.addEventListener('click', function(){
//         for(let i = 0; i <= index; i++){
//             stars[i].classList.add('checked');
//         }
//         for(let i = index+1; i < stars.length; i++){
//             stars[i].classList.remove('checked'); // Aquí está la corrección
//         }
//     })
// })

// const stars = document.querySelectorAll('.star');

// stars.forEach(function(star, index) {
//     star.addEventListener('click', function() {
//         // Agregar la clase 'checked' a las estrellas seleccionadas
//         for (let i = 0; i <= index; i++) {
//             stars[i].classList.add('checked');
//         }

//         // Remover la clase 'checked' de las estrellas no seleccionadas
//         for (let i = index + 1; i < stars.length; i++) {
//             stars[i].classList.remove('checked');
//         }

//         const rating = index + 1; // El valor de la estrella seleccionada (1-indexed)

//         // Envía el valor "rating" al servidor a través de una solicitud AJAX
//         fetch('/save', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ rating: rating })
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Manejar la respuesta del servidor si es necesario
//             } else {
//                 // Manejar errores
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });
// });
const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');

stars.forEach(function(star, index) {
    star.addEventListener('click', function() {
        // Agregar la clase 'checked' a las estrellas seleccionadas
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('checked');
        }

        // Remover la clase 'checked' de las estrellas no seleccionadas
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove('checked');
        }

        const rating = index + 1; // El valor de la estrella seleccionada (1-indexed)

        // Actualiza el valor del campo oculto con la calificación seleccionada
        ratingInput.value = rating;
    });
});