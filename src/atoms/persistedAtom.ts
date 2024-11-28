// src/atoms/persistedAtom.ts
import { atomWithStorage } from 'jotai/utils';

export const isGridVisibleAtom = atomWithStorage('isGridVisible', true);