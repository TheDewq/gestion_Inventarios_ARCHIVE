<?php
    require 'scripts/database php/database.php';

    $db = new database();

    $sql = "select * from producto";
    
    $info = $db->sql_get_inventario($sql);


    // hora de volcar la informacion hacia javascript
    // el orden del arreglo para cada producto es: [(0) id , (1)nombre, (2)color,(3) cantidad,(4) costo,(5) precio,(6) descripcion,(7) foto ]
    // este orden se debe tener en cuenta a la hora de obtener la informacion en 
    
    if(!empty($info)){
        echo '<script type="text/javascript">
        var num_obj = 0;
        ';
        foreach($info as $x){
            echo 'obj'.$x[0].' = ['.$x[0].', "'.$x[1].'", "'.$x[2].'", '.$x[3].', '.$x[4].', '.$x[5].', "'. str_replace(["\r","\n"], "<br>", $x[6]) .'", "'.$x[7].'"];
            num_obj = '.$x[0].';
            ';
        };
        echo '
        draw_new_item();
        </script>';
    }else{
        echo "<h1>No hay productos que mostrar</h1>";
    }

