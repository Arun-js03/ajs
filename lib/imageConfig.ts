const DEFAULT_PATH = "/zinavo";

// Precompute basePath for server & client (avoids getter recalculation)
const rawBasePath = process.env.NEXT_PUBLIC_IMAGE_PATH?.replace(/\/$/, "");
const isBrowser = typeof window !== "undefined";
const computedBasePath = rawBasePath || (isBrowser ? "" : DEFAULT_PATH);

// Determine if basePath is remote
const isRemoteBase =
  computedBasePath.startsWith("http://") ||
  computedBasePath.startsWith("https://");

// Ensure basePath always starts with "/" if local
const normalizedBasePath = isRemoteBase
  ? computedBasePath
  : computedBasePath
    ? computedBasePath.startsWith("/")
      ? computedBasePath
      : `/${computedBasePath}`
    : DEFAULT_PATH;

export const imageConfig = {
  basePath: normalizedBasePath,

  url(path?: string | null): string {
    if (!path || typeof path !== "string" || !path.trim()) return DEFAULT_PATH;

    // External URLs pass-through
    if (path.startsWith("http://") || path.startsWith("https://")) return path;

    // Clean leading slash
    const cleanPath = path[0] === "/" ? path.slice(1) : path;

    // Avoid double slashes
    return `${normalizedBasePath}${normalizedBasePath.endsWith("/") ? "" : "/"}${cleanPath}`;
  },

  nextImageSrc: {
    remote: isRemoteBase ? normalizedBasePath : DEFAULT_PATH,
    local:
      !isRemoteBase && normalizedBasePath
        ? normalizedBasePath.replace(/^\//, "")
        : DEFAULT_PATH,
  },
};
