// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function myHeader(header) {
    
    let header = document.createElement('div')
    header.classList.add('header');

    let span = document.createElement('span');
    span.classList.add('date');
    span.textContent = header.date;
    header.appendChild(date);

    let h1 = document.createElement('h1');
    h1.classList.add('')

    

}
    
