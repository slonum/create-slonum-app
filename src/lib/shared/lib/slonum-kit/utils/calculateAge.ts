export function calculateAge(birthDate: string) {
  if (!birthDate) return null;
  const ageDifMs =
    Date.now() - Date.parse(birthDate.split('.').reverse().join('-'));
  const ageDate = new Date(ageDifMs);
  const year = Math.abs(ageDate.getUTCFullYear() - 1970);
  return year;
}

export const yearsCategoryDraw = [
  { id: 0, title: 'Все:', max: 18, min: 0 },
  { id: 1, title: '0-3:', max: 3, min: 0 },
  { id: 2, title: '4-5:', max: 5, min: 4 },
  { id: 3, title: '6-7:', max: 7, min: 6 },
  { id: 4, title: '8-10:', max: 10, min: 8 },
  { id: 5, title: '11-14:', max: 14, min: 11 },
  { id: 6, title: '15-18:', max: 18, min: 15 },
];

export function getAgeCompetition(birthDate: string) {
  const year = calculateAge(birthDate);
  if (year === null) return { year: null, category: null };
  const find = yearsCategoryDraw.find(
    (y, ind) => ind !== 0 && y.max >= year && y.min <= year,
  );
  const category = find ? find.id : 7;
  return { year, category };
}
