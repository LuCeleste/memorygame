document.addEventListener('DOMContentLoaded', ()=>{
    const array = [
        {
            nombre: 'barbie',
            img:'./media/barbie.jpg',
        },
        {
            nombre: 'barbie',
            img:'./media/barbie.jpg',
        },
        {
            nombre: 'bratz',
            img:'./media/bratz.jpg',
        },
        {
            nombre: 'bratz',
            img:'./media/bratz.jpg',
        },
        {
            nombre: 'bob',
            img:'./media/bob.jpg',
        },
        {
            nombre: 'bob',
            img:'./media/bob.jpg',
        },
        {
            nombre: 'morty',
            img:'./media/morty.jpg',
        },
        {
            nombre: 'morty',
            img:'./media/morty.jpg',
        },
        {
            nombre: 'shrek',
            img:'./media/shrek.jpg',
        },
        {
            nombre: 'shrek',
            img:'./media/shrek.jpg',
        },
        {
            nombre: 'simpsons',
            img:'./media/simpsons.jpg',
        },
        {
            nombre: 'simpsons',
            img:'./media/simpsons.jpg',
        },
    ]

array.sort(() => 0.5 - Math.random())



    const grid = document.querySelector('.grid');
    const resultDisplay = document.getElementById('result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon =[];




    function createBoard(){
        for(let i = 0; i < array.length; i++){
            let card= document.createElement('img');
            card.setAttribute('src', './media/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', array[optionOneId].img)
        cards[optionTwoId].setAttribute('src', array[optionTwoId].img)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', './media/blank.jpg')
        cards[optionTwoId].setAttribute('src', './media/blank.jpg')
        
    }
    cardsChosen =[]
    cardsChosenId =[]
    resultDisplay.textContent = `Puntaje: ${cardsWon.length}`
    if(cardsWon.length === array.length/2){
        resultDisplay.textContent = 'Felicitaciones! Ganaste!'
    }
}


function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(array[cardId].nombre)
    cardsChosenId.push(cardId)
    this.setAttribute('src', array[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}


createBoard()

}

)
