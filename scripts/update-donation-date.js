import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const donationDataPath = join(
  __dirname,
  '../src/components/home/donation-data.ts',
)

try {
  // Read the current file content
  let content = readFileSync(donationDataPath, 'utf8')

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]

  // Replace the LAST_UPDATED constant
  const updatedContent = content.replace(
    /export const LAST_UPDATED = '[^']*'/,
    `export const LAST_UPDATED = '${today}'`,
  )

  // Write back to file
  writeFileSync(donationDataPath, updatedContent)

  console.log('Successfully updated LAST_UPDATED date to:', today)
} catch (error) {
  console.error('Error updating LAST_UPDATED date:', error)
  process.exit(1)
}
