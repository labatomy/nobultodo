$("#divTaskNav").empty();
$("#divTaskNav").append("<a href='#mainPg' class='ui-btn ui-btn-inline ui-corner-all' onclick='Update(" + id + ")' style='color: white; background-color: rgb(0, 102, 135); text-shadow: 0px 0px #000; '>Save</a>");
$("#divTaskNav").append("<a href='#mainPg' class='ui-btn ui-btn-inline ui-corner-all' onclick='Delete(" + id + ")' style='color: white; background-color: rgb(214, 44, 26); text-shadow: 0px 0px #000; '>Delete</a>");
$("#divTaskNav").trigger("create");
$('#divTaskNav:visible').listview('refresh');
$("#dueDateAdv").trigger("create");
$("#status").trigger("create");
$("input[type='radio']").checkboxradio("refresh");
//$('input:radio[name="dueDateAdv"]').checkboxradio("refresh");


//------------------------------------------------

// Some preliminary data for testing
//var Task = [{ "id": 1, title: "Test 1", status: "In Progress", date: "2014-04-19", description: "test" },
//                { "id": 2, title: "Test 2", status: "Complete", date: "2014-04-28", description: "test" },
//                { "id": 3, title: "Test 3", status: "In Progress", date: "2014-04-19", description: "test" },
//                { "id": 4, title: "Test 4", status: "In Progress", date: "2014-04-19", description: "test" },
//                { "id": 5, title: "Test 5", status: "Complete", date: "2014-04-17", description: "test" },
//                { "id": 6, title: "Test 6", status: "Pending", date: "2014-04-28", description: "test" }
//];
//window.localStorage.setItem('Task', JSON.stringify(Task));
//console.log("Task data initialized");
//------------------------------------------------

//function dueDateCalculator(x) {
    
//    var d = new Date();
//    //if (x > 7) {
//    //    //var month = (d.getMonth() + 1) + 1;
//    //    var todaysDate = d.addMonths(1);
//    //    //var day = d.getDate();
//    //    //var todaysDate = d.getFullYear() + '-' + (('' + month).length < 2 ? '0' : '') + month + '-' + (('' + day).length < 2 ? '0' : '') + day;
//    //} else {
//    //    var month = d.getMonth() + 1;
//    //    var day = d.getDate() + x;
//    //    var todaysDate = d.getFullYear() + '-' + (('' + month).length < 2 ? '0' : '') + month + '-' + (('' + day).length < 2 ? '0' : '') + day;
//    //}
//    var todaysDate = (d.setFullYear(d.getFullYear()));
//    console.log("dueDateCalculator: " + todaysDate);
//    $('#duedate').val(todaysDate);
//    return todaysDate;
//};


//// from datejs API
//Date.isLeapYear = function (year) {
//    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
//};
//Date.getDaysInMonth = function (year, month) {
//    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
//};
//Date.prototype.isLeapYear = function () {
//    return Date.isLeapYear(this.getFullYear());
//};
//Date.prototype.getDaysInMonth = function () {
//    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
//};
//Date.prototype.addMonths = function (value) {
//    var n = this.getDate();
//    this.setDate(1);
//    this.setMonth(this.getMonth() + value);
//    this.setDate(Math.min(n, this.getDaysInMonth()));
//    console.log("addMonths: " + this);
//    return this;
//};

//------------------------------------------------


    $(document).ready(function () {

        console.log("ready...");

        //<a href="#mainPg" id="UpdateTask">Update</a>
        //document.getElementById("UpdateTask").addEventListener("click", function () {
        //    Update(1);
        //}, false);

        //<a href="#mainPg" class="ui-btn ui-btn-inline" onclick="Save()">Save</a>
        //divTaskNav
        //document.getElementById("UpdateTask").addEventListener("click", function () {
        //    Update(1);
        //}, false);

        //$("#getinfo").click(function () {
        //    $("input[name*=radio-choice-]:checked").each(function () {
        //        alert($(this).val());
        //    });
        //});

    });

//------------------------------------------------
    var listCreated = false;
            
    function appendToList(){
                
        //Create the listview if not created
        if(!listCreated){
            $("#content").append("<ul id='list' data-role='listview' data-inset='true'></ul>");
            listCreated = true;
            $("#content").trigger("create");
        }
        $("#list").append("<li>Item</li>");
        $("#list").listview("refresh");
                
    }
    <a href="#" download="TodoData.txt" id="btnSave" >Export data into Excel</a>
    <a href="TodoData.txt" download>Click here to download</a>
    <input type="submit" value="Submit" data-inline="true" data-mini="true" />
    style='color: white; text-shadow: 1px 1px #000; background-color: #358753;'


































    //------------------------------------------------

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Nobul Todo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <html manifest="cache.manifest">
    <link href="jquery.mobile-1.4.5.min.css" rel="stylesheet" />
    <script src="taskLocalstorage.js"></script>
<!--    <link href="jquery.mobile.external-png-1.4.5.min.css" rel="stylesheet" />
    <link href="jquery.mobile.icons-1.4.5.min.css" rel="stylesheet" />-->
</head>
<body>



    <!-- 
        Primary Page 
        -->

        <div data-role="page" id="mainPg">

            <div data-role="header" style="overflow: hidden;" data-theme="a">
                <h3 style="font-size: 12px;">Nobul
                    <img src="1416643429_bull.png" style="margin: 0; padding: 0; height: 25px;" />
                    Todo</h3>
                <a href="#dataPg" onclick="New()">New</a>
                <a href="#optionsPg" class="ui-btn-right">Options</a>
            </div>

            <div role="main" class="ui-content">

                <ol id="ulTasks" data-role="listview" data-theme="c" data-dividertheme="d">
                    <li data-role="list-divider"></li>
                </ol>

            </div>

            <div data-role="footer">
                <ul data-role="listview" data-inset="false" data-theme="b" data-divider-theme="a" data-count-theme="a">
                    <li data-role="list-divider">Reports</li>
                    <li><a href="#mainPg" onclick="TaskList()">All</a></li>
                    <li><a href="#mainPg" onclick="TaskReport('Pending')">Pending</a></li>
                    <li><a href="#mainPg" onclick="TaskReport('In Progress')">In Progress</a></li>
                    <li><a href="#mainPg" onclick="TaskReport('Complete')">Complete</a></li>
                    <li><a href="#mainPg" onclick="DueToday('Due Today')">Due Today</a></li>
                    <li style="background-color: #999;"><a href="#aboutPg" style="background-color: #666;">About Nobul Todo</a></li>
                </ul>
            </div>

        </div>




        <!-- 
            Create/Edit Task Page 
        -->

        <div data-role="page" id="dataPg">

            <div data-role="header">
                <h3 style="font-size: 12px;">Nobul
                    <img src="1416643429_bull.png" style="margin: 0; padding: 0; height: 25px;" />
                    Todo</h3>
                <a href="#mainPg">Cancel</a>
            </div>

            <div role="main" class="ui-content" style="margin-bottom: 0px; padding-top: 0px;">

                <div data-role="navbar" id="divTaskNav" style="text-align: center;" data-inline="true"></div>

                <label for="title" style="font-size: 12px; font-weight: bold;">Title</label>
                <input name="title" id="title" value="" type="text" data-corners="false" data-mini="true">

                <fieldset data-role="controlgroup" data-corners="false" data-mini="true" data-type="horizontal">
                    <legend style="font-size: 12px; font-weight: bold;">Status</legend>
                    <input name="status" id="rdo1" value="Pending" type="radio">
                    <label for="rdo1">Pending</label>
                    <input name="status" id="rdo2" value="In Progress" type="radio">
                    <label for="rdo2">In Progress</label>
                    <input name="status" id="rdo3" value="Complete" type="radio">
                    <label for="rdo3">Complete</label>
                </fieldset>

                <label for="description" style="font-size: 12px; font-weight: bold;">Description</label>
                <textarea cols="40" rows="8" name="description" id="description" data-corners="false" data-mini="true"></textarea>

    <!--            <label for="duedate" style="font-size: 12px; font-weight: bold;">Due Date</label>
                <input name="duedate" id="duedate" value="" type="date" data-corners="false" data-mini="true" data-role="date">-->

            
                <fieldset data-role="controlgroup" data-corners="false" data-mini="true" data-type="horizontal">
                    <legend style="font-size: 12px; font-weight: bold;"> 
                        <input name="duedate" id="duedate" value="" type="date" data-corners="false" data-mini="true" data-role="date">
                        <!--<button id="duedate" style="background-color: #CCC;">.</button>-->
                    </legend>
                    <input name="dueDateAdv" id="dueDateRdo1" value="0" type="radio" onclick="dueDateCalculator(0)">
                        <label for="dueDateRdo1">Today</label>
                    <input name="dueDateAdv" id="dueDateRdo2" value="1" type="radio" onclick="dueDateCalculator(1)">
                        <label for="dueDateRdo2">Tom.</label>
                    <input name="dueDateAdv" id="dueDateRdo3" value="7" type="radio" onclick="dueDateCalculator(7)">
                        <label for="dueDateRdo3">1 Week</label>
                    <input name="dueDateAdv" id="dueDateRdo4" value="30" type="radio" onclick="dueDateCalculator(30)">
                       <label for="dueDateRdo4">1 Month</label>
                
                    <input type="hidden" id="dueDateSetCnt" value="0" />
                </fieldset>
            
            
            </div>

            <div data-role="footer">
            </div>
        </div>




        <!-- 
            Options Page 
        -->

        <div data-role="page" id="optionsPg">

            <div data-role="header">
                <h3 style="font-size: 12px;">Nobul
                    <img src="1416643429_bull.png" style="margin: 0; padding: 0; height: 25px;" />
                    Todo</h3>
                <a href="#mainPg" >Cancel</a>
                <a href="#Aboutpg" class="ui-btn-right">About</a>
            </div>

            <div role="main" class="ui-content">
                <a href="#exportPg" class="ui-btn">Export</a>
                <a href="#importPg" class="ui-btn">Import</a>
            
                <a href="#myPopupDialog" data-rel="popup" data-position-to="window" data-transition="fade" class="ui-btn">Delete All Entries</a>
                <div data-role="popup" id="myPopupDialog">
                    <div data-role="header">
                        <h1>Delete Todo List</h1>
                    </div>
                    <div data-role="main" class="ui-content">
                        <h2>This will delete all entries!</h2>
                        <a href="#" class="ui-btn" onclick="DeleteAllData()" data-rel="dialog">Delete all data!</a>
                        <a href="#" class="ui-btn ui-corner-all ui-shadow ui-btn-inline ui-btn-b ui-icon-back ui-btn-icon-left" data-rel="back">Go Back</a>
                    </div>
                </div>

            </div>

            <div data-role="footer">
            </div>
        </div>



        <!-- 
            Export
        -->

        <div data-role="page" id="exportPg">

            <div data-role="header">
                <h3 style="font-size: 12px;">Nobul
                    <img src="1416643429_bull.png" style="margin: 0; padding: 0; height: 25px;" />
                    Todo</h3>
                <a href="#mainPg">Cancel</a>
                <a href="#Aboutpg" class="ui-btn-right">About</a>
            </div>

            <div role="main" class="ui-content">

                <ol data-role="listview" data-theme="c" data-dividertheme="d">
                    <li data-role="list-divider">Save current Todo List</li>
                    <li>This button will output your data to your device.</li>
                    <li>The data will be sent to another tab. On this tab, open your broswer options and
                        click "Share". Save to DropBox or your local device. 
                    </li>
                </ol>

                <p>
                    <br /><a href="#" onclick="showJSONdata()" class="ui-btn">Click to Save</a>
                </p>


            </div>

            <div data-role="footer">
                <ul data-role="listview" data-inset="false" data-theme="b" data-divider-theme="a" data-count-theme="a">
                    <li><a href="#mainPg" onclick="">Back to main</a></li>
                </ul>
            </div>
        </div>



        <!-- 
            Import
        -->

        <div data-role="page" id="importPg">

            <div data-role="header">
                <h3 style="font-size: 12px;">Nobul
                    <img src="1416643429_bull.png" style="margin: 0; padding: 0; height: 25px;" />
                    Todo</h3>
                <a href="#mainPg">Cancel</a>
            </div>

            <div role="main" class="ui-content">

                <ol id="ul3" data-role="listview" data-theme="c" data-dividertheme="d">
                    <li data-role="list-divider">Import a Saved Todo List</li>
                    <li>
                        <p>Save data in a place that you can get to from most places, like DropBox.</p>
                    </li>
                    <li>
                        <label for="file">Select file to Import (Requires HTML5):</label>
                        <input name="file" id="file2" value="" type="file" onchange="importFile(this.files)">
                    </li>
                    <li>
                        <label for="description" style="font-size: 12px; font-weight: bold;">Paste here</label>
                        <textarea cols="40" rows="8" name="pasteJson" id="Textarea1" data-corners="false"></textarea>
                    </li>
                </ol>

                <div role="main" class="ui-content">
                    <fieldset data-role="controlgroup" data-corners="false" data-mini="true"  data-type="horizontal">
                        <legend style="font-size: 12px; font-weight: bold;">How to Import?</legend>
                        <input name="importType" id="importTypeRdo1" value="Overwrite" type="radio">
                        <label for="importTypeRdo1">Overwrite Existing Data</label>
                        <input name="importType" id="importTypeRdo2" value="Append" type="radio">
                        <label for="importTypeRdo2">Append to your current list</label>
                    </fieldset>
                </div>

            </div>

            <div data-role="footer">
                <ul data-role="listview" data-inset="false" data-theme="b" data-divider-theme="a" data-count-theme="a">
                    <li><a href="#mainPg" onclick="">Back to main</a></li>
                </ul>
            </div>
        </div>





        <!-- 
            About
        -->

        <div data-role="page" id="aboutPg">

            <div data-role="header">
                <h1>About Nobul Todo</h1>
            </div>

            <div role="main" class="ui-content">
                <p>Yet another to do list</p>
                <p>
                    Pretty dang simple.<br />
                    No registration.<br />
                    No sign in.<br />
                    All data is in your broswer.<br />
                    No one else looking at your data (unless you let them).<br />
                    ~Sean L
                </p>
            </div>

            <div data-role="footer">
                <ul data-role="listview" data-inset="false" data-theme="b" data-divider-theme="a" data-count-theme="a">
                    <li><a href="#mainPg">Back to main</a></li>
            </div>

        </div>



        <script src="jquery.js"></script>
        <script src="jquery.mobile-1.4.5.min.js"></script>
        <script src="taskInit.js"></script>
        <script src="dataoperations.js"></script>
        <script src="fileoperations.js"></script>
        <script src="reports.js"></script>

    </body>
    </html>
