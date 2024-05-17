class draw_item_form{
    create_elements(x, mde, mdp, precio, cantidad){
       const li_item = document.createElement("li");
       const div_acordion_item = document.createElement("div");
       const div_acordion_item_flush = document.createElement("div");
       const div_acordion_btm_flush = document.createElement("div");

        //attrs de cada uno

        li_item.setAttribute("class", "list-group-item");
        div_acordion_item.setAttribute("class", "accordion-item");
        div_acordion_item_flush.setAttribute("class", "accordion accordion-flush");
        div_acordion_item_flush.setAttribute("id", "accordionFlush"+x);
        div_acordion_btm_flush.setAttribute("id","flush-collapse"+x);
        div_acordion_btm_flush.setAttribute("class","accordion-collapse collapse");
        div_acordion_btm_flush.setAttribute("data-bs-parent","#accordionFlush"+x);

        //appends

        div_acordion_btm_flush.appendChild(this.acordion_bottom_form(x,
                                                                     ["nequi"],
                                                                      ["speed"],
                                                                      12999,
                                                                      1500));
        div_acordion_item.appendChild(this.acordion_main_form(x,"cheems.png", 12999, 10, "cheems"));
        div_acordion_item.appendChild(div_acordion_btm_flush);

        div_acordion_item_flush.appendChild(div_acordion_item);
        li_item.appendChild(div_acordion_item_flush);

        document.getElementById("ul_main_space").appendChild(li_item);

    }

    acordion_main_form(x, img_dir, precio, cantidad, nombre){ //x nos indica cual es el id del objeto creado
        const div_acordion_header = document.createElement("div");
        const btn_main = document.createElement("button");

        //los items dentro del btn tal
            const div_btn_flex_main = document.createElement("div");
            const div_btn_flex_left = document.createElement("div");
            const div_btn_flex_right = document.createElement("div");

            //contenido de left felx

            
            const span_nombre = document.createElement("span");
            const span_precio = document.createElement("span")
            const span_cantidad = document.createElement("span")

            //contenido de right flex

            const img_btn_flex_right = document.createElement("img");

        //hora de modificar cada atributo

        div_acordion_header.setAttribute("class", "accordion-header");

        btn_main.setAttribute("class", "accordion-button collapsed");
        btn_main.setAttribute("type", "button");
        btn_main.setAttribute("data-bs-toggle", "collapse");
        btn_main.setAttribute("data-bs-target", "#flush-collapse"+x);
        btn_main.setAttribute("aria-expanded", "false");
        btn_main.setAttribute("aria-controls", "flush-collapse"+x);

        //left
        div_btn_flex_main.setAttribute("class", "compra_main_main_container");
        div_btn_flex_left.setAttribute("class", "compra_main_left_container");
        div_btn_flex_right.setAttribute("class", "compra_main_right_container");

        span_cantidad.setAttribute("name", "compra_main_left_cantidad") 
        span_precio.setAttribute("name", "compra_main_left_precio")  

        //right
        img_btn_flex_right.setAttribute("src", "imgs/uploaded/"+img_dir);
        img_btn_flex_right.setAttribute("alt", "not found");
        img_btn_flex_right.setAttribute("class", "img_acordion rounded");

        //agregar informacion

        span_nombre.innerHTML = nombre;
        span_cantidad.innerHTML = cantidad;
        span_precio.innerHTML = precio;

        //hora de los appends de dentro hacia afuera
        //left 
        div_btn_flex_left.appendChild(span_nombre);
        div_btn_flex_left.appendChild(this.espacios());
        div_btn_flex_left.appendChild(this.labels("compra_main_left_cantidad", "Cantidad Disponible: "));
        div_btn_flex_left.appendChild(span_cantidad);
        div_btn_flex_left.appendChild(this.espacios());
        div_btn_flex_left.appendChild(this.labels("compra_main_left_precio", "Precio: "));
        div_btn_flex_left.appendChild(span_precio);

        //right
        div_btn_flex_right.appendChild(img_btn_flex_right);

            //append a main pls
            div_btn_flex_main.appendChild(div_btn_flex_left);
            div_btn_flex_main.appendChild(div_btn_flex_right);

                //append a btn
                btn_main.appendChild(div_btn_flex_main);

                    //apooend a div header
                    div_acordion_header.appendChild(btn_main);

                        //retornar el header
                        return div_acordion_header;

    }









    
    acordion_bottom_form(x, m_pago, m_entrega, precio, comision){ //x(id del flush); m_pago(array); m_entrega(array); 
        const div_btm_main = document.createElement("div");
        const div_btm_flex_main = document.createElement("div");
        const div_btm_flex_left = document.createElement("div");
        const div_btm_flex_right = document.createElement("div");

        //attrs de main cosos

        div_btm_main.setAttribute("class","accordion-body m-3");

        div_btm_flex_main.setAttribute("class", "compra_sub_main_container");

        div_btm_flex_left.setAttribute("class", "compra_sub_left_container");
        
        div_btm_flex_right.setAttribute("class", "compra_sub_right_container");


        
        // left
        //crear clase para los datos del formulario
            //precio
            const input_precio = document.createElement("input");
            //cantidad
            const input_cantidad = document.createElement("input");
            //comision
            const input_comision_checkbox = document.createElement("input");
            const input_comision = document.createElement("input");
            //medio de entrega
            const btn_m_entrega = document.createElement("button");
            const ul_m_entrega = document.createElement("ul");
            const input_m_entrega_displace = document.createElement("input");
            //medio de pago
            const btn_m_pago = document.createElement("button");
            const ul_m_pago = document.createElement("ul");
            const input_m_pago_displace = document.createElement("input");
            const input_m_pago_checkbox = document.createElement("input");
            //date
            const input_date = document.createElement("input");

            //attr de cada coso de left

            //precio
            input_precio.type = "text";
            input_precio.setAttribute("class", "form-control item_form"+x);
            input_precio.setAttribute("placeholder", "Precio");
            input_precio.value = precio;

            //cantidad
            input_cantidad.type = "text";
            input_cantidad.setAttribute("class", "form-control item_form"+x);
            input_cantidad.setAttribute("placeholder", "Cantidad");

            //comision
            input_comision_checkbox.setAttribute("class", "form-check-input mt-0 item_form"+x);
            input_comision_checkbox.type = "checkbox";
            input_comision_checkbox.value = "";
            input_comision_checkbox.setAttribute("aria_label", "Checkbox for following text input");
            input_comision.value = comision;

            input_comision.type = "text";
            input_comision.setAttribute("class", "form-control item_form"+x);
            input_comision.setAttribute("placeholder", "Valor");

            //medio de pago
            btn_m_entrega.setAttribute("class", "btn btn-light");
            btn_m_entrega.setAttribute("type", "button");
            btn_m_entrega.setAttribute("data-bs-toggle", "dropdown");
            btn_m_entrega.setAttribute("aria-expanded", "false");
            btn_m_entrega.innerHTML = "Medio de Entrega";

            ul_m_entrega.setAttribute("class", "dropdown-menu");

            input_m_entrega_displace.type = "text";
            input_m_entrega_displace.setAttribute("class", "form-control item_form"+x);
            input_m_entrega_displace.setAttribute("disabled", null);
            input_m_entrega_displace.setAttribute("aria-label", "Text input with dropdown button");

            //medio de pago
            btn_m_pago.setAttribute("class", "btn btn-light");
            btn_m_pago.setAttribute("type", "button");
            btn_m_pago.setAttribute("data-bs-toggle", "dropdown");
            btn_m_pago.setAttribute("aria-expanded", "false");
            btn_m_pago.innerHTML = "Medio de Pago";

            ul_m_pago.setAttribute("class", "dropdown-menu");

            input_m_pago_displace.type = "text";
            input_m_pago_displace.setAttribute("class", "form-control item_form"+x);
            input_m_pago_displace.setAttribute("disabled", null);
            input_m_pago_displace.setAttribute("aria-label", "Text input with dropdown button");

            input_m_pago_checkbox.setAttribute("class", "form-check-input mt-0 item_form"+x);
            input_m_pago_checkbox.type = "checkbox";
            input_m_pago_checkbox.value = "";
            input_m_pago_checkbox.setAttribute("aria_label", "Checkbox for following text input");

            //date

            input_date.type = "date";
            input_date.name = "fecha";
            input_date.setAttribute("class", "form-control venta_form_datepicker item_form"+x);

                //apends para left
                //precio
                div_btm_flex_left.appendChild(this.labels(null, "Precio"));
                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3", [this.spans("input-group-text","$"), input_precio]));
                //cantidad
                div_btm_flex_left.appendChild(this.labels(null, "Cantidad"));
                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3", [input_cantidad]));
                //comision
                div_btm_flex_left.appendChild(this.labels(null, "Comision"));
                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3",
                                                                    [this.div_generico("input-group-text", 
                                                                        [input_comision_checkbox]), 
                                                                    this.spans("input-group-text", "$"), 
                                                                    input_comision]));
                //medio de entrega
                div_btm_flex_left.appendChild(this.labels(null, "Medio de Entrega"));
                for(var i = 0; i < m_entrega.length; i++){
                    ul_m_entrega.appendChild(this.li_n_a("dropdown-item", m_entrega[i]));
                }
                
                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3",
                                                                [
                                                                    btn_m_entrega,
                                                                    ul_m_entrega,
                                                                    input_m_entrega_displace
                                                                ]));

                //medio de pago
                div_btm_flex_left.appendChild(this.labels(null, "Medio de Pago"));
                for(i = 0; i < m_pago.length; i++){
                    ul_m_pago.appendChild(this.li_n_a("dropdown-item", m_pago[i]));
                }

                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3",
                                                                [
                                                                    btn_m_pago,
                                                                    ul_m_pago,
                                                                    input_m_pago_displace,
                                                                    this.div_generico(
                                                                        "input-group-text",
                                                                        [
                                                                            input_m_pago_checkbox
                                                                        ]
                                                                    ),
                                                                    this.spans(
                                                                        "input-group-text",
                                                                        "Pago Inmediato"
                                                                    )
                                                                ]
                                                                    )
                                                                        );
                
                                                                
                // date
                div_btm_flex_left.appendChild(this.labels(null, "Fecha"));
                div_btm_flex_left.appendChild(this.div_generico("input-group mb-3",
                                                                [
                                                                    input_date
                                                                ]));


        //right
        const btn_right_confimacion = document.createElement("button");
        btn_right_confimacion.type = "button";
        btn_right_confimacion.setAttribute("class", "btn btn-success");
        btn_right_confimacion.innerHTML = "Confirmar";

        div_btm_flex_right.appendChild(this.div_generico("m-3",[
                                                        this.labels(null, "Cantidad: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                        
                                                        this.labels(null, "Precio por unidad: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),

                                                        this.labels(null, "Envio: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                        
                                                        this.hr(),
                                                        
                                                        this.labels(null, "SubTotal: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                        
                                                        this.labels(null, "Comision: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                        
                                                        this.hr(),
                                                    
                                                        this.labels(null, "Valor a cobrar: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                    
                                                        this.labels(null, "Total: ","attr_right_leftsided"),
                                                        this.spans("attr_right_rightsided result_form"+x,""),
                                                        this.espacios(),
                                                        btn_right_confimacion]))


        //append al submain container

        div_btm_flex_main.appendChild(div_btm_flex_left);
        div_btm_flex_main.appendChild(div_btm_flex_right)

        // append a main

        div_btm_main.appendChild(div_btm_flex_main);

        return div_btm_main;

            



            
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
    li_n_a(clase, texto){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("class", clase);
        a.removeAttribute("href");
        a.innerHTML = texto;
        li.appendChild(a);
        return li;
    }

    hr(){
        const hr = document.createElement("hr");
        return hr;
    }
    
}