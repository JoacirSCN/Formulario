/* Com switch case */
/* const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toString();

function getDayWeekText(dayWeek) {
  let dayWeekText;

  switch (dayWeek) {
    case 0:
      dayWeekText = 'Domingo';
      return dayWeekText;
    case 1:
      dayWeekText = 'Segunda-feira';
      return dayWeekText;
    case 2:
      dayWeekText = 'Terça-feira';
      return dayWeekText;
    case 3:
      dayWeekText = 'Quarta-feira';
      return dayWeekText;
    case 4:
      dayWeekText = 'Quinta-feira';
      return dayWeekText;
    case 5:
      dayWeekText = 'Sexta-feira';
      return dayWeekText;
    case 6:
      dayWeekText = 'Sabado';
      return dayWeekText;
  }
}

function getNameMonth(numberMonth) {
  let NameMonth;

  switch (numberMonth) {
    case 0:
      NameMonth = 'Janeiro';
      return NameMonth;
    case 1:
      NameMonth = 'Fevereiro';
      return NameMonth;
    case 2:
      NameMonth = 'Março';
      return NameMonth;
    case 3:
      NameMonth = 'Abril';
      return NameMonth;
    case 4:
      NameMonth = 'Maio';
      return NameMonth;
    case 5:
      NameMonth = 'Junho';
      return NameMonth;
    case 6:
      NameMonth = 'Julho';
      return NameMonth;

    case 7:
      NameMonth = 'Agosto';
      return NameMonth;
    case 8:
      NameMonth = 'Setembro';
      return NameMonth;
    case 9:
      NameMonth = 'Outubro';
      return NameMonth;
    case 10:
      NameMonth = 'Novembro';
      return NameMonth;
    case 11:
      NameMonth = 'Dezembro';
      return NameMonth;
  }
}

function zeroLeft(num) {
  return num >= 10? num : `0${num}`;
}

function creatDate(Date) {
  const dayWeek = data.getDay();
  const numberMonth = data.getMonth();

  const nameDay = getDayWeekText(dayWeek);
  const nameMonth = getNameMonth(numberMonth);

  return `${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} às ${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}`;
}
h1.innerHTML = creatDate(data); */

/* Sem switch case e a forma atual de se fazer*/
const h1 = document.querySelector('.container h1');
const date = new Date();

function zeroLeft(num) {
  return num >= 10? num : `0${num}`;
}

h1.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle: 'full'}) + 
` às ${zeroLeft(date.getHours())}:${zeroLeft(date.getMinutes())}`;