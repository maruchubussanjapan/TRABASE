const journeys = {
  quiet: { title: "A quiet day from Tokyo", label: "SLOW DOWN", text: "Start at your private base in Minami-Senju. Walk the old neighborhood, warm up at a local sentō, and return before the rain." },
  local: { title: "Live like the neighborhood", label: "LOCAL LIFE", text: "Begin with a morning market, eat at a family-run soba shop, and spend the afternoon discovering the streets beyond the guidebooks." },
  wild: { title: "An island is closer than you think", label: "GO FURTHER", text: "Take a ferry from Tokyo and spend two nights on Niijima. A little inconvenient, completely memorable, and still connected to your base." }
};
document.querySelectorAll('[data-mood]').forEach((button) => button.addEventListener('click', () => {
  const journey = journeys[button.dataset.mood];
  document.querySelector('#recommendation-title').textContent = journey.title;
  document.querySelector('#journey-label').textContent = journey.label;
  document.querySelector('#journey-text').textContent = journey.text;
  document.querySelector('#journey').scrollIntoView({ behavior: 'smooth' });
}));
document.querySelector('#accept').addEventListener('click', () => { document.querySelector('#accept').textContent = 'Saved to my journey ✓'; });
document.querySelector('#skip').addEventListener('click', () => { document.querySelector('#skip').textContent = 'We’ll keep looking'; });
