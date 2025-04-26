const scriptures = [
    '"Jehovah is my Shepherd. I will lack nothing." — Psalm 23:1',
    '"Do not be afraid, for I am with you." — Isaiah 41:10',
    '"Happy are those conscious of their spiritual need." — Matthew 5:3',
    '"Draw close to God, and he will draw close to you." — James 4:8',
    '"I will strengthen you and help you." — Isaiah 41:10',
    '"Cast all your anxiety on Him because He cares for you." — 1 Peter 5:7'
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
