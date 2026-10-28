(() => {
  const params=new URLSearchParams(location.search);
  let lang=params.get('lang')==='en'?'en':'zh';
  if(!params.has('lang')){try{lang=localStorage.getItem('profile-language')==='en'?'en':'zh';}catch{}}
  const p=window.profile,t=value=>value[lang];
  const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;n.textContent=text;return n;};
  function authorLine(text){
    const line=el('p','authors','');
    text.split('Tao Jiang').forEach((part,i)=>{if(i)line.append(el('strong','','Tao Jiang'));line.append(document.createTextNode(part));});
    return line;
  }
  function render(){
    document.body.dataset.theme='lilies';
    document.documentElement.lang=lang==='zh'?'zh-CN':'en';document.documentElement.style.colorScheme='light';
    document.title=lang==='zh'?'姜滔 | 个人主页':'Tao Jiang | Personal Website';
    document.querySelector('.photo-slot img').alt=lang==='zh'?'姜滔的个人照片':'Portrait of Tao Jiang';
    document.querySelector('.profile-panel').setAttribute('aria-label',lang==='zh'?'个人简介':'Profile');
    document.querySelector('meta[name=description]').content=lang==='zh'?'姜滔，中国科学院软件研究所博士生。研究 SAT 算法、组合优化与可验证推理，目前在华为诺亚方舟实验室研究 Agent RSI。':'Tao Jiang is a Ph.D. student at ISCAS studying SAT algorithms, combinatorial optimization, and verifiable reasoning, and an intern at Huawei Noah’s Ark Lab working on agent RSI.';
    document.querySelectorAll('[data-zh]').forEach(n=>n.textContent=n.dataset[lang]);
    const language=document.querySelector('.language');language.textContent=lang==='zh'?'EN ↗':'中文 ↗';language.setAttribute('aria-label',lang==='zh'?'Switch to English':'切换到中文');
    document.querySelector('nav').setAttribute('aria-label',lang==='zh'?'主导航':'Main navigation');
    document.getElementById('introduction').textContent=t(p.introduction);
    const research=document.querySelector('#research-list');research.replaceChildren();p.research.forEach((r,i)=>{const item=el('article','research-item','');item.append(el('span','research-no','0'+(i+1)),el('h3','',t(r.title)),el('p','',t(r.description)));research.append(item);});
    const contacts=document.querySelector('#contact-list');contacts.replaceChildren();p.contacts.forEach(c=>{const active=/^(https?:\/\/|mailto:|assets\/)/i.test(c.url);const item=el(active?'a':'span','contact-item','');if(active)item.href=c.url;item.append(el('span','',typeof c.label==='string'?c.label:t(c.label)),el('small','',active?'↗':(lang==='zh'?'待添加':'To be added')));contacts.append(item);});
    function resource(label,url,cls=''){const a=el('a',cls,label+' ↗');a.href=url;a.target='_blank';a.rel='noreferrer';return a;}
    const papers=document.querySelector('#paper-list');papers.replaceChildren();
    p.publications.forEach(paper=>{
      const row=el('article','paper'+(paper.featured?' featured-paper':''),'');if(paper.featured)row.id='featured-paper';
      const body=el('div','paper-body','');const heading=el('h3','',paper.title);if(paper.links.length){heading.replaceChildren(resource(paper.title,paper.links[0][1]));}body.append(heading);
      body.append(authorLine(paper.authors),el('p','venue',t(paper.venue)));
      if(paper.description)body.append(el('p','contribution',t(paper.description)));
      const links=el('div','paper-resources','');paper.links.forEach(([label,url])=>links.append(resource(lang==='zh'?({Paper:'论文',Code:'代码'}[label]||label):label,url)));body.append(links);
      if(paper.featured){const citation=el('div','citation-note','');citation.append(resource(lang==='zh'?'被 OpenAI 引用':'Cited by OpenAI','https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf','citation-badge'),el('p','',lang==='zh'?'《The Exponential Time Hypothesis is False》（2026），第 3 页相关工作；参考文献 [JC26] 见第 66 页。':'The Exponential Time Hypothesis is False (2026): related work on p. 3; reference [JC26] on p. 66.'));citation.append(resource(lang==='zh'?'查看引用原文（第 3 页）':'Read the citation (p. 3)','https://raw.githubusercontent.com/openai/math/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf#page=3'));body.append(citation);}
      row.append(el('span','paper-year',paper.year),body);papers.append(row);
    });
    const manuscripts=el('div','manuscripts','');manuscripts.append(el('h3','subsection-title',lang==='zh'?'在投论文':'Manuscripts under review'));p.manuscripts.forEach(m=>{const row=el('article','manuscript','');row.append(el('h3','',m.title),authorLine(t(m.authors)),el('p','venue',t(m.venue)));manuscripts.append(row);});papers.append(manuscripts);
    const projects=document.querySelector('#project-list');projects.replaceChildren();p.projects.forEach(project=>{const row=el('article','project-item','');row.append(el('span','project-status',t(project.status)),el('h3','',t(project.title)),el('p','body-copy',t(project.description)));if(project.url)row.append(resource(lang==='zh'?'代码与数据':'Code & data',project.url,'project-resource'));projects.append(row);});
    const art=document.querySelector('#art-image');
    art.alt=lang==='zh'?'克劳德·莫奈 · 睡莲':'Claude Monet · Water Lilies';
    document.querySelector('#art-caption').textContent=art.alt;
    document.querySelector('#year').textContent=new Date().getFullYear();
    const nextUrl=new URL(location.href);nextUrl.searchParams.delete('theme');nextUrl.searchParams.delete('embed');nextUrl.searchParams.set('lang',lang);history.replaceState(null,'',nextUrl);
  }
  document.querySelector('.language').addEventListener('click',()=>{lang=lang==='zh'?'en':'zh';try{localStorage.setItem('profile-language',lang);}catch{}render();});render();
})();
