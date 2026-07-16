const params = new URLSearchParams(window.location.search);
const collectionKey = params.get('collection') || 'weapons';
const exhibitIndex = Number(params.get('exhibit'));
const collection = museumCollections[collectionKey] || museumCollections.weapons;
const item = collection.items[exhibitIndex] || collection.items[0];
const page = document.getElementById('detail-page');
const back = document.getElementById('back-link');
back.href = `catalog.html?collection=${encodeURIComponent(collectionKey)}`;
document.title = `${item.name} | Forensic Teaching Museum`;

const teachingNotes = collectionKey === 'weapons' ? `<div class="detail-notes"><h3>TEACHING NOTES</h3><p>${item.notes}</p></div>` : '';
page.innerHTML = `<section class="detail-header"><p class="section-number">${collection.number}</p><h1>${item.name}</h1><p>${item.summary}</p></section><section class="single-exhibit"><div class="single-photo">${item.image ? `<img src="${item.image}" alt="${item.name}" />` : '<span>ADD EXHIBIT PHOTO</span>'}</div><div class="single-content"><div><h2>About this exhibit</h2><p>${item.description}</p></div>${teachingNotes}</div></section>`;
