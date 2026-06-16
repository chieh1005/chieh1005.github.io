---
layout: about
title: About
permalink: /
subtitle: Incoming M.Ed. Student in Brain Science · NYCU &nbsp;|&nbsp; B.Ed. in Kinesiology · NTHU

profile:
  align: right
  image: chieh_pic.jpg
  image_circular: false
  more_info: >
    <p>Institute of Education</p>
    <p>Major in Brain Science</p>
    <p>National Yang Ming Chiao Tung University</p>
    <p>Taiwan</p>

news: false
selected_papers: false
social: false
nav: false
nav_order: 1
---

<!-- ============================================================
     Apple-inspired landing design — scoped to the home page.
     Built on al-folio's CSS variables so it adapts to light/dark.
     ============================================================ -->
<style>
/* ---------- Refined, professional palette: mono + one accent ---------- */
:root {
  --aw-accent: #0071e3;            /* Apple blue */
  --aw-accent-soft: rgba(0, 113, 227, 0.10);
  --aw-node: rgba(0, 113, 227, 0.45);
}
html[data-theme="dark"] {
  --aw-accent: #2997ff;
  --aw-accent-soft: rgba(41, 151, 255, 0.14);
  --aw-node: rgba(41, 151, 255, 0.52);
}

/* ---------- Header: clean, solid headline (no clipping) ---------- */
.post-header {
  position: relative;
  text-align: center;
  padding: 2rem 0 0.75rem;
  margin-bottom: 1.75rem;
}
.post-header::before {
  content: "";
  position: absolute;
  top: -140px;
  left: 50%;
  transform: translateX(-50%);
  width: min(680px, 110vw);
  height: 360px;
  background: radial-gradient(closest-side, var(--aw-accent-soft), transparent 72%);
  filter: blur(8px);
  z-index: -1;
  pointer-events: none;
}
/* faint neural-node field behind the headline */
.post-header::after {
  content: "";
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  width: min(720px, 100%);
  height: 280px;
  z-index: -1;
  pointer-events: none;
  opacity: 0.85;
  background-image: radial-gradient(var(--aw-node) 1.4px, transparent 1.9px);
  background-size: 22px 22px;
  -webkit-mask-image: radial-gradient(closest-side, #000 32%, transparent 74%);
  mask-image: radial-gradient(closest-side, #000 32%, transparent 74%);
}

/* ---------- Neuron signal transmission ---------- */
.aw-wave {
  margin: 1.9rem 0 0;
  line-height: 0;
  display: flex;
  justify-content: center;
}
.aw-wave svg { width: auto; height: 80px; display: block; }
.aw-wave .neuron-body { stroke: var(--aw-accent); opacity: 0.6; }
.aw-wave .neuron-axon { stroke: var(--aw-accent); opacity: 0.5; }
.aw-wave .neuron-dendrite { stroke: var(--aw-accent); opacity: 0.5; }
.aw-wave .synapse-gap { stroke: var(--aw-accent); }
.aw-wave .vesicle { fill: var(--aw-accent); opacity: 0.4; }
.aw-wave .signal-pulse {
  fill: var(--aw-accent);
  animation: signal-travel 3.2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
}
@keyframes signal-travel {
  0% { cx: 50; opacity: 0.3; }
  10% { cx: 60; opacity: 0.8; }
  45% { cx: 130; opacity: 0.6; }
  55% { cx: 130; opacity: 0.4; }
  90% { cx: 200; opacity: 0.8; }
  100% { cx: 210; opacity: 0.3; }
}
.post-title {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
  font-weight: 700;
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  letter-spacing: -0.03em;
  line-height: 1.12;
  padding-bottom: 0.1em;          /* room for descenders — no clipping */
  margin: 0 0 0.6rem;
  color: var(--global-text-color);
}
.post-header .desc {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif;
  font-size: clamp(0.95rem, 1.5vw, 1.18rem);
  font-weight: 450;
  letter-spacing: -0.01em;
  color: var(--global-text-color-light);
  max-width: 40rem;
  margin: 0 auto;
}

/* ---------- Profile image: subtle, neutral lift ---------- */
.profile img {
  border-radius: 18px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 16px 36px -18px rgba(0, 0, 0, 0.30);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}
.profile img:hover {
  transform: translateY(-4px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 22px 48px -20px rgba(0, 0, 0, 0.38);
}
.profile .more-info {
  margin-top: 1rem;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--global-text-color-light);
}

/* ---------- Section scaffolding (hairline separators) ---------- */
.aw {
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
}
.aw-lead {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: var(--global-text-color);
  max-width: 46rem;
  margin: 0.5rem 0 0;
}
.aw-lead .accent { color: var(--aw-accent); font-weight: 550; }

.aw-contact {
  margin-top: 1.4rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--global-text-color-light);
}
.aw-contact a { color: var(--aw-accent); text-decoration: none; }
.aw-contact a:hover { text-decoration: underline; }

.aw-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--aw-accent);
  margin-bottom: 0.55rem;
}
.aw-section {
  margin-top: 3.25rem;
  padding-top: 3.25rem;
  border-top: 1px solid var(--global-divider-color);
}
.aw-section h2.aw-h {
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.14;
  margin: 0 0 0.5rem;
  color: var(--global-text-color);
}
.aw-section .aw-sub {
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--global-text-color-light);
  max-width: 40rem;
  margin: 0 0 1.8rem;
}

/* ---------- Minimal cards ---------- */
.aw-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.aw-card {
  padding: 1.6rem 1.5rem;
  border-radius: 16px;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease;
}
.aw-card:hover {
  transform: translateY(-4px);
  border-color: var(--aw-accent);
  box-shadow: 0 18px 40px -24px rgba(0, 0, 0, 0.45);
}
.aw-card .aw-ico {
  display: block;
  width: 30px;
  height: 30px;
  margin-bottom: 1rem;
  color: var(--aw-accent);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.aw-card:hover .aw-ico { transform: scale(1.08); }
.aw-card h3 {
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin: 0 0 0.45rem;
  color: var(--global-text-color);
}
.aw-card p {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--global-text-color-light);
  margin: 0;
}

/* ---------- Journey ---------- */
.aw-journey {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 0.8rem;
  margin-top: 0.4rem;
}
.aw-step {
  flex: 1 1 220px;
  padding: 1.3rem 1.4rem;
  border-radius: 16px;
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
}
.aw-step .yr {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--aw-accent);
}
.aw-step .deg { font-size: 1.05rem; font-weight: 600; margin: 0.3rem 0 0.15rem; letter-spacing: -0.02em; color: var(--global-text-color); }
.aw-step .ins { font-size: 0.9rem; color: var(--global-text-color-light); }
.aw-arrow {
  align-self: center;
  font-size: 1.3rem;
  color: var(--global-text-color-light);
  opacity: 0.5;
}
@media (max-width: 640px) { .aw-arrow { transform: rotate(90deg); } }

/* ---------- CTA ---------- */
.aw-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.6rem;
  padding: 0.7rem 1.5rem;
  border-radius: 980px;
  font-size: 0.95rem;
  font-weight: 550;
  letter-spacing: -0.01em;
  color: #fff !important;
  background: var(--aw-accent);
  text-decoration: none !important;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.aw-cta:hover { transform: translateY(-2px); opacity: 0.9; }
.aw-cta.ghost {
  color: var(--aw-accent) !important;
  background: transparent;
  border: 1px solid var(--global-divider-color);
  margin-left: 0.5rem;
}
.aw-cta.ghost:hover { border-color: var(--aw-accent); }

/* ---------- Scroll reveal ---------- */
.aw-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.aw-reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .aw-reveal { opacity: 1; transform: none; transition: none; }
  .aw-wave .signal-pulse { animation: none; opacity: 0.6; }
}
</style>

<div class="aw" markdown="0">

<p class="aw-lead aw-reveal">
  I'm a graduate student in <span class="accent">Brain Science</span> at National Yang Ming Chiao Tung University, Taiwan — bridging a background in kinesiology with cognitive neuroscience and statistical neuroimaging to understand how the brain ages, and how movement can protect it.
</p>

<div class="aw-contact aw-reveal">
  <p><strong>Email:</strong> <a href="mailto:scwang1005@gmail.com">scwang1005@gmail.com</a></p>
  <p><strong>GitHub:</strong> <a href="https://github.com/chieh1005" target="_blank" rel="noopener">github.com/chieh1005</a></p>
</div>

<div class="aw-wave aw-reveal" aria-hidden="true">
  <svg viewBox="0 0 280 80" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <!-- Left neuron cell body -->
    <circle class="neuron-body" cx="50" cy="40" r="24" stroke-width="1.8"/>
    <path class="neuron-axon" d="M74,40 Q100,35 130,40" stroke-width="1.6" fill="none"/>
    
    <!-- Synaptic vesicles (animate along axon) -->
    <circle class="vesicle" cx="80" cy="40" r="2.2"/>
    
    <!-- Synapse gap -->
    <line class="synapse-gap" x1="130" y1="30" x2="130" y2="50" stroke-width="1.4" opacity="0.5"/>
    <line class="synapse-gap" x1="128" y1="32" x2="128" y2="48" stroke-width="1.2" opacity="0.4"/>
    
    <!-- Right neuron cell body -->
    <circle class="neuron-body" cx="210" cy="40" r="24" stroke-width="1.8"/>
    <path class="neuron-dendrite" d="M186,40 Q160,35 130,40" stroke-width="1.6" fill="none"/>
    
    <!-- Signal pulse (travels from left to right) -->
    <circle class="signal-pulse" cx="80" cy="40" r="3.5" opacity="0.8"/>
  </svg>
</div>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Research Focus</span>
  <h2 class="aw-h">Where I spend my curiosity.</h2>
  <p class="aw-sub">My work sits at the intersection of clinical neuroscience and human movement — using brain imaging to probe the mechanisms of neurodegenerative disease.</p>
  <div class="aw-grid">
    <div class="aw-card">
      <h3>Cognitive Neuroscience</h3>
      <p>How attention, memory, and executive function reshape themselves across the lifespan.</p>
    </div>
    <div class="aw-card">
      <h3>Neuroimaging · fMRI &amp; EEG</h3>
      <p>fMRI &amp; EEG pipelines to map brain structure, function, and connectivity.</p>
    </div>
    <div class="aw-card">
      <h3>Exercise, Psychology &amp; Aging</h3>
      <p>Whether physical activity can slow cognitive decline and neurodegeneration.</p>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Journey</span>
  <h2 class="aw-h">From movement to the mind.</h2>
  <p class="aw-sub">A path that started with the body and grew into the brain.</p>
  <div class="aw-journey">
    <div class="aw-step">
      <div class="yr">B.Ed.</div>
      <div class="deg">Kinesiology</div>
      <div class="ins">National Tsing Hua University</div>
    </div>
    <div class="aw-arrow">→</div>
    <div class="aw-step">
      <div class="yr">M.Ed. · INCOMING</div>
      <div class="deg">Brain Science</div>
      <div class="ins">National Yang Ming Chiao Tung University</div>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Get in touch</span>
  <h2 class="aw-h">Let's talk brains.</h2>
  <p class="aw-sub">Open to collaborations in neuroimaging, exercise neuroscience, and healthy aging.</p>
  <a class="aw-cta" href="{{ '/cv/' | relative_url }}">View CV</a>
  <a class="aw-cta ghost" href="{{ '/publications/' | relative_url }}">Publications</a>
</section>

</div>

<script>
(function () {
  var els = document.querySelectorAll('.aw-reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
</script>
