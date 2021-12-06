const technology = [
    {
      name: "LAUNCH VEHICLE",
      images:"technology/image-launch-vehicle-portrait.jpg",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      displayclass:"launch",
    },
    {
      name: "SPACEPORT",
      images:"technology/image-spaceport-portrait.jpg",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      displayclass:"spaceport",
    },
    {
      name: "SPACE CAPSULE",
      images: "technology/image-space-capsule-portrait.jpg",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      displayclass:"capsule",
    }
  ];

  let tech = ""
  let techHolder = technology.length;
  for(let i = 0; i <= techHolder -1; i++)
  {
      tech +=   `
      <main class="space-container ${technology[i].displayclass}">
            <div>
                <p class="moon-text3"> <span class="span01">03</span> SPACE LAUNCH 101</p>   

                <div class="technology-content">
                   <div class="tech-numbering">
                       <p class="para-numb1" onclick="numb1()"> 1</p>
                       <p class="para-numb2" onclick="numb2()"> 2</p>
                       <p class="para-numb3" onclick="numb3()"> 3</p>
                   </div>
                   <div class="tech-numbering2">
                       <p class="tech-text1">THE TERMINOLOGY...</p>
                       <p class="tech-text2"> ${technology[i].name}</p>
                       <p class="tech-text3">
                       ${technology[i].description}
                       </p>

                   </div>
                </div>
             
            </div>
            <div>
            <img src=" ${technology[i].images}" alt="the TECHNOLOGY" class="image-in-technology">
                 
            </div>
        </main>`

  }
  
  document.querySelector('.showtech').innerHTML = tech;
  function numb1()
  {
    let launch = document.querySelector('.launch');
    let spaceport = document.querySelector('.spaceport');
    let capsule = document.querySelector('.capsule');
    
    launch.style.display = "grid"
    spaceport.style.display = "none"
    capsule.style.display = "none"
  }
  function numb2()
  {
    let launch = document.querySelector('.launch');
    let spaceport = document.querySelector('.spaceport');
    let capsule = document.querySelector('.capsule');
    
    launch.style.display = "none"
    spaceport.style.display = "grid"
    capsule.style.display = "none"
  }
  function numb3()
  {
    let launch = document.querySelector('.launch');
    let spaceport = document.querySelector('.spaceport');
    let capsule = document.querySelector('.capsule');
    
    launch.style.display = "none"
    spaceport.style.display = "none"
    capsule.style.display = "grid"
  }