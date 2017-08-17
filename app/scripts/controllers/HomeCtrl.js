(function() {
  function HomeCtrl(Room, Message) {
    this.rooms = Room.all
    this.formOpen = null
    this.createRoom = Room.add
    this.currentRoom = null;

    this.setCurrentRoom = function (room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    }

  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', ["Room", "Message", HomeCtrl]);
})();
