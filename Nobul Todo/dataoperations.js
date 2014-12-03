$(document).ready(function () {
    console.log("ready()...");
});
$(document).on("pageinit", "#mainPg", function (event) {
    //alert("Index Page Initialized");
    TaskList();
});
$(document).on("pageinit", "#dataPg", function (event) {
    //alert("Data Page");
});
$('#dataPg').bind('pageinit', function () {

});
$(document).on("pagebeforecreate", "#dataPg", function (event) {

});



function New() {
    console.log("New");
    $('#title').val("");
    $('#description').val("");
    $('#duedate').val(dueDateCalculator(0));
    $('input:radio[name="dueDateAdv"]').filter('[value="0"]').prop('checked', true);
    $('input:radio[name="status"]').filter('[value="Pending"]').prop('checked', true);

    $("#divTaskNav").empty();
    $("#divTaskNav").append("<a href='#mainPg' class='ui-btn ui-btn-inline ui-corner-all' onclick='Save()' style='width: 94%; color: white; text-shadow: 0px 0px #000; background-color: rgb(0, 102, 135);'>Save</a>");
    $("#divTaskNav").trigger("create");
    $('#divTaskNav:visible').listview('refresh');
};


function Save() {
    var existingEntries = JSON.parse(window.localStorage.getItem("Task"));
    if (existingEntries == null) existingEntries = [];
    var numOfElements = existingEntries.length;

    var entry = {
        "id": ++numOfElements,
        "title": $('#title').val(),
        "status": $('input[name=status]:checked').val(),
        "date": $('#duedate').val(),
        "description": $('#description').val()
    };
    window.localStorage.setItem("entry", JSON.stringify(entry));

    existingEntries.push(entry);
    window.localStorage.setItem("Task", JSON.stringify(existingEntries));
    TaskList();
};


function Delete(id) {
    var json = JSON.parse(window.localStorage.getItem("Task"));

    for (i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            json.splice(i, 1);  // At position [i] in the string, remove (1) item
        }
    }

    window.localStorage["Task"] = JSON.stringify(json);
    TaskList();
};


function Update(id) {
    var json = JSON.parse(window.localStorage.getItem("Task"));


    for (i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            json[i].title = $('#title').val();
            json[i].status = $('input[name=status]:checked').val();
            json[i].date = $('#duedate').val();
            json[i].description = $('#description').val();
        }
    }

    window.localStorage["Task"] = JSON.stringify(json);
    TaskList();
};


function GetTask(id) {

    var json = JSON.parse(window.localStorage.getItem("Task"));

    for (i = 0; i < json.length; i++) {
        if (json[i].id == id) {
            $('#title').val(json[i].title);
            $('#description').val(json[i].description);
            $('#duedate').val(json[i].date);
            $('input:radio[name="status"]').filter('[value="' + json[i].status + '"]').prop('checked', true);
            $('input:radio[name="dueDateAdv"]').prop('checked', false);
        }
    }
    
    $("#divTaskNav").empty();
    $("#divTaskNav").append("<a href='#mainPg' class='ui-btn ui-btn-inline ui-corner-all' onclick='Update(" + id + ")' style='color: white; background-color: rgb(0, 102, 135); text-shadow: 0px 0px #000; '>Save</a>");
    $("#divTaskNav").append("<a href='#mainPg' class='ui-btn ui-btn-inline ui-corner-all' onclick='Delete(" + id + ")' style='color: white; background-color: rgb(214, 44, 26); text-shadow: 0px 0px #000; '>Delete</a>");
    $("#divTaskNav").trigger("create");
    $('#divTaskNav:visible').listview('refresh');
    $("#dueDateAdv").trigger("create");
    $("#status").trigger("create");
    $("input[type='radio']").checkboxradio("refresh");
};


function DeleteAllData() {
    // window.localStorage.clear(); // This will erase all localstorage items
    window.localStorage.removeItem("Task");
    TaskList();
};


function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function getDate() {
    var d = new Date();
    var month = d.getMonth() + 1;   // january is month 0 in javascript
    var day = d.getDate();
    var todaysDate = d.getFullYear() + '-' + (('' + month).length < 2 ? '0' : '') + month + '-' + (('' + day).length < 2 ? '0' : '') + day;
    return todaysDate;
};

function dueDateCalculator(x) {
    var dat = new Date();
    dat = dat.addDays(x);
    var month = dat.getMonth(dat) + 1;
    var day = dat.getDate(dat);
    var year = dat.getFullYear(dat);
    var todaysDate = year + '-' + (('' + month).length < 2 ? '0' : '') + month + '-' + (('' + day).length < 2 ? '0' : '') + day;
    $('#duedate').val(todaysDate);
    return todaysDate;
};

Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}




