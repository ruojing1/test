sap.ui.define([], function(){
    return{
         formatColor: function(sValue) {
                return (sValue.toLowerCase() === 'm') ? 'blue' : 'red';
            }
    }

});