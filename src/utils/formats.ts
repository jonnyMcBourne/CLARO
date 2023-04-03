
export const getDatesArray = (initialHour: number, numHours: number) => {
  if (numHours <= 0) {
    throw Error('numHours cannot be negative or zero');
  }
  const currentDate = new Date();
  const startTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), initialHour, 0);
  const timeIncrement = 30 * 60 * 1000; // 30 minutes in milliseconds
  const datesArray = [];

  for (let i = 0; i < numHours * 2; i++) {
    const time = startTime.getTime() + i * timeIncrement;
    const date = new Date(time);
    datesArray.push(date);
  }
  
  return datesArray;
};

export const getStringTail = (from: string = '20230331000000', to: string = '20230401000000', quantity: number=20) =>
{
  return `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${from}&date_to=${to}&quantity=${quantity.toString()}`
}