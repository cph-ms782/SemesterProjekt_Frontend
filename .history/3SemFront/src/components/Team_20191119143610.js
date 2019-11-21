import React from "react";

function Team() {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
          if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
          }
        }
      }
  const teams = ["team1", "team2", "team3"];
  console.log("Team");
  return (
    <div>
      <p>Teeeaaaam</p>
      <div class="dropdown-content" id="myDropdown">
        {
            teams.map(team => {
                return(
                <a href="#">{team}</a>
                );
            })
        }
      </div>
    </div>
  );
}

export default Team;
