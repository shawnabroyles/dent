
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');


  if (calendarEl){
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // plugins: [ 'dayGrid' ]
    });

    calendar.render();

    }
  console.log("test");
});

