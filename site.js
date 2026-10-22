// Screenshot tabs, video language switch and the light/dark button (remembered on this device).
(() => {
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (e) { /* storage blocked */ }
  document.getElementById('theme').addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { /* storage blocked */ }
  });

  document.querySelectorAll('[data-tab]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
    document.querySelectorAll('[data-panel]').forEach((p) => { p.hidden = p.dataset.panel !== tab.dataset.tab; });
  }));

  const video = document.getElementById('pitch');
  const sources = {
    en: { src: 'video/aut-secure-exam-pitch.mp4', vtt: 'video/aut-secure-exam-pitch.vtt', lang: 'en', label: 'English' },
    ru: { src: 'video/aut-secure-exam-pitch-RU.mp4', vtt: 'video/aut-secure-exam-pitch-RU.vtt', lang: 'ru', label: 'Русский' },
  };
  document.querySelectorAll('[data-video]').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('[data-video]').forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
    const s = sources[tab.dataset.video];
    video.innerHTML = `<source src="${s.src}" type="video/mp4"><track kind="subtitles" srclang="${s.lang}" label="${s.label}" src="${s.vtt}">`;
    video.load();
  }));
})();
