export function addResizeListener(callback: () => void): void {
  window.addEventListener("resize", callback);
  window.addEventListener("orientationchange", callback);
  window.addEventListener("touchmove", callback);
}

export function removeResizeListener(callback: () => void): void {
  window.removeEventListener("resize", callback);
  window.removeEventListener("orientationchange", callback);
  window.removeEventListener("touchmove", callback);
}

export function addFullscreenListener(callback: () => void): void {
  document.addEventListener("fullscreenchange", () => callback());

  // Listening to fullscreen change on Safari
  document.addEventListener("webkitfullscreenchange", () => callback());
}

export function checkIsFullscreen(): boolean {
  return (
    window.innerWidth === screen.width && window.innerHeight === screen.height
  );
}
