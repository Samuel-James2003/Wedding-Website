export const AppPaths = {
  publicUrl: (() => {
    const raw =
      process.env.REACT_APP_PUBLIC_URL || process.env.PUBLIC_URL || "/";
    return raw === "." ? "/" : raw;
  })(),

  imageUrl(relativePath: string): string {
    const path = relativePath.startsWith("/")
      ? relativePath
      : `/${relativePath}`;

    // If publicUrl is '.', return just the absolute path
    if (this.publicUrl === ".") {
      return path;
    }

    const base = this.publicUrl.endsWith("/")
      ? this.publicUrl.slice(0, -1)
      : this.publicUrl;
    return `${base}${path}`;
  },
};
