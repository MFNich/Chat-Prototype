(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);
    Message.all = messages;

    Message.getByRoomId = function (roomId) {
      console.log($firebaseArray(ref.orderByChild('roomId').equalTo(roomId)));
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    return Message;
  }

  angular
  .module('blocChat')
  .factory('Message', ['$firebaseArray', Message]);
})();
