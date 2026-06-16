---
layout: page
title: Publications
permalink: /publications/
description: Peer-reviewed journal articles and conference proceedings in exercise neuroscience.
nav: true
nav_order: 3
---

<style>
/* ====== shared design system (matches the home page) ====== */
:root {
  --aw-accent: #0071e3;
  --aw-accent-soft: rgba(0, 113, 227, 0.10);
  --aw-node: rgba(0, 113, 227, 0.45);
}
html[data-theme="dark"] {
  --aw-accent: #2997ff;
  --aw-accent-soft: rgba(41, 151, 255, 0.14);
  --aw-node: rgba(41, 151, 255, 0.52);
}
.post-header { position: relative; text-align: center; padding: 2rem 0 0.75rem; margin-bottom: 1.5rem; }
.post-header::before {
  content: ""; position: absolute; top: -140px; left: 50%; transform: translateX(-50%);
  width: min(680px, 110vw); height: 360px;
  background: radial-gradient(closest-side, var(--aw-accent-soft), transparent 72%);
  filter: blur(8px); z-index: -1; pointer-events: none;
}
.post-header::after {
  content: ""; position: absolute; top: -70px; left: 50%; transform: translateX(-50%);
  width: min(720px, 100%); height: 280px; z-index: -1; pointer-events: none; opacity: 0.85;
  background-image: radial-gradient(var(--aw-node) 1.4px, transparent 1.9px);
  background-size: 22px 22px;
  -webkit-mask-image: radial-gradient(closest-side, #000 32%, transparent 74%);
  mask-image: radial-gradient(closest-side, #000 32%, transparent 74%);
}
.post-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-weight: 700; font-size: clamp(2.4rem, 5.5vw, 4rem); letter-spacing: -0.03em; line-height: 1.12; padding-bottom: 0.1em; margin: 0 0 0.5rem;
  color: var(--global-text-color);
}
.post-description {
  font-size: clamp(0.95rem, 1.5vw, 1.15rem); font-weight: 450; letter-spacing: -0.01em;
  color: var(--global-text-color-light); max-width: 42rem; margin: 0 auto;
}
.aw { font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", sans-serif; }
.aw-eyebrow { display: inline-block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--aw-accent); margin-bottom: 0.55rem; }
.aw-section { margin-top: 3rem; padding-top: 2.75rem; border-top: 1px solid var(--global-divider-color); }
.aw-section:first-of-type { margin-top: 1rem; padding-top: 0; border-top: none; }
.aw-section h2.aw-h { font-size: clamp(1.4rem, 2.6vw, 1.9rem); font-weight: 650; letter-spacing: -0.025em; line-height: 1.14; margin: 0 0 0.4rem; color: var(--global-text-color); }
.aw-section .aw-count { font-size: 0.9rem; color: var(--global-text-color-light); margin: 0 0 1.4rem; }

/* brainwave line */
.aw-wave { margin: 1.6rem 0 0; line-height: 0; }
.aw-wave svg { width: 100%; height: auto; display: block; overflow: visible; }
.aw-wave .trace-base { stroke: var(--aw-accent); opacity: 0.22; }
.aw-wave .trace-pulse { stroke: var(--aw-accent); stroke-dasharray: 46 1400; stroke-dashoffset: 1446; animation: aw-signal 4.6s cubic-bezier(0.45,0,0.55,1) infinite; }
@keyframes aw-signal { to { stroke-dashoffset: 0; } }

/* intro + fMRI motif */
.aw-summary { position: relative; }
.aw-lead { font-size: clamp(1.1rem, 1.8vw, 1.32rem); font-weight: 400; line-height: 1.6; letter-spacing: -0.012em; color: var(--global-text-color); max-width: 46rem; margin: 0.5rem 0 0; }
.aw-lead .accent { color: var(--aw-accent); font-weight: 550; }
/* publication entries */
.aw-pub { display: flex; gap: 1.3rem; padding: 1.4rem 0; border-top: 1px solid var(--global-divider-color); }
.aw-pub:first-of-type { border-top: none; padding-top: 0; }
.aw-pub .yr { flex: 0 0 56px; font-size: 0.85rem; font-weight: 700; color: var(--aw-accent); padding-top: 0.15rem; }
.aw-pub .body { flex: 1 1 auto; }
.aw-pub h3 { font-size: 1.05rem; font-weight: 600; letter-spacing: -0.015em; line-height: 1.35; margin: 0 0 0.35rem; color: var(--global-text-color); }
.aw-pub .authors { font-size: 0.92rem; line-height: 1.5; color: var(--global-text-color-light); margin: 0 0 0.25rem; }
.aw-pub .authors .me { color: var(--global-text-color); font-weight: 650; }
.aw-pub .venue { font-size: 0.9rem; color: var(--global-text-color-light); margin: 0; }
.aw-pub .meta { margin-top: 0.6rem; display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center; }
.aw-badge { display: inline-block; padding: 0.12rem 0.6rem; border-radius: 980px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.02em; color: var(--aw-accent); background: var(--aw-accent-soft); }
.aw-badge.award { color: #b06a00; background: rgba(242, 145, 5, 0.14); }
html[data-theme="dark"] .aw-badge.award { color: #f5b34a; }
.aw-doi { font-size: 0.78rem; font-weight: 600; text-decoration: none !important; color: var(--aw-accent) !important; border: 1px solid var(--global-divider-color); border-radius: 980px; padding: 0.12rem 0.65rem; transition: border-color 0.3s ease; }
.aw-doi:hover { border-color: var(--aw-accent); }
@media (max-width: 600px) { .aw-pub { flex-direction: column; gap: 0.3rem; } .aw-pub .yr { flex-basis: auto; } }

/* reveal */
.aw-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
.aw-reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .aw-reveal { opacity: 1; transform: none; transition: none; }
  .aw-wave .trace-pulse { animation: none; stroke-dasharray: none; stroke-dashoffset: 0; opacity: 0.5; }
}
</style>

<div class="aw" markdown="0">

<div class="aw-summary aw-reveal">
  <p class="aw-lead">
    My research examines how <span class="accent">acute and chronic exercise</span> shapes executive function and cognition across the lifespan — combining behavioral experiments with <span class="accent">neuroimaging</span> in older and special populations.
  </p>
</div>

<div class="aw-wave aw-reveal" aria-hidden="true">
  <svg viewBox="0 0 720 56" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="none">
    <path class="trace-base" d="M0,28 q20,-15 40,0 t40,0 t40,0 L160,28 l8,-22 l8,42 l8,-20 L200,28 q20,-12 40,0 t40,0 t40,0 t40,0 L400,28 l8,-20 l8,38 l8,-18 L440,28 q20,-14 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 L720,28"/>
    <path class="trace-pulse" d="M0,28 q20,-15 40,0 t40,0 t40,0 L160,28 l8,-22 l8,42 l8,-20 L200,28 q20,-12 40,0 t40,0 t40,0 t40,0 L400,28 l8,-20 l8,38 l8,-18 L440,28 q20,-14 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 L720,28"/>
  </svg>
</div>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Peer-reviewed</span>
  <h2 class="aw-h">Journal Articles</h2>
  <p class="aw-count">3 articles in TSSCI-indexed journals</p>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>急性有氧健身運動對高齡者計畫相關執行功能之影響：身體活動量及靜態行為之調節角色</h3>
      <p class="authors"><span class="me">Wang, S.-C.</span>, Wu, T.-T., Lin, Y.-C., Kuo, Y.-H., &amp; Chen, F.-T.</p>
      <p class="venue">臺灣運動心理學報 (Bulletin of Sport &amp; Exercise Psychology of Taiwan), 25(1), 67–90.</p>
      <div class="meta">
        <span class="aw-badge">TSSCI</span>
        <a class="aw-doi" href="https://doi.org/10.6497/BSEPT.202503_25(1).0004" target="_blank" rel="noopener">DOI ↗</a>
      </div>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>比較傳統式與血流限制阻力健身運動對計畫相關執行功能之影響</h3>
      <p class="authors">Wu, T.-T., Hung, C.-H., <span class="me">Wang, S.-C.</span>, Hsieh, S.-S., &amp; Chen, F.-T.</p>
      <p class="venue">運動表現期刊 (Journal of Sports Performance).</p>
      <div class="meta">
        <span class="aw-badge">TSSCI</span>
        <span class="aw-badge">Accepted</span>
        <a class="aw-doi" href="https://doi.org/10.53106/240996512025091202005" target="_blank" rel="noopener">DOI ↗</a>
      </div>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>健康相關體適能對高齡者認知功能之影響：文獻回顧</h3>
      <p class="authors">Chen, M., <span class="me">Wang, S.-C.</span>, Yen, S.-H., Chen, F.-T., &amp; Chang, Y.-K.</p>
      <p class="venue">中華體育季刊 (Quarterly of Chinese Physical Education).</p>
      <div class="meta">
        <span class="aw-badge">TSSCI</span>
        <span class="aw-badge">Accepted</span>
      </div>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Conferences</span>
  <h2 class="aw-h">Conference Proceedings</h2>
  <p class="aw-count">5 presentations at international &amp; national congresses</p>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>Comparing the Effects of Low-Intensity Slow Movement &amp; Tonic Force Generation and Moderate-Intensity Resistance Exercise on Cognitive Flexibility in Older Adults: A Research Proposal</h3>
      <p class="authors"><span class="me">Wang, S.-C.</span>, Huang, Y.-C., &amp; Chen, F.-T.</p>
      <p class="venue">12th International Seminar of Sport and Exercise Psychology · Malaysia.</p>
      <div class="meta"><span class="aw-badge award">🏆 Best Oral Presenter Award</span></div>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>The Effect of Volume-Matched Acute Resistance Exercise on Metacognition-Related Executive Function in Older Adults</h3>
      <p class="authors">Chen, F.-T., Wu, T.-T., Chiang, C.-Y., &amp; <span class="me">Wang, S.-C.</span></p>
      <p class="venue">ISSP 16th World Congress · Hong Kong.</p>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2025</div>
    <div class="body">
      <h3>雙重任務訓練對高齡者計畫相關執行功能之影響：運動頻率之調節角色</h3>
      <p class="authors">Chang, Y.-T., Su, H.-F., Ho, H.-H., Wang, Y.-S., <span class="me">Wang, S.-C.</span>, &amp; Chen, F.-T.</p>
      <p class="venue">2025 Taiwan Society of Sport Psychology Annual Meeting · Taiwan.</p>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2024</div>
    <div class="body">
      <h3>急性阻力健身運動訓練量對高齡者抑制控制之影響</h3>
      <p class="authors">Wu, T.-T., Chiang, C.-Y., &amp; <span class="me">Wang, S.-C.</span></p>
      <p class="venue">2024 Taiwan Society of Sport Psychology Annual Meeting · Taiwan.</p>
    </div>
  </div>

  <div class="aw-pub">
    <div class="yr">2024</div>
    <div class="body">
      <h3>聽覺障礙青少年身體活動量與計畫相關執行功能之關聯</h3>
      <p class="authors">Chiang, C.-Y., Wu, T.-T., &amp; <span class="me">Wang, S.-C.</span></p>
      <p class="venue">2024 Taiwan Society of Sport Psychology Annual Meeting · Taiwan.</p>
    </div>
  </div>
</section>

</div>

<script>
(function () {
  var els = document.querySelectorAll('.aw-reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (el){ el.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(function (el) { io.observe(el); });
})();
</script>
