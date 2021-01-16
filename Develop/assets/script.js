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

// gives you the current day of the week & month & day
function getHeaderDate() {
  var currentHeaderDate = moment().format('dddd, MMMM Do');
  $('#currentDay').text(currentHeaderDate);
}

// saves the reminders in the day array in a string
function saveReminders() {
  localStorage.setItem('theDay', JSON.stringify(theDay));
}

//
function displayReminders() {
  theDay.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
  });
}

// local storage function
function init() {
  var storedDay = JSON.parse(localStorage.getItem('theDay'));

  if (storedDay) {
    theDay = storedDay;
  }

  saveReminders();
  displayReminders();
}

// fetches header date
getHeaderDate();

// creates the visuals for the scheduler body
theDay.forEach(function (thisHour) {
  var hourRow = $('<form>').attr({
    class: 'row',
  });
  $('.container').append(hourRow);

  // crates time field
  var hourField = $('<div>').text(`${thisHour.hour}${thisHour.meridiem}`).attr({
    class: 'col-md-2 hour',
  });

  var hourPlan = $('<div>').attr({
    class: 'col-md-9 description p-0',
  });

  // appends text area and links the class attributes based on time of day from momentjs
  var planData = $('<textarea>');
  hourPlan.append(planData);
  planData.attr('id', thisHour.id);
  if (thisHour.time < moment().format('HH')) {
    planData.attr({
      class: 'past',
    });
  } else if (thisHour.time === moment().format('HH')) {
    planData.attr({
      class: 'present',
    });
  } else if (thisHour.time > moment().format('HH')) {
    planData.attr({
      class: 'future',
    });
  }

  var saveButton = $("<i class='far fa-save fa-lg'></i>");
  // attributes for save buttons
  var savePlan = $('<button>').attr({
    class: 'col-md-1 saveBtn',
  });
  savePlan.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);
});

// fetches local storage data
init();

// save button click function
$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  var saveIndex = $(this)
    .siblings('.description')
    .children('.future')
    .attr('id');
  theDay[saveIndex].reminder = $(this)
    .siblings('.description')
    .children('.future')
    .val();

  saveReminders();
  displayReminders();
});
