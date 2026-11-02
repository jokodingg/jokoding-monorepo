import { describe, expect, it } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('format tanggal Indonesia', () => {
    expect(formatDate('2026-11-02')).toBe('2 November 2026');
  });

  it('tidak bergeser hari karena zona waktu', () => {
    expect(formatDate('2026-01-01')).toBe('1 Januari 2026');
  });
});
