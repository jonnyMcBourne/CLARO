export const hours: string[] = [];
for (let i = 0; i < 48; i++)
{
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  const time = `${ hour.toString().padStart(2, '0') }:${ minute }`;
  hours.push(time);
}