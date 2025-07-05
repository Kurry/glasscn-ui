import betterTailwindcssPlugin from 'eslint-plugin-better-tailwindcss';

export default [
  // Include recommended ESLint configurations
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.next/**',
      'public/**',
      'coverage/**'
    ]
  },
  {
    // Apply to JavaScript and TypeScript files
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'better-tailwindcss': betterTailwindcssPlugin
    },
    rules: {
      'better-tailwindcss/classnames-order': 'warn',
      'better-tailwindcss/no-contradicting-classname': 'error'
    },
    // Config for tailwindcss plugin
    settings: {
      tailwindcss: {
        // Path to your tailwind.config.js or tailwind.config.ts
        config: './tailwind.config.ts'
      }
    }
  }
];