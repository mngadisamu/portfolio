// ESLint flat config (ESLint 9 and Next.js 16 no longer read .eslintrc or run `next lint`).
import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  { ignores: [".next/**", "node_modules/**", "public/**"] },
];

export default config;
