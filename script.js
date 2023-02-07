var cards = [
    { name: 'Pikachu', attribute: 5 },
    { name: 'Bulbasaur', attribute: 8 },
    { name: 'Squirtle', attribute: 9 },
    { name: 'Charmander', attribute: 4 },
    { name: 'Ditto', attribute: 7 },
  ];
  
  var playButton = document.getElementById('play-button');
  var playerName = document.getElementById('player-name');
  var playerAttribute = document.getElementById('player-attribute');
  var computerName = document.getElementById('computer-name');
  var computerAttribute = document.getElementById('computer-attribute');
  
  playButton.addEventListener('click', play);
  
  function play() {
    var playerCard = getRandomCard();
    var computerCard = getRandomCard();
  
    playerName.innerText = playerCard.name;
    playerAttribute.innerText = playerCard.attribute;
    computerName.innerText = computerCard.name;
    computerAttribute.innerText = computerCard.attribute;
  
    if (playerCard.attribute > computerCard.attribute) {
      alert('You win!');
    } else if (playerCard.attribute < computerCard.attribute) {
      alert('You lose!');
    } else {
      alert('It\'s a tie!');
    }
  }
  
  function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
  }
  