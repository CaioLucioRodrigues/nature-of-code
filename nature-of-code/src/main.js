async function loadChapter(chapter) {
  document.querySelectorAll('canvas').forEach(c => c.remove());
  // Força recarregar o capítulo mesmo que já tenha sido importado antes
  await import(`/chapters/${chapter}/index.js?update=${Date.now()}`);
}
window.loadChapter = loadChapter;
loadChapter('chapter1');