
function validateForm(f_elems) {
    for (let i=0; i<4; i++) {
        if (f_elems[i].value.length == 0) {
            return false;
        }
    }
    return true;
}

function replicatePlayer(player, target, count) {
    // I need this to start counting from 2
    for (let i=2; i < count + 1; i++) {
        let clone = player.cloneNode(true);
        let name_para = clone.getElementsByClassName("player-name-p");
        name_para[0].textContent += " - " + i.toString();
        target.appendChild(clone);
    }   
}

function appendName(playerForm, target) {
    let p_name_head = document.createElement('p');
    p_name_head.setAttribute('class', 'player-name-p');
    p_name_head.setAttribute('id', "p_name")
    let p_name = document.createTextNode(playerForm[0].value);
    p_name_head.appendChild(p_name);
    target.appendChild(p_name_head)
}

function appendStats(playerForm, target) {
    let icons = [
        "fas fa-shield-alt fa-lg", 
        "fas fa-plus fa-lg", 
        "fas fa-fire fa-lg", 
    ];
    for (let i=0; i < 3; i++) {
        let elem = document.createElement('p');
        elem.setAttribute('class', 'p-stat');
        let icon = document.createElement("i");
        icon.setAttribute("class", icons[i]);
        elem.appendChild(icon);
        let span = document.createElement('span');
        let span_txt = document.createTextNode(" ");
        span.appendChild(span_txt);
        elem.appendChild(span);

        let txt = document.createTextNode(playerForm[i+1].value);
        elem.appendChild(txt);

        target.appendChild(elem);
    }
}

function appendRemoveButton(target) {
    let icon = "fas fa-gavel fa-lg";
    let opt_btn = document.createElement('div');
    opt_btn.setAttribute("class", "flex-btn-container");
    opt_btn.setAttribute("id", "remove-p")
    let opt_btn_p = document.createElement("button");
    opt_btn_p.setAttribute("class", "remove-btn");
    let btn_icon = document.createElement("i");
    btn_icon.setAttribute("class", icon);   
    opt_btn_p.appendChild(btn_icon);
    opt_btn.appendChild(opt_btn_p);

    target.appendChild(opt_btn);
 }