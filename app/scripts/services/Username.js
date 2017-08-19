(function() {
  function BlocChatCookies($cookies) {

    this.createUsername = function () {
      $cookies.put('blocChatCurrentUser', this.username);
      $cookies.blocChatCurrentUser = currentUser;
    }
    return BlocChatCookies;
}
  angular
    .module('blocChat')
    .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();
