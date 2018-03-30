//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
}
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + String(Math.floor(Math.random() * 10))).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


$( document ).ready(function() {
    console.log("starting document!!!!");


    $(function ($){
        $("#firebasebutton").click(function (evt){
          console.log("firebasebutton was clicked");
          writeUserData('pornchai', 'pornchai', 'chai@ait', 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/members/file-4db2c8a97263f27dfa98798dc4c5baaa.jpg')

        });
    });
    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
        apiKey: "AIzaSyB6bPYpJP6GhJ448GwCoxk3Dxw130WANC4",
        authDomain: "python-tranining-555.firebaseapp.com",
        databaseURL: "https://python-tranining-555.firebaseio.com",
        projectId: "python-tranining-555",
        storageBucket: "python-tranining-555.appspot.com",
        messagingSenderId: "567905877637"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))
           //writeUserData('pornchai', 'pornchai', 'chai@ait', 'https://bnk48-www-html.s3-ap-southeast-1.amazonaws.com/uploads/members/file-4db2c8a97263f27dfa98798dc4c5baaa.jpg')
        }
    });

});
