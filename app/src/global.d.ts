export {}; // Ensure this file is treated as a module

declare global {
  interface Window {
    google: typeof import("google.maps");
  }
}
