    var now = new Date().getHours();
    
    var greetings = ["Bonjour, mes amis ! Comment allez-vous?","Bonsoir, mes amis ! Comment allez-vous?"];
   
    if (now >= 3 && now <18){
        document.getElementsByTagName("h2")[0].innerHTML = greetings[0];
    }
    else {
        document.getElementsByTagName("h2")[0].innerHTML = greetings[1];
    }