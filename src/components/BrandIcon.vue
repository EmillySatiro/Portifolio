<template>
  <!-- Github -->
  <svg
    v-if="name === 'Github' || name === 'Git & GitHub'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>

  <!-- Linkedin -->
  <svg
    v-else-if="name === 'Linkedin'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>

  <!-- Instagram -->
  <svg
    v-else-if="name === 'Instagram'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>

  <!-- Figma -->
  <svg
    v-else-if="name === 'Figma'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>

  <!-- React -->
  <svg
    v-else-if="name === 'React'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
  >
    <circle cx="12" cy="12" r="2.5" :fill="iconColor" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
  </svg>

  <!-- Vue.js -->
  <svg
    v-else-if="name === 'Vue.js' || name === 'Vue'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M2 3h4.5L12 14 17.5 3H22L12 21 2 3z" />
    <path d="M6.5 3L12 13 17.5 3" />
  </svg>

  <!-- TailwindCSS -->
  <svg
    v-else-if="name === 'TailwindCSS' || name === 'Tailwind'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
  >
    <path d="M12 6c-3.3 0-5.3 1.6-6 4.8 1.3-1.6 2.8-2.1 4.5-1.5 1 .3 1.7 1.1 2.5 1.9C14.3 12.5 16 14.2 20 14.2c3.3 0 5.3-1.6 6-4.8-1.3 1.6-2.8 2.1-4.5 1.5-1-.3-1.7-1.1-2.5-1.9C17.7 7.7 16 6 12 6zM6 14.2c-3.3 0-5.3 1.6-6 4.8 1.3-1.6 2.8-2.1 4.5-1.5 1 .3 1.7 1.1 2.5 1.9C8.3 20.7 10 22.4 14 22.4c3.3 0 5.3-1.6 6-4.8-1.3 1.6-2.8 2.1-4.5 1.5-1-.3-1.7-1.1-2.5-1.9-1.3-1.3-3-3-7-3z" />
  </svg>

  <!-- TypeScript -->
  <svg
    v-else-if="name === 'TypeScript'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M8 11h4v7" />
    <path d="M10 11H8" />
    <path d="M14 17.5c1 0 2-.5 2-1.5s-1-1.5-2-2-1-.5-1-1.5 1-1.5 2-1.5" />
  </svg>

  <!-- JavaScript -->
  <svg
    v-else-if="name.includes('JavaScript') || name === 'JS'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M10 17v-4c0-.6.4-1 1-1" />
    <path d="M14 17.5c1 0 2-.5 2-1.5s-1-1.5-2-2-1-.5-1-1.5 1-1.5 2-1.5" />
  </svg>

  <!-- Quasar Framework -->
  <svg
    v-else-if="name.includes('Quasar')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>

  <!-- HTML5 / CSS3 -->
  <svg
    v-else-if="name.includes('HTML') || name.includes('CSS')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
    <path d="M7 7h10L16 11H8l.5 5 3.5 1 3.5-1 .5-3" />
  </svg>

  <!-- Python -->
  <svg
    v-else-if="name === 'Python'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2c-4 0-4 1.8-4 3.5V8h8V5.5C16 3.8 16 2 12 2z" />
    <path d="M12 22c4 0 4-1.8 4-3.5V16H8v2.5C8 20.2 8 22 12 22z" />
    <path d="M4 12c0-4 1.8-4 3.5-4H10v8H7.5C5.8 16 4 16 4 12z" />
    <path d="M20 12c0 4-1.8 4-3.5 4H14V8h2.5c1.7 0 3.5 0 3.5 4z" />
  </svg>

  <!-- Node.js -->
  <svg
    v-else-if="name.includes('Node')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </svg>

  <!-- PostgreSQL / Database -->
  <svg
    v-else-if="name.includes('Postgre') || name.includes('SQL')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>

  <!-- Docker -->
  <svg
    v-else-if="name === 'Docker'"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="4" y="10" width="3" height="3" />
    <rect x="8" y="10" width="3" height="3" />
    <rect x="12" y="10" width="3" height="3" />
    <rect x="8" y="6" width="3" height="3" />
    <path d="M2 15c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" />
  </svg>

  <!-- OpenCV / Computer Vision -->
  <svg
    v-else-if="name.includes('OpenCV') || name.includes('Visão')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>

  <!-- PyTorch / Deep Learning -->
  <svg
    v-else-if="name.includes('PyTorch') || name.includes('Deep')"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
  </svg>

  <!-- Default Code Icon -->
  <svg
    v-else
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="iconColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
</template>

<script>
export default {
  name: 'BrandIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 20,
    },
  },
  computed: {
    iconColor() {
      const name = this.name
      if (name === 'React') return '#61dafb'
      if (name === 'Vue.js' || name === 'Vue') return '#42b883'
      if (name === 'TailwindCSS' || name === 'Tailwind') return '#38bdf8'
      if (name === 'TypeScript') return '#3178c6'
      if (name.includes('JavaScript') || name === 'JS') return '#f7df1e'
      if (name === 'Figma') return '#ff7262'
      if (name === 'Python') return '#3776ab'
      if (name.includes('Node')) return '#5fa04e'
      if (name.includes('Postgre') || name.includes('SQL')) return '#4169e1'
      if (name === 'Docker') return '#2496ed'
      if (name.includes('PyTorch')) return '#ee4c2c'
      if (name.includes('OpenCV')) return '#5c3ee8'
      if (name.includes('HTML') || name.includes('CSS')) return '#e34f26'
      if (name.includes('Git')) return '#f05032'
      if (name.includes('Quasar')) return '#1976d2'
      return 'currentColor'
    },
  },
}
</script>
