import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const donationDataPath = join(
  __dirname,
  '../src/components/home/donation-data.ts'
)

try {
  // Check if file has been modified using git
  try {
    execSync(`git diff --quiet HEAD -- "${donationDataPath}"`)
    // If we reach here, there are no changes
    console.log(
      'No changes detected in donation-data.ts, skipping date update.'
    )
    process.exit(0)
  } catch {
    // git diff exits with code 1 if there are changes
    console.log('Changes detected in donation-data.ts, updating date...')
  }

  // Read the current file content
  let content = readFileSync(donationDataPath, 'utf8')

  // Get current date in YYYY-MM-DD format in local timezone
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const today = `${year}-${month}-${day}`

  // Replace the LAST_UPDATED constant
  const updatedContent = content.replace(
    /export const LAST_UPDATED = '[^']*'/,
    `export const LAST_UPDATED = '${today}'`
  )

  // Write back to file
  writeFileSync(donationDataPath, updatedContent)

  console.log('Successfully updated LAST_UPDATED date to:', today)
} catch (error) {
  console.error('Error updating LAST_UPDATED date:', error)
  process.exit(1)
}
