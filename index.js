// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [
//   {
//     quote: '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore nam suscipit quae."',
//     person: 'Lao Tzu'
//   },
//   {
//     quote: '"XUJ TE V ROT ipsum dolor sit amet consectetur, adipisicing elit. Labore nam suscipit quae."',
//     person: 'Artur Tzu'
//   }
// ]

// btn.addEventListener('click', function() {
//   let random = Math.round(Math.random());
//   console.log(random);
//   quoteNew = quotes[random].quote;
//   personNew = quotes[random].person;

//   quote.textContent = quoteNew;
//   person.textContent = personNew;

//   console.log(quote);
// });

// let openBtn = document.getElementById('open-btn');
// let closeBtn = document.getElementById('close-btn');
// let modalContainer = document.getElementById('modal-container');


// openBtn.addEventListener('click', function() {
//   modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {
//   modalContainer.style.display = 'none';
// });


// window.addEventListener('click', function(e) {
//   if(e.target === modalContainer) {
//     modalContainer.style.display = 'none';
//   }
// });

const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
  
}
