# Servisi i Usluge

<script setup>
const slides = [
    { content: 'Igraj', content_text: 'I PRONADI PROIZVODE', color: 'red', image: '/image1.png', },
    { content: 'Skupljaj', content_text: 'SKUPLJAJ PROIZVODE', color: 'red', image: '/image1.png', },
    { content: 'Otkrij', content_text: 'NOVE MOGUĆNOSTI', color: 'lime', image: '/image1.png', },
    { content: 'Uživaj', content_text: 'U NAJBOLJEM KVALITETU', color: 'cyan', image: '/image1.png', }]
</script>

<Carousel :slides="slides" />
