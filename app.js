/**
 * PoseBook — Core Application Logic & Data Store
 */

const poseData = [
  {
    id: 1,
    title: "Pine Forest Morning Light Beam Walk",
    category: "mountain",
    tag1: "Environmental Walk",
    tag2: "✨ Atmospheric Travel",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    photographer: "Rohan Joshi",
    location: "Kullu Valley",
    likes: 1,
    saves: 430,
    lens: "35mm f/1.8",
    aperture: "f/2.8",
    lighting: "Natural Light Beams",
    angle: "Low Angle Wide",
    desc: "Serene walking pose through dense pine woodland with dramatic natural light rays filtering through the misty morning canopy."
  },
  {
    id: 2,
    title: "Monochrome High-Key Denim Close-up",
    category: "portrait",
    tag1: "Close-up Gaze",
    tag2: "✨ Fine Art B&W",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    photographer: "Ananya Roy",
    location: "Delhi Studio",
    likes: 1,
    saves: 620,
    lens: "85mm f/1.4",
    aperture: "f/1.8",
    lighting: "Diffused Daylight",
    angle: "Eye Level Close-Up",
    desc: "Warm candid expression in a blue denim hoodie against an urban teal-blue wall, capturing natural laughter and subtle eye glints."
  },
  {
    id: 3,
    title: "Sunset Beach Romantic Walk",
    category: "couple",
    tag1: "Couple Walking",
    tag2: "✨ Romantic Candid",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    photographer: "Rahul Photography",
    location: "South Goa",
    likes: 1,
    saves: 890,
    lens: "50mm f/1.4",
    aperture: "f/2.0",
    lighting: "Golden Hour Backlight",
    angle: "Medium Eye Level",
    desc: "Intimate couple embrace holding beach bouquet while golden sunset light washes softly over warm sea waves."
  },
  {
    id: 4,
    title: "Refraction Close-up Glass Portrait",
    category: "creative",
    tag1: "Refraction Close-up",
    tag2: "✨ Creative Experimental",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    photographer: "Priya Sharma",
    location: "Mumbai Studio",
    likes: 1,
    saves: 310,
    lens: "85mm f/1.8",
    aperture: "f/1.8",
    lighting: "Prism Lens Flare",
    angle: "Tight Close-up",
    desc: "High fashion editorial closeup shot through glass prism for abstract light distortions and soft pastel highlights."
  },
  {
    id: 5,
    title: "Royal Palace Courtyard Symmetry",
    category: "wedding",
    tag1: "Palace Symmetry",
    tag2: "✨ Royal Heritage",
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    photographer: "Siddharth Verma",
    location: "Udaipur Palace",
    likes: 1,
    saves: 1240,
    lens: "24-70mm f/2.8",
    aperture: "f/4.0",
    lighting: "Warm Ambient Sun",
    angle: "Centered Wide",
    desc: "Majestic bridal pose framed inside royal carved sandstone arches with deep shadow contrast."
  },
  {
    id: 6,
    title: "Cyberpunk Night Street Glow",
    category: "street",
    tag1: "Urban Neon",
    tag2: "✨ Cyberpunk Vibe",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    photographer: "Rohan Joshi",
    location: "Bandra Night Alley",
    likes: 1,
    saves: 540,
    lens: "50mm f/1.2",
    aperture: "f/1.4",
    lighting: "Magenta & Cyan Tubes",
    angle: "45-Degree Side Profile",
    desc: "High-contrast urban style with vibrant dual-tone neon reflections on rain-soaked asphalt."
  },
  {
    id: 7,
    title: "Intimate Forehead Touch & Laughter",
    category: "couple",
    tag1: "Candid Couple",
    tag2: "✨ Natural Emotion",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80",
    photographer: "Kavya Malhotra",
    location: "Delhi NCR",
    likes: 412,
    saves: 750,
    lens: "85mm f/1.4",
    aperture: "f/1.4",
    lighting: "Window Natural Light",
    angle: "Medium Close-up",
    desc: "Unscripted documentary style capture with soft focus background falloff and spontaneous joy."
  },
  {
    id: 8,
    title: "Taj Mahal Sunset Heritage Wandering",
    category: "travel",
    tag1: "Heritage Architecture",
    tag2: "✨ Travel Vibe",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    photographer: "Aarav Kapoor",
    location: "Agra, India",
    likes: 462,
    saves: 980,
    lens: "35mm f/1.8",
    aperture: "f/4.0",
    lighting: "Golden Hour Warmth",
    angle: "Wide Sunset Framed",
    desc: "Classic travel narrative shot capturing golden sunset hues reflecting against iconic heritage architecture."
  },
  {
    id: 9,
    title: "Festive Marigold & Diya Glow",
    category: "traditional",
    tag1: "Festive Elegance",
    tag2: "✨ Cultural Glow",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    photographer: "Kavya Malhotra",
    location: "Varanasi Ghats",
    likes: 310,
    saves: 560,
    lens: "50mm f/1.4",
    aperture: "f/1.8",
    lighting: "Warm Candlelight & Ambient",
    angle: "Slight High Angle",
    desc: "Vibrant ethnic portrait rich with warm diya reflections, marigold garlands, and deep celebratory mood."
  },
  {
    id: 10,
    title: "Cinematic Anamorphic Rainy City Night",
    category: "cinematic",
    tag1: "Anamorphic Lens",
    tag2: "✨ Movie Still",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    photographer: "Siddharth Verma",
    location: "Downtown Lights",
    likes: 295,
    saves: 620,
    lens: "50mm Anamorphic 2.0x",
    aperture: "f/2.0",
    lighting: "Sodium Vapor + Blue Fill",
    angle: "Horizontal Wide 2.39:1",
    desc: "Atmospheric movie-still aesthetic with horizontal lens flares, rainy reflections, and storytelling depth."
  },
  {
    id: 11,
    title: "Minimal Studio Prism Light Break",
    category: "studio",
    tag1: "Prism Flares",
    tag2: "✨ Studio Precision",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    photographer: "Priya Sharma",
    location: "Bengaluru Studio",
    likes: 188,
    saves: 340,
    lens: "105mm Macro f/2.8",
    aperture: "f/2.8",
    lighting: "Hard Grid Spot + Crystal Prism",
    angle: "Direct Eye Level",
    desc: "Experimental high-fashion portrait using crystal prism refractions across sharp studio lighting."
  },
  {
    id: 12,
    title: "Pre-Wedding Traditional Silk Saree Moment",
    category: "wedding",
    tag1: "Traditional Glam",
    tag2: "✨ Pre-Wedding Vibe",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    photographer: "Ananya Roy",
    location: "Jaipur Haveli",
    likes: 276,
    saves: 510,
    lens: "50mm f/1.2",
    aperture: "f/2.0",
    lighting: "Courtyard Reflection",
    angle: "Eye Level Profile",
    desc: "Rich cultural pre-wedding shoot featuring traditional silk textures and ornate mirror backgrounds."
  }
];

const photographerData = [
  {
    id: 1,
    name: "Siddharth Verma",
    city: "Mumbai",
    rating: "4.9",
    reviews: "128",
    price: "₹45,000 / day",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    specialties: ["Royal Heritage", "Palace Symmetry", "Editorial Fashion"]
  },
  {
    id: 2,
    name: "Kavya Malhotra",
    city: "Delhi",
    rating: "5.0",
    reviews: "94",
    price: "₹60,000 / day",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    specialties: ["Intimate Candids", "Festive Diya Glow", "Pre-Wedding"]
  },
  {
    id: 3,
    name: "Aarav Kapoor",
    city: "Bangalore",
    rating: "4.8",
    reviews: "210",
    price: "₹35,000 / day",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    specialties: ["Heritage Architecture", "Travel Documentaries", "Sunset Trails"]
  },
  {
    id: 4,
    name: "Priya Sharma",
    city: "Mumbai",
    rating: "4.9",
    reviews: "175",
    price: "₹50,000 / day",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    specialties: ["Refraction Glass", "Studio Prism", "Creative Experimental"]
  },
  {
    id: 5,
    name: "Rohan Joshi",
    city: "Pune",
    rating: "4.9",
    reviews: "160",
    price: "₹40,000 / day",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    specialties: ["Environmental Walk", "Cyberpunk Neon", "Mountain Trails"]
  },
  {
    id: 6,
    name: "Rahul Photography",
    city: "Goa",
    rating: "4.8",
    reviews: "142",
    price: "₹42,000 / day",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80",
    specialties: ["Sunset Shoreline", "Beach Candids", "Couple Walking"]
  }
];

// Modal Elements
function createModalDOM() {
  if (document.getElementById('poseModalBackdrop')) return;
  const modalHTML = `
    <div id="poseModalBackdrop" class="modal-backdrop" onclick="closePoseModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closePoseModal()">✕</button>
        <img id="modalImg" class="modal-img" src="" alt="Pose preview">
        <div class="modal-body">
          <div>
            <div id="modalChips" class="tag-group" style="margin-bottom: 12px; flex-direction: row;"></div>
            <h2 id="modalTitle" style="font-size: 1.4rem; font-weight: 800; line-height: 1.25; margin-bottom: 6px;"></h2>
            <div id="modalPhotographer" style="font-size: 0.88rem; color: #94a3b8; display: flex; align-items: center; gap: 8px;"></div>
            <p id="modalDesc" style="font-size: 0.88rem; color: #cbd5e1; margin-top: 14px; line-height: 1.5;"></p>
            
            <div class="modal-specs-grid">
              <div class="spec-box">
                <div class="label">📷 Lens & Aperture</div>
                <div id="modalLens" class="val"></div>
              </div>
              <div class="spec-box">
                <div class="label">💡 Lighting Recipe</div>
                <div id="modalLighting" class="val"></div>
              </div>
              <div class="spec-box">
                <div class="label">📐 Camera Angle</div>
                <div id="modalAngle" class="val"></div>
              </div>
              <div class="spec-box">
                <div class="label">📍 Location</div>
                <div id="modalLocation" class="val"></div>
              </div>
            </div>
          </div>
          
          <div style="display: flex; gap: 10px; margin-top: 16px;">
            <a href="photographers.html" class="btn-primary" style="flex: 1; text-align: center;">✨ Find Photographer for this Style</a>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePoseModal();
  });
}

function openPoseModal(id) {
  createModalDOM();
  const pose = poseData.find(p => p.id === id);
  if (!pose) return;

  document.getElementById('modalImg').src = pose.img;
  document.getElementById('modalImg').alt = pose.title;
  document.getElementById('modalTitle').textContent = pose.title;
  document.getElementById('modalPhotographer').innerHTML = `<span>by <b>${pose.photographer}</b></span> • <span style="color: #f472b6;">📍 ${pose.location}</span>`;
  document.getElementById('modalDesc').textContent = pose.desc;
  document.getElementById('modalLens').textContent = `${pose.lens} • ${pose.aperture}`;
  document.getElementById('modalLighting').textContent = pose.lighting;
  document.getElementById('modalAngle').textContent = pose.angle;
  document.getElementById('modalLocation').textContent = pose.location;

  document.getElementById('modalChips').innerHTML = `
    <span class="chip white">${pose.tag1}</span>
    <span class="chip purple">${pose.tag2}</span>
  `;

  document.getElementById('poseModalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePoseModal() {
  const modal = document.getElementById('poseModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function toggleLike(btn, id) {
  const countSpan = btn.querySelector('.like-count') || btn;
  let count = parseInt(countSpan.textContent.replace(/[^0-9]/g, '')) || 0;
  if (btn.classList.contains('liked')) {
    btn.classList.remove('liked');
    count = Math.max(0, count - 1);
  } else {
    btn.classList.add('liked');
    count += 1;
  }
  btn.innerHTML = `🤍 <span class="like-count">${count}</span>`;
}

// Render Gallery Cards
function renderPoseCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="icon">📷</div>
        <b>No Poses Found</b>
        Try searching for a different style, category, or location keyword.
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(pose => `
    <div class="pose-card ${pose.tall ? 'highlight' : ''}" onclick="openPoseModal(${pose.id})">
      <div class="image-wrapper ${pose.tall ? 'tall' : ''}">
        <img src="${pose.img}" alt="${pose.title}" loading="lazy" />
        <div class="card-overlay">
          <div class="tag-group">
            <span class="chip white">${pose.tag1}</span>
            <span class="chip purple">${pose.tag2}</span>
          </div>
          <div class="action-icons">
            <button class="action-btn" onclick="event.stopPropagation(); toggleLike(this, ${pose.id})">
              🤍 <span class="like-count">${pose.likes}</span>
            </button>
            <button class="action-btn" onclick="event.stopPropagation();">📝 3</button>
            <button class="action-btn" onclick="event.stopPropagation();">🔗</button>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <h3>${pose.title}</h3>
        <div class="photographer-info">
          <span>by ${pose.photographer}</span>
          <span class="location">📍 ${pose.location}</span>
        </div>
        <a href="photographers.html" class="find-link" onclick="event.stopPropagation();">
          <span>Find Photographer for this Style</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  `).join('');
}

// Render Photographers Cards
function renderPhotographerCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="icon">📷</div>
        <b>No Photographers Found</b>
        No photographers match your current search or city filter.
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => `
    <div class="photographer-card">
      <div>
        <div class="photographer-header">
          <img src="${p.img}" alt="${p.name}" class="photographer-avatar" />
          <div class="photographer-details">
            <h3>${p.name}</h3>
            <div class="photographer-city">📍 ${p.city}</div>
            <div class="photographer-rating">
              <span class="star">★</span> ${p.rating} <span class="reviews">(${p.reviews} shoots)</span>
            </div>
          </div>
        </div>
        <div class="specialty-tags" style="margin-top: 16px;">
          ${p.specialties.map(s => `<span class="specialty-tag">${s}</span>`).join('')}
        </div>
      </div>
      <div class="photographer-footer">
        <div class="photographer-price">${p.price}</div>
        <button class="btn-book" onclick="alert('Booking request sent for ${p.name}! They will contact you shortly.')">Book Photoshoot</button>
      </div>
    </div>
  `).join('');
}

// Setup Page Handlers
document.addEventListener('DOMContentLoaded', () => {
  createModalDOM();

  // Index Page Trending Gallery
  if (document.getElementById('trendingGalleryGrid')) {
    renderPoseCards('trendingGalleryGrid', poseData);
  }

  // Explore Poses Page Full Gallery
  if (document.getElementById('explorePoseGrid')) {
    renderPoseCards('explorePoseGrid', poseData);
  }

  // Photographers Directory Page
  if (document.getElementById('photographersGrid')) {
    renderPhotographerCards('photographersGrid', photographerData);
  }

  // Category Filter Pills on index or explore
  const filterBtns = document.querySelectorAll('.filter-tags .tag, .filter-tags button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.textContent.trim().toLowerCase();

      let filtered = poseData;
      if (cat !== 'all') {
        filtered = poseData.filter(p => 
          p.category.toLowerCase().includes(cat) || 
          p.title.toLowerCase().includes(cat) || 
          p.tag1.toLowerCase().includes(cat) || 
          p.tag2.toLowerCase().includes(cat)
        );
      }
      
      if (document.getElementById('trendingGalleryGrid')) {
        renderPoseCards('trendingGalleryGrid', filtered);
      }
      if (document.getElementById('explorePoseGrid')) {
        renderPoseCards('explorePoseGrid', filtered);
      }
    });
  });

  // Search Bar Input
  const searchInput = document.querySelector('.search-container input, .search-card input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      
      // Filter poses
      const filteredPoses = poseData.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.photographer.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.tag1.toLowerCase().includes(q) ||
        p.tag2.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      );

      if (document.getElementById('trendingGalleryGrid')) {
        renderPoseCards('trendingGalleryGrid', filteredPoses);
      }
      if (document.getElementById('explorePoseGrid')) {
        renderPoseCards('explorePoseGrid', filteredPoses);
      }

      // Filter photographers
      const filteredPros = photographerData.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.specialties.some(s => s.toLowerCase().includes(q))
      );

      if (document.getElementById('photographersGrid')) {
        renderPhotographerCards('photographersGrid', filteredPros);
        const statusLine = document.querySelector('.status-line');
        if (statusLine) {
          statusLine.innerHTML = `<b>Showing ${filteredPros.length}</b> verified photographers`;
        }
      }
    });
  }

  // City Filter Buttons on Photographers Page
  const cityBtns = document.querySelectorAll('.city-row button');
  cityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const city = btn.textContent.trim();

      let filtered = photographerData;
      if (city !== 'All') {
        filtered = photographerData.filter(p => p.city.toLowerCase().includes(city.toLowerCase()));
      }

      if (document.getElementById('photographersGrid')) {
        renderPhotographerCards('photographersGrid', filtered);
        const statusLine = document.querySelector('.status-line');
        if (statusLine) {
          statusLine.innerHTML = `<b>Showing ${filtered.length}</b> verified photographers`;
        }
      }
    });
  });
});
