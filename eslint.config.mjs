import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const config = [
  ...compat.extends('next', 'next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
    },
  },
  {
    ignores: [
      'out/**/*',
      '.next/**/*',
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
    ],
  },
  prettierRecommended,
]

export default config
