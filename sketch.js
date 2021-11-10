
var gameState = 'StartingScreen';
var backButton;

//sounds
var bgmsc;
var click;
var money;
var drop;
var inBox;
var winmsc;

//Starting Screen
var monBdyIMG;
var monBdy;

var shopButton;
var levelsButton;
var howToPlayButton;

//Levels Screen
var earth;
var earthIMG;
var rocket;
var rocketIMG;
var mars;
var marsIMG;
var infoMonke;
var infoMonkeIMG;

var levelNo = '1';

var lvl1;
var lvl2;
var lvl3;

//Shop
var shooter = '0';
var rocketNo = '0';

var buyRocket;
var buyRockerIMG;
var buyCap;
var buyCapIMG;
var buyShooter;
var buyShooterIMG;

var buyCapButton;
var buyRocketButton;
var buyShooterButton;

var capCount = 0;
var moneyCount = 0;

//LVL 1
var resetButton;
var capSeller;
var sellerIMGL;
var sellerIMGR;
var monkeyIMG;
var monkey1;
var monkey2;

var capIMGL;
var capIMGR;

var cap1;
var cap2;
var cap3;

var box;
var boxIMG;

var side;
var bottom;
var wall1;
var wall2;
var wall3;
var wall4;
var wall5;

var stariSens;
var stariSensed = 'no';
var door;


var leverClicked = 'false';
var monkey1Touching = 'no';
var cap1Vi = 'yes';
var cap2Vi = 'yes';
var cap3Vi = 'yes';

var boxCaps = 0;

function preload() {
    //Starting Screen
    monBdyIMG = loadImage("Images/monkeyFullBody.png");

    //sounds
    bgmsc = loadSound('Sounds/Dimple.mp3');
    click = loadSound('Sounds/click.mp3');
    drop = loadSound('Sound/drop.mp3');
    inBox = loadSound('Sounds/inBox.mp3');
    money = loadSound('Sounds/money.mp3');
    winmsc = loadSound('Sounds/WIN.mp3');

    //Levels Screen
    earthIMG = loadImage("Images/Earth.png");
    marsIMG = loadImage("Images/Mars.png");
    rocketIMG = loadImage("Images/rocket.png");
    infoMonkeIMG = loadImage('Images/InfoMonke.png');

    //shop
    buyRockerIMG = loadImage("Images/roketShip.png");
    buyShooterIMG = loadImage("Images/shooter.png");
    buyCapIMG = loadImage("Images/cap.png");

    //Lvl1
    monkeyIMG = loadImage('Images/Monkey.png');

    sellerIMGL = loadImage('Images/capSellerIMG.png');
    sellerIMGR = loadImage('Images/capSellerIMGR.png');

    capIMGL = loadImage('Images/redCap-removebg-preview.png');
    capIMGR = loadImage('Images/blueCap-removebg-preview.png');

    boxIMG = loadImage('Images/redBox-removebg-preview.png');


}

function setup() {
    canvas = createCanvas((80 * windowWidth) / 100, (80 * windowHeight) / 100);

    bgmsc.loop();
    bgmsc.setVolume(0.1);

    backButton = createButton("BACK");
    backButton.position(1050,581);
    backButton.hide();

    //Starting Screen
    monBdy = createSprite(windowWidth - (windowWidth - 250), windowHeight - (windowHeight - 260), 100, 100);
    monBdy.addImage("bdyIMG", monBdyIMG);

    shopButton = createButton("SHOP");
    shopButton.position(windowWidth - 350, 270);
    levelsButton = createButton("LEVELS");
    levelsButton.position(windowWidth - 350, 370);
    howToPlayButton = createButton("HOW TO PLAY?");
    howToPlayButton.position(windowWidth - 350, 470);

    //Levels Screen
    earth = createSprite(windowWidth - (windowWidth - 160), windowHeight / 2.5, 50, 50);
    earth.addImage("earth", earthIMG);
    earth.scale = 0.6;
    earth.visible = false;

    mars = createSprite(windowWidth - 400, (windowHeight / 2.5), 50, 50);
    mars.addImage("mars", marsIMG);
    mars.scale = 0.6;
    mars.visible = false;

    infoMonke = createSprite(windowWidth - (windowWidth - 360), (windowHeight / 1.5), 50, 50);
    infoMonke.addImage('Monke', infoMonkeIMG);
    infoMonke.scale = 0.15;
    infoMonke.visible = false;

    rocket = createSprite(windowWidth - 750, (windowHeight / 2.9), 50, 50);
    rocket.addImage('rocket', rocketIMG);
    rocket.scale = 0.2;
    rocket.visible = false;

    lvl1 = createButton('LVL 1');
    lvl1.position(210, 460);
    lvl1.hide();

    lvl2 = createButton('LVL 2');
    lvl2.position(610, 370);
    lvl2.hide();

    lvl3 = createButton('LVL 3');
    lvl3.position(930, 460);
    lvl3.hide();

    //shop
    buyRocket = createSprite(790, 260, 50, 50);
    buyRocket.addImage('rocki', buyRockerIMG);
    buyRocket.scale = 0.25;
    buyRocket.visible = false;

    buyRocketButton = createButton('BUY');
    buyRocketButton.position(550, 450);
    buyRocketButton.hide();

    buyCap = createSprite(100, 300, 50, 50);
    buyCap.addImage('capi', buyCapIMG);
    buyCap.scale = 0.3;
    buyCap.visible = false;

    buyCapButton = createButton("SELL");
    buyCapButton.position(250, 450)
    buyCapButton.hide();

    buyShooter = createSprite(500, 300, 50, 50);
    buyShooter.addImage('shooti', buyShooterIMG);
    buyShooter.scale = 0.5
    buyShooter.visible = false;

    buyShooterButton = createButton('BUY');
    buyShooterButton.position(850, 450);
    buyShooterButton.hide();


    //LVL 1


    capSeller = createSprite(300, 300, 50, 50);
    capSeller.addImage('seller', sellerIMGR);
    capSeller.scale = 0.5;
    capSeller.visible = false;

    bottom = createSprite(0, 470, 30000, 100);
    bottom.visible = false;

    side = createSprite(0, 0, 200, 3000);
    side.visible = false;

    box = createSprite(220, 380, 50, 50);
    box.addImage('bowi', boxIMG);
    box.scale = 0.5;

    box.setCollider('rectangle', 0, 0, 300, 200);

    box.visible = false;

    monkey1 = createSprite(790, 150, 50, 50);
    monkey1.addImage('monke1', monkeyIMG);
    monkey1.scale = 0.3;
    monkey1.visible = false;

    cap1 = createSprite(950, 180, 50, 50);
    cap1.addImage('cap1', capIMGR);
    cap1.scale = 0.2;
    cap1.visible = false;

    cap2 = createSprite(1200, 350, 50, 50);
    cap2.addImage('cap2', capIMGR);
    cap2.scale = 0.2;
    cap2.visible = false;

    cap3 = createSprite(1900, 350, 50, 50);
    cap3.addImage('cap3', capIMGR);
    cap3.scale = 0.2;
    cap3.visible = false;

    wall1 = createSprite(800, 250, 400, 20);
    wall1.shapeColor = '#F19230';
    wall1.visible = false;

    wall2 = createSprite(860, 230, 20, 50);
    wall2.shapeColor = '#F19230';
    wall2.visible = false;

    wall3 = createSprite(225, 250, 150, 20);
    wall3.shapeColor = '#F19230';
    wall3.visible = false;

    wall4 = createSprite(1200, 400, 20, 50);
    wall4.shapeColor = '#F19230';
    wall4.visible = false;

    wall5 = createSprite(1500, 400, 20, 100);
    wall5.shapeColor = '#F19230';
    wall5.visible = false;

    stariSens = createSprite(1490, 400, 50, 50);
    stariSens.shapeColor = '#f2b476';
    wall5.visible = false;
    
    door = createSprite(1700, 400, 50, 350);
    door.shapeColor = '#f2b476';
    door.visible = false;



    lever = createSprite(800, 400, 50, 50);
    lever.shapeColor = '#f2b476';
    lever.visible = false;


    resetButton = createButton('RESTART LEVEL');
    resetButton.position(950,581);
    resetButton.hide();
}

function draw() {
    background('#f19230');
    drawSprites();

    if (gameState === 'StartingScreen') {
        drawSprites();
        monBdy.visible = true;
        backButton.hide();
        shopButton.show();
        howToPlayButton.show();
        levelsButton.show();

        textSize(60);
        fill("white");
        textFont('monospace')
        text("SPACE EXPEDITION", 445, 120);
        textSize(18);
        text("One small step for man, a giant leap for mankind", 470, 150);

        shopButton.mousePressed(function () {
            click.play();
            if (levelNo === '2') {
                gameState = "SHOP";
            } else {
                alert("Earn Caps and complete LV 1 first to unlock the SHOP!");
            }
        });

        levelsButton.mousePressed(function () {
            click.play();
            gameState = "LEVELS";

        });

        howToPlayButton.mousePressed(function () {
            click.play();
            gameState = "H2P?";

        });

    } else {
        shopButton.hide();
        levelsButton.hide();
        howToPlayButton.hide();
        monBdy.visible = false;
    }

    if (gameState === 'H2P?') {
        monBdy.visible = true;
        backButton.show();

        textSize(60);
        fill("white");
        textFont('monospace')
        text("HOW TO PLAY?", 490, 60);

        textSize(18);
        text("> You are the Cap Seller who wants to become an \nastronaut! \n\n"
            + "> These pesky monkeys have stolen your caps, so\n you have to get them back. \n\n"
            + "> It just so happens that the monkeys will follow \neverything you do! \n\n"
            + "> Use the 'up, down, left, right' arrows to move. \nOnce you collect the hat, use 'space bar' to drop \nthe hat in the box. \n\n"
            + "> Make the monkeys pick up the caps and drop them \noff in their respective boxes. \n\n"
            + "> Earn money by selling your caps in the SHOP and \nbuy a shooter and rocket ship to advance to space!", 490, 100);

        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });

    }

    if (gameState === 'SHOP') {

        drawSprites();
        textSize(60);
        fill("white");
        textFont('monospace')
        text("S H O P", 400, 100);

        buyCap.visible = true;
        buyRocket.visible = true;
        buyShooter.visible = true;
        buyShooterButton.show();
        buyCapButton.show();
        buyRocketButton.show();
        backButton.show();

        textSize(20);
        text('MONEY : $' + moneyCount, 90, 80);
        text('CAPS : ' + capCount, 100, 110);

        textSize(18);
        text('= $300', 170, 300);

        text('$200', 470, 365);

        text('$500', 770, 365);

        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });

        buyCapButton.mousePressed(function () {
            if (capCount >= 1) {
                money.play();
                capCount = capCount - 1;
                moneyCount = moneyCount + 300;
            }
        });

        buyShooterButton.mousePressed(function () {
            if (moneyCount >= 200) {
                money.play();
                shooter = '1';
                moneyCount = moneyCount - 200;
            }
        });

        buyRocketButton.mousePressed(function () {
            if (moneyCount >= 500) {
                money.play();
                rocketNo = '1';
                moneyCount = moneyCount - 500;
            }
        });

    } else {
        buyCap.visible = false;
        buyRocket.visible = false;
        buyShooter.visible = false;
        buyShooterButton.hide();
        buyCapButton.hide();
        buyRocketButton.hide();
    }

    if (gameState === 'LEVELS') {
        drawSprites();

        earth.visible = true;
        mars.visible = true;
        infoMonke.visible = true;
        backButton.show();

        strokeWeight(0);
        textSize(60);
        fill("white");
        textFont('monospace')
        text("L E V E L S", 340, 120);

        textSize(20);

        if (levelNo === '1') {
            lvl1.show();
            text("A group of Monkeys are caled a 'troop', \n'tribe' or a 'mission'.", 450, 430);
            lvl1.mousePressed(function () {
                click.play();
                gameState = 'LVL1';
            });
        }
        if (levelNo === '2') {
            
            text("Some monkeys have a 'prehensile tail' which \nis like a second hand.", 450, 430);
            textSize(40);
            text("✔", 150,430);
        }
        if (levelNo === '3') {
            lvl3.show();
            textSize(20);
            text("Monkeys have large brains when \ncomparred to their body \nproportions; \nthis is why they're so intellegent.", 450, 400);
            lvl3.mousePressed(function () {
                click.play();
                gameState = 'LVL3';
            });
        }

        if (shooter === '1' && rocketNo === '1') {
            fill("white");
            stroke("white");
            strokeWeight(5);
            for (var i = windowWidth - (windowWidth - 280); i < windowWidth - (windowWidth - 430); i = i + 20) {
                line(i, windowHeight / 2.9, i + 10, windowHeight / 2.9);
            }
            rocket.visible = true;
            lvl2.show();
            lvl2.mousePressed(function () {
                click.play();
                gameState = 'LVL2';
            });
        }

        backButton.mousePressed(function () {
            click.play();
            gameState = "StartingScreen";
        });

    } else {
        earth.visible = false;
        mars.visible = false;
        infoMonke.visible = false;
        rocket.visible = false;
        lvl1.hide();
        lvl2.hide();
        lvl3.hide();
    }

    if (gameState === "LVL1") {
        backButton.position(1050);
        backButton.show();
        background('white');

        textSize(15);
        textFont('monospace')
        fill("#F19230");
        text("Stand here and drop \n ↓ ↓ the cap ↓ ↓", 150, 210);

        drawSprites();

        capSeller.visible = true;
        resetButton.show();
        monkey1.visible = true;
        bottom.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        stariSens.visible = true;
        door.visible = true;

        side.visible = true;
        box.visible = true;
        wall3.visible = true;

        lever.visible = true;

        if (cap1Vi === 'yes') {
            cap1.visible = true;
        } else if (cap1Vi === 'no') {
            cap1.visible = false;
        }

        if (cap2Vi === 'yes') {
            cap2.visible = true;
        } else if (cap2Vi === 'no') {
            cap2.visible = false;
        }

        if (cap3Vi === 'yes') {
            cap3.visible = true;
        } else if (cap3Vi === 'no') {
            cap3.visible = false;
        }

        if (leverClicked === 'true') {
            wall1.visible = false;
            wall2.visible = false;
        } else {
            wall1.visible = true;
            wall2.visible = true;
            capSeller.collide(wall1);
            monkey1.collide(wall1);
            capSeller.collide(wall2);
            monkey1.collide(wall2);
        }

        capSeller.collide(bottom);
        monkey1.collide(bottom);
        capSeller.collide(side);
        monkey1.collide(side);
        capSeller.collide(box);
        monkey1.collide(box);
        capSeller.collide(wall3);
        monkey1.collide(wall3);
        capSeller.collide(wall4);
        monkey1.collide(wall4);
        capSeller.collide(wall5);
        monkey1.collide(wall5);
        capSeller.collide(door);
        monkey1.collide(door);
        door.collide(bottom);

        if(monkey1.isTouching(stariSens) || capSeller.isTouching(stariSens)){
            door.velocityY = -5;
        }else{
            door.velocityY = +10;
        }


        if (monkey1.isTouching(lever)) {
            click.play();
            leverClicked = 'true';
        }

        monkey1.setCollider('rectangle', 0, 0, 350, 350);
        cap1.setCollider('circle', -50, 0, 160);
        cap2.setCollider('circle', -50, 0, 160);
        cap3.setCollider('circle', -50, 0, 160);


        stroke(rgb(241, 146, 48));
        fill(rgb(241, 146, 48));
        rect(0, 0, 3000, 100);
        rect(0, 420, 3000, 100);
        rect(0, 0, 100, 420);

        capSeller.velocityY = +5;

        monkey1.velocityY = +5;


        if (keyDown(UP_ARROW)) {
            if (capSeller.y > 250) {
                capSeller.velocityY = -5;
            }
            monkey1.velocityY = -5;

        }
        if (keyDown(LEFT_ARROW)) {
            capSeller.x = capSeller.x - 5;
            monkey1.x = monkey1.x - 5;
            capSeller.addImage('seller', sellerIMGL);
            if (monkey1.isTouching(cap1)) {
                cap1.addImage('cap1', capIMGL);
            }
            if (monkey1.isTouching(cap2)) {
                cap2.addImage('cap2', capIMGL);
            }
            if (monkey1.isTouching(cap3)) {
                cap3.addImage('cap3', capIMGL);
            }
        }
        if (keyDown(RIGHT_ARROW)) {
            capSeller.x = capSeller.x + 5;
            monkey1.x = monkey1.x + 5;
            capSeller.addImage('seller', sellerIMGR);
            if (monkey1.isTouching(cap1)) {
                cap1.addImage('cap1', capIMGR);
            }
            if (monkey1.isTouching(cap2)) {
                cap2.addImage('cap2', capIMGR);
            }
            if (monkey1.isTouching(cap3)) {
                cap3.addImage('cap3', capIMGR);
            }
        }

        if (keyDown('SPACE') && monkey1Touching === 'cap1') {
            drop.play();
            cap1.velocityY = +10;
            // monkey1Touching = 'dropped'
        } else if (monkey1.isTouching(cap1)) {
            drop.play();
            cap1.y = monkey1.y - 40;
            cap1.x = monkey1.x;
            monkey1Touching = 'cap1'
        }

        if (keyDown('SPACE') && monkey1Touching === 'cap2') {
            drop.play();
            cap2.velocityY = +10;
            // monkey1Touching = 'dropped'
        } else if (monkey1.isTouching(cap2)) {
            drop.play();
            cap2.y = monkey1.y - 40;
            cap2.x = monkey1.x;
            monkey1Touching = 'cap2'
        }
        if (keyDown('SPACE') && monkey1Touching === 'cap3') {
            drop.play();
            cap3.velocityY = +10;
            // monkey1Touching = 'dropped'
        } else if (monkey1.isTouching(cap3)) {
            drop.play();
            cap3.y = monkey1.y - 40;
            cap3.x = monkey1.x;
            monkey1Touching = 'cap3'
        }

        if (cap1.isTouching(box) && monkey1Touching === 'cap1') {
            inBox.play();
            boxCaps = boxCaps + 1;
            monkey1Touching = 'no';
            cap1Vi = 'no';
        }
        if (cap2.isTouching(box) && monkey1Touching === 'cap2') {
            inBox.play();
            boxCaps = boxCaps + 1;
            monkey1Touching = 'no';
            cap2Vi = 'no';
        }
        if (cap3.isTouching(box) && monkey1Touching === 'cap3') {
            inBox.play();
            boxCaps = boxCaps + 1;
            monkey1Touching = 'no';
            cap3Vi = 'no';
        }

        strokeWeight(0);
        textSize(60);
        fill("white");
        textFont('monospace')
        text("L E V E L  O N E", displayWidth / 2 - 400, 75);
        textSize(15);
        fill("#F19230");
        text(boxCaps + " / 3", 300, 400);


        if (capSeller.x >= displayWidth / 2 - 129) {
            camera.position.x = capSeller.x;
        }
        camera.position.y = 260;


        if (boxCaps === 3) {

            winmsc.play();
            noStroke();
            fill(241, 146, 48, 191);
            rect(0, 0, displayWidth, displayHeight);
            strokeWeight(0);
            textSize(70);
            fill("white");
            textFont('monospace')
            text("WELL DONE!", 350, 120);
            textSize(40);
            text("You have completed the first level!", 150, 200);
            resetButton.hide();
            backButton.position(600, 400);

            capCount = '3';

        }

        backButton.mousePressed(function () {
            click.play();
            gameState = "LEVELS";
            levelNo = '2';
        });

        resetButton.mousePressed(function () {
            click.play();
            location.reload();
        });
    } else {
        capSeller.visible = false;
        bottom.visible = false;
        monkey1.visible = false;
        cap1.visible = false;
        cap2.visible = false;
        cap3.visible = false;
        wall1.visible = false;
        wall2.visible = false;
        lever.visible = false;
        side.visible = false;
        box.visible = false;
        wall3.visible = false;
        wall4.visible = false;
        wall5.visible = false;
        stariSens.visible = false;
        door.visible = false;
        resetButton.hide();
        backButton.position(1050,581);
    }

    if (gameState === "LVL2") {

    }

    if (gameState === "LVL3") {

    }

    if (gameState === "Transition") {

    }


}
