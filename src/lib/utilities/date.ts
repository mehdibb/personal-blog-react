export function formatDate(date: string): {
  monthNumber: string;
  monthLetter: string;
  day: string;
  year: string;
} {
  const day = date.split('-')[2].slice(0, 2);

  console.log(date, day);
  
  const monthNumber = date.split('-')[1];
  let monthLetter: string;
  
  switch (monthNumber) {
    case '01':
      monthLetter = 'January';
      break;
    case '02':
      monthLetter = 'February';
      break;
    case '03':
      monthLetter = 'March';
      break;
    case '04':
      monthLetter = 'April';
      break;
    case '05':
      monthLetter = 'May';
      break;
    case '06':
      monthLetter = 'June';
      break;
    case '07':
      monthLetter = 'July';
      break;
    case '08':
      monthLetter = 'August';
      break;
    case '09':
      monthLetter = 'September';
      break;
    case '10':
      monthLetter = 'October';
      break;
    case '11':
      monthLetter = 'November';
      break;
    case '12':
      monthLetter = 'December';
      break;
    default:
      monthLetter = 'Unknown Month';
  }

  const year = date.split('-')[0];
  
  return {
    day,
    monthNumber,
    monthLetter,
    year,
  }
}