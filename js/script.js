/* ==========================================================================
   Portfolio: Abel J. Vélez Ruiz
   Plain JavaScript, no frameworks, no external libraries.

   What this file does:
   1. Marks the page as "JavaScript on" (lets the phone menu collapse).
   2. EN/ES language toggle (English text lives in index.html; Spanish is below).
   3. Project details window (text for each project is in PROJECTS below).
   4. Phone menu open/close.
   5. Highlights the current section in the menu while scrolling.

   To edit text: change the strings in ES (Spanish page text) or PROJECTS
   (project details, English and Spanish). Keep the quotes and commas.
   ========================================================================== */

(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  /* ---------- Spanish text for every data-i18n key in index.html ---------- */

  var ES = {
    "skip": "Saltar al contenido",
    "nav.menu": "Menú",
    "nav.label": "Principal",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.founder": "Fundador",
    "nav.contact": "Contacto",
    "lang.label": "Idioma",

    "hero.title": "Líder de operaciones de salud convertido en ingeniero de software de IA",
    "hero.pitch": "Creo aplicaciones web y SaaS para salud, subvenciones y agricultura, respaldadas por más de 17 años en operaciones de salud.",
    "hero.meta": "Radicado en Puerto Rico. Estudio ingeniería de software con IA en Holberton Coding School.",
    "hero.cta1": "Ver proyectos",
    "hero.cta2": "Ver experiencia",
    "stat1.label": "años en operaciones de salud",
    "stat2.label": "en el censo diario promedio del centro hiperbárico principal (2009)",

    "projects.title": "Proyectos",
    "projects.intro": "Todos los proyectos están en desarrollo. Las vistas previas son esquemas ilustrativos, no capturas de pantalla.",
    "p.subvenio.alt": "Esquema de la interfaz de Subvenio: barra lateral, barra superior y filas de propuestas",
    "p.subvenio.desc": "SaaS multiinquilino para redactar propuestas de subvenciones federales, con narrativas asistidas por IA verificadas contra un registro de hechos y validación de presupuesto.",
    "p.census.alt": "Esquema del Clinical Census Dashboard: barra de filtros, tarjetas de resumen, mapa de calor y lista de proveedores",
    "p.census.desc": "Panel de censo basado en Excel para centros pediátricos de Puerto Rico, con mapa de calor, análisis por proveedor y exportación de datos.",
    "p.flavorbridge.alt": "Esquema de FlavorBridge: encabezado con selector de idioma, tarjeta de nota de maridaje y etiquetas",
    "p.flavorbridge.desc": "Plataforma B2B de maridaje de cigarros y bebidas para locales, con notas de maridaje con IA, selector EN/ES y atribución por QR.",
    "p.pos.desc": "Sistema de punto de venta con esquema PostgreSQL, credenciales por terminal y pagos con Stripe y ATH Móvil.",
    "p.chocotrack.alt": "Esquema de CHOCO-TRACK: encabezado y tabla de lotes de inventario con etiquetas de estado",
    "p.chocotrack.desc": "Aplicación web progresiva para el inventario de una fábrica de chocolate, con rastreo por lote.",
    "p.pdf.desc": "Herramientas PDF en el navegador: comprimir, unir, firmar, proteger, rotar y más.",
    "preview.label": "Vista previa de interfaz",
    "status.dev": "En desarrollo",
    "card.tech": "Tecnologías",
    "card.details": "Ver detalles",

    "skills.title": "Habilidades",
    "skills.front": "Frontend",
    "skills.back": "Backend y datos",
    "skills.ai": "IA",
    "skills.deploy": "Despliegue y documentación",
    "skills.domain": "Salud y subvenciones",
    "sk.pwa": "Aplicaciones web progresivas",
    "sk.offline": "Funcionamiento sin conexión (IndexedDB)",
    "sk.auth": "Autenticación",
    "sk.schema": "Diseño de esquemas",
    "sk.multitenant": "Arquitectura SaaS multiinquilino",
    "sk.webhooks": "Seguridad de webhooks",
    "sk.testing": "Pruebas automatizadas",
    "sk.anthropic": "API de Anthropic mediante Edge Functions",
    "sk.rag": "RAG con citas",
    "sk.ratelimit": "Límites de uso y respaldos",
    "sk.agents": "Diseño de prompts y agentes",
    "sk.diagrams": "Diagramas de arquitectura (Mermaid)",
    "sk.hcadmin": "Administración de servicios de salud",
    "sk.hcdata": "Gestión de datos de salud",
    "sk.census": "Análisis de censo",
    "sk.compliance": "Cumplimiento regulatorio",
    "sk.lean": "Mejora de procesos Lean",
    "sk.grants": "Subvenciones federales (USDA LFPP/FMPP)",
    "sk.cfr": "Validación de presupuesto 2 CFR 200",

    "experience.title": "Experiencia",
    "exp.1.role": "Director de Instalación de Clínica Regional",
    "exp.1.dates": "2018 a la actualidad",
    "exp.2.role": "Administrador de Instalación Hiperbárica",
    "exp.2.b1": "Aumenté el censo diario promedio en un 40 % en la instalación principal en 2009.",
    "exp.2.b2": "Dirigí una segunda instalación hiperbárica en el sur de Puerto Rico.",
    "exp.3.role": "Residente Administrativo",
    "exp.3.b1": "Establecí un plan de trabajo para el departamento de manejo de materiales.",
    "exp.3.b2": "Desarrollé un sistema digital de inventario.",
    "edu.title": "Educación",
    "edu.1": "Maestría en Administración de Servicios de Salud, Universidad de Puerto Rico, Recinto de Ciencias Médicas (2014 a 2018)",
    "edu.2": "Bachillerato en Administración de Empresas, Contabilidad, Universidad de Puerto Rico, Recinto de Arecibo (2007)",
    "edu.3": "Holberton Coding School, ingeniería de software con IA (en curso)",
    "edu.aff": "Afiliaciones profesionales:",

    "founder.title": "Fundador",
    "founder.intro": "También dirijo Finca Semila, una operación agroforestal y de cacao especializado en Puerto Rico, y creo productos de software mediante Semila LLC.",
    "semila.desc": "Desarrolla un portafolio de productos SaaS y web.",
    "cacao.desc": "Operación de agroturismo agroforestal y de cacao especializado, con finca de cacao. Soy el sommelier de chocolate de la marca Cacao 360.",

    "contact.title": "Contacto",
    "contact.text": "Los enlaces de contacto se añadirán pronto.",
    "footer.top": "Volver arriba",

    "dlg.close": "Cerrar",
    "dlg.overview": "Descripción",
    "dlg.role": "Mi función",
    "dlg.highlights": "Aspectos destacados",
    "dlg.stack": "Tecnologías",
    "dlg.note": "Aún no hay enlace al proyecto en vivo ni al código. Se añadirán cuando estén disponibles.",
    "dlg.prev": "Proyecto anterior",
    "dlg.next": "Proyecto siguiente"
  };

  var META = {
    en: {
      title: "Abel J. Vélez Ruiz | Portfolio",
      description: "Healthcare operations leader turned AI software engineer. Portfolio of Abel J. Vélez Ruiz."
    },
    es: {
      title: "Abel J. Vélez Ruiz | Portafolio",
      description: "Líder de operaciones de salud convertido en ingeniero de software de IA. Portafolio de Abel J. Vélez Ruiz."
    }
  };

  /* ---------- Project details (shown in the window opened by "View details") ---------- */

  var ORDER = ["subvenio", "census", "flavorbridge", "pos", "chocotrack", "pdf"];

  var PROJECTS = {
    subvenio: {
      title: "Subvenio",
      stack: ["Alpine.js", "Supabase", "PostgreSQL", "Row-Level Security", "Edge Functions", "Netlify", "Anthropic API"],
      en: {
        overview: "Multi-tenant SaaS for writing federal grant proposals. It starts with two writers, with a plan to sell subscriptions to other organizations later.",
        role: "Sole developer: backend, frontend, and architecture.",
        highlights: [
          "Backend on Supabase and PostgreSQL, with Row-Level Security for multi-tenancy, 8 Edge Functions, and 42 passing tests.",
          "AI-assisted proposal narratives verified against a fact ledger to guard against invented claims.",
          "Budget validation against 2 CFR 200 rules.",
          "Frontend rebuilt in Alpine.js and deployed on Netlify. The proposals, budget, and workspace screens work end to end; the grant announcement intake and checklist screens are still to build."
        ]
      },
      es: {
        overview: "SaaS multiinquilino para redactar propuestas de subvenciones federales. Comienza con dos redactores, con el plan de vender suscripciones a otras organizaciones más adelante.",
        role: "Único desarrollador: backend, frontend y arquitectura.",
        highlights: [
          "Backend en Supabase y PostgreSQL, con Row-Level Security para multiinquilino, 8 Edge Functions y 42 pruebas aprobadas.",
          "Narrativas de propuestas asistidas por IA y verificadas contra un registro de hechos para evitar afirmaciones inventadas.",
          "Validación de presupuesto según las reglas de 2 CFR 200.",
          "Frontend reconstruido en Alpine.js y desplegado en Netlify. Las pantallas de propuestas, presupuesto y espacio de trabajo funcionan de principio a fin; faltan las pantallas de ingreso del anuncio de subvención y la lista de verificación."
        ]
      }
    },

    census: {
      title: "Clinical Census Dashboard",
      stack: ["JavaScript", "SheetJS", "HTML"],
      en: {
        overview: "Census dashboard for pediatric centers in Puerto Rico. It reads two types of Excel files with different column layouts and turns them into filterable analytics.",
        role: "Design and development.",
        highlights: [
          "Handles two Excel formats (pediatric centers and other providers) with different column schemas.",
          "Temporal filtering, attendance heatmap, and provider analytics.",
          "Three attendance states and selection across multiple sheets.",
          "Data export with SheetJS.",
          "Delivered as a single HTML file."
        ]
      },
      es: {
        overview: "Panel de censo para centros pediátricos de Puerto Rico. Lee dos tipos de archivos de Excel con columnas diferentes y los convierte en análisis filtrables.",
        role: "Diseño y desarrollo.",
        highlights: [
          "Maneja dos formatos de Excel (centros pediátricos y otros proveedores) con esquemas de columnas distintos.",
          "Filtro por fechas, mapa de calor de asistencia y análisis por proveedor.",
          "Tres estados de asistencia y selección entre varias hojas.",
          "Exportación de datos con SheetJS.",
          "Entregado como un solo archivo HTML."
        ]
      }
    },

    flavorbridge: {
      title: "FlavorBridge",
      stack: ["Alpine.js", "Supabase", "Edge Functions"],
      en: {
        overview: "B2B platform that pairs cigars and beverages, aimed at venues and lounges in Puerto Rico.",
        role: "Design and development.",
        highlights: [
          "AI pairing notes generated by a server-side Edge Function, with a deterministic fallback when AI credits are unavailable.",
          "Browser language detection with an EN/ES toggle that regenerates the active note.",
          "QR attribution captured on every visit.",
          "Venue platform mode that hides configuration screens from non-technical staff.",
          "IP-based rate limit of 8 AI calls per hour."
        ]
      },
      es: {
        overview: "Plataforma B2B que combina cigarros y bebidas, dirigida a locales y salones de Puerto Rico.",
        role: "Diseño y desarrollo.",
        highlights: [
          "Notas de maridaje con IA generadas por una Edge Function en el servidor, con un respaldo determinista cuando no hay créditos de IA.",
          "Detección del idioma del navegador con selector EN/ES que regenera la nota activa.",
          "Atribución por QR registrada en cada visita.",
          "Modo de plataforma para locales que oculta las pantallas de configuración al personal no técnico.",
          "Límite por IP de 8 llamadas de IA por hora."
        ]
      }
    },

    pos: {
      title: "Semila POS v3",
      stack: ["PostgreSQL", "Stripe", "ATH Móvil", "JavaScript"],
      en: {
        overview: "Point-of-sale system for Semila, now in its third version.",
        role: "Design and development.",
        highlights: [
          "PostgreSQL schema with per-terminal credentials and server-side price validation.",
          "Stripe and ATH Móvil payments, with signature-verified webhooks.",
          "Full demo mode when the backend is not configured.",
          "Responsive layout for mobile, tablet, and desktop, plus an inventory module."
        ]
      },
      es: {
        overview: "Sistema de punto de venta para Semila, ya en su tercera versión.",
        role: "Diseño y desarrollo.",
        highlights: [
          "Esquema PostgreSQL con credenciales por terminal y validación de precios en el servidor.",
          "Pagos con Stripe y ATH Móvil, con webhooks verificados por firma.",
          "Modo de demostración completo cuando el backend no está configurado.",
          "Diseño adaptable a móvil, tableta y escritorio, con módulo de inventario."
        ]
      }
    },

    chocotrack: {
      title: "CHOCO-TRACK",
      stack: ["Alpine.js", "Supabase", "PWA"],
      en: {
        overview: "Progressive web app for chocolate factory inventory with lot tracking.",
        role: "Design and development.",
        highlights: [
          "Tracks inventory by lot.",
          "Built as a progressive web app (PWA)."
        ]
      },
      es: {
        overview: "Aplicación web progresiva para el inventario de una fábrica de chocolate, con rastreo por lote.",
        role: "Diseño y desarrollo.",
        highlights: [
          "Rastrea el inventario por lote.",
          "Construida como aplicación web progresiva (PWA)."
        ]
      }
    },

    pdf: {
      title: "PDF Workspace Pro",
      stack: ["JavaScript", "PDF.js", "pdf-lib", "Netlify"],
      en: {
        overview: "Browser-based PDF toolset that runs from a single HTML file.",
        role: "Design and development.",
        highlights: [
          "Tools: compress, convert, edit and watermark, sign, protect, merge, rotate, crop, flatten, unlock, and number pages.",
          "Rotation works on single pages or on all pages at once.",
          "Built with PDF.js, pdf-lib, and plain JavaScript."
        ]
      },
      es: {
        overview: "Herramientas PDF en el navegador que funcionan desde un solo archivo HTML.",
        role: "Diseño y desarrollo.",
        highlights: [
          "Herramientas: comprimir, convertir, editar y poner marca de agua, firmar, proteger, unir, rotar, recortar, aplanar, desbloquear y numerar páginas.",
          "La rotación funciona en páginas individuales o en todas a la vez.",
          "Construida con PDF.js, pdf-lib y JavaScript simple."
        ]
      }
    }
  };

  /* ---------- Small helpers ---------- */

  function byId(id) { return document.getElementById(id); }

  function readLang() {
    try { return localStorage.getItem("portfolio-lang"); } catch (e) { return null; }
  }
  function saveLang(value) {
    try { localStorage.setItem("portfolio-lang", value); } catch (e) { /* storage blocked: ignore */ }
  }

  var lang = readLang();
  if (lang !== "en" && lang !== "es") {
    lang = (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  /* ---------- Language ---------- */

  function applyLang(next) {
    lang = next;
    root.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.getAttribute("data-en") === null) el.setAttribute("data-en", el.textContent);
      var key = el.getAttribute("data-i18n");
      el.textContent = (lang === "es" && ES[key]) ? ES[key] : el.getAttribute("data-en");
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (el.getAttribute("data-en-aria") === null) el.setAttribute("data-en-aria", el.getAttribute("aria-label") || "");
      var key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", (lang === "es" && ES[key]) ? ES[key] : el.getAttribute("data-en-aria"));
    });

    document.title = META[lang].title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", META[lang].description);

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    if (dlg && dlg.open && currentId) renderDialog();
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var chosen = btn.getAttribute("data-lang");
      saveLang(chosen);
      applyLang(chosen);
    });
  });

  /* ---------- Phone menu ---------- */

  var nav = byId("site-nav");
  var navToggle = document.querySelector(".nav-toggle");

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* ---------- Project details window ---------- */

  var dlg = byId("project-dialog");
  var currentId = null;
  var lastOpener = null;

  function fillList(listEl, items) {
    listEl.textContent = "";
    items.forEach(function (text) {
      var li = document.createElement("li");
      li.textContent = text;
      listEl.appendChild(li);
    });
  }

  function renderDialog() {
    var project = PROJECTS[currentId];
    if (!project) return;
    var text = project[lang] || project.en;

    byId("dlg-title").textContent = project.title;
    byId("dlg-overview").textContent = text.overview;
    byId("dlg-role").textContent = text.role;
    fillList(byId("dlg-highlights"), text.highlights);
    fillList(byId("dlg-stack"), project.stack);

    var media = byId("dlg-media");
    media.textContent = "";
    var source = document.querySelector('.card[data-project="' + currentId + '"] .preview');
    if (source) media.appendChild(source.cloneNode(true));
  }

  function openProject(id, opener) {
    currentId = id;
    lastOpener = opener || null;
    renderDialog();
    if (!dlg.open) {
      if (typeof dlg.showModal === "function") dlg.showModal();
      else dlg.setAttribute("open", "");
    }
    dlg.scrollTop = 0;
  }

  function closeDialog() {
    if (typeof dlg.close === "function") dlg.close();
    else dlg.removeAttribute("open");
  }

  function step(direction) {
    var index = ORDER.indexOf(currentId);
    currentId = ORDER[(index + direction + ORDER.length) % ORDER.length];
    renderDialog();
    dlg.scrollTop = 0;
  }

  if (dlg) {
    document.querySelectorAll("[data-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openProject(btn.getAttribute("data-open"), btn);
      });
    });

    dlg.querySelector("[data-close]").addEventListener("click", closeDialog);
    dlg.querySelector("[data-prev]").addEventListener("click", function () { step(-1); });
    dlg.querySelector("[data-next]").addEventListener("click", function () { step(1); });

    // Click on the dark area outside the window closes it
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) closeDialog();
    });

    // Left and right arrow keys move between projects (Esc closes, built in)
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    });

    // Give focus back to the button that opened the window
    dlg.addEventListener("close", function () {
      if (lastOpener) lastOpener.focus();
    });
  }

  /* ---------- Highlight the current section in the menu ---------- */

  if ("IntersectionObserver" in window && nav) {
    var links = {};
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      links[a.getAttribute("href").slice(1)] = a;
    });

    var setCurrent = function (id) {
      Object.keys(links).forEach(function (key) { links[key].removeAttribute("aria-current"); });
      if (id && links[id]) links[id].setAttribute("aria-current", "true");
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        setCurrent(entry.target.id === "top" ? null : entry.target.id);
      });
    }, { rootMargin: "-35% 0px -60% 0px" });

    ["top", "projects", "skills", "experience", "founder", "contact"].forEach(function (id) {
      var section = byId(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- Start ---------- */

  applyLang(lang);
})();
