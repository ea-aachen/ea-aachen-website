const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(path = '/') {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  if (path === '/') return base || '/';
  return base + (path.startsWith('/') ? path : '/' + path);
}
