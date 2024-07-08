import { writable } from "svelte/store";

export const url = writable("");
export const capturedImage = writable("");
export const home = writable(true);

export const height = writable(900); // 900
export const width = writable(1440); // 1440

export const device = writable("mac");
