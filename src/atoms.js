// atoms.js

import { atom } from 'jotai';

export const userAtom = atom(null);
export const isAuthenticatedAtom = atom((get) => !!get(userAtom));