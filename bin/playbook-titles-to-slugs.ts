#!/usr/bin/env node

import playbooks from '../src/data/playbooks.json' assert { type: 'json' }
import { toSlug } from '../src/lib/utils'

const out = playbooks.map((pb) => ({
  category: pb.title,
  description: pb.description,
  books: pb.books.map(({ title }) => toSlug(title))
}))

console.debug(JSON.stringify(out, null, 2))