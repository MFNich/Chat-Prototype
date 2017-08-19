(function() {
  function HomeCtrl(Room, Message, BlocChatCookies, $cookies) {
    this.rooms = Room.all
    this.formOpen = null
    this.createRoom = Room.add
    this.currentRoom = null;
    var currentUser = $cookies.get('blocChatCurrentUser');

    this.setCurrentRoom = function (room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }
  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', 'BlocChatCookies', '$cookies', HomeCtrl]);
})();
