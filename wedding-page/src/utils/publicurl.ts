export const publicUrl: string = (() => {
    const raw = process.env.REACT_APP_PUBLIC_URL || process.env.PUBLIC_URL || '/';
    return raw === '.' ? '/' : raw;
  })();