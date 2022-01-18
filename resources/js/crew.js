const crew = [
    {
      name: "Douglas Hurley",
      images: "crew/image-douglas-hurley.png",
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      displayClass: "douglas1",
    },
    {
      name: "Mark Shuttleworth",
      images:"crew/image-mark-shuttleworth.png",
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      displayClass: "mark1",
    },
    { 
      name: "Victor Glover",
      images: "crew/image-victor-glover.png", 
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      displayClass: "victor1",
    },
    {
      name: "Anousheh Ansari",
      images: "crew/image-anousheh-ansari.png",
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      displayClass: "ansari1",
    }
  ];

  let CREW =""
  let crewLength = crew.length;
  for(let i = 0; i <= crewLength -1; i++)
  {
    CREW +=  `
    <main class="space-container  ${crew[i].displayClass} ">
        
    <div >
        <p class="moon-text3"> <span class="span01">02  </span> MEET YOUR CREW</p>   
        <div class="crew-content">
           
            <P class="crew-text1">${crew[i].role}</P>
            <P class="crew-text2">${crew[i].name}</P>
            <P class="crew-text3">
            ${crew[i].bio}
            </P>

             <P class="crew-btn"> <span onclick = "douglas()"><i class="fas fa-circle"></i></span> <span onclick = "mark()"><i class="fas fa-circle"></i></span> <span onclick="victor()"><i class="fas fa-circle"></i></span>  <span onclick="ansari()"><i class="fas fa-circle"></i></span>    </P>
       

        </div>
     
    </div>
    <div>
    <img src=" ${crew[i].images}" alt="the crew" class="image-in-crew">
         
    </div>


</main>`
  }

  document.querySelector('#showCrew').innerHTML = CREW;
  function douglas()
  {
    let Douglas = document.querySelector('.douglas1');
    let Mark = document.querySelector('.mark1');
    let Victor = document.querySelector('.victor1');
    let Ansari = document.querySelector('.ansari1');
    Douglas.style.display = "grid"
    Mark.style.display = "none"
    Victor.style.display = "none"
    Ansari.style.display = "none"
  }
  function mark()
  {
    let Douglas = document.querySelector('.douglas1');
    let Mark = document.querySelector('.mark1');
    let Victor = document.querySelector('.victor1');
    let Ansari = document.querySelector('.ansari1');
    Douglas.style.display = "none"
    Mark.style.display = "grid"
    Victor.style.display = "none"
    Ansari.style.display = "none"
  }
  function victor()
  {
    let Douglas = document.querySelector('.douglas1');
    let Mark = document.querySelector('.mark1');
    let Victor = document.querySelector('.victor1');
    let Ansari = document.querySelector('.ansari1');
    Douglas.style.display = "none"
    Mark.style.display = "none"
    Victor.style.display = "grid"
    Ansari.style.display = "none"
  }
  function ansari()
  {
    let Douglas = document.querySelector('.douglas1');
    let Mark = document.querySelector('.mark1');
    let Victor = document.querySelector('.victor1');
    let Ansari = document.querySelector('.ansari1');
    Douglas.style.display = "none"
    Mark.style.display = "none"
    Victor.style.display = "none"
    Ansari.style.display = "grid"
  }



  