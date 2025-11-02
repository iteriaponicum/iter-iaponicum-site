(function(){
  const switcher = document.getElementById('language-switch');
  const langs = ['it', 'en', 'jp'];

  function setLang(lang) {
    langs.forEach(l => {
      document.querySelectorAll('.lang-' + l).forEach(el => el.classList.remove('active'));
    });
    document.querySelectorAll('.lang-' + lang).forEach(el => el.classList.add('active'));
    try { localStorage.setItem('ii_lang', lang); } catch(e) {}
  }

  const pref = (function() {
    try { return localStorage.getItem('ii_lang') || 'it'; }
    catch(e) { return 'it'; }
  })();

  setLang(pref);
  if (switcher) {
    switcher.value = pref;
    switcher.addEventListener('change', e => setLang(e.target.value));
  }

  const hamburger = document.getElementById('hamburger');
  const navlinks = document.getElementById('nav-links');
  if (hamburger && navlinks) {
    hamburger.addEventListener('click', () => navlinks.classList.toggle('open'));
  }
})();
