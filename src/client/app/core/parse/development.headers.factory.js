(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('parseheaders', parseheaders);

  parseheaders.$inject = [];

  /* @ngInject */
  function parseheaders() {

    return {
      mxpostapi: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'K6fafnegdVE32PXOMrOELlS70ZHxLqcHiQTA8Tq6',
        'X-Parse-REST-API-Key': 'g15AcAKamIKsgxE4nqtA2KlSMc5Tk8rdkq0l1ZYl'
      },
      restKeys: {
        'Content-Type': 'application/json',
        'X-Parse-Application-Id': 'evDT2lYItdWafYh4i6QeGqXuGjcmliKZ3aYy8HJC',
        'X-Parse-REST-API-Key': 'GLvZddd1ndtawzbBQsodelB6dUlKQSUmHApUMlPQ'
      },
      javascriptKeys:{
        'applicationID' : 'evDT2lYItdWafYh4i6QeGqXuGjcmliKZ3aYy8HJC',
        'javascriptKey':'nhEaWrCi2AlnoUYBUHsG3NFAUZVqAh1YAG1gPlhe'

      },
      conektaKeys:{
        'public': 'key_D3rssf3Fohyq4yhUCRjhqjQ'
      },
      facebook:{
        'appId': '461654980680345'
      }
    };
  }
})();
