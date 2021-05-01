if (document.body.className == "homepage") {


    document.getElementById("nametxt").value = localStorage.getItem("RespostaHomeName");
    document.getElementById("opentxt").value = localStorage.getItem("RespostaHomeTxt");

    function run() {
        if (document.getElementById("nametxt").value == "") {
            window.alert("Por favor inserir seu nome");
        } else {
            localStorage.setItem("RespostaHomeName", document.getElementById("nametxt").value);
            localStorage.setItem("RespostaHomeTxt", document.getElementById("opentxt").value);
            document.location.href = "subpage1.html";

        }
    }
}

if (document.body.className == "subpage1") {
    var radios = document.getElementById("opt");
    var val = localStorage.getItem("RespostaSubRadio");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value == val) {
            radios[i].checked = true;
        }
    }

    document.getElementById("opt1").value = localStorage.getItem("RespostaSubOpt1");
    run2part(localStorage.getItem("RespostaSubRadio"));

    function run2() {

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked == true) {
                localStorage.setItem("RespostaSubRadio", radios[i].value);
            }
        }
        if (localStorage.getItem("RespostaSubRadio") == null) {
            alert("Por favor escolha uma opção");
        }
        run2part(localStorage.getItem("RespostaSubRadio"));
    }

    function run2part(value) {

        if (value == "sim") {
            document.getElementById("vari").innerHTML = "Me conte sua experiência com ela(s)";
            localStorage.setItem("PerguntaSubOpt1", "Me conte sua experiência com ela(s)");
            document.getElementById("opt1").type = "textarea";
        }
        if (value == "não") {
            document.getElementById("vari").innerHTML = "Você tem interesse de aprender alguma delas? se sim, porque?";
            localStorage.setItem("PerguntaSubOpt1", "Você tem interesse de aprender alguma delas? se sim, porque?");
            document.getElementById("opt1").type = "textarea";
        }
        localStorage.setItem("RespostaSubOpt1", document.getElementById("opt1").value);

    }
}

if (document.body.className == "subpage2") {
    var selects = document.getElementById("Fend");
    var val = localStorage.getItem("RespostaSun2Select");
    for (var i = 0; i < selects.length; i++) {
        if (selects[i].value == val) {
            document.getElementById("Fend").selectedIndex = i;
        }
    }

    function run3() {

        localStorage.setItem("RespostaSun2Select", document.getElementById("Fend").value);
        if (localStorage.getItem("RespostaSun2Select") == "nulo") {
            alert("Por favor escolha uma opção");
        } else {
            var r = confirm("Deseja encerrar a Pesquisa?");
            if (r == true) {
                document.location.href = "finalform.html";
            }
        }
    }

    function volta() {
        localStorage.setItem("RespostaSun2Select", document.getElementById("Fend").value);
    }
}

if (document.body.className == "finalform") {
    document.getElementById("vari1").innerHTML = localStorage.getItem("RespostaHomeName");
    document.getElementById("vari2").innerHTML = localStorage.getItem("RespostaHomeTxt");
    document.getElementById("vari3").innerHTML = localStorage.getItem("RespostaSubRadio");
    document.getElementById("vari4").innerHTML = localStorage.getItem("PerguntaSubOpt1");
    document.getElementById("vari5").innerHTML = localStorage.getItem("RespostaSubOpt1");
    document.getElementById("vari6").innerHTML = localStorage.getItem("RespostaSun2Select");

    function final() {
        var x = confirm("Deseja fazer outra Pesquisa?");
        if (x == true) {
            document.location.href = "index.html";
            window.localStorage.clear();
        }
    }
}