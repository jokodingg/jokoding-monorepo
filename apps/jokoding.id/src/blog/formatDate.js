// timeZone UTC supaya hasil build (UTC) dan browser pembaca selalu menampilkan hari yang sama.
const formatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatDate = (isoDate) => formatter.format(new Date(`${isoDate}T00:00:00Z`));
