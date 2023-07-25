const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Set the position for the chasing circle
  cursor.style.transform = `translate3d(${x - 3}px, ${y + 1}px, 0)`;
});
