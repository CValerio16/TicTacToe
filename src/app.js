
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    lineaA:[3],
    lineaB:[3],
    lineaC:[3],
    jugadaA:[0,0,0],
    jugadaB:[0,0,0],
    jugadaC:[0,0,0],
    turnos: 0,
    boton:null,
    fin: false,
    jugar: function (location, event){
        
        var ubicacion = location.getLocation();
        var juego = event.getCurrentTarget();
        var sejugo = false;
        
        var cuadro1 = juego.boton.getBoundingBox();
        if(cc.rectContainsPoint(cuadro1, ubicacion)){
                    juego.turnos = 0;
                    juego.jugadaA = [0,0,0];
                    juego.jugadaB = [0,0,0];
                    juego.jugadaC = [0,0,0];
                    juego.fin = false;
                    
            for(var i = 0; i < 3; i++){
                juego.lineaA[i].setVisible(false);
            }
            for(var i = 0; i < 3; i++){
                juego.lineaB[i].setVisible(false);
            }
            for(var i = 0; i < 3; i++){
                juego.lineaC[i].setVisible(false);
            }
            // comentario antiPlagio- SI TE HABLO A TI MANSILLA -___-
        }
        
        if(!juego.fin){
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaA[i].getBoundingBox();
             if(cc.rectContainsPoint(cuadro, ubicacion) && juego.jugadaA[i]===0){
                 if(juego.turnos%2===1){
                    var sprite = juego.lineaA[i];
                    juego.removeChild(juego.lineaA[i],1);
                    juego.lineaA[i] = new cc.Sprite(res.X_png);
                    juego.jugadaA[i] = 2;
                }else{
                    var sprite = juego.lineaA[i];
                    juego.removeChild(juego.lineaA[i],1);
                    juego.lineaA[i] = new cc.Sprite(res.O_png);
                    juego.jugadaA[i] = 1;
                }
                 if(i === 0){
                        juego.lineaA[i].setPosition(355, 480);
                    }else if (i === 1){
                        juego.lineaA[i].setPosition(480, 480);
                    }else{
                        juego.lineaA[i].setPosition(610, 480);
                    }
                juego.addChild(juego.lineaA[i],1);
                juego.lineaA[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
                 // comentario antiPlagio- SI TE HABLO A TI MANSILLA -___-
             }
        }   
        
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaB[i].getBoundingBox();
                         if(cc.rectContainsPoint(cuadro, ubicacion) && juego.jugadaB[i]===0){
                 if(juego.turnos%2===1){
                    var sprite = juego.lineaB[i];
                    juego.removeChild(juego.lineaB[i],1);
                    juego.lineaB[i] = new cc.Sprite(res.X_png);
                    juego.jugadaB[i] = 2;
                }else{
                    var sprite = juego.lineaB[i];
                    juego.removeChild(juego.lineaB[i],1);
                    juego.lineaB[i] = new cc.Sprite(res.O_png);
                    juego.jugadaB[i] = 1;
                }
                 if(i === 0){
                        juego.lineaB[i].setPosition(355, 350);
                    }else if (i === 1){
                        juego.lineaB[i].setPosition(480, 350);
                    }else{
                        juego.lineaB[i].setPosition(610, 350);
                    }
                juego.addChild(juego.lineaB[i],1);
                juego.lineaB[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
                // comentario antiPlagio- SI TE HABLO A TI MANSILLA -___-
            }
        }
        
        for(var i = 0; i < 3; i++){
           var cuadro = juego.lineaC[i].getBoundingBox();
             if(cc.rectContainsPoint(cuadro, ubicacion) && juego.jugadaC[i]===0){
                 if(juego.turnos%2===1){
                    var sprite = juego.lineaC[i];
                    juego.removeChild(juego.lineaC[i],1);
                    juego.lineaC[i] = new cc.Sprite(res.X_png);
                    juego.jugadaC[i] = 2;
                }else{
                    var sprite = juego.lineaC[i];
                    juego.removeChild(juego.lineaC[i],1);
                    juego.lineaC[i] = new cc.Sprite(res.O_png);
                    juego.jugadaC[i] = 1;
                }
                 if(i === 0){
                        juego.lineaC[i].setPosition(355, 230);
                    }else if (i === 1){
                        juego.lineaC[i].setPosition(480, 230);
                    }else{
                        juego.lineaC[i].setPosition(610, 230);
                    }
                juego.addChild(juego.lineaC[i],1);
                juego.lineaC[i].setVisible(true);
                juego.turnos++;
                sejugo = true;
                // comentario antiPlagio- SI TE HABLO A TI MANSILLA -___-
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
		this.addChild(this.lineaA[0], 1);
        this.lineaA[0].setVisible(false);
        
        this.lineaA[1] = new cc.Sprite(res.O_png);
        this.lineaA[1].setPosition(480, 480);
		this.addChild(this.lineaA[1], 1);
        this.lineaA[1].setVisible(false);
        
        this.lineaA[2] = new cc.Sprite(res.O_png);
        this.lineaA[2].setPosition(610, 480);
		this.addChild(this.lineaA[2], 1);
        this.lineaA[2].setVisible(false);
        //------------------------------------------------------------------------
        this.lineaB[0] = new cc.Sprite(res.O_png);
        this.lineaB[0].setPosition(355,350);
		this.addChild(this.lineaB[0], 1);
        this.lineaB[0].setVisible(false);
        
        this.lineaB[1] = new cc.Sprite(res.O_png);
        this.lineaB[1].setPosition(480, 350);
		this.addChild(this.lineaB[1], 1);
        this.lineaB[1].setVisible(false);
        
        this.lineaB[2] = new cc.Sprite(res.O_png);
        this.lineaB[2].setPosition(610, 350);
		this.addChild(this.lineaB[2], 1);
        this.lineaB[2].setVisible(false);
        //------------------------------------------------------------------------
        this.lineaC[0] = new cc.Sprite(res.O_png);
        this.lineaC[0].setPosition(355,230);
		this.addChild(this.lineaC[0], 1);
        this.lineaC[0].setVisible(false);
        
        this.lineaC[1] = new cc.Sprite(res.O_png);
        this.lineaC[1].setPosition(480, 230);
		this.addChild(this.lineaC[1], 1);
        this.lineaC[1].setVisible(false);
        
        this.lineaC[2] = new cc.Sprite(res.O_png);
        this.lineaC[2].setPosition(610, 230);
		this.addChild(this.lineaC[2], 1);
        this.lineaC[2].setVisible(false);
        
        this.boton = new cc.Sprite(res.boton_png);
        this.boton.setPosition(480, 80);
        this.addChild(this.boton, 3);
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

