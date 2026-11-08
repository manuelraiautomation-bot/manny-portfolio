(() => {
  const business = window.CHILL_TREATS;
  const iconPaths = {
    arrow:'<path d="M6 18L18 6M6 6H18V18"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3l2 5-2 2a16 16 0 0 0 6 6l2-2 5 2Z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    message:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.8-5A9.2 9.2 0 0 1 3 11.5a9 9 0 0 1 18 0Z"/><path d="m7 13 4-4 2 3 4-3"/>',
    heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
    camera:'<path d="M14 4h-4L8 7H3v13h18V7h-5Z"/><circle cx="12" cy="13" r="4"/>'
  };
  const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.camera}</svg>`;
  document.querySelectorAll('[data-icon]').forEach(el => el.outerHTML = icon(el.dataset.icon));
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`;
  document.querySelectorAll('[data-directions]').forEach(el => el.href = directions);
  document.querySelectorAll('[data-phone]').forEach(el => el.href = `tel:${business.phoneLink}`);
  document.querySelectorAll('[data-phone-text]').forEach(el => el.textContent = business.phone);
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = business.address);
  document.querySelectorAll('[data-facebook]').forEach(el => el.href = business.facebook);
  document.querySelectorAll('[data-message]').forEach(el => el.href = business.messenger || business.facebook);
  if (business.messenger) document.querySelector('#messenger-help').textContent = 'Chat with CHILL Treats on Messenger.';
  if (business.hours) document.querySelector('[data-hours]').textContent = business.hours;
  document.querySelector('#shop-map').src = `https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`;
  if (business.logo) document.querySelectorAll('[data-brand]').forEach(el => {
    const img = new Image(); img.src = business.logo; img.alt = 'Original CHILL Treats logo';
    img.onerror = () => { img.remove(); el.insertAdjacentHTML('afterbegin','<span>CHILL <em>Treats</em></span>'); };
    el.replaceChildren(img);
  });
  const create = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; };
  const grid = document.querySelector('#menu-grid');
  business.menu.forEach(product => {
    const card = create('article','menu-card'); card.dataset.category = product.category;
    const art = create('div','menu-img');
    if (product.photoPosition) {
      const photo = create('div','menu-photo'); photo.setAttribute('role','img'); photo.setAttribute('aria-label',product.imageAlt || product.name);
      photo.style.backgroundImage = `url("${product.image}")`; photo.style.backgroundPosition = product.photoPosition; art.append(photo);
    } else {
      const image = create('img'); image.src = product.image; image.alt = product.imageAlt || product.name; image.width = 600; image.height = 600; image.loading = 'lazy'; image.decoding = 'async'; art.append(image);
    }
    if (product.sampleImage) art.append(create('span','art-tag','AI-GENERATED SAMPLE IMAGE'));
    else if (product.image.endsWith('.svg')) art.append(create('span','art-tag','PRODUCT ILLUSTRATION'));
    const body = create('div','menu-body');
    body.append(create('h3','',product.name),create('p','',product.description));
    const price = product.price == null ? 'Price to be added' : typeof product.price === 'number' ? new Intl.NumberFormat('en-PH',{style:'currency',currency:'PHP'}).format(product.price) : product.price;
    body.append(create('div','menu-price',price),create('div','availability',product.availability || 'Ask about availability'));
    const link = create('a','',`Ask about ${product.name.toLowerCase()}`); link.href = '#contact'; body.append(link); card.append(art,body); grid.append(card);
  });
  const showCategory = filter => {
    let count = 0;
    document.querySelectorAll('.menu-card').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; if (!card.hidden) count++; });
    document.querySelector('#menu-status').textContent = `Showing ${count} ${count === 1 ? 'category' : 'categories'}. Official prices and availability will be updated when confirmed.`;
  };
  showCategory('all');
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click',() => {
    document.querySelectorAll('.filter').forEach(el => el.setAttribute('aria-pressed',String(el === button))); showCategory(button.dataset.filter);
  }));
  business.gallery.forEach(item => {
    const card = create('article','gallery-card'); const frame = create('div','gallery-image');
    if (item.image) { const img = new Image(); img.src = item.image; img.alt = item.alt; img.loading = 'lazy'; img.decoding = 'async'; frame.append(img); }
    else { frame.innerHTML = icon(item.type === 'moments' ? 'heart' : 'camera'); frame.append(create('strong','','Shop photos coming soon'),create('small','','Original CHILL Treats photography to be added')); }
    card.append(frame,create('h3','',item.title),create('p','',item.description)); document.querySelector('#gallery-grid').append(card);
  });
  const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('.nav-links');
  const close = () => {toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');};
  toggle.addEventListener('click',() => {const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
  nav.querySelectorAll('a').forEach(el => el.addEventListener('click',close));
  document.addEventListener('keydown',event => {if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {close();toggle.focus();}});
  matchMedia('(min-width:801px)').addEventListener('change',event => {if (event.matches)close();});
  const schema = {'@context':'https://schema.org','@type':'IceCreamShop',name:business.name,description:business.tagline,telephone:business.phoneLink,address:{'@type':'PostalAddress',streetAddress:'Magallanes St., Brgy. Sabang II',addressLocality:'Allen',addressRegion:'Northern Samar',postalCode:'6420',addressCountry:'PH'},sameAs:[business.facebook]};
  const json = create('script');json.type='application/ld+json';json.textContent=JSON.stringify(schema);document.head.append(json);
})();
