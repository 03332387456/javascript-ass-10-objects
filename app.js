alert("Enter roll no between 369941-369951 ")

function checkrollno() {
 
    var studentsarray = [
              {
                rollnumber: 369941,
              },
              {
                rollnumber: 369942,
              },
              {
                rollnumber: 369943,
              },
              {
                rollnumber: 369944,
              },
              {
                rollnumber: 369944,
              },
              {
                rollnumber: 369945,
              },
              {
                rollnumber: 369946,
              },
              {
                rollnumber: 369947,
              },
              {
                rollnumber: 369948,
              },
              {
                rollnumber: 369949,
              },
              {
                rollnumber: 369950,
              },
              {
                rollnumber: 369951,
              },
        
        
            ];
  
    var inp = document.getElementById("inp").value;
    var found = false;
  
    for (let i = 0; i < studentsarray.length; i++) {
      if (studentsarray[i].rollnumber == inp) {
        found = true;
        break;
      }
    }
  
    if (found) {
      alert("Found");
    } else {
      alert("Not found");
    }

    var inp = document.getElementById("inp").value = "";
   
 


  }
  
  