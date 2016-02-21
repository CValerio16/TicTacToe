
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    lineaA:[3],
    lineaB:[3],
    lineaC:[3],
    jugadaA:[0,0,0],
    jugadaB:[0,0,0],
    jugadaC:[0,0,0],
    turnos: 0,
    fin: false,
    jugar: function (location, event){
        
        var ubicacion = location.getLocation();
        var juego = event.getCurrentTarget();
        var sejugo = false;
        
        if(!juego.fin){
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaA[i].getBoundingBox();
             if(cc.rectContainsPoint(cuadro, ubicacion) && juego.jugadaA[i]===0){
                 if(juego.turnos%2===1){
                    var sprite = juego.lineaA[i];
                    juego.removeChild(juego.lineaA[i],1);
                    juego.lineaA[i] = new cc.Sprite(res.X_png);
                    if(i === 0){
                        juego.lineaA[i].setPosition(355, 480);
                    }else if (i === 1){
                        juego.lineaA[i].setPosition(480, 480);
                    }else{
                        juego.lineaA[i].setPosition(610, 480);
                    }
                    juego.jugadaA[i] = 2;
                    juego.lineaA[i].setScale(0.15, 0.15);
                    juego.lineaA[i].setVisible(false);
                    juego.addChild(juego.lineaA[i],1);
                }else{
                    juego.jugadaA[i] = 1;
                }
                juego.lineaA[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
             }
        }   
        
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaB[i].getBoundingBox();
            if(cc.rectContainsPoint(cuadro, ubicacion)&& juego.jugadaB[i]===0){
                  if(juego.turnos%2===1){
                    var sprite = juego.lineaB[i];
                    juego.removeChild(juego.lineaB[i],1);
                    juego.lineaB[i] = new cc.Sprite(res.X_png);
                    if(i === 0){
                        juego.lineaB[i].setPosition(355, 350);
                    }else if (i === 1){
                        juego.lineaB[i].setPosition(480, 350);
                    }else{
                        juego.lineaB[i].setPosition(610, 350);
                    }
                    juego.jugadaB[i] = 2;
                    juego.lineaB[i].setScale(0.15, 0.15);
                    juego.lineaB[i].setVisible(false);
                    juego.addChild(juego.lineaB[i],1);
                }else{
                    juego.jugadaB[i] = 1;
                }
                juego.lineaB[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
            }
        }
        
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaC[i].getBoundingBox();
            if(cc.rectContainsPoint(cuadro, ubicacion)&& juego.jugadaC[i]===0){
                if(juego.turnos%2===1){
                    var sprite = juego.lineaC[i];
                    juego.removeChild(juego.lineaC[i],1);
                    juego.lineaC[i] = new cc.Sprite(res.X_png);
                    if(i === 0){
                        juego.lineaC[i].setPosition(355, 230);
                    }else if (i === 1){
                        juego.lineaC[i].setPosition(480, 230);
                    }else{
                        juego.lineaC[i].setPosition(610, 230);
                    }
                    juego.jugadaC[i] = 2;
                    juego.lineaC[i].setScale(0.15, 0.15);
                    juego.lineaC[i].setVisible(false);
                    juego.addChild(juego.lineaC[i],1);
                }else{
                    juego.jugadaC[i] = 1;
                }
                juego.lineaC[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
            }
        }
        console.log("Turno No.: "+juego.turnos);  
        
        var numero;
        if(juego.turnos%2===1){
            numero = 1;
        }else{
            numero = 2;
        }

            if(sejugo){
            //Chequeo Horizontal
            if(juego.jugadaA[0] === numero && juego.jugadaA[1] === numero && juego.jugadaA[2] === numero){
               alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
            if(juego.jugadaB[0] === numero && juego.jugadaB[1] === numero && juego.jugadaB[2] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
            if(juego.jugadaC[0] === numero && juego.jugadaC[1] === numero && juego.jugadaC[2] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }

            //Chequeo Vertical
            if(juego.jugadaA[0] === numero && juego.jugadaB[0] === numero && juego.jugadaC[0] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
            if(juego.jugadaA[1] === numero && juego.jugadaB[1] === numero && juego.jugadaC[1] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
            if(juego.jugadaA[2] === numero && juego.jugadaB[2] === numero && juego.jugadaC[2] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }

            //Chequeo Diagonal
            if(juego.jugadaA[0] === numero && juego.jugadaB[1] === numero && juego.jugadaC[2] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
            if(juego.jugadaA[2] === numero && juego.jugadaB[1] === numero && juego.jugadaC[0] === numero){
                alert("Gano el jugador "+numero+"!"); 
                juego.fin = true;
                return true;
                }
                
                if(numero === 1){   
                    juego.removeChild(juego.player2,5);
                    juego.player2 = new cc.LabelTTF("Las Cruces", "Georgia", 20);
                    juego.player2.setColor(0,0,0,0); 
                    juego.player2.setPosition(480,145);
                    juego.addChild(juego.player2,5);
                }else{
                    juego.removeChild(juego.player2,5);
                    juego.player2 = new cc.LabelTTF("Los Circulos", "Georgia", 20);
                    juego.player2.setColor(0,0,0,0);  
                    juego.player2.setPosition(480,145);
                    juego.addChild(juego.player2,5);
                }
                
            }
            
            if(juego.turnos===9){
                alert("Es un empate!"); 
                juego.fin = true;
            }

        }
        /*
        var cuadro = this.boton.getBoundingBox();
        if(cc.rectContainsPoint(cuadro, ubicacion)){
            juego.turnos = 0;
            juego.jugadaA = [0,0,0];
            juego.jugadaB = [0,0,0];
            juego.jugadaC = [0,0,0];
            
        juego.lineaA[0] = new cc.Sprite(res.O_png);
        juego.lineaA[0].setPosition(355,480);
        juego.lineaA[0].setScale(0.15, 0.15);
        juego.addChild(this.lineaA[0], 1);
        juego.lineaA[0].setVisible(false);
        
        juego.lineaA[1] = new cc.Sprite(res.O_png);
       juego.lineaA[1].setPosition(480, 480);
       juego.lineaA[1].setScale(0.15, 0.15);
		 juego.addChild(this.lineaA[1], 1);
        juego.lineaA[1].setVisible(false);
        
         juego.lineaA[2] = new cc.Sprite(res.O_png);
         juego.lineaA[2].setPosition(610, 480);
         juego.lineaA[2].setScale(0.15, 0.15);
		 juego.addChild(this.lineaA[2], 1);
         juego.lineaA[2].setVisible(false);
        //------------------------------------------------------------------------
         juego.lineaB[0] = new cc.Sprite(res.O_png);
         juego.lineaB[0].setPosition(355,350);
         juego.lineaB[0].setScale(0.15, 0.15);
		 juego.addChild(this.lineaB[0], 1);
         juego.lineaB[0].setVisible(false);
        
         juego.lineaB[1] = new cc.Sprite(res.O_png);
        juego.lineaB[1].setPosition(480, 350);
         juego.lineaB[1].setScale(0.15, 0.15);
		 juego.addChild(this.lineaB[1], 1);
        juego.lineaB[1].setVisible(false);
        
        juego.lineaB[2] = new cc.Sprite(res.O_png);
         juego.lineaB[2].setPosition(610, 350);
        juego.lineaB[2].setScale(0.15, 0.15);
		 juego.addChild(this.lineaB[2], 1);
        juego.lineaB[2].setVisible(false);
        //------------------------------------------------------------------------
        juego.lineaC[0] = new cc.Sprite(res.O_png);
         juego.lineaC[0].setPosition(355,230);
         juego.lineaC[0].setScale(0.15, 0.15);
		 juego.addChild(this.lineaC[0], 1);
         juego.lineaC[0].setVisible(false);
        
         juego.lineaC[1] = new cc.Sprite(res.O_png);
         juego.lineaC[1].setPosition(480, 230);
         juego.lineaC[1].setScale(0.15, 0.15);
		 juego.addChild(this.lineaC[1], 1);
        juego.lineaC[1].setVisible(false);
        
        juego.lineaC[2] = new cc.Sprite(res.O_png);
        juego.lineaC[2].setPosition(610, 230);
        juego.lineaC[2].setScale(0.15, 0.15);
        juego.addChild(this.lineaC[2], 1);
        juego.lineaC[2].setVisible(false);
        }
        */
        return true;
    },
    ctor:function () {
        this._super();
        
        var size = cc.winSize;

        var helloLabel = new cc.LabelTTF("TicTacToe - CValerio16", "Georgia", 38);
        helloLabel.setColor(0,0,0,0);  
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 250;
        this.addChild(helloLabel, 5);
        
        
        var player = new cc.LabelTTF("Es turno de: ","Georgia", 20);
        player.setColor(0,0,0,0);  
        player.x = size.width / 2 - 110;
        player.y = size.height / 2 - 175;
        this.addChild(player, 5);
        
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 1);
        
        //======================================================================
        this.lineaA[0] = new cc.Sprite(res.O_png);
        this.lineaA[0].setPosition(355,480);
        this.lineaA[0].setScale(0.15, 0.15);
		this.addChild(this.lineaA[0], 1);
        this.lineaA[0].setVisible(false);
        
        this.lineaA[1] = new cc.Sprite(res.O_png);
        this.lineaA[1].setPosition(480, 480);
        this.lineaA[1].setScale(0.15, 0.15);
		this.addChild(this.lineaA[1], 1);
        this.lineaA[1].setVisible(false);
        
        this.lineaA[2] = new cc.Sprite(res.O_png);
        this.lineaA[2].setPosition(610, 480);
        this.lineaA[2].setScale(0.15, 0.15);
		this.addChild(this.lineaA[2], 1);
        this.lineaA[2].setVisible(false);
        //------------------------------------------------------------------------
        this.lineaB[0] = new cc.Sprite(res.O_png);
        this.lineaB[0].setPosition(355,350);
        this.lineaB[0].setScale(0.15, 0.15);
		this.addChild(this.lineaB[0], 1);
        this.lineaB[0].setVisible(false);
        
        this.lineaB[1] = new cc.Sprite(res.O_png);
        this.lineaB[1].setPosition(480, 350);
        this.lineaB[1].setScale(0.15, 0.15);
		this.addChild(this.lineaB[1], 1);
        this.lineaB[1].setVisible(false);
        
        this.lineaB[2] = new cc.Sprite(res.O_png);
        this.lineaB[2].setPosition(610, 350);
        this.lineaB[2].setScale(0.15, 0.15);
		this.addChild(this.lineaB[2], 1);
        this.lineaB[2].setVisible(false);
        //------------------------------------------------------------------------
        this.lineaC[0] = new cc.Sprite(res.O_png);
        this.lineaC[0].setPosition(355,230);
        this.lineaC[0].setScale(0.15, 0.15);
		this.addChild(this.lineaC[0], 1);
        this.lineaC[0].setVisible(false);
        
        this.lineaC[1] = new cc.Sprite(res.O_png);
        this.lineaC[1].setPosition(480, 230);
        this.lineaC[1].setScale(0.15, 0.15);
		this.addChild(this.lineaC[1], 1);
        this.lineaC[1].setVisible(false);
        
        this.lineaC[2] = new cc.Sprite(res.O_png);
        this.lineaC[2].setPosition(610, 230);
        this.lineaC[2].setScale(0.15, 0.15);
		this.addChild(this.lineaC[2], 1);
        this.lineaC[2].setVisible(false);
        
        var boton = new cc.Sprite(res.boton_png);
        boton.setPosition(480, 80);
        this.addChild(boton, 3);
        //========================================================================
        
        // Touch Event
        cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.jugar
		}, this);
                
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

