var theDay = [
  {
    id: '0',
    hour: '09',
    time: '09',
    meridiem: 'am',
    reminder: '',
  },
  {
    id: '1',
    hour: '10',
    time: '10',
    meridiem: 'am',
    reminder: '',
  },
  {
    id: '2',
    hour: '11',
    time: '11',
    meridiem: 'am',
    reminder: '',
  },
  {
    id: '3',
    hour: '12',
    time: '12',
    meridiem: 'pm',
    reminder: '',
  },
  {
    id: '4',
    hour: '01',
    time: '13',
    meridiem: 'pm',
    reminder: '',
  },
  {
    id: '5',
    hour: '02',
    time: '14',
    meridiem: 'pm',
    reminder: '',
  },
  {
    id: '6',
    hour: '03',
    time: '15',
    meridiem: 'pm',
    reminder: '',
  },
  {
    id: '7',
    hour: '04',
    time: '16',
    meridiem: 'pm',
    reminder: '',
  },
  {
    id: '8',
    hour: '05',
    time: '17',
    meridiem: 'pm',
    reminder: '',
  },
];

function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $('#currentDay').text(currentHeaderDate);
}

function saveReminders() {
  localStorage.setItem('theDay', JSON.stringify(theDay));
}

function displayReminders() {
  theDay.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

function init() {
  var localDay = JSON.parse(localStorage.getItem('theDay'));

  if (localDay) {
    theDay = localDay;
  }

  saveReminders();
  displayReminders();
}

getHeaderDate();
