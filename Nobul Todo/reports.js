
function TaskList() {
    var retrievedObject = JSON.parse(window.localStorage.getItem('Task'));
    $("#ulTasks").empty();
    var todaysDate = getDate();

    $("#ulTasks").append("<li data-role='list-divider'>All Tasks</li>");
    for (var i = 0; i < retrievedObject.length; i++) {
        var object = retrievedObject[i];
        var html = "<li><a href='#dataPg' onclick='GetTask(" + object.id + ")'><h2>" + object.title + "</h2><p><b>" + object.status + "</b> " + object.description + "</p><p class='ui-li-aside'><strong>" + object.date + "</strong></p></a></li>"
        $("#ulTasks").append(html);
    }
    $("#ulTasks").listview('refresh');
};



function TaskReport(report) {
    var retrievedObject = JSON.parse(window.localStorage.getItem('Task'));
    $("#ulTasks").empty();
    var todaysDate = getDate();

    $("#ulTasks").append("<li data-role='list-divider'>" + report + "</li>");
    for (var i = 0; i < retrievedObject.length; i++) {
        var object = retrievedObject[i];
        if (object.status == report) {
            var html = "<li><a href='#dataPg' onclick='GetTask(" + object.id + ")'><h2>" + object.title + "</h2><p><b>" + object.status + "</b> " + object.description + "</p><p class='ui-li-aside'><strong>" + object.date + "</strong></p></a></li>"
            $("#ulTasks").append(html);
        }
    }
    $("#ulTasks").listview('refresh');
};


function DueToday(report) {
    var retrievedObject = JSON.parse(window.localStorage.getItem('Task'));
    $("#ulTasks").empty();
    var todaysDate = getDate();

    $("#ulTasks").append("<li data-role='list-divider'>" + report + "</li>");
    for (var i = 0; i < retrievedObject.length; i++) {
        var object = retrievedObject[i];
        if (object.date == todaysDate) {
            var html = "<li><a href='#dataPg' onclick='GetTask(" + object.id + ")'><h2>" + object.title + "</h2><p><b>" + object.status + "</b> " + object.description + "</p><p class='ui-li-aside'><strong>" + object.date + "</strong></p></a></li>"
            $("#ulTasks").append(html);
        }
    }
    $("#ulTasks").listview('refresh');
};


function DueTomorrow(report) {
    var retrievedObject = JSON.parse(window.localStorage.getItem('Task'));
    $("#ulTasks").empty();
    var todaysDate = getDate();

    $("#ulTasks").append("<li data-role='list-divider'>" + report + "</li>");
    for (var i = 0; i < retrievedObject.length; i++) {
        var object = retrievedObject[i];
        console.log("DueTomorrow" + dueDateCalculator(1));
        if (object.date == dueDateCalculator(1)) {
            var html = "<li><a href='#dataPg' onclick='GetTask(" + object.id + ")'><h2>" + object.title + "</h2><p><b>" + object.status + "</b> " + object.description + "</p><p class='ui-li-aside'><strong>" + object.date + "</strong></p></a></li>"
            $("#ulTasks").append(html);
        }
    }
    $("#ulTasks").listview('refresh');
};



function Statistics() {
    // ... How manys Complete, In Progress, etc
};