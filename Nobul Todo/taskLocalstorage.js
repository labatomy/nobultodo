var LocalStorageAdapter = function () {

    this.initialize = function () {

        var deferred = $.Deferred();

        // To handle data imports, if it's a new program, etc...
        var ProgramStatus = [{ title: "Nobul Todo", status: "First Run", date: "2014-04-19", version: "1.0" }];
        window.localStorage.setItem('ProgramStatus', JSON.stringify(ProgramStatus));
        console.log("Program data initialized");

        if (window.localStorage.getItem("Task") === null) {
            var Task = [{ "id": 1, title: "Getting Started", status: "In Progress", date: "2030-08-31", description: "Delete me..." },
                        { "id": 2, title: "Take over the world", status: "In Progress", date: "2030-08-31", description: "Delete me..." }
                        ];
            window.localStorage.setItem('Task', JSON.stringify(Task));
        }
        else {
            console.log("Existing data found.");
        }
        
        console.log("Nobul data initialized");

        deferred.resolve();
        return deferred.promise();
    }
}