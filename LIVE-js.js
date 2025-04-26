const scriptures = [
    '"11  For this is the message that you have heard from the beginning, that we should love one another; 12  not like Cain, who originated with the wicked one and slaughtered his brother. And for what reason did he slaughter him? Because his own works were wicked, but those of his brother were righteous." 1 John 3:11, 12',
    '"50  For whoever does the will of my Father who is in heaven, that one is my brother and sister and mother.”" — Matthew 12:50',
    '"35 By this all will know that you are my disciples—if you have love among yourselves.”" — John 13:35',
    '"8  Whoever does not love has not come to know God, because God is love." — 1 John 4:8',
    '"10  So, then, as long as we have the opportunity, let us work what is good toward all, but especially toward those related to us in the faith." — Galatians 6:10',
    '"20 If anyone says, “I love God,” and yet is hating his brother, he is a liar. For the one who does not love his brother, whom he has seen, cannot love God, whom he has not seen. 21  And we have this commandment from him, that whoever loves God must also love his brother." — 1 John 4:20, 21'
  ];
  
  function newScripture() {
    const randomIndex = Math.floor(Math.random() * scriptures.length);
    document.getElementById('scripture').textContent = scriptures[randomIndex];
  }
  
  // Show one immediately
  newScripture();

  // Image page

  // (Optional) Simple popup on clicking images
const images = document.querySelectorAll('.image-card img');

images.forEach(img => {
  img.addEventListener('click', () => {
    alert('You clicked on: ' + img.alt);
  });
});
