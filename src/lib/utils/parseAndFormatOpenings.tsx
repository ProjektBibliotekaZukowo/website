export const parseAndFormatOpenings = (openFrom: string, openTo: string) => {
  const from = new Date(openFrom);
  const to = new Date(openTo);

  const timeFrom = from.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  const timeTo = to.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
  return `${timeFrom}-${timeTo}`;
};
