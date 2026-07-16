const collectionName = new URLSearchParams(window.location.search).get('collection');
const collection = museumCollections[collectionName] || museumCollections.weapons;
document.title = `${collection.title} | Forensic Teaching Museum`;
document.getElementById('catalog-number').textContent = collection.number;
document.getElementById('catalog-title').textContent = collection.title;
document.getElementById('catalog-intro').textContent = collection.intro;

const grid = document.getElementById('catalog-grid');
const photoStyle = image => image ? `style="background-image:url('${image}')"` : '';

collection.items.forEach((item, index) => {
  const card = document.createElement('a');
  card.className = 'catalog-card';
  card.href = `detail.html?collection=${encodeURIComponent(collectionName || 'weapons')}&exhibit=${index}`;
  card.innerHTML = `<div class="catalog-photo ${item.image ? 'has-image' : ''}" ${photoStyle(item.image)}><span>${item.image ? 'VIEW EXHIBIT' : 'ADD EXHIBIT PHOTO'}</span></div><div class="catalog-card-content"><p>EXHIBIT ${String(index + 1).padStart(2, '0')}</p><h2>${item.name}</h2><small>${item.summary} →</small></div>`;
  grid.appendChild(card);
});
