$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
 createPlatform(500, 600, 150, 45, "pink");
  createPlatform(700, 500, 150, 45, "turquoise" );
  createPlatform(100, 650, 150, 45, "yellow");
  createPlatform(250, 530, 150, 45, "lime");
  createPlatform(100, 400, 150, 45, "red");
  createPlatform(900, 600, 150, 45, "purple");
  createPlatform(1200, 550, 150, 45, "orange");
  createFakePlatform(325, 400, 150, 45, "violet");
  createBadPlatform(500, 270, 70,45, "white");
  createPlatform(350, 270, 150,45, "blue");
  createPlatform(750, 270, 150, 45, "pink");



    // TODO 3 - Create Collectables
 createCollectable("kennedi",250, 500, 0, 0.7);
  createCollectable("grace", 800, 450);
  createCollectable("max", 1000, 550);
  createCollectable("steve", 1250, 500);
  createCollectable("diamond", 150, 350 );
  createCollectable("kennedi", 350, 225,);
  createCollectable("database", 800, 210)


    
    // TODO 4 - Create Cannons
createCannon("bottom", 1100, 2000);
 createCannon("left", 399, 1300);
 createCannon("top", 800, 3000);
 

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
