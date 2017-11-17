enchant();
window.onload = function(){
    var game = new Core(450,450);//(gameWindow.width,gameWindow.height)
    game.preload('chara1.png');
    game.onload = function(){
        var bear = new Sprite(32,32);
        bear.image = game.assets['chara1.png'];
        bear.frame = 4;
        bear.addEventListener(Event.ENTER_FRAME, function(){
            this.x+=3;
        })
        game.rootScene.addChild(bear);
    }
    game.start();
}
