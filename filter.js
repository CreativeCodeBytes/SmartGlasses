document.addEventListener('DOMContentLoaded', function() {
  let glasses = document.querySelectorAll('.results > div');
  let img = document.querySelectorAll('div.results div img.glass');
  let frontPose = [
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_g_4530.jpg',
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_g_4580.jpg',
      'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_g_4538.jpg',
      'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10363-c1-eyeglasses_vincent-chase-vc-e10363-c1-eyeglasses__j_5235_1_2__1.jpg',
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_g_4488.jpg',
      'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_g_4538.jpg'
  ];
  let sidePose = [
      'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11877-round-full-rim-c3-eyeglasses_g_4528.jpg',
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c2-eyeglasses_g_4576_1.jpg',
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-black-vc-e10117-c3-eyeglasses_vincent-chase-black-vc-e10117-c3-eyeglasses_m_4155_1_1.jpg',
      'https://static2.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e10363-c1-eyeglasses_vincent-chase-vc-e10363-c1-eyeglasses__j_5235_1_1__1.jpg',
      'https://static1.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_fallon-colby-fc-e11874-round-full-rim-c3-eyeglasses_g_4486.jpg',
      'https://static.lenskart.com/media/catalog/product/cache/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//f/a/fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_fallon-colby-fc-e11875-wayfarer-full-rim-c1-eyeglasses_g_4536.jpg'
  ];

  for (let x = 0; x < glasses.length; x++) {
      const glassimage = img[x];
      glassimage.setAttribute('src', frontPose[x]);
      glassimage.addEventListener('mouseenter', () => {
          glassimage.setAttribute('src', sidePose[x])
      })
      glassimage.addEventListener('mouseleave', () => {
          glassimage.setAttribute('src', frontPose[x])
      })
  }

  // Dropdown functionality
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
          const dropdown = toggle.closest('.dropdown');
          dropdown.classList.toggle('active');
      });
  });

  // Add to Cart functionality
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
          window.location.href = "Addtocard.html";
      });
  });

  // Brand filter functionality
  const rayBanCheckbox = document.getElementById('ray-ban-checkbox');
  const fastrackCheckbox = document.getElementById('fastrack-checkbox');
  const resultsContainer = document.querySelector('.results');

  function updateResults() {
      if (rayBanCheckbox.checked || fastrackCheckbox.checked) {
          resultsContainer.style.display = 'flex';
      } else {
          resultsContainer.style.display = 'none';
      }
  }

  rayBanCheckbox.addEventListener('change', updateResults);
  fastrackCheckbox.addEventListener('change', updateResults);

  // Initially show the results because Ray-Ban is checked by default
  updateResults();

  // Mobile menu functionality
  document.querySelectorAll('.menu > li > a').forEach(item => {
      item.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
              e.preventDefault();
              this.classList.toggle('active');
              const submenu = this.nextElementSibling;
              if (submenu && submenu.classList.contains('submenu')) {
                  // Close all other open submenus
                  document.querySelectorAll('.submenu').forEach(sub => {
                      if (sub !== submenu) {
                          sub.style.display = 'none';
                      }
                  });
                  document.querySelectorAll('.menu > li > a').forEach(link => {
                      if (link !== this) {
                          link.classList.remove('active');
                      }
                  });

                  // Toggle the clicked submenu
                  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
              }
          }
      });
  });

  // Close submenus when clicking outside
  document.addEventListener('click', function(e) {
      if (!e.target.closest('.menu')) {
          document.querySelectorAll('.submenu').forEach(submenu => {
              submenu.style.display = 'none';
          });
          document.querySelectorAll('.menu > li > a').forEach(link => {
              link.classList.remove('active');
          });
      }
  });

  // Adjust menu for desktop view on window resize
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          document.querySelectorAll('.submenu').forEach(submenu => {
              submenu.style.display = '';
          });
          document.querySelectorAll('.menu > li > a').forEach(link => {
              link.classList.remove('active');
          });
      }
  });
});

