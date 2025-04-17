const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let date = new Date();

function renderCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  calendarDays.innerHTML = "";
  monthYear.innerText = `${date.toLocaleString("default", { month: "long" })} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const isToday = 
      i === today.getDate() && 
      month === today.getMonth() && 
      year === today.getFullYear();

    calendarDays.innerHTML += `<div class="${isToday ? 'today' : ''}">${i}</div>`;
  }
}

prev.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

next.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();
