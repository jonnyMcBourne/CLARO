
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

export const getStringTail = (from: string = '20230331000000', to: string = '20230401000000', quantity: string='20') =>
{
  return `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=${from}&date_to=${to}&quantity=${quantity.toString()}`
}

  export const formatHour = (date: Date) =>
  {
    return `${ date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2 }) }:${ date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2 })}:00`
  }

  export const formatTime=(timeString:string='') =>{
  const [hours, minutes] = timeString.split(':');
  return `${hours} Hrs ${minutes} min`;
}


export const getDatesForQuery = (quantity:string) =>
{

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = (now.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const currentDay = now.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2 });
  const currentHour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours().toString();
  const currentDate = `${ currentYear }${ currentMonth }${ currentDay }${ (parseInt(currentHour) - 1).toString().padStart(2, "0") }0000`;
  const modifiedDate = `${ currentYear }${ currentMonth }${ currentDay }${ (parseInt(currentHour) + 4).toString().padStart(2, "0") }3000`;
  return { currentDate, modifiedDate, quantity }
}