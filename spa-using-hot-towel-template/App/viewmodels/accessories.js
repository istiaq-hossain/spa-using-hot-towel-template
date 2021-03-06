﻿define(['services/logger'], function (logger) {
    var title = 'Accessories';
    var vm = {
        activate: activate,
        title: title,
        shouldShow: false
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }
    //#endregion
});