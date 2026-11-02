import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('metaPixel', () => {
  let pixel;

  beforeEach(async () => {
    vi.resetModules();
    globalThis.window = { fbq: vi.fn() };
    pixel = await import('./metaPixel.js');
  });

  afterEach(() => {
    delete globalThis.window;
  });

  it('mengirim PageView sekali per path', () => {
    pixel.trackPageView('/');
    pixel.trackPageView('/');
    pixel.trackPageView('/blog');
    pixel.trackPageView('/');
    expect(window.fbq).toHaveBeenCalledTimes(3);
    expect(window.fbq).toHaveBeenCalledWith('track', 'PageView');
  });

  it('mengirim Lead dengan sumber tombol', () => {
    pixel.trackLead('order_form');
    expect(window.fbq).toHaveBeenCalledWith('track', 'Lead', { content_name: 'order_form' });
  });

  it('tidak melakukan apa-apa saat Pixel belum dimuat', () => {
    globalThis.window = {};
    expect(() => {
      pixel.trackPageView('/');
      pixel.trackLead('faq');
    }).not.toThrow();
  });

  it('mengenali link WhatsApp', () => {
    expect(pixel.isWhatsAppLink('https://wa.me/62881080715967?text=Halo')).toBe(true);
    expect(pixel.isWhatsAppLink('https://www.instagram.com/jokodingg/')).toBe(false);
    expect(pixel.isWhatsAppLink(null)).toBe(false);
  });
});
