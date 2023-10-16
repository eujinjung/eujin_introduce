window.onload = function() {
    updateCalendar();
};

function updateCalendar() {
    var monthSelect = document.getElementById("monthSelect");
    var selectedMonth = parseInt(monthSelect.value);
    var calendarContainer = document.getElementById("calendar");

    
    calendarContainer.innerHTML = "";


    var daysInMonth = getDaysInMonth(2023, selectedMonth);

    
    var startingDay = getStartingDay(2023, selectedMonth);

    
    var calendarTable = document.createElement("table");

   
    var caption = document.createElement("caption");
    caption.textContent = "2023 " + getMonthName(selectedMonth);
    calendarTable.appendChild(caption);

    
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var headerRow = document.createElement("tr");
    for (var i = 0; i < daysOfWeek.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = daysOfWeek[i];
        headerRow.appendChild(headerCell);
    }
    calendarTable.appendChild(headerRow);


    var currentDay = 1;
    for (var row = 0; row < 6; row++) {
        var tableRow = document.createElement("tr");

        for (var col = 0; col < 7; col++) {
            var tableCell = document.createElement("td");


            if (row === 0 && col < startingDay) {
                tableCell.textContent = "";
            } else if (currentDay > daysInMonth) {
                break;
            } else {
                tableCell.textContent = currentDay;
                currentDay++;
            }

            tableRow.appendChild(tableCell);
        }

        calendarTable.appendChild(tableRow);
    }

    calendarContainer.appendChild(calendarTable);
}


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getStartingDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
}


function getMonthName(month) {
    var monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    return monthNames[month - 1];
}