// This ensures the public URL is correctly set for different environments
export const publicUrl: string = (() => {
  const raw = process.env.PUBLIC_URL ?? "/";
  return raw === "." ? "/" : raw;
})();
