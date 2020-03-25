
$(".hour").each(function() {
    $(this)
      .removeClass("present")
      .removeClass("future")
      .removeClass("past");

    var currentHour = moment().format("h");
    var dataNum = $(this).attr("data-num");
    // console.log(dataNum);
    // console.log(currentHour);

    if (dataNum < currentHour) {
      $(this).addClass("past");
    }
    if (dataNum === currentHour) {
      $(this).addClass("present");
    }

    if (dataNum > currentHour) {
      $(this).addClass("future");
    }
  });
  
  var currentDay = $("#currentDay");
  var interval = setInterval(SetTime, 1000);

  function SetTime() {
  var date = moment().format("dddd, MMMM Do YYYY, k:mm:ss");
  currentDay.innerHTML = date;
  // console.log(date);
  $("#currentDay").text(date);
  };


  var notes = getNotes();
  renderNotes();

  $(".saveBtn").on("click", function(e) {
  e.preventDefault();


  var toDoList = $(this)
  .siblings(".col-8")
  .val();
  

  var hour = $(this)
    .siblings(".col-8")
    .attr("id");
  notes[hour] = toDoList;
  // console.log(toDoList);

  localStorage.setItem("notes", JSON.stringify(notes));
  });

  

  function getNotes() {
    var notes = localStorage.getItem("notes");
    if (notes) {
      notes = JSON.parse(notes);
    } else {
      notes = {};
    }
    return notes;
  }


  function renderNotes (){
    for ( var key in notes) {
      $("#" + key).val(notes[key]);
    }
  }
