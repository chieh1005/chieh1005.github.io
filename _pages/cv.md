---
layout: page
title: Curriculum Vitae
permalink: /cv/
description: Graduate Student in Brain Science · Cognitive Neuroscience · fMRI &amp; EEG
nav: true
nav_order: 2
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
.aw-section h2.aw-h { font-size: clamp(1.4rem, 2.6vw, 1.9rem); font-weight: 650; letter-spacing: -0.025em; line-height: 1.14; margin: 0 0 1.4rem; color: var(--global-text-color); }

/* complete neuron synapse transmission */
.aw-wave { margin: 1.6rem 0 0; line-height: 0; display: flex; justify-content: center; }
.aw-wave svg { width: auto; height: 100px; display: block; }
.aw-wave .dendrite { stroke: var(--aw-accent); opacity: 0.5; }
.aw-wave .soma { stroke: var(--aw-accent); opacity: 0.7; stroke-width: 1.6; }
.aw-wave .nucleus { stroke: var(--aw-accent); opacity: 0.5; stroke-width: 1.2; }
.aw-wave .axon { stroke: var(--aw-accent); opacity: 0.6; }
.aw-wave .axon-hillock { stroke: var(--aw-accent); opacity: 0.6; }
.aw-wave .axon-terminal { stroke: var(--aw-accent); opacity: 0.7; }
.aw-wave .vesicle { fill: var(--aw-accent); opacity: 0.5; }
.aw-wave .vesicle-1 { animation: vesicle-drift-1 3.2s ease-in-out infinite; }
.aw-wave .vesicle-2 { animation: vesicle-drift-2 3.2s ease-in-out infinite; }
.aw-wave .vesicle-3 { animation: vesicle-drift-3 3.2s ease-in-out infinite; }
.aw-wave .synaptic-cleft { stroke: var(--aw-accent); opacity: 0.5; }
.aw-wave .receptor { stroke: var(--aw-accent); fill: var(--aw-accent); opacity: 0.6; }
.aw-wave .signal-pulse { fill: var(--aw-accent); animation: signal-travel 3.2s cubic-bezier(0.45,0,0.55,1) infinite; }
@keyframes signal-travel { 0% { cx: 60; opacity: 0.2; } 20% { cx: 100; opacity: 0.8; } 40% { cx: 145; opacity: 0.9; } 50% { cx: 165; opacity: 0.7; } 75% { cx: 200; opacity: 0.8; } 100% { cx: 230; opacity: 0.2; } }
@keyframes vesicle-drift-1 { 0%, 100% { opacity: 0.3; } 35% { opacity: 0.8; transform: translate(8px, 4px); } 45% { opacity: 0.5; } }
@keyframes vesicle-drift-2 { 0%, 100% { opacity: 0.3; } 38% { opacity: 0.8; transform: translate(6px, 8px); } 48% { opacity: 0.5; } }
@keyframes vesicle-drift-3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 0.8; transform: translate(4px, 6px); } 50% { opacity: 0.5; } }

/* summary + fMRI motif */
.aw-summary { position: relative; }
.aw-lead { font-size: clamp(1.1rem, 1.8vw, 1.35rem); font-weight: 400; line-height: 1.6; letter-spacing: -0.012em; color: var(--global-text-color); max-width: 46rem; margin: 0.5rem 0 0; }
.aw-lead .accent { color: var(--aw-accent); font-weight: 550; }

/* CV entries (timeline) */
.aw-entry { display: flex; gap: 1.6rem; padding: 1.35rem 0; border-top: 1px solid var(--global-divider-color); }
.aw-entry:first-child { border-top: none; padding-top: 0; }
.aw-when { flex: 0 0 116px; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.05em; color: var(--aw-accent); padding-top: 0.2rem; }
.aw-what { flex: 1 1 auto; }
.aw-what h3 { font-size: 1.1rem; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 0.2rem; color: var(--global-text-color); }
.aw-what .org { font-size: 0.95rem; color: var(--global-text-color-light); margin: 0 0 0.55rem; }
.aw-what .org .badge { display: inline-block; margin-left: 0.5rem; padding: 0.05rem 0.5rem; border-radius: 980px; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.02em; color: var(--aw-accent); background: var(--aw-accent-soft); }
.aw-what ul { margin: 0.3rem 0 0; padding-left: 1.1rem; }
.aw-what ul li { font-size: 0.93rem; line-height: 1.55; color: var(--global-text-color-light); margin: 0.2rem 0; }
@media (max-width: 600px) { .aw-entry { flex-direction: column; gap: 0.3rem; } .aw-when { flex-basis: auto; } }

/* skill / cert cards + chips */
.aw-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.aw-card { padding: 1.4rem 1.5rem; border-radius: 16px; background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color); transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s ease; }
.aw-card:hover { transform: translateY(-3px); border-color: var(--aw-accent); }
.aw-card h3 { font-size: 1.02rem; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 0.7rem; color: var(--global-text-color); }
.aw-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.aw-chip { font-size: 0.8rem; padding: 0.28rem 0.7rem; border-radius: 980px; border: 1px solid var(--global-divider-color); color: var(--global-text-color-light); }
.aw-card p { font-size: 0.92rem; line-height: 1.55; color: var(--global-text-color-light); margin: 0; }

/* CTA */
.aw-cta { display: inline-flex; align-items: center; gap: 0.4rem; margin: 1.6rem 0.5rem 0 0; padding: 0.7rem 1.5rem; border-radius: 980px; font-size: 0.95rem; font-weight: 550; letter-spacing: -0.01em; color: #fff !important; background: var(--aw-accent); text-decoration: none !important; transition: transform 0.3s ease, opacity 0.3s ease; }
.aw-cta:hover { transform: translateY(-2px); opacity: 0.9; }
.aw-cta.ghost { color: var(--aw-accent) !important; background: transparent; border: 1px solid var(--global-divider-color); }
.aw-cta.ghost:hover { border-color: var(--aw-accent); }

/* reveal */
.aw-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
.aw-reveal.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .aw-reveal { opacity: 1; transform: none; transition: none; }
  .aw-wave .signal-pulse { animation: none; opacity: 0.6; }
}
</style>

<div class="aw" markdown="0">

<div class="aw-summary aw-reveal">
  <p class="aw-lead">
    Graduate student in <span class="accent">Brain Science</span> at National Yang Ming Chiao Tung University, with a strong foundation in Kinesiology from National Tsing Hua University. I specialize in cognitive neuroscience — using <span class="accent">fMRI</span> and EEG to investigate how physical activity and resistance exercise shape cognitive function and emotional regulation in aging populations.
  </p>
</div>

<div class="aw-wave aw-reveal" aria-hidden="true">
  <svg viewBox="0 0 360 100" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <!-- LEFT PRESYNAPTIC NEURON -->
    <!-- Dendrites (left side) -->
    <path class="dendrite" d="M20,50 Q10,45 8,35"/>
    <path class="dendrite" d="M20,50 Q10,55 8,65"/>
    <path class="dendrite" d="M30,60 Q25,70 20,80"/>
    
    <!-- Cell body (soma) -->
    <circle class="soma" cx="45" cy="50" r="18" stroke-width="1.6"/>
    
    <!-- Nucleus -->
    <circle class="nucleus" cx="45" cy="50" r="8" stroke-width="1.2" opacity="0.6"/>
    
    <!-- Axon -->
    <path class="axon" d="M63,50 Q110,48 145,50" stroke-width="1.6" fill="none"/>
    
    <!-- Axon hillock -->
    <ellipse class="axon-hillock" cx="63" cy="50" rx="5" ry="8" stroke-width="1.4"/>
    
    <!-- RIGHT POSTSYNAPTIC NEURON -->
    <!-- Dendrites (right side) -->
    <path class="dendrite" d="M215,50 Q225,45 227,35"/>
    <path class="dendrite" d="M215,50 Q225,55 227,65"/>
    <path class="dendrite" d="M205,60 Q210,70 215,80"/>
    
    <!-- Cell body (soma) -->
    <circle class="soma" cx="190" cy="50" r="18" stroke-width="1.6"/>
    
    <!-- Nucleus -->
    <circle class="nucleus" cx="190" cy="50" r="8" stroke-width="1.2" opacity="0.6"/>
    
    <!-- SYNAPTIC TRANSMISSION -->
    <!-- Axon terminal -->
    <circle class="axon-terminal" cx="145" cy="50" r="6" stroke-width="1.4" opacity="0.7"/>
    
    <!-- Synaptic vesicles -->
    <circle class="vesicle vesicle-1" cx="135" cy="42" r="2"/>
    <circle class="vesicle vesicle-2" cx="140" cy="38" r="2"/>
    <circle class="vesicle vesicle-3" cx="148" cy="40" r="2"/>
    
    <!-- Synaptic cleft (gap) -->
    <path class="synaptic-cleft" d="M152,48 L155,48" stroke-width="1.2" opacity="0.6"/>
    <path class="synaptic-cleft" d="M152,52 L155,52" stroke-width="1.2" opacity="0.6"/>
    
    <!-- Receptors on postsynaptic membrane -->
    <circle class="receptor" cx="162" cy="48" r="1.8" opacity="0.5"/>
    <circle class="receptor" cx="167" cy="48" r="1.8" opacity="0.5"/>
    <circle class="receptor" cx="162" cy="52" r="1.8" opacity="0.5"/>
    <circle class="receptor" cx="167" cy="52" r="1.8" opacity="0.5"/>
    
    <!-- Signal pulse animation -->
    <circle class="signal-pulse" cx="80" cy="50" r="3" opacity="0.8"/>
  </svg>
</div>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Education</span>
  <h2 class="aw-h">Education</h2>
  <div class="aw-entry">
    <div class="aw-when">2026 — Present</div>
    <div class="aw-what">
      <h3>Master of Education, Brain Science</h3>
      <p class="org">National Yang Ming Chiao Tung University · Institute of Education, Taiwan</p>
      <ul>
        <li>Supervised by Prof. Jeng-Ren Duann.</li>
        <li>Focusing on cognitive neuroscience, fMRI, and EEG data analysis.</li>
      </ul>
    </div>
  </div>
  <div class="aw-entry">
    <div class="aw-when">2022 — 2026</div>
    <div class="aw-what">
      <h3>Bachelor of Education, Kinesiology</h3>
      <p class="org">National Tsing Hua University, Taiwan <span class="badge">Graduated with distinction</span></p>
      <ul>
        <li>Supervised by Prof. Feng-Tzu Chen.</li>
        <li>Thesis: effects of low-intensity resistance exercise with slow movement and tonic force generation on executive function in older adults.</li>
      </ul>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Experience</span>
  <h2 class="aw-h">Research Experience</h2>
  <div class="aw-entry">
    <div class="aw-when">2024 — 2026</div>
    <div class="aw-what">
      <h3>Undergraduate Researcher</h3>
      <p class="org">National Tsing Hua University, Taiwan</p>
      <ul>
        <li>Low-Intensity Resistance Exercise with Slow Movement &amp; Tonic Force Generation on Cognitive Flexibility in Older Adults (NSTC Project): designed methodology, ran standardized experiments (n = 45), analyzed data.</li>
        <li>Effects of Volume-Matched Acute Exercise on Metacognition in Late Middle-Aged Adults: administered experiments, analyzed data, drafted journal articles.</li>
        <li>Physical Activity &amp; Executive Function in Adolescents with Hearing Impairments: designed methodology, executed experiments, analyzed data.</li>
      </ul>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Publications</span>
  <h2 class="aw-h">Selected Publications</h2>
  <div class="aw-entry">
    <div class="aw-when">2025 · TSSCI</div>
    <div class="aw-what">
      <h3>急性有氧健身運動對高齡者計畫相關執行功能之影響</h3>
      <p class="org"><strong>Wang, S.-C.</strong>, Wu, T.-T., et al. · 臺灣運動心理學報 (Bulletin of Sport &amp; Exercise Psychology of Taiwan), 25(1)</p>
    </div>
  </div>
  <div class="aw-entry">
    <div class="aw-when">2025 · Award</div>
    <div class="aw-what">
      <h3>Comparing Low-Intensity Slow-Movement vs. Moderate-Intensity Resistance Exercise on Cognitive Flexibility in Older Adults</h3>
      <p class="org"><strong>Wang, S.-C.</strong>, Huang, Y.-C., Chen, F.-T. · 12th Int'l Seminar of Sport &amp; Exercise Psychology, Malaysia <span class="badge">🏆 Best Oral Presenter</span></p>
    </div>
  </div>
  <a class="aw-cta" href="{{ '/publications/' | relative_url }}">View all publications</a>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Awards</span>
  <h2 class="aw-h">Honors &amp; Awards</h2>
  <div class="aw-entry">
    <div class="aw-when">2025</div>
    <div class="aw-what">
      <h3>Best Oral Presenter Award</h3>
      <p class="org">12th International Seminar of Sport and Exercise Psychology, Malaysia</p>
    </div>
  </div>
  <div class="aw-entry">
    <div class="aw-when">2023</div>
    <div class="aw-what">
      <h3>Academic Excellence Award</h3>
      <p class="org">National Taitung University · 111-1 &amp; 111-2</p>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Skills</span>
  <h2 class="aw-h">Technical Skills</h2>
  <div class="aw-grid">
    <div class="aw-card">
      <h3>Neuroimaging &amp; Analysis <span style="font-weight:500;color:var(--aw-accent);font-size:0.8rem;">· Advanced</span></h3>
      <div class="aw-chips">
        <span class="aw-chip">fMRI</span><span class="aw-chip">EEG</span><span class="aw-chip">PET</span><span class="aw-chip">LFP</span><span class="aw-chip">Cognitive Neuroscience</span><span class="aw-chip">Experimental Design</span>
      </div>
    </div>
    <div class="aw-card">
      <h3>Programming &amp; Software <span style="font-weight:500;color:var(--aw-accent);font-size:0.8rem;">· Intermediate</span></h3>
      <div class="aw-chips">
        <span class="aw-chip">Python</span><span class="aw-chip">MATLAB · SPM12</span><span class="aw-chip">GIFT</span><span class="aw-chip">LaTeX</span><span class="aw-chip">Markdown</span>
      </div>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Languages &amp; Certificates</span>
  <h2 class="aw-h">Languages &amp; Certifications</h2>
  <div class="aw-grid">
    <div class="aw-card">
      <h3>Languages</h3>
      <p>Mandarin — Native speaker<br>English — Fluent (TOEIC Gold; L&amp;R B2, S&amp;W C1)</p>
    </div>
    <div class="aw-card">
      <h3>Coaching Certificates</h3>
      <p>Level C Coach: Fitness, Swimming, Basketball, SUP, Canoe, Early-Childhood Gymnastics · Bronze-Level Nordic Walking Instructor</p>
    </div>
  </div>
</section>

<section class="aw-section aw-reveal">
  <span class="aw-eyebrow">Get in touch</span>
  <h2 class="aw-h">Contact</h2>
  <a class="aw-cta" href="mailto:scwang1005@gmail.com">Email me</a>
  <a class="aw-cta ghost" href="https://github.com/chieh1005" target="_blank" rel="noopener">GitHub</a>
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
