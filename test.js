//current energy consumption update picture
function update_data(id, number) {
    $("#"+String(id)).text(String(number));
    console.log("update data!!!!");

}
$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
      var config = {
          apiKey: "AIzaSyCZpAgvsJjoOVdNyDAlFDgE1n3HwSlb5Sw",
          authDomain: "thesis-650a3.firebaseapp.com",
          databaseURL: "https://thesis-650a3.firebaseio.com",
          projectId: "thesis-650a3",
          storageBucket: "thesis-650a3.appspot.com",
          messagingSenderId: "210862510550"
        };
  firebase.initializeApp(config);
    var ref = firebase.database().ref();
    var time_5bus_BF_Ref = firebase.database().ref("PJM_5_bus_PIPS");
    var time_5bus_HBF_Ref = firebase.database().ref("PJM_5_bus_heuristic_PIPS");
    var time_118bus_BF_Ref = firebase.database().ref("118_bus_PIPS");
    var time_118bus_HBF_Ref = firebase.database().ref("118_bus_heuristic_PIPS");
    timeRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else {
           update_data(data.key, parseInt(data.val()))
        }
    });



});
