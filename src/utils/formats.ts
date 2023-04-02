export const hours: string[] = [];
for (let i = 0; i < 48; i++)
{
  const hour = Math.floor(i / 2);
  const minute = i % 2 === 0 ? '00' : '30';
  const time = `${ hour.toString().padStart(2, '0') }:${ minute }`;
  hours.push(time);
}

export const getStringTail = (from: string = '20230331000000', to: string = '20230401000000', quantity: number=50) =>
{
  return `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${from}&date_to=${to}&quantity=${quantity.toString()}`
}