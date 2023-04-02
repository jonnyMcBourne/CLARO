

export const getInitialhoursArray = (initialHour=0, finishHour=4) =>
{
  if (finishHour < initialHour)
  {
    throw Error('initialHour cannot be smaller than finishHour')
  }
  const minutesPerHalfHour = 30;
  const minutesInHour = 60;
  const initMinutes = (initialHour * minutesInHour)+30;
  const finishMinutes = finishHour * minutesInHour;
  const halfHours = [];

  for (let i = initMinutes; i <= finishMinutes; i += minutesPerHalfHour) {
    const hours = Math.floor(i / minutesInHour);
    const minutes = (i % minutesInHour).toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    halfHours.push(time);
  }
  return halfHours;
}

export const getStringTail = (from: string = '20230331000000', to: string = '20230401000000', quantity: number=50) =>
{
  return `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${from}&date_to=${to}&quantity=${quantity.toString()}`
}