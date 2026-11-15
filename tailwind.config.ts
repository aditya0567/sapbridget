import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#07111f', panel: '#0d1a2b', line: '#1d3048', accent: '#4f8cff', cyan: '#5de0e6' }, boxShadow: { glow: '0 0 60px rgba(79,140,255,.18)' } } },
  plugins: [require('@tailwindcss/forms')]
};
export default config;
