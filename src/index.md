---
# https://vitepress.dev/reference/default-theme-home-page
# svg icons - https://www.svgrepo.com/svg/384199/multiplayer-online-games-joystick?edit=true
# svg icons - https://icones.js.org/collection/mdi?s=code&icon=mdi:application-brackets-outline
# css gradients - https://cssgradient.io/gradient-backgrounds/
layout: home

title: Rootster
titleTemplate: Softverski alati visoke snage

hero:
  name: "Rootster"
  text: "Full-Stack Development"
  tagline: Softverski alati visoke snage
  image:
    light: /logo-black.svg
    dark: /logo-white.svg
    alt: Rootster
  actions:
    - theme: brand
      text: Istražite Rootster
      link: /getting-started/
    - theme: alt
      text: API Examples
      link: /getting-started/sectiona/
features:
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.97 16L5 19c-.33.3-.77.5-1.25.5A1.75 1.75 0 0 1 2 17.75v-.25l1-7.38A4.524 4.524 0 0 1 7.5 6h9c2.36 0 4.29 1.81 4.5 4.12l1 7.38v.25a1.75 1.75 0 0 1-1.75 1.75c-.48 0-.92-.2-1.25-.5l-2.97-3zM7 8v2H5v1h2v2h1v-2h2v-1H8V8zm9.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m-1.75 1.75a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75m3.5 0a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75M16.5 11.5a.75.75 0 0 0-.75.75a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75a.75.75 0 0 0-.75-.75"/></svg>
    title: Razvoj Igara
    details: Izrada video igara (2D/3D) za web, mobilne uređaje i PC za sve vrste klijenata.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V4H3v12zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2zM5 6h9v5H5zm10 0h4v2h-4zm4 3v5h-4V9zM5 12h4v2H5zm5 0h4v2h-4z"/></svg>
    title: Frontend Razvoj
    details: Razvoj responzivnih SPA, PWA sa Vue3/Nuxt3 i višestrančne aplikacija koristeći Alpine.js, HTMX...

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8zm0 8h1v-2H8zm0 8h1v-2H8zM4 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2zm13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3zm0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34z"/></svg>
    title: Backend Razvoj
    details: Izgradnja robustnih backend rješenja s Rust i Go jezicima, uključujući API-e, koristeći Docker za razvoj i distribuciju.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.86 12.5A4.3 4.3 0 0 0 19 11c0-1.95-.68-3.6-2.04-4.96S13.95 4 12 4c-1.58 0-3 .47-4.25 1.43s-2.08 2.19-2.5 3.72c-1.25.28-2.29.93-3.08 1.95S1 13.28 1 14.58c0 1.51.54 2.8 1.61 3.85C3.69 19.5 5 20 6.5 20h12c1.25 0 2.31-.44 3.19-1.31c.87-.88 1.31-1.94 1.31-3.19q0-1.725-1.14-3M10.5 16.18L9.09 17.6L4.5 13l4.59-4.6l1.41 1.42L7.32 13zm4.41 1.42l-1.41-1.42L16.68 13L13.5 9.82l1.41-1.42L19.5 13z"/></svg>
    title: Infrastruktura
    details: Implementacija skalabilne infrastrukture koristeći Kubernetes, s fokusom na CI/CD za visoku dostupnost.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9 22v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm-5-7h-2v-2h2zm6 0h-4v-2h4zM8 11H6V9h2zm10 0h-8V9h8zm2 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 6v12h16V6z"/></svg>
    title: Upravljanje Sadržajem
    details: Optimizacija pohrane i distribucije sadržaja s cloud rješenjima i CDN-ovima za efikasno upravljanje digitalnim imovinama.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m22.61 18.36l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM14.06 9l.94.93L5.92 19H5v-.92zm3.61-6c-.25 0-.51.09-.71.29l-1.84 1.83l3.75 3.75L20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3a.98.98 0 0 0-.7-.29m-3.61 3.18L3 17.25V21h3.75L17.81 9.93z"/></svg>
    title: Dizajn
    details: Pružanje kompletnih dizajnerskih rješenja, od koncepta do finalne pripreme, za digitalne i tiskane medije.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8c-1.5 0-2.3 1.4-1.9 2.5l-3.6 3.6c-.3-.1-.7-.1-1 0l-2.6-2.6c.4-1.1-.4-2.5-1.9-2.5c-1.4 0-2.3 1.4-1.9 2.5L3.5 16c-1.1-.3-2.5.5-2.5 2c0 1.1.9 2 2 2c1.4 0 2.3-1.4 1.9-2.5l4.5-4.6c.3.1.7.1 1 0l2.6 2.6c-.3 1 .5 2.5 2 2.5s2.3-1.4 1.9-2.5l3.6-3.6c1.1.3 2.5-.5 2.5-1.9c0-1.1-.9-2-2-2m-6 1l.9-2.1L18 6l-2.1-.9L15 3l-.9 2.1L12 6l2.1.9zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z"/></svg>
    title: Analitika
    details: Implementacija naprednih analitičkih rješenja za praćenje performansi i sigurnosti aplikacija u stvarnom vremenu.

  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 8.5L11 10l-3 3l3 3l-1.5 1.5L5 13zm5 9L13 16l3-3l-3-3l1.5-1.5L19 13zM21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H3V6h18z"/></svg>
    title: Prilagođena Rješenja
    details: Razvoj inovativnih, prilagođenih rješenja za jedinstvene i specifične potrebe svakog klijenta.
---
