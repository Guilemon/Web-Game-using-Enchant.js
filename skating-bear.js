enchant();
window.onload = function(){
    game = new Game();
    game.onload = function(){ //prepares the game
        hello = new Label("Hello Bear"); //Creates new label
        hello.x = 20;
        hello.y = 160;
        game.rootScene.addChild(hello);
    }
    game.start();
}
