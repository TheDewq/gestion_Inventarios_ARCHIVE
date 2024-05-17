function draw_new_item(){

    delete_all_item_ui();


    for(var i = 1; i <= num_obj; i++){
        try{
        const main_div = document.createElement("div");
        const row_div = document.createElement("div");
        const col3_div = document.createElement("div");
        const col7_div = document.createElement("div");
        const mt2_div = document.createElement("div");
        //botones
        const modificar_btn = document.createElement("button");
        //imagenes
        const product_img = document.createElement("img");
        //titulos
        const nombre_h5 = document.createElement("h5");
        const descripcion_h6 = document.createElement("h6");
        //lista de propiedades
        const ul = document.createElement("ul");
        const colores_li = document.createElement("li");
        const cantidad_li = document.createElement("li");
        const costo_li = document.createElement("li");
        const precio_li = document.createElement("li");
        const descripcion_li = document.createElement("li");

        //agregar atributos a los objetos

        main_div.setAttribute("class", "m-4 p-2 shadow rounded inventarios_lista_caja")

        row_div.setAttribute("class", "row");

        col3_div.setAttribute("class", "col-3");
        col7_div.setAttribute("class", "col-7");
        //attrs de imagen
        product_img.setAttribute("src", "imgs/uploaded/"+eval("obj"+i+"[7]"));
        product_img.setAttribute("alt", "not found");
        product_img.setAttribute("class", "rounded inventario_img_seleccion");
        
        //attra de boton

        modificar_btn.setAttribute("class", "btn btn-dark mb-2");
        modificar_btn.setAttribute("type", "button");
        modificar_btn.setAttribute("data-bs-toggle", "offcanvas");
        modificar_btn.setAttribute("data-bs-target", "#offcanvasExample");
        modificar_btn.setAttribute("aria-controls", "offcanvasExample");
        modificar_btn.setAttribute("onclick", "set_data_offcanvas("+eval("obj"+i+"[0]")+")")
        modificar_btn.innerHTML = "Modificar";

        // inner de titulos

        nombre_h5.innerHTML = eval("obj"+i+"[1]");
        descripcion_h6.innerHTML = "Descripcion";

        //los li

        colores_li.innerHTML = eval("obj"+i+"[2]");
        cantidad_li.innerHTML = eval("obj"+i+"[3]");
        costo_li.innerHTML = eval("obj"+i+"[4]");
        precio_li.innerHTML = eval("obj"+i+"[5]");
        descripcion_li.innerHTML = eval("obj"+i+"[6]");

        //anexar cada objeto con su padre
        
        ul.appendChild(colores_li);
        ul.appendChild(cantidad_li);
        ul.appendChild(costo_li);
        ul.appendChild(precio_li);
        ul.appendChild(descripcion_li);
        
        col7_div.appendChild(nombre_h5);
        col7_div.appendChild(descripcion_h6);
        col7_div.appendChild(ul);

        mt2_div.appendChild(modificar_btn);

        col3_div.appendChild(product_img);
        col3_div.appendChild(mt2_div);

        row_div.appendChild(col3_div);
        row_div.appendChild(col7_div);
        main_div.appendChild(row_div);

        // anecxar a dom

        document.getElementById("main_box").appendChild(main_div);
    
        }catch(error){
            console.log(error);
        }
        }
    


}

function set_data_offcanvas(x){
    var offcanvas_form = document.querySelectorAll(".offcanvas_form");

    offcanvas_form[0].innerHTML = "";
    offcanvas_form[1].removeAttribute("src");
    offcanvas_form[2].value = "";
    offcanvas_form[3].value = "";
    offcanvas_form[4].value = "";
    offcanvas_form[5].value = "";
    offcanvas_form[6].value = "";
    offcanvas_form[7].removeAttribute("onclick");

    offcanvas_form[0].innerHTML = eval("obj"+x+"[1]");
    offcanvas_form[1].src = "imgs/uploaded/"+eval("obj"+x+"[7]") ;
    offcanvas_form[2].value = eval("obj"+x+"[2]");
    offcanvas_form[3].value = eval("obj"+x+"[3]");
    offcanvas_form[4].value = eval("obj"+x+"[4]");
    offcanvas_form[5].value = eval("obj"+x+"[5]");
    offcanvas_form[6].value = eval("obj"+x+"[6]");
    offcanvas_form[7].setAttribute("onclick", "modal_modify_attributes("+eval("obj"+x+"[0]")+")");


}
    //parte de a funcion de abajo
    var array_params = [];
    var arreglo_modificaciones = [];
    var assoc_id = null;

    function modal_modify_attributes(x){
        assoc_id = x;
        
        for(var i = 0; i<array_params.length || i<arreglo_modificaciones.length; ){
            //resetea el array_params
            array_params = [];
            arreglo_modificaciones = [];
            
        }
        array_params = [];
        arreglo_modificaciones = [];

        const offcanvas_form = document.querySelectorAll(".offcanvas_form");
        const modal_attrs = document.querySelectorAll(".box_confirmation");

        var param_list = ["color", "cantidad", "costo", "precio", "descripcion"];

        

        //verificar que atributos cambiaron
        for(i = 0; i < 5 ; i++){
            if(eval("obj"+x+"["+(i + 2)+"]") != offcanvas_form[i+2].value){
                arreglo_modificaciones.push(offcanvas_form[i+2].value);
                array_params.push([param_list[i],offcanvas_form[i+2].value]);

            }
        }
        //borrar anterior lista y nombre
        modal_attrs[2].innerHTML = "";


        //verificar si hay algun atributo para cambiar y enviarlos al modal
        if(arreglo_modificaciones.length === 0){
            modal_attrs[0].innerHTML = "No se ha modificado ningun atributo de ";
            modal_attrs[1].innerHTML = eval("obj"+x+"[1]");
            modal_attrs[3].setAttribute("style", "display: none");
        }else{
            

            modal_attrs[0].innerHTML = "Desea modificar los siguentes atributos de ";
            modal_attrs[1].innerHTML = eval("obj"+x+"[1]")+"?";
            const ul = document.createElement("ul");
            for(i = 0; i < arreglo_modificaciones.length; i++){
                const li = document.createElement("li");
                li.innerHTML = arreglo_modificaciones[i];
                ul.appendChild(li);
            }
            modal_attrs[2].appendChild(ul);
            modal_attrs[3].setAttribute("style", "display: block");
        }
    }

    function upload_params(){
        
            const form = new FormData();
            form.append("datos", JSON.stringify(array_params));
            form.append("tipo", 0);
            form.append("id", assoc_id);
            
        
            fetch("scripts/database php/functions.php", {
                method: "POST",
                body: form
            })
                .then ( res => res.text())
                .then (data => {
                    eval(data);
                    alert("Datos subidos con exito");
                })
    }

    function set_new_info(x){
        var y = 0;
        for(var i = 2; i <=6 ; i++){
            try{
                eval("obj"+x+"["+i+"] = '"+array_params[y][1]+"'")

            }catch(error){

            }
            y++;
        }
        set_data_offcanvas(x);
        draw_new_item();

        
    }

    function delete_all_item_ui(){
        document.getElementById("main_box").innerHTML = "";
    }