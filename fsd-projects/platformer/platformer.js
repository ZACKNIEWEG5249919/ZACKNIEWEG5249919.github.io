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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(720, 650, 350, 10)
createPlatform(300, 525, 350, 10)
createPlatform(800, 460 ,350, 10)
createPlatform(300, 350, 350, 10)
createPlatform(800, 240, 350, 10)
createPlatform(275, 160, 350, 10)



    // TODO 3 - Create Collectables
createCollectable('diamond', 500, 475);
createCollectable('diamond', 900, 605);
createCollectable('diamond', 950, 410);
    createCollectable('diamond', 475, 305);
    createCollectable('diamond', 940, 200);
    createCollectable('diamond', 450, 115);
    // TODO 4 - Create Cannons
createCannon("bottom", 650 , 800)
createCannon("top", 400 , 735)
    createCannon("top", 1075 , 745)
    createCannon("right", 400 , 2500)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
