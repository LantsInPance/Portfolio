// 1. Select the video
const video = document.querySelector('video');

// 2. Define the observer
let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      video.pause();
    }
  });
}, { threshold: 0.5 }); // Pauses when less than 50% visible

// 3. Start observing
observer.observe(video);
