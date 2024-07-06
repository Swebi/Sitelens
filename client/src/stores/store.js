import { writable } from "svelte/store";

export const url = writable("https://tailwindcss.com/docs/screens");
export const capturedImage = writable("");
export const home = writable(true);

export const height = writable(844); // 900
export const width = writable(390); // 1440

export const device = writable("mac");
