const journeys = {
  quiet: { title: "A quiet day from Tokyo", label: "SLOW DOWN", text: "Start at your private base in Minami-Senju. Walk the old neighborhood, warm up at a local sentō, and return before the rain.", url: "#plans", photo: "" },
  local: { title: "Live like the neighborhood", label: "LOCAL LIFE", text: "Begin with a morning market, eat at a family-run soba shop, and spend the afternoon discovering the streets beyond the guidebooks.", url: "#plans", photo: "" },
  wild: { title: "An island is closer than you think", label: "GO FURTHER", text: "Take a ferry from Tokyo and spend two nights on Niijima. A little inconvenient, completely memorable, and still connected to your base.", url: "niijima-3-days.html", photo: "assets/images/niijima-habushiura.jpg" }
};
let selectedJourney = journeys.quiet;
document.querySelectorAll('[data-mood]').forEach((button) => button.addEventListener('click', () => {
  const journey = journeys[button.dataset.mood];
  document.querySelector('#recommendation-title').textContent = journey.title;
  document.querySelector('#journey-label').textContent = journey.label;
  document.querySelector('#journey-text').textContent = journey.text;
  selectedJourney = journey;
  const image = document.querySelector('.journey-image');
  image.style.backgroundImage = journey.photo ? `linear-gradient(0deg, rgba(23,59,63,.28), rgba(23,59,63,.05)), url('${journey.photo}')` : '';
  image.classList.toggle('has-photo', Boolean(journey.photo));
  document.querySelector('#accept').textContent = journey.url.includes('.html') ? 'Open complete guide →' : 'Save this journey';
  document.querySelector('#journey').scrollIntoView({ behavior: 'smooth' });
}));
document.querySelector('#accept').addEventListener('click', () => {
  if (selectedJourney.url.includes('.html')) window.location.href = selectedJourney.url;
  else document.querySelector('#accept').textContent = 'Saved to my journey ✓';
});
document.querySelector('#skip').addEventListener('click', () => { document.querySelector('#skip').textContent = 'We’ll keep looking'; });
