import { typescript } from '@betterer/typescript'
import { eslint } from '@betterer/eslint'

export default {
  // Stricter TypeScript compilation
  'stricter compilation': () =>
    typescript('./tsconfig.json', {
      strict: true,
    }).include('./src/**/*.{ts,tsx}'),

  // New ESLint rules
  'new eslint rules': () =>
    eslint({
        'no-unused-vars': 2,
        'no-console': 1,
        'no-debugger': 2, 
    }).include('./src/**/*.{ts,tsx,js,jsx}'),
}
