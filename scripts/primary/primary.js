function modify_bar_input(x){
    const bar_input = document.getElementById("bar_selection");
    switch(x){
        case 0:
            bar_input.value = "Inventarios";
        break;

        case 1:
            bar_input.value = "Compra";
        break;

        case 2:
            bar_input.value = "Venta";
        break;

        case 3:
            bar_input.value = "Devolucion";
        break;

        case 4:
            bar_input.value = "Analisis";
        break;
    }
}