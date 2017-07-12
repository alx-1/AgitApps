/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var selCouleur = 0;
        var mot = "hello mundo";  
        //alert(mot);
        var form = document.getElementById("maForm");
        // console.log("la couleur du début est : " + selCouleur);

    document.getElementById("monPiton").addEventListener("click", function () {

    selCouleur =  document.getElementById("maCouleur").value;
    mot = document.getElementById("entreeTexte").value;

    console.log("le mot est : " + mot);
    console.log("la couleur est : " + selCouleur);

        
    document.getElementById("mavaleur").value = mot;
    alert(mot);   
    form.submit();
    }); // fin de la fonction appelée par monPiton
      
        ///////////////////////////////// cp ////////////
        
    document.getElementById("rouge").addEventListener("click", fRouge);
    document.getElementById("orange").addEventListener("click", fOrange);
    document.getElementById("jaune").addEventListener("click", fJaune);
    document.getElementById("vert").addEventListener("click", fVert);
    document.getElementById("bleu").addEventListener("click", fBleu);
    document.getElementById("mauve").addEventListener("click", fMauve);
    document.getElementById("blanc").addEventListener("click", fBlanc);
    document.getElementById("arcoiris").addEventListener("click", fArcoiris);

    
    function fRouge(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "red" ;
         selCouleur = 0;
         document.getElementById("maCouleur").value = selCouleur;
    }
    function fOrange(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "orange" ;   
    	 selCouleur = 1;
	 document.getElementById("maCouleur").value = selCouleur;
	 console.log("selCouleur : " + selCouleur);
    }
    function fJaune(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "yellow" ;   
         selCouleur = 2;
	 document.getElementById("maCouleur").value = selCouleur;

    }
    function fVert(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "#22DD22" ;   
         selCouleur = 3;
	 document.getElementById("maCouleur").value = selCouleur;
    }
    function fBleu(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "blue" ;  
         selCouleur = 4;
	 document.getElementById("maCouleur").value = selCouleur;
    }
    function fMauve(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "purple" ;   
         selCouleur = 5;
	 document.getElementById("maCouleur").value = selCouleur;
    }
    function fBlanc(){
        document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.color = "white" ;   
         selCouleur = 6;
	 document.getElementById("maCouleur").value = selCouleur;
    }
    function fArcoiris(){
	 document.getElementById("maCouleur").innerHTML = selCouleur;
         selCouleur = 7;
        alert("Le mot sera affiché en 'arc-en-ciel'\nLa palabra sera en arcoiris\nThe word will appear in rainbow colors");
	 document.getElementById("maCouleur").value = selCouleur;
        //document.getElementById("entreeTexte").style.backgroundColor = "transparent";
         document.getElementById("entreeTexte").style.backgroundImage = "url('../img/arcoiris.png')";   
      //  document.getElementById("entreeTexte").style.backgroundColor = "yellow";   
    }   
     
        //////////////////////////////////////////// cp /////////////
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

      //  listeningElement.setAttribute('style', 'display:none;');
    //    receivedElement.setAttribute('style', 'display:block;');

    //    console.log('Received Event: ' + id);
    } 
};
