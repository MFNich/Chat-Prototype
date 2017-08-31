(function() {
  function HomeCtrl(Room, Message, UsernameLogin) {
    this.rooms = Room.all
    this.formOpen = null
    this.createRoom = Room.add
    this.createUsername = UsernameLogin.createUsername;
    this.currentRoom = null;
    this.currentUser = UsernameLogin.getUser;

    this.setCurrentRoom = function (room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }


    this.sendMessage = function () {
      this.newMessage.roomId = this.currentRoom.$id;
      this.newMessage.username = this.currentUser();
      Message.send(this.newMessage);
    }
  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ['Room', 'Message', 'UsernameLogin', HomeCtrl]);
})();
