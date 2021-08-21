const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
];

export const transformDate = (date) => {
  const splitDate = date.split(' ');
  const chunk = splitDate[0].split('-');
  const day = chunk[2];
  const month = chunk[1];
  const monthName = months[month - 1];
  const year = chunk[0];

  return `${day} ${monthName} ${year}`;
};
