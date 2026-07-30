import { cpSync, existsSync, lstatSync, rmSync } from 'node:fs'
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

  if (existsSync(targetPath)) {
    const isDirectory = lstatSync(targetPath).isDirectory()
    if (isDirectory) {
      rmSync(targetPath, { recursive: true, force: true })
    }
  }

  cpSync(sourcePath, targetPath, { force: true, recursive: true })
}

console.log('Root publication files synchronized from dist/.')