function GetTime(){
    var field = document.querySelectorAll('.compra_form_datepicker');
            var date = new Date();
            for (var i = 0; i < field.length; i++) {
                field[i].value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + '-' + date.getDate().toString().padStart(2, 0);
}
}