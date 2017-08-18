(function() {
  function HomeCtrl(Room, Message, $cookies) {
    this.rooms = Room.all
    this.formOpen = null
    this.createRoom = Room.add
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.setCurrentRoom = function (room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }

    this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);

        }

  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
