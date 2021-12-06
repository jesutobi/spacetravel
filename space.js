
    const destinations = [
    
      {
        name: "MOON",
        images:  "destination/image-moon.png",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
        displayClass: "Moon"
      },
      {
        name: "MARS",
        images: "destination/image-mars.png",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
        displayClass: "Mars"
      },
      {
        name: "EUROPA",
        images:"destination/image-europa.png",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
        displayClass: "Europe"
      },
      {
        name: "TITAN",
        images:"destination/image-titan.png",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
        displayClass: "Titan"
      }
    ];


let  holder =""
let holderLength = destinations.length;
for(let i = 0; i <= holderLength - 1; i++ )
{
holder += `
    <div class="grids-container ${destinations[i].displayClass}">
        <!-- first-column -->
        <div class="moon-image ">
            <p class="moon-text3 white-color barlowCond fs-500"> <span class="span01 grey-color">01</span>  PICK YOUR DESTINATION</p>
            <img src="${destinations[i].images}" alt="the moon" class="image-in-destination">
        </div>
       <!-- second column -->
        <div class="second-column">
            <ul class="container-ul-destination barlowCond  ">
            <li class="ul-destination "><a href="#" id="moon-btn" class="accent-color text" onclick="moon()" >MOON</a></li>
            <li class="ul-destination"><a href="#" id="mars-btn" class="accent-color" onclick="mars()">MARS</a></li>
            <li class="ul-destination"><a href="#" id="europa-btn" class="accent-color" onclick="europa()">EUROPA</a></li>
            <li class="ul-destination"><a href="#" id="titan-btn" class="accent-color" onclick="titan()">TITAN</a></li>
            </ul>
            <P class="moon-text bellefair fs-800 white-color">
            ${destinations[i].name}
            </P>
            <P class="moon-text1 barlow accent-color">
            ${destinations[i].description}
            </P>
            <br>
            <hr>
           <div class="sub-grid main-dist">
               <div class="">
                   <p class="dist1 fs-200 accent-color barlowCond">AVG.DISTANCE</p>
                   <p class="dist1 fs-400 white-color bellefair">${destinations[i].distance}</p>
               </div>
               <div >
                   <p class="dist1 fs-200 accent-color barlowCond">Est. travel time</p>
                   <p class="dist1 fs-400 white-color bellefair">${destinations[i].travel} </p>
               </div>
           </div>
        </div> 
    </div>
`
console.log( destinations[i].displayClass)
}
document.querySelector('.showgrid').innerHTML = holder;
    function mars()
    {
      let Mars = document.querySelector('.Mars');
let Moon = document.querySelector('.Moon');
let Europe = document.querySelector('.Europe');
let Titan = document.querySelector('.Titan');
Moon.style.display = "none";
Europe.style.display = "none";
Titan.style.display = "none";
Mars.style.display = "grid";
    }
    function moon()
    {
      let Mars = document.querySelector('.Mars');
let Moon = document.querySelector('.Moon');
let Europe = document.querySelector('.Europe');
let Titan = document.querySelector('.Titan');
      // alert('hello')

Mars.style.display = "none";
Europe.style.display = "none";
Titan.style.display = "none";
Moon.style.display =  "grid";
    }
    function europa()
    {
      let Mars = document.querySelector('.Mars');
      let Moon = document.querySelector('.Moon');
      let Europe = document.querySelector('.Europe');
      let Titan = document.querySelector('.Titan');
Mars.style.display = "none";
Europe.style.display = "grid";
Titan.style.display = "none";
Moon.style.display =  "none";
    }

    function titan()
    {
      let Mars = document.querySelector('.Mars');
      let Moon = document.querySelector('.Moon');
      let Europe = document.querySelector('.Europe');
      let Titan = document.querySelector('.Titan');
Mars.style.display = "none";
Europe.style.display = "none";
Titan.style.display = "grid";
Moon.style.display =  "none";
    }




