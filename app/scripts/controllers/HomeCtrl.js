(function() {
  function HomeCtrl(Room) {
    this.rooms = Room.all
    this.formOpen = null
    this.createRoom = Room.add

  }

  angular
  .module('blocChat')
  .controller('HomeCtrl', [ "Room", HomeCtrl]);
})();
