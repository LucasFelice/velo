// playwright/support/global-teardown.ts
import { db } from './database/database'

export default async function globalTeardown() {
  await db.destroy()
}