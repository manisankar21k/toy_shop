/* ==========================================================================
   Toy Planet — Scripts
   ========================================================================== */
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Toy Planet | Agraharam Street, Thuraiyur</title>
<meta name="description" content="Toy Planet - Your one-stop shop for toys, games, puzzles & gifts for kids in Agraharam Street, Thuraiyur, Trichy District.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Custom Cursor (desktop only) -->
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-ring" id="cursorRing"><span class="cursor-label" id="cursorLabel"></span></div>

<!-- Scroll Progress -->
<div class="scroll-progress" id="scrollProgress"></div>

<!-- Preloader -->
<div class="preloader" id="preloader">
  <div class="loader-ring"></div>
  <span class="loader-text">TOY PLANET</span>
</div>

<!-- Top Info Bar -->
<div class="topbar">
  <div class="container topbar-inner">
    <div class="topbar-item"><i class="fa-solid fa-location-dot"></i> Agraharam Street, Thuraiyur (Tk), Trichy (Dt)</div>
    <div class="topbar-item"><i class="fa-solid fa-phone"></i> <a href="tel:+9187987XXXXX">+91 87987 XXXXX</a></div>
    <div class="topbar-socials">
      <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
      <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  </div>
</div>

<!-- Navbar -->
<header class="navbar" id="navbar">
  <div class="container nav-inner">
    <a href="#home" class="logo">
      <span class="logo-icon"><i class="fa-solid fa-shapes"></i></span>
      <span class="logo-text">Toy <span>Planet</span></span>
    </a>

    <nav class="nav-links" id="navLinks">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#products" class="nav-link">Toys</a>
      <a href="#why-us" class="nav-link">Why Us</a>
      <a href="#gallery" class="nav-link">Gallery</a>
      <a href="#testimonials" class="nav-link">Reviews</a>
      <a href="#contact" class="nav-link">Contact</a>
      <span class="nav-indicator" id="navIndicator"></span>
    </nav>

    <a href="#contact" class="btn btn-primary nav-cta">Visit Us <i class="fa-solid fa-arrow-right"></i></a>

    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- Hero -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-particles" id="particles"></div>
  <div class="container hero-inner">
    <p class="hero-badge reveal" data-reveal>✨ Welcome to Thuraiyur's Finest Toy Shop</p>
    <h1 class="hero-title reveal" data-reveal>
      <span class="line">Discover Playtime at</span>
      <span class="line gradient-text">Toy Planet</span>
    </h1>
    <p class="hero-sub reveal" data-reveal>
      Your one-stop destination for toys, games, puzzles & fun for every child —
      proudly serving Agraharam Street, Thuraiyur (Tk), Trichy (Dt) with smiles since day one.
    </p>
    <div class="hero-buttons reveal" data-reveal>
      <a href="#products" class="btn btn-primary">Explore Toys <i class="fa-solid fa-arrow-right"></i></a>
      <a href="#contact" class="btn btn-outline"><i class="fa-solid fa-location-dot"></i> Get Directions</a>
    </div>
    <div class="hero-stats reveal" data-reveal>
      <div class="stat">
        <h3><span class="counter" data-target="12">0</span>+</h3>
        <p>Years of Trust</p>
      </div>
      <div class="stat">
        <h3><span class="counter" data-target="5000">0</span>+</h3>
        <p>Happy Kids</p>
      </div>
      <div class="stat">
        <h3><span class="counter" data-target="800">0</span>+</h3>
        <p>Toys in Store</p>
      </div>
      <div class="stat">
        <h3><span class="counter" data-target="100">0</span>%</h3>
        <p>Satisfaction</p>
      </div>
    </div>
  </div>
  <a href="#about" class="scroll-down" aria-label="Scroll down"><i class="fa-solid fa-chevron-down"></i></a>
</section>

<!-- Marquee Strip -->
<div class="marquee">
  <div class="marquee-track">
    <span>🧩 Building Blocks</span>
    <span>🚗 RC Cars & Vehicles</span>
    <span>🧸 Soft Toys</span>
    <span>🦸 Action Figures</span>
    <span>🎲 Board Games</span>
    <span>🔬 STEM & Learning</span>
    <span>🧩 Building Blocks</span>
    <span>🚗 RC Cars & Vehicles</span>
    <span>🧸 Soft Toys</span>
    <span>🦸 Action Figures</span>
    <span>🎲 Board Games</span>
    <span>🔬 STEM & Learning</span>
  </div>
</div>

<!-- About -->
<section class="about" id="about">
  <div class="container about-inner">
    <div class="about-media reveal" data-reveal>
      <div class="about-card card-1"><i class="fa-solid fa-puzzle-piece"></i><h4>Building Blocks</h4></div>
      <div class="about-card card-2"><i class="fa-solid fa-car"></i><h4>RC Vehicles</h4></div>
      <div class="about-card card-3"><i class="fa-solid fa-gift"></i><h4>Gift Toys</h4></div>
      <div class="about-glow"></div>
    </div>
    <div class="about-content">
      <p class="section-tag reveal" data-reveal>About Our Shop</p>
      <h2 class="section-title reveal" data-reveal>A World of Play, Right in <span class="gradient-text">Thuraiyur</span></h2>
      <p class="about-text reveal" data-reveal>
        Located in the heart of Agraharam Street, Thuraiyur (Tk), Trichy (Dt), Toy Planet has been the
        trusted name for toys, games, puzzles and gifts for children of all ages. We blend
        timeless classics with the latest trends to bring you a curated collection that sparks imagination and joy.
      </p>
      <ul class="about-list">
        <li class="reveal" data-reveal><i class="fa-solid fa-circle-check"></i> Wide range of toys, games & puzzles</li>
        <li class="reveal" data-reveal><i class="fa-solid fa-circle-check"></i> Genuine branded toys & safe materials</li>
        <li class="reveal" data-reveal><i class="fa-solid fa-circle-check"></i> Affordable prices, premium quality</li>
        <li class="reveal" data-reveal><i class="fa-solid fa-circle-check"></i> Friendly & knowledgeable staff</li>
      </ul>
      <a href="#contact" class="btn btn-primary reveal" data-reveal>Visit Our Store <i class="fa-solid fa-store"></i></a>
    </div>
  </div>
</section>

<!-- Products -->
<section class="products" id="products">
  <div class="container">
    <p class="section-tag center reveal" data-reveal>Our Collection</p>
    <h2 class="section-title center reveal" data-reveal>Explore Our <span class="gradient-text">Toy Categories</span></h2>
    <p class="section-desc center reveal" data-reveal>Handpicked toys crafted to add fun and imagination to every moment of playtime.</p>

    <div class="products-grid">
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%23FF8A1E'/><text x='450' y='430' font-size='260' text-anchor='middle'>🧩</text></svg>" alt="Building blocks and puzzles" loading="lazy">
          <span class="product-chip">Most Loved</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-puzzle-piece"></i></div>
          <h3>Building Blocks & Puzzles</h3>
          <p>Colourful blocks, jigsaw puzzles and brain teasers for young builders.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%234169E1'/><text x='450' y='430' font-size='260' text-anchor='middle'>🚗</text></svg>" alt="Remote control cars and vehicles" loading="lazy">
          <span class="product-chip">Fresh Finds</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-truck-monster"></i></div>
          <h3>Remote Control & Vehicles</h3>
          <p>RC cars, trucks and racing sets built for non-stop adventure.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%23EF476F'/><text x='450' y='430' font-size='260' text-anchor='middle'>🧸</text></svg>" alt="Soft toys and teddy bears" loading="lazy">
          <span class="product-chip">Cuddle Picks</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-paw"></i></div>
          <h3>Soft Toys & Teddy Bears</h3>
          <p>Cuddly companions and plush friends for nap time and playtime.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%237C4DFF'/><text x='450' y='430' font-size='260' text-anchor='middle'>🦸</text></svg>" alt="Action figures and superheroes" loading="lazy">
          <span class="product-chip">Hero Squad</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-user-ninja"></i></div>
          <h3>Action Figures & Superheroes</h3>
          <p>Superheroes, action figures and collectible playsets for epic battles.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%2306D6A0'/><text x='450' y='430' font-size='260' text-anchor='middle'>🎲</text></svg>" alt="Board games and family fun" loading="lazy">
          <span class="product-chip">Family Fun</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-dice"></i></div>
          <h3>Board Games & Fun</h3>
          <p>Board games, cards and indoor fun the whole family can enjoy.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="product-card reveal" data-reveal>
        <div class="product-image">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='700'><rect width='900' height='700' fill='%23FFD166'/><text x='450' y='430' font-size='260' text-anchor='middle'>🔬</text></svg>" alt="Educational and STEM toys" loading="lazy">
          <span class="product-chip">Little Geniuses</span>
        </div>
        <div class="product-copy">
          <div class="product-icon"><i class="fa-solid fa-flask"></i></div>
          <h3>Educational & STEM Toys</h3>
          <p>Learning kits, science sets and creative toys that build young minds.</p>
          <a href="#contact" class="product-link">See in store <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Us -->
<section class="why-us" id="why-us">
  <div class="container">
    <p class="section-tag center reveal" data-reveal>Why Choose Us</p>
    <h2 class="section-title center reveal" data-reveal>The <span class="gradient-text">Toy Planet</span> Promise</h2>

    <div class="why-grid">
      <div class="why-card reveal" data-reveal>
        <div class="why-icon"><i class="fa-solid fa-award"></i></div>
        <h3>Trusted Quality</h3>
        <p>Every toy is checked for safety and quality before it reaches our shelves.</p>
      </div>
      <div class="why-card reveal" data-reveal>
        <div class="why-icon"><i class="fa-solid fa-tags"></i></div>
        <h3>Best Prices</h3>
        <p>Fun toys and games at prices that suit every budget.</p>
      </div>
      <div class="why-card reveal" data-reveal>
        <div class="why-icon"><i class="fa-solid fa-truck-fast"></i></div>
        <h3>Fresh Arrivals</h3>
        <p>New toys and collections added regularly.</p>
      </div>
      <div class="why-card reveal" data-reveal>
        <div class="why-icon"><i class="fa-solid fa-hand-holding-heart"></i></div>
        <h3>Customer First</h3>
        <p>Friendly service that keeps our customers coming back.</p>
      </div>
    </div>
  </div>
</section>

<!-- Gallery -->
<section class="gallery" id="gallery">
  <div class="container">
    <p class="section-tag center reveal" data-reveal>Store Gallery</p>
    <h2 class="section-title center reveal" data-reveal>A Glimpse Inside <span class="gradient-text">Our Store</span></h2>

    <div class="gallery-grid">
      <button class="gallery-item gallery-wide reveal" type="button" data-reveal data-gallery-src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1800' height='900'><rect width='1800' height='900' fill='%23FF8A1E'/><text x='900' y='560' font-size='420' text-anchor='middle'>🧩</text></svg>" data-gallery-caption="Block town builds happen here" aria-label="Open building blocks corner image">
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='700'><rect width='1000' height='700' fill='%23FF8A1E'/><text x='500' y='430' font-size='260' text-anchor='middle'>🧩</text></svg>" alt="Building blocks corner" loading="lazy">
        <span class="gallery-overlay"><span>Block Corner</span><i class="fa-solid fa-expand"></i></span>
      </button>
      <button class="gallery-item gallery-tall reveal" type="button" data-reveal data-gallery-src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1600'><rect width='1200' height='1600' fill='%23EF476F'/><text x='600' y='880' font-size='420' text-anchor='middle'>🧸</text></svg>" data-gallery-caption="Cuddle corner favorites for every age" aria-label="Open soft toys corner image">
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='1200'><rect width='900' height='1200' fill='%23EF476F'/><text x='450' y='650' font-size='300' text-anchor='middle'>🧸</text></svg>" alt="Soft toys corner" loading="lazy">
        <span class="gallery-overlay"><span>Cuddle Corner</span><i class="fa-solid fa-expand"></i></span>
      </button>
      <button class="gallery-item reveal" type="button" data-reveal data-gallery-src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><rect width='1200' height='1200' fill='%2306D6A0'/><text x='600' y='680' font-size='420' text-anchor='middle'>🎲</text></svg>" data-gallery-caption="Game nights start with these picks" aria-label="Open board games shelf image">
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900'><rect width='900' height='900' fill='%2306D6A0'/><text x='450' y='500' font-size='260' text-anchor='middle'>🎲</text></svg>" alt="Board games shelf" loading="lazy">
        <span class="gallery-overlay"><span>Game Nights</span><i class="fa-solid fa-expand"></i></span>
      </button>
      <button class="gallery-item reveal" type="button" data-reveal data-gallery-src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='1200'><rect width='1200' height='1200' fill='%237C4DFF'/><text x='600' y='680' font-size='420' text-anchor='middle'>🦸</text></svg>" data-gallery-caption="Heroes ready for their next mission" aria-label="Open action figures wall image">
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='900' height='900'><rect width='900' height='900' fill='%237C4DFF'/><text x='450' y='500' font-size='260' text-anchor='middle'>🦸</text></svg>" alt="Action figures wall" loading="lazy">
        <span class="gallery-overlay"><span>Hero Wall</span><i class="fa-solid fa-expand"></i></span>
      </button>
      <button class="gallery-item gallery-wide reveal" type="button" data-reveal data-gallery-src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1800' height='900'><rect width='1800' height='900' fill='%234169E1'/><text x='900' y='560' font-size='420' text-anchor='middle'>🚗</text></svg>" data-gallery-caption="Race-ready rides for every driveway" aria-label="Open RC vehicles display image">
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='700'><rect width='1000' height='700' fill='%234169E1'/><text x='500' y='430' font-size='260' text-anchor='middle'>🚗</text></svg>" alt="RC vehicles display" loading="lazy">
        <span class="gallery-overlay"><span>Speed Zone</span><i class="fa-solid fa-expand"></i></span>
      </button>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="testimonials" id="testimonials">
  <div class="container">
    <p class="section-tag center reveal" data-reveal>Testimonials</p>
    <h2 class="section-title center reveal" data-reveal>What Our <span class="gradient-text">Customers Say</span></h2>

    <div class="testimonial-slider reveal" data-reveal>
      <div class="testimonial-track" id="testimonialTrack">
        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p>"Best toy store in Thuraiyur! Amazing collection and very friendly staff. My kids love it here."</p>
          <h4>— Priya S.</h4>
        </div>
        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p>"Got the perfect birthday gift for my son here. Excellent quality and reasonable prices."</p>
          <h4>— Kavitha R.</h4>
        </div>
        <div class="testimonial-card">
          <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <p>"Great place for toys! I always find something fun for every occasion."</p>
          <h4>— Arun K.</h4>
        </div>
      </div>
      <div class="testimonial-controls">
        <button class="slider-control" id="testimonialPrev" type="button" aria-label="Show previous review"><i class="fa-solid fa-arrow-left"></i></button>
        <div class="testimonial-dots" id="testimonialDots"></div>
        <button class="slider-control" id="testimonialNext" type="button" aria-label="Show next review"><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
</section>

<!-- Contact -->
<section class="contact" id="contact">
  <div class="container">
    <p class="section-tag center reveal" data-reveal>Get In Touch</p>
    <h2 class="section-title center reveal" data-reveal>Visit <span class="gradient-text">Toy Planet</span></h2>
    <p class="section-desc center reveal" data-reveal>We'd love to see you at our store. Reach out or drop by anytime!</p>

    <div class="contact-grid">
      <div class="contact-info reveal" data-reveal>
        <div class="info-card">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <h4>Store Address</h4>
            <p>Toy Planet, Agraharam Street,<br>Thuraiyur (Tk), Trichy (Dt),<br>Tamil Nadu - 621010</p>
          </div>
        </div>
        <div class="info-card">
          <i class="fa-solid fa-phone"></i>
          <div>
            <h4>Call Us</h4>
            <p><a href="tel:+9187987XXXXX">+91 87987 XXXXX</a></p>
          </div>
        </div>
        <div class="info-card">
          <i class="fa-solid fa-clock"></i>
          <div>
            <h4>Store Timings</h4>
            <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <div class="social-row">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <form class="contact-form reveal" data-reveal id="contactForm">
        <h3>Send Us a Message</h3>
        <div class="form-row">
          <input type="text" placeholder="Your Name" required>
          <input type="tel" placeholder="Phone Number" required>
        </div>
        <input type="email" placeholder="Email Address">
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit" class="btn btn-primary">Send Message <i class="fa-solid fa-paper-plane"></i></button>
        <p class="form-success" id="formSuccess">✅ Thank you! We'll get back to you soon.</p>
      </form>
    </div>

    <div class="map-wrap reveal" data-reveal>
      <iframe
        title="Toy Planet Location - Thuraiyur, Trichy"
        src="https://www.google.com/maps?q=Thuraiyur,+Tiruchirappalli,+Tamil+Nadu&output=embed"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>

<div class="lightbox" id="galleryLightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Collection image preview">
  <button class="lightbox-close" id="lightboxClose" type="button" aria-label="Close image preview"><i class="fa-solid fa-xmark"></i></button>
  <figure class="lightbox-content">
    <img id="lightboxImage" src="" alt="">
    <figcaption id="lightboxCaption"></figcaption>
  </figure>
</div>

<!-- Footer -->
<footer class="footer">
  <div class="container footer-inner">
    <div class="footer-col">
      <a href="#home" class="logo footer-logo">
        <span class="logo-icon"><i class="fa-solid fa-shapes"></i></span>
        <span class="logo-text">Toy <span>Planet</span></span>
      </a>
      <p>Bringing joy and playtime to Agraharam Street, Thuraiyur (Tk), Trichy (Dt) since day one.</p>
      <div class="social-row">
        <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#products">Toys</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-col">
      <h4>Contact Info</h4>
      <p><i class="fa-solid fa-location-dot"></i> Agraharam Street, Thuraiyur (Tk), Trichy (Dt)</p>
      <p><i class="fa-solid fa-phone"></i> +91 87987 XXXXX</p>
      <p><i class="fa-solid fa-clock"></i> 9:00 AM - 9:00 PM (All Days)</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; <span id="year"></span> Toy Planet. All Rights Reserved.</p>
  </div>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="fa-solid fa-chevron-up"></i></button>

<script src="script.js"></script>
</body>
</html>


document.addEventListener('DOMContentLoaded', () => {

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 400);
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 500);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = `${(window.scrollY / docHeight) * 100}%`;
  });

  /* ---------- Mobile menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  /* ---------- Active link highlight on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  const navIndicator = document.getElementById('navIndicator');

  function moveIndicatorTo(link) {
    if (!link) { navIndicator.classList.remove('show'); return; }
    navIndicator.style.left = `${link.offsetLeft}px`;
    navIndicator.style.width = `${link.offsetWidth}px`;
    navIndicator.classList.add('show');
  }

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navItems.forEach(item => {
      const isActive = item.getAttribute('href') === `#${current}`;
      item.classList.toggle('active', isActive);
      if (isActive) moveIndicatorTo(item);
    });
  });

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => moveIndicatorTo(item));
  });
  document.getElementById('navLinks').addEventListener('mouseleave', () => {
    const active = document.querySelector('.nav-link.active');
    moveIndicatorTo(active);
  });
  window.addEventListener('load', () => moveIndicatorTo(document.querySelector('.nav-link.active')));

  /* ---------- Scroll reveal animation ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Counter animation ---------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1600;
      const startTime = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target);
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target;
      };
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  /* ---------- Hero floating particles ---------- */
  const particlesContainer = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('span');
    const size = Math.random() * 6 + 3;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 8 + 8}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(p);
  }

  /* ---------- Testimonial slider ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');
  const cards = track.children;
  let current = 0;
  let testimonialTimer;

  for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  }

  function goToSlide(index) {
    current = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    [...dotsWrap.children].forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function advanceTestimonials() {
    current = (current + 1) % cards.length;
    goToSlide(current);
  }

  function startTestimonials() {
    clearInterval(testimonialTimer);
    testimonialTimer = setInterval(advanceTestimonials, 5000);
  }

  testimonialPrev.addEventListener('click', () => {
    goToSlide((current - 1 + cards.length) % cards.length);
    startTestimonials();
  });
  testimonialNext.addEventListener('click', () => {
    advanceTestimonials();
    startTestimonials();
  });
  track.closest('.testimonial-slider').addEventListener('mouseenter', () => clearInterval(testimonialTimer));
  track.closest('.testimonial-slider').addEventListener('mouseleave', startTestimonials);
  startTestimonials();

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Contact form (front-end only) ---------- */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.classList.add('show');
    launchConfetti();
    form.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  });

  /* ---------- Custom cursor ---------- */
  if (!isTouch && !prefersReducedMotion) {
    document.body.classList.add('has-custom-cursor');
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    const cursorLabel = document.getElementById('cursorLabel');
    let ringX = -100, ringY = -100, dotX = -100, dotY = -100;

    window.addEventListener('mousemove', (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    }, { passive: true });
    const animateCursor = () => {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    document.addEventListener('mousedown', () => cursorRing.classList.add('clicked'));
    document.addEventListener('mouseup', () => cursorRing.classList.remove('clicked'));

    document.querySelectorAll('a, button, input, textarea, .product-card, .why-card, .about-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered');
        cursorDot.classList.add('shrink');
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered');
        cursorDot.classList.remove('shrink');
      });
    });

    document.querySelectorAll('.gallery-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('hovered', 'viewing');
        cursorDot.classList.add('shrink');
        cursorLabel.textContent = 'View';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('hovered', 'viewing');
        cursorDot.classList.remove('shrink');
        cursorLabel.textContent = '';
      });
    });
  }

  /* ---------- Button ripple effect ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2;
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ---------- 3D tilt effect on cards ---------- */
  if (!isTouch && !prefersReducedMotion) {
    document.querySelectorAll('.product-card, .gallery-item, .why-card, .about-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -12;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------- Hero depth and magnetic actions ---------- */
  if (!isTouch && !prefersReducedMotion) {
    const hero = document.querySelector('.hero');

    hero.addEventListener('pointermove', (e) => {
      const bounds = hero.getBoundingClientRect();
      const offsetX = (e.clientX - bounds.left) / bounds.width - 0.5;
      const offsetY = (e.clientY - bounds.top) / bounds.height - 0.5;
      hero.style.setProperty('--hero-shift-x', `${offsetX * 14}px`);
      hero.style.setProperty('--hero-shift-y', `${offsetY * 10}px`);
    }, { passive: true });
    hero.addEventListener('pointerleave', () => {
      hero.style.setProperty('--hero-shift-x', '0px');
      hero.style.setProperty('--hero-shift-y', '0px');
    });

    document.querySelectorAll('.hero-buttons .btn, .nav-cta').forEach(button => {
      button.classList.add('magnetic');
      button.addEventListener('pointermove', (e) => {
        const bounds = button.getBoundingClientRect();
        const offsetX = (e.clientX - bounds.left) / bounds.width - 0.5;
        const offsetY = (e.clientY - bounds.top) / bounds.height - 0.5;
        button.style.setProperty('--magnetic-x', `${offsetX * 10}px`);
        button.style.setProperty('--magnetic-y', `${offsetY * 8}px`);
      }, { passive: true });
      button.addEventListener('pointerleave', () => {
        button.style.setProperty('--magnetic-x', '0px');
        button.style.setProperty('--magnetic-y', '0px');
      });
    });
  }

  /* ---------- Hero title word-split animation ---------- */
  document.querySelectorAll('.hero-title .line').forEach(line => {
    const isGradient = line.classList.contains('gradient-text');
    const words = line.textContent.trim().split(' ');
    line.innerHTML = words
      .map((word, i) => `<span class="word${isGradient ? ' gradient-text' : ''}" style="animation-delay:${0.5 + i * 0.09}s">${word}</span>`)
      .join(' ');
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  let lastGalleryTrigger = null;

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    lastGalleryTrigger?.focus();
  }

  document.querySelectorAll('[data-gallery-src]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      lastGalleryTrigger = trigger;
      lightboxImage.src = trigger.dataset.gallerySrc;
      lightboxImage.alt = trigger.querySelector('img').alt;
      lightboxCaption.textContent = trigger.dataset.galleryCaption;
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      setTimeout(() => lightboxClose.focus(), 120);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });

  /* ---------- Confetti burst ---------- */
  function launchConfetti() {
    const colors = ['#1f3a7a', '#c9a66b', '#3a63c0', '#dabf8e', '#0a1128'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}vw`;
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDuration = `${Math.random() * 1.5 + 1.8}s`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3500);
    }
  }

});

