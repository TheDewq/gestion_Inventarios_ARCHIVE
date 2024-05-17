var form2_products;

function upload_form1(){
    const element = document.querySelectorAll(".compra_form_1");

    const form = new FormData();

    form.append("tipo", 'compra_nuevo');
    form.append("nombre", element[0].value);
    form.append("color", element[1].value);
    form.append("cantidad", element[2].value);
    form.append("costo", element[3].value);
    form.append("precio", element[4].value);
    form.append("fecha", element[5].value);
    form.append("foto", element[6].files[0]);
    form.append("descripcion", element[7].value);
  
        fetch("scripts/php compra/db.php", {
            method: "POST",
            body: form
        })
            .then ( res => res.text())
            .then (data => {
                console.log(data);
                eval(data)
            })

}

async function get_compra_antigua(){
    let rpt = await waiting();
    for(var i = 0; i<form2_products.length; i++){
        const instans = new draw_element_form2();   
        document.getElementById("compra_left_container").appendChild(instans.create_Elements(form2_products[i]));
    }
    

}

function waiting(){
    const sql = "SELECT * FROM producto";

    const form = new FormData();

    form.append("datos", sql);
    form.append("tipo", "get_compra_antigua");

        return new Promise((resolve, reject) =>{
            console.log("cargando");
            fetch("scripts/php compra/db.php", {
                method: "POST",
                body: form
            })
                .then ( res => res.json())
                .then (data => {
                    console.log(data);
                    form2_products = data;
                    
                })
            setTimeout(() => {
                resolve()
            },1000)
        })
}


class draw_element_form2{
    create_Elements(attrs){
        return this.div_generico("container",[
            this.hx(attrs[1],3),
            this.img("imgs/uploaded/"+attrs[7], null , "img_form_2 rounded"),
            this.radius("item_num", attrs[0], "item_product"+attrs[0], "modify_form_2_"+attrs[0])


        ])
    }
    espacios(){
        const br = document.createElement("br");
        return br;
    }
    
    labels(x, y, clase = null){ //se ingresa x que es el "for"; y es el innerHtml con el nombre del label, devuelve un objeto label
        const label = document.createElement("label");
        label.setAttribute("for", x);
        label.setAttribute("class", clase)
        label.innerHTML = y;
        return label;
    }

    div_generico(clase, append){
        const divs = document.createElement("div");
        divs.setAttribute("class", clase);
        for(var i = 0; i < append.length; i++){
            divs.appendChild(append[i]);
        }
        return divs;
    }
    spans(clase, texto){
        const span = document.createElement("span");
        span.setAttribute("class", clase);
        span.innerHTML = texto;
        return span;
    }
    li_n_a(clase, texto, onclick = null){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("class", clase);
        a.removeAttribute("href");
        a.innerHTML = texto;
        li.setAttribute("onclick", onclick);
        li.appendChild(a);
        return li;
    }

    hr(){
        const hr = document.createElement("hr");
        return hr;
    }
    hx(titulo,x){ // x es size h1, h2,...
        const hx = document.createElement("h"+x);
        hx.innerHTML = titulo;
        return hx;
    }
    img(src,alt = "not found",clase){
        const img = document.createElement("img");
        img.setAttribute("src",src);
        img.setAttribute("alt", alt);
        img.setAttribute("class", clase);
        return img;
    }
    radius(name, valor, clase, onclick){
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = valor;
        radio.setAttribute("onclick", onclick)
        radio.setAttribute("class", clase);
        return radio;
    }
}


