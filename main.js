var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


// scroll to next section

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        currentSectionId = section.id;
      }
    });

    updateActiveLinks(currentSectionId);
  });

  function updateActiveLinks(activeSectionId) {
    const navigationLinks = document.querySelectorAll('nav.navigation a');

    navigationLinks.forEach(link => {
      const sectionId = link.getAttribute('href').substring(1);

      if (sectionId === activeSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

// schimba culoarea meniului 

document.addEventListener("DOMContentLoaded", function () {
    const navigationLinks = document.querySelectorAll('.navigation a');

    // Function to update navigation link color based on the active section
    function updateNavigationColor() {
      const activeSection = document.querySelector('section.dark-bg') || document.querySelector('section.light-bg');

      navigationLinks.forEach(links => {
        links.style.color = activeSection.classList.contains('dark-bg') ? '#555' : '#fff';
      });
    }

    // Initial update on page load
    updateNavigationColor();

    // Event listener for scroll to update the color dynamically
    document.addEventListener('scroll', updateNavigationColor);
  });





