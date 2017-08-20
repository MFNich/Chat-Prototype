(function() {
  function UsernameLogin($cookies) {
    var UsernameLogin = {};
    UsernameLogin.createUsername = function(username) {
      $cookies.put('blocChatCurrentUser', username);
      // $cookies.blocChatCurrentUser = currentUser;
    }
    UsernameLogin.getUser = function(){
      return $cookies.get('blocChatCurrentUser');
    }
    return UsernameLogin;
  }
  angular
  .module('blocChat')
  .factory('UsernameLogin', ['$cookies', UsernameLogin]);
})();
