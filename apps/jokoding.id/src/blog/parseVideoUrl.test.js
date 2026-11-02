import { describe, expect, it } from 'vitest';
import { parseVideoUrl } from './parseVideoUrl';

describe('parseVideoUrl', () => {
  it('link video TikTok', () => {
    expect(parseVideoUrl('https://www.tiktok.com/@jokodingg/video/7432109876543210987?is_from_webapp=1')).toEqual({
      platform: 'tiktok',
      id: '7432109876543210987',
      embedUrl: 'https://www.tiktok.com/player/v1/7432109876543210987',
    });
  });

  it('link TikTok tanpa www', () => {
    expect(parseVideoUrl('https://tiktok.com/@jokodingg/video/123')).toMatchObject({ platform: 'tiktok', id: '123' });
  });

  it('link Reels Instagram', () => {
    expect(parseVideoUrl('https://www.instagram.com/reel/DAbc_12-x/?igsh=abc')).toEqual({
      platform: 'instagram',
      id: 'DAbc_12-x',
      embedUrl: 'https://www.instagram.com/reel/DAbc_12-x/embed/',
    });
  });

  it.each(['https://www.instagram.com/reels/DAbc12/', 'https://instagram.com/p/DAbc12'])(
    'variasi link Instagram: %s',
    (url) => {
      expect(parseVideoUrl(url)).toMatchObject({ platform: 'instagram', id: 'DAbc12' });
    },
  );

  it.each([
    'https://vm.tiktok.com/ZSabc123/',
    'https://www.youtube.com/watch?v=abc',
    'https://www.instagram.com/jokodingg/',
    'bukan link',
  ])('link tidak didukung: %s', (url) => {
    expect(parseVideoUrl(url)).toBeNull();
  });
});
