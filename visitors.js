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
      ? 'Cumulative visitor estimate since 2026-10-30. Deduplication depends on browsers and networks. Counter service: bsz.saop.cc.'
      : '自 2026-10-30 起累计的访客估算。去重结果受浏览器、网络等因素影响。统计服务：bsz.saop.cc。';
    counter.title = state === 'error'
      ? (en ? 'Visitor statistics are temporarily unavailable.' : '访客统计暂时不可用。')
      : note;
    counter.setAttribute('aria-label', count === undefined
      ? (en ? 'Visitor estimate: unavailable' : '访客估算：暂无数据')
      : (en ? `Estimated visitors: ${count}` : `累计访客估算：${count}`));
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
      const value = result?.data?.site_uv;
      if (!result.success || !Number.isSafeInteger(value) || value < 0) {
        throw new Error('Invalid visitor count');
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
