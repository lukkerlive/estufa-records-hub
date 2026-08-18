export function soundcloudEmbedUrl(url: string, options?: { height?: number }) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23d9c79a&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`;
}
