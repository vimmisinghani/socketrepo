$(function() {
   var socket = io();
   var username = $("#txtname").val();
   var userId = $("#txtuserid").val();
   let userInfo = {
      username,
      userId
   }
   socket.emit('add user', userInfo)
   socket.on('testpayload', function (data) {
      let htmlVar = '<h5 style="margin:20px; margin-left:0px">payload received</h1>'+ JSON.stringify(data);
      // $("#msg_history")
      $("#payloadTxt").append(htmlVar);
   });
});