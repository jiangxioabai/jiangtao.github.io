(() => {
  const counter = document.querySelector('.visitor-counter');
  const output = document.getElementById('visitor-count');
  if (!counter || !output) return;

  const canonical = 'https://jiangxioabai.github.io/jiangtao.github.io/';
  let state = 'loading';
  let count;
  function describe() {
    const en = document.documentElement.lang === 'en';
    const note = en
      ? 'Total page views since 2026-10-30. Each page load or refresh counts once; changing language does not add a view. Counter service: bsz.saop.cc.'
      : '自 2026-10-30 起累计的访问次数。每次打开或刷新页面计一次，切换语言不重复计数。统计服务：bsz.saop.cc。';
    counter.title = state === 'error'
      ? (en ? 'Page-view statistics are temporarily unavailable.' : '访问统计暂时不可用。')
      : note;
    counter.setAttribute('aria-label', count === undefined
      ? (en ? 'Page views: unavailable' : '访问次数：暂无数据')
      : (en ? `Total page views: ${count}` : `累计访问次数：${count}`));
  }
  describe();
  new MutationObserver(describe).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang']
  });

  const production = location.hostname === 'jiangxioabai.github.io'
    && location.pathname.startsWith('/jiangtao.github.io/');
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  fetch('https://bsz.saop.cc/api', {
    method: production ? 'POST' : 'GET',
    credentials: 'include',
    headers: { 'x-bsz-referer': canonical },
    cache: 'no-store',
    signal: controller.signal
  })
    .then(response => {
      if (!response.ok) throw new Error('Counter unavailable');
      return response.json();
    })
    .then(result => {
      const value = result?.data?.page_pv;
      if (!result.success || !Number.isSafeInteger(value) || value < 0) {
        throw new Error('Invalid page-view count');
      }
      count = value;
      state = 'ready';
      output.textContent = new Intl.NumberFormat('en-US').format(count);
      counter.dataset.state = state;
      describe();
    })
    .catch(() => {
      state = 'error';
      counter.dataset.state = state;
      output.textContent = '—';
      describe();
    })
    .finally(() => clearTimeout(timeout));
})();
