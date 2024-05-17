

var medios_de_entrega;
var medios_de_pago;

class get_info{

    obtener_medios_p_e(){
        const form = new FormData();
        form.append("tipo", 1);

        fetch("scripts/database php/functions.php",{
            method: "POST",
            body: form
    })
    .then (res => res.json())
    .then (data => {
        medios_de_entrega = data[0];
        medios_de_pago = data[1];
        console.log(data);
    })
    }

    obtener_inventario(){
        const form = new FormData();
        form.append("tipo", 2);

        fetch("scripts/database php/functions.php",{
            method: "POST",
            body: form
    })
    .then (res => res.json())
    .then (data => {
        console.log(data);
        return data;
    })
    }
}