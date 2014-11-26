/// ------------------------
///     File Operations
/// ------------------------
//Read from localStorage
//var strValue = JSON.stringify(localStorage.getItem("varname"));
//Write to localStorage
//localStorage.setItem("varname",JSON.parse(strValue));

function showJSONdata() {
    var data = window.localStorage.getItem("Task");
    var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
    window.open(url, '_blank');
    window.focus();
};


function importJSON() {
    console.log($('#pasteJson').val());
    var Task = $('#pasteJson').val();
    window.localStorage.setItem('Task', (Task));
};


function importFile(files) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log("API Supported");
    } else {
        console.log("API Not Supported");
        alert("Your browser does not have this ability");
        return;
    }

    for (i = 0; i < files.length; i++) {
        file = files[i]
        console.log(file)
        var reader = new FileReader()
        ret = []
        reader.onload = function (e) {
            console.log(e.target.result)
            text = e.target.result
            var Task = e.target.result
            window.localStorage.setItem('Task', (Task))
        }
        reader.onerror = function (stuff) {
            console.log("error", stuff)
            console.log(stuff.getMessage())
        }
        reader.readAsText(file) //readAsdataURL
    }
};

