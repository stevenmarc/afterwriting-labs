define(function(require) {

    var Protoplast = require('p');

    var IoModel = Protoplast.Model.extend({

        /**
         * @type {LastUsedInfo}
         */
        lastUsedInfo: {
            get: function() {
                return this._lastUsedInfo
            },
            /**
             * @param {LastUsedInfo} lastUsedInfo
             */
            set: function(lastUsedInfo) {
                this._lastUsedInfo = lastUsedInfo;
                this.lastUsedInfoLoaded = !!lastUsedInfo;
            }
        },

        /**
         * @type {Boolean}
         */
        lastUsedInfoLoaded: false
        
    });

    return IoModel;
});