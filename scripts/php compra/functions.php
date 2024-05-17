<?php
    require 'database.php';

    class inventario_functions extends database{
        function print_right_container(){
            echo '<ul class="list-group">';
            
            $sql = 'SELECT * from Inventario';
            $result = $this->sql_get_inventario($sql, null);
            foreach($result as $x){
                echo '<li class="list-group-item" onclick="y.print_attributes(\'obj'.$x[0].'\')">
                            <h6>'.$x[1].'</h6>
                            <img src="img/uploaded/'.$x[6].'" alt="no se encuentra" style="margin: 2%; width: 10vw;">
                    </li>
                    <script type="text/javascript">
                        const obj'.$x[0].' = ["'.$x[0].'","'.$x[1].'","'.$x[2].'","'.$x[3].'","'.$x[4].'","'.$x[5].'","'.$x[6].'"];
                    </script>
                    ';  
            
                    }
            echo '</ul>';
        }
        function update_item(){
            $sql = "update inventario set color = :color, cantidad = :cantidad, costo = :costo, precio = :precio where id = :id";
            $params = array(
                        array(':color',$_POST['form_new_color'])  ,
                        array(':cantidad',intval($_POST['form_new_cantidad']))  ,
                        array(':costo',intval($_POST['form_new_costo']))  ,
                        array(':precio',intval($_POST['form_new_precio']))  ,
                        array(':id',intval($_POST['form_id']))
                    );
           echo $this->sql_get_inventario($sql,$params);
        }

        
    }


    if($_POST){
        switch($_POST['tipo']){
            case "inventario":
                $instans = new inventario_functions();
                switch($_POST['metodo']){
                    case 'modify_item':
                       $instans->update_item();

                }
            break;
        }
    }
    
    
    
    


