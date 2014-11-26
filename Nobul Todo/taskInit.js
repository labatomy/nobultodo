(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */
    var adapter = new LocalStorageAdapter();
    adapter.initialize().done(function () {
        console.log("Data adapter initialized");
    });

}());


