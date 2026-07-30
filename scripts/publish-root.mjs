import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const rootDir = process.cwd()
const distDir = resolve(rootDir, 'dist')

const copyTargets = [
  ['index.dev.html', 'index.html'],
  ['assets', 'assets'],
  ['projects', 'projects'],
  ['favicon.svg', 'favicon.svg'],
  ['icons.svg', 'icons.svg'],
]

for (const [source, target] of copyTargets) {
  const sourcePath = resolve(distDir, source)
  const targetPath = resolve(rootDir, target)

  if (!existsSync(sourcePath)) {
    throw new Error(`Missing build output: ${source}`)
  }

  cpSync(sourcePath, targetPath, { force: true, recursive: true })
}

console.log('Root publication files synchronized from dist/.')