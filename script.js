// Keep the page lightweight and static. This only adds a tiny touch of interaction.
document.querySelectorAll('.link-card').forEach((link) => {
  link.addEventListener('pointermove', (event) => {
    const rect = link.getBoundingClientRect();
    link.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    link.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
});
