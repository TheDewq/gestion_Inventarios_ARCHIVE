<?php

    if($_POST){
        
        $tipo = $_POST["tipo"];

        //tipo de dato recibido: (0) inventarios_update
        switch($tipo){
            case 0:
                $instans0 = new inventario();
                $instans0->upload_new_atributes(json_decode($_POST["datos"]), $_POST["id"]);
            break;
            case 1:
                $instans1 = new venta();
                $instans1->get_info();
            break;
            case 2:
                $instans2 = new venta();
                $instans2->upload_venta(json_decode($_POST["datos"]));


        }
    }
    

    class inventario{

        public function upload_new_atributes($params, $id){
            include_once("database.php");
            $instans = new database();
            
            foreach($params as $x){
                
                    $sql = "UPDATE producto SET ".$x[0]." = :".$x[0]." WHERE id = ".$id;
                    $result = $instans->sql_get_inventario($sql, [$x[0], $x[1]]);
                    if(!$result){
                        exit("no se ha podido subir el atributo".$x[1]);
                    }
                
                
            }

            echo ("set_new_info(".$id.")");
        }
    }

    class venta{

        public function get_info(){
            $sql = "SELECT * FROM medios_entrega";
            $sql2 = "SELECT * FROM medios_pago";

            include_once("database.php");

            $instans = new database();

            $pago = $instans->sql_get_inventario($sql);
            $medios = $instans->sql_get_inventario($sql2);
            $arreglo = array($pago,$medios);
            echo json_encode($arreglo);
            
            

        }

        public function upload_venta($x){
                $sql = "INSERT INTO venta (producto, cantidad, precio_unidad, comision, valor_cobrado, valor_final, medio_entrega, medio_pago, pagado, fecha)
                    VALUES
                    (".$x[0].",".$x[1].",".$x[2].",".$x[3].",".$x[4].",".$x[5].",".$x[6].",".$x[7].",".$x[8].",'".$x[9]."')";

                include_once("database.php");

                $instans = new database();
                echo $sql;
                $result = $instans->sql_get_inventario($sql);
                
                echo $result;
            
            

        }
    }
    