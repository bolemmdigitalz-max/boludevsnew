/* ============================================================
   BOLUDEVS PORTFOLIO — script.js (Case Study Edition)
   ============================================================ */

const NICHES = [
  "All","Restaurant","School","Fashion",
  "Real Estate","Beauty & Spa","Portfolio","Company","Retail","Tech","Corporate"
];

const CONTACTS = {
  whatsapp: ["09041490874","09033372448"],
  call:     ["09115327236"]
};

const PROJECTS = [
  {
    id:1,
    title:"Gras Lagos",
    category:"Website Design", niche:"Restaurant", featured:true,
    description:"A clean, conversion-focused corporate website built for a growing service company to establish a credible online presence.",
    services:["UI/UX Design","Responsive Build","Landing Page"],
    image:"images/graslagos.png",
    details:"case-studies/corporate-business-website.html",
    live:"https://gras-demo-live.vercel.app/"
  },
  {
    id:2,
    title:"Topcafé - Coffee",
    category:"Website Design", niche:"Company", featured:true,
    description:"High-converting product landing page designed to drive leads and online sales for a retail brand.",
    services:["Landing Page","Lead Generation","Mobile First"],
    image:" images/topcafe.png",
    details:"case-studies/e-commerce-landing-page.html",
    live:"https://topcafe.vercel.app/"
  },
  {
    id:3,
    title:"ADESHOTIT",
    category:"Website Design", niche:"Portfolio", featured:true,
    description:"Created and optimized a Google Business Profile that boosted a restaurant's local search rankings and foot traffic.",
    services:["Profile Setup","Local SEO","Optimization"],
    image:"images/adeshotit.png",
    details:"case-studies/adeshotit.html",
    live:"https://adeshotit.vercel.app/"
  },
  {
    id:4,
    title:"Startup Portfolio Site",
    category:"Website Design", niche:"Tech", featured:false,
    description:"A modern portfolio website that showcases a startup's products with smooth animations and a premium feel.",
    services:["Web Design","Animation","SEO Setup"],
    image:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/startup-portfolio.html",
    live:""
  },
  {
    id:5,
    title:"Fashion Boutique Website",
    category:"Website Design", niche:"Fashion", featured:false,
    description:"A stylish, scroll-stopping site for a Lagos fashion boutique. WhatsApp order flow, lookbook gallery and Instagram feed embed.",
    services:["Web Design","WhatsApp Flow","Gallery"],
    image:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/fashion-boutique-website.html",
    live:""
  },
  {
    id:6,
    title:"School Website — Chosenvine Tutors",
    category:"Website Design", niche:"School", featured:false,
    description:"Full website for a tutorial center in Ikorodu Lagos. Program listings, timetable, registration form and WhatsApp lead capture.",
    services:["Web Design","Netlify Forms","Local SEO"],
    image:"https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/school-website-chosenvine.html",
    live:""
  },
  {
    id:7,
    title:"Real Estate Listings Page",
    category:"Website Design", niche:"Real Estate", featured:false,
    description:"A premium property listings site with filterable cards, WhatsApp enquiry flow and an interactive location section.",
    services:["Web Design","Filter System","WhatsApp CTA"],
    image:"https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/real-estate-listings.html",
    live:""
  },
  {
    id:8,
    title:"Spa & Wellness Website",
    category:"Website Design", niche:"Beauty & Spa", featured:false,
    description:"An elegant, calming website for a Lagos spa with online booking form, service menu and customer testimonials.",
    services:["Web Design","Booking Form","Testimonials"],
    image:"https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/spa-wellness-website.html",
    live:""
  },
  {
    id:9,
    title:"Local Store Map Listing",
    category:"Google Maps Listings", niche:"Retail", featured:false,
    description:"Verified and optimized a retail store's map listing to attract more nearby customers searching online.",
    services:["Map Verification","Local Visibility","Reviews"],
    image:"https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/local-store-map-listing.html",
    live:""
  },
  {
    id:10,
    title:"Restaurant Social Media Campaign",
    category:"Social Media Advertising", niche:"Restaurant", featured:false,
    description:"Managed a targeted Instagram and Facebook campaign for a Lagos restaurant that increased foot traffic by 40%.",
    services:["Meta Ads","Content Strategy","Analytics"],
    image:"https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/restaurant-social-campaign.html",
    live:""
  },
  {
    id:11,
    title:"Real Estate Lead Generation Ads",
    category:"Social Media Advertising", niche:"Real Estate", featured:false,
    description:"Designed and ran targeted Facebook lead ads for a property company, delivering verified buyer enquiries at low cost per lead.",
    services:["Meta Ads","Lead Forms","Targeting"],
    image:"https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/real-estate-lead-ads.html",
    live:""
  },
  {
    id:12,
    title:"Complete Brand Identity",
    category:"Graphic Design", niche:"Corporate", featured:false,
    description:"Developed a cohesive brand identity including logo, colour palette and visual guidelines for a new business.",
    services:["Logo Design","Brand Kit","Guidelines"],
    image:"https://images.pexels.com/photos/8546649/pexels-photo-8546649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/complete-brand-identity.html",
    live:""
  },
  {
    id:13,
    title:"School Google Maps Setup",
    category:"Google Maps Listings", niche:"School", featured:false,
    description:"Set up and fully optimized a tutorial center's Google Business Profile so parents can find them in local searches.",
    services:["Profile Setup","Local SEO","Photos"],
    image:"https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/school-google-maps.html",
    live:""
  },
  {
    id:14,
    title:"Beauty Salon Brand Identity",
    category:"Graphic Design", niche:"Beauty & Spa", featured:false,
    description:"Designed a full brand kit for a Lagos hair and beauty salon — logo, colour system, social templates and price card.",
    services:["Logo Design","Social Templates","Price Card"],
    image:"https://images.pexels.com/photos/15569284/pexels-photo-15569284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/beauty-salon-brand.html",
    live:""
  },
  {
    id:15,
    title:"Fashion Store Social Content",
    category:"Social Media Advertising", niche:"Fashion", featured:false,
    description:"Built a 30-day content calendar and managed posting for a fashion boutique, growing their Instagram following by 800 in one month.",
    services:["Content Plan","Scheduling","Engagement"],
    image:"https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    details:"case-studies/fashion-store-social.html",
    live:""
  }
];

/* ============================================================
   SVG ICONS
   ============================================================ */
const ICONS = {
  arrowRight:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  arrowLeft:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>`,
  arrowUp:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  externalLink:`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  star:`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>`,
  whatsapp:`<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.516 5.26l-.999 3.648 3.972-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  phone:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  search:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  menu:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
  close:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`
};

/* ============================================================
   HELPERS
   ============================================================ */
const NAV_IDS = ['home','about','experience','tools','skills','projects','contact'];

function goTo(id){
  closeMobileMenu();
  const el=document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
}
function backToTopFn(){ window.scrollTo({top:0,behavior:'smooth'}); }
function waLink(num){
  const intl='234'+num.replace(/^0/,'');
  const msg=encodeURIComponent("Hello Osiberu, I'd like to discuss a project with you.");
  return `https://wa.me/${intl}?text=${msg}`;
}

/* ============================================================
   NAVBAR
   ============================================================ */
const navbar=document.getElementById('navbar');
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobile-menu');
let menuOpen=false;

function closeMobileMenu(){
  if(!menuOpen) return;
  menuOpen=false;
  mobileMenu.classList.remove('open');
  hamburger.innerHTML=ICONS.menu;
  hamburger.setAttribute('aria-expanded','false');
}

if(hamburger){
  hamburger.addEventListener('click',()=>{
    menuOpen=!menuOpen;
    mobileMenu.classList.toggle('open',menuOpen);
    hamburger.innerHTML=menuOpen?ICONS.close:ICONS.menu;
    hamburger.setAttribute('aria-expanded',String(menuOpen));
  });
}

window.addEventListener('scroll',()=>{
  if(navbar) navbar.classList.toggle('scrolled',window.scrollY>20);
  const offset=window.scrollY+120;
  let current='home';
  for(const id of NAV_IDS){
    const el=document.getElementById(id);
    if(el && el.offsetTop<=offset) current=id;
  }
  document.querySelectorAll('[data-section]').forEach(btn=>{
    btn.classList.toggle('active',btn.dataset.section===current);
  });
  const btt=document.getElementById('back-to-top');
  if(btt) btt.classList.toggle('visible',window.scrollY>600);
},{passive:true});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal(){
  const els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>obs.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function initCounters(){
  const counters=document.querySelectorAll('.count-up');
  if(!counters.length) return;
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el=entry.target;
      const target=parseInt(el.dataset.target);
      const suffix=el.dataset.suffix||'';
      const duration=1800;
      const steps=60;
      const increment=target/steps;
      let current=0;
      const timer=setInterval(()=>{
        current+=increment;
        if(current>=target){
          el.textContent=target+suffix;
          clearInterval(timer);
        } else {
          el.textContent=Math.floor(current)+suffix;
        }
      },duration/steps);
      obs.unobserve(el);
    });
  },{threshold:0.5});
  counters.forEach(el=>obs.observe(el));
}

/* ============================================================
   FOOTER YEAR
   ============================================================ */
const footerCopy=document.getElementById('footer-copy');
if(footerCopy) footerCopy.textContent=`© ${new Date().getFullYear()} Osiberu Boluwatife. All rights reserved.`;

/* ============================================================
   PROJECT CARD — shared between homepage + projects page
   ============================================================ */
function projectCardHTML(project, showFeatured=false){
  const tags=project.services.map(s=>`<span class="project-tag">${s}</span>`).join('');
  const niche=`<span class="project-niche-tag">${project.niche}</span>`;
  const featBadge=showFeatured&&project.featured
    ?`<span class="project-feat-badge">${ICONS.star} Featured</span>`:'';

  // Live button — disabled gracefully if no URL
  const hasLive=project.live&&project.live.trim()!=='';
  const liveBtn=hasLive
    ?`<a href="${project.live}" target="_blank" rel="noopener noreferrer"
        class="pc-btn pc-btn--live" aria-label="View live project: ${project.title}">
        View Project ${ICONS.externalLink}
      </a>`
    :`<span class="pc-btn pc-btn--live pc-btn--disabled" aria-disabled="true">
        Coming Soon
      </span>`;

  return `
    <article class="project-card">
      <div class="project-img-wrap">
        <img src="${project.image}" alt="${project.title}" loading="lazy"/>
        <span class="project-cat-badge">${project.category}</span>
        ${featBadge}
      </div>
      <div class="project-body">
        ${niche}
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
        <div class="pc-btn-row">
          <a href="${project.details}" class="pc-btn pc-btn--details"
             aria-label="View case study: ${project.title}">
            View Details ${ICONS.arrowRight}
          </a>
          ${liveBtn}
        </div>
      </div>
    </article>`;
}

/* ============================================================
   RENDER CONTACT CARDS
   ============================================================ */
function renderContact(){
  const grid=document.getElementById('contact-grid');
  if(!grid) return;
  const waCards=CONTACTS.whatsapp.map((num,i)=>`
    <div class="contact-card reveal">
      <span class="contact-icon wa">${ICONS.whatsapp}</span>
      <p class="contact-label">WhatsApp${CONTACTS.whatsapp.length>1?' '+(i+1):''}</p>
      <p class="contact-num">${num}</p>
      <a href="${waLink(num)}" target="_blank" rel="noopener noreferrer" class="contact-btn wa">
        ${ICONS.whatsapp} Chat on WhatsApp
      </a>
    </div>`).join('');
  const callCards=CONTACTS.call.map(num=>`
    <div class="contact-card reveal">
      <span class="contact-icon phone">${ICONS.phone}</span>
      <p class="contact-label">Call</p>
      <p class="contact-num">${num}</p>
      <a href="tel:${num}" class="contact-btn phone">
        ${ICONS.phone} Call Now
      </a>
    </div>`).join('');
  grid.innerHTML=waCards+callCards;
}

/* ============================================================
   WEB3FORMS
   ============================================================ */
function initContactForm(){
  const form=document.getElementById('contact-form');
  if(!form) return;
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const submitBtn=document.getElementById('form-submit');
    const submitText=document.getElementById('submit-text');
    const submitIcon=document.getElementById('submit-icon');
    const submitSpinner=document.getElementById('submit-spinner');
    const successMsg=document.getElementById('form-success');
    const errorMsg=document.getElementById('form-error');
    submitBtn.disabled=true;
    submitText.textContent='Sending…';
    submitIcon.style.display='none';
    submitSpinner.style.display='inline-block';
    errorMsg.style.display='none';
    try{
      const data=new FormData(form);
      const res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:data});
      const json=await res.json();
      if(json.success){
        form.style.display='none';
        successMsg.style.display='block';
      } else { throw new Error(); }
    } catch(err){
      errorMsg.style.display='block';
      submitBtn.disabled=false;
      submitText.textContent='Send Project Brief';
      submitIcon.style.display='inline-block';
      submitSpinner.style.display='none';
    }
  });
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
function initHomepage(){
  const grid=document.getElementById('homepage-projects-grid');
  if(!grid) return;
  const three=PROJECTS.filter(p=>p.featured).slice(0,3);
  grid.innerHTML=three.map(p=>projectCardHTML(p,true)).join('');
  renderContact();
  initContactForm();
  initCounters();
}

/* ============================================================
   PROJECTS PAGE — search + niche + pagination
   ============================================================ */
const PER_PAGE=5;
let ppActiveNiche='All';
let ppQuery='';
let ppCurrentPage=1;

function getFilteredProjects(){
  const q=ppQuery.trim().toLowerCase();
  return PROJECTS.filter(p=>{
    const matchNiche=ppActiveNiche==='All'||p.niche===ppActiveNiche;
    const matchQ=!q||
      p.title.toLowerCase().includes(q)||
      p.description.toLowerCase().includes(q)||
      p.niche.toLowerCase().includes(q)||
      p.category.toLowerCase().includes(q)||
      p.services.some(s=>s.toLowerCase().includes(q));
    return matchNiche&&matchQ;
  });
}

function renderNicheTags(){
  const container=document.getElementById('niche-tags');
  if(!container) return;
  container.innerHTML=NICHES.map(n=>`
    <button class="niche-tag-btn${n===ppActiveNiche?' active':''}" data-niche="${n}">${n}</button>
  `).join('');
  container.querySelectorAll('.niche-tag-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      ppActiveNiche=btn.dataset.niche;
      ppCurrentPage=1;
      renderNicheTags();
      renderProjectsGrid();
    });
  });
}

function renderProjectsGrid(){
  const grid=document.getElementById('pp-projects-grid');
  const empty=document.getElementById('pp-empty');
  const info=document.getElementById('pp-info');
  const prevBtn=document.getElementById('pp-prev');
  const nextBtn=document.getElementById('pp-next');
  const pageLabel=document.getElementById('pp-page-label');
  if(!grid) return;
  const filtered=getFilteredProjects();
  const totalPages=Math.max(1,Math.ceil(filtered.length/PER_PAGE));
  if(ppCurrentPage>totalPages) ppCurrentPage=totalPages;
  const start=(ppCurrentPage-1)*PER_PAGE;
  const end=Math.min(start+PER_PAGE,filtered.length);
  const paginated=filtered.slice(start,end);
  if(info){
    info.textContent=filtered.length>0
      ?`Showing ${start+1}–${end} of ${filtered.length} project${filtered.length!==1?'s':''}`:'';
  }
  if(paginated.length>0){
    grid.style.display='grid';
    if(empty) empty.style.display='none';
    grid.innerHTML=paginated.map(p=>projectCardHTML(p)).join('');
  } else {
    grid.style.display='none';
    if(empty) empty.style.display='block';
  }
  if(prevBtn){
    prevBtn.disabled=ppCurrentPage<=1;
    prevBtn.onclick=()=>{ if(ppCurrentPage>1){ppCurrentPage--;renderProjectsGrid();window.scrollTo({top:0,behavior:'smooth'});} };
  }
  if(nextBtn){
    nextBtn.disabled=ppCurrentPage>=totalPages;
    nextBtn.onclick=()=>{ if(ppCurrentPage<totalPages){ppCurrentPage++;renderProjectsGrid();window.scrollTo({top:0,behavior:'smooth'});} };
  }
  if(pageLabel) pageLabel.textContent=`Page ${ppCurrentPage} of ${totalPages}`;
}

function initProjectsPage(){
  renderNicheTags();
  renderProjectsGrid();
  const searchInput=document.getElementById('pp-search');
  if(searchInput){
    searchInput.addEventListener('input',()=>{
      ppQuery=searchInput.value;
      ppCurrentPage=1;
      renderProjectsGrid();
    });
  }
}

/* ============================================================
   INIT
   ============================================================ */
const isHomePage=!!document.getElementById('home');
const isProjectsPage=!!document.getElementById('projects-page-root');

if(isHomePage) initHomepage();
if(isProjectsPage) initProjectsPage();

initReveal();
