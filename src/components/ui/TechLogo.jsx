import {
  siAndroid,
  siAxios,
  siC,
  siChartdotjs,
  siCss,
  siDocker,
  siExpress,
  siFastapi,
  siFigma,
  siFlask,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJest,
  siJsonwebtokens,
  siJupyter,
  siKotlin,
  siLocust,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPandas,
  siPostgresql,
  siPytest,
  siPython,
  siPytorch,
  siQt,
  siQuasar,
  siRadixui,
  siReact,
  siReactquery,
  siSass,
  siScikitlearn,
  siSqlalchemy,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
  siVuedotjs,
  siZod,
} from 'simple-icons'

// Logos oficiais (Simple Icons, CC0). Só os importados aqui entram no site.
const BRANDS = {
  react: siReact,
  vue: siVuedotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwind: siTailwindcss,
  quasar: siQuasar,
  html: siHtml5,
  css: siCss,
  figma: siFigma,
  python: siPython,
  node: siNodedotjs,
  fastapi: siFastapi,
  flask: siFlask,
  postgres: siPostgresql,
  docker: siDocker,
  opencv: siOpencv,
  pytorch: siPytorch,
  git: siGit,
  github: siGithub,
  next: siNextdotjs,
  sass: siSass,
  radix: siRadixui,
  reactquery: siReactquery,
  axios: siAxios,
  chartjs: siChartdotjs,
  express: siExpress,
  supabase: siSupabase,
  sqlalchemy: siSqlalchemy,
  jwt: siJsonwebtokens,
  zod: siZod,
  c: siC,
  sklearn: siScikitlearn,
  pandas: siPandas,
  numpy: siNumpy,
  jupyter: siJupyter,
  kotlin: siKotlin,
  android: siAndroid,
  qt: siQt,
  vite: siVite,
  jest: siJest,
  vitest: siVitest,
  pytest: siPytest,
  locust: siLocust,
}

// Ícones próprios para o que não tem logo de marca.
const CUSTOM = {
  neural: (
    <g fill="none" stroke="#d6488f" strokeWidth="1.6" strokeLinecap="round">
      <path d="M5 6 12 4M5 6l7 6M5 6l7 14M5 18l7-14M5 18l7-6M5 18l7 2M12 4l7 5M12 12l7-3M12 12l7 3M12 20l7-5" opacity=".55" />
      <g fill="#d6488f" stroke="none">
        <circle cx="5" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="12" cy="4" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="20" r="2" />
        <circle cx="19" cy="9" r="2" />
        <circle cx="19" cy="15" r="2" />
      </g>
    </g>
  ),
  charts: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" stroke="#1f4e79" strokeWidth="1.8" />
      <rect x="6.5" y="12" width="3" height="6" rx=".6" fill="#11557c" />
      <rect x="11.5" y="8" width="3" height="10" rx=".6" fill="#4c72b0" />
      <rect x="16.5" y="10.5" width="3" height="7.5" rx=".6" fill="#55a868" />
      <path d="M6 9.5 10.5 6l4 2.5L20 4" stroke="#c44e52" strokeWidth="1.6" />
    </g>
  ),
  image: (
    <g fill="none" stroke="#d6488f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <circle cx="10" cy="10" r="1.2" />
      <path d="m17 14-2.5-2.5L8 17" />
    </g>
  ),
}

export default function TechLogo({ name, size = 40 }) {
  const brand = BRANDS[name]
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label={brand?.title ?? name}>
      {brand ? <path d={brand.path} fill={`#${brand.hex}`} /> : CUSTOM[name]}
    </svg>
  )
}
