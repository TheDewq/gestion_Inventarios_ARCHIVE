<?php
    if($_POST){
        $conectar = new datos();
        switch($_POST['tipo']) {

            case 'compra_nuevo':
                $comprobacion = array();
                if($_POST['nombre']!=''){
                    $nombre = $_POST['nombre'];
                }else{
                    array_push($comprobacion, "nombre");
                }

                $color = $_POST['color'];
                
                if($_POST['cantidad']!='' and is_numeric($_POST['cantidad']) ){
                    $cantidad = $_POST['cantidad'];
                    
                }else{
                    array_push($comprobacion, "cantidad");
                }
                
                if($_POST['costo']!='' and is_numeric($_POST['costo'])){            
                    $costo = $_POST['costo'];
                }else{
                    array_push($comprobacion, "costo");
                }
                
                if($_POST['precio']!='' and is_numeric($_POST['precio']) ){
                    $precio = $_POST['precio'];
                }else{
                    array_push($comprobacion, "precio");
                }
                
                if($_POST['fecha']!=''){
                    $fecha = $_POST['fecha'];
                }else{
                    array_push($comprobacion, "fecha");
                }

                if($_POST['descripcion']!=''){
                    $descripcion = $_POST['descripcion'];
                }else{
                    array_push($comprobacion, "descripcion");
                }

                if(empty($comprobacion)){
                    $conectar->conectar();
                    
                    $conectar->compra_nueva();

                    $conectar->registrar_compra(0, $cantidad, $costo, $fecha, null);

                   //$conectar->registrar_compra(0, $cantidad, $costo, $fecha, null);
                    echo "alert('Registrado con exito!');";

                }else{
                    $txt = '';
                    foreach($comprobacion as $x){
                        $txt = $txt.'- '.$x.'\n ';
                    }
                    echo 'alert("no se han regitrado los siguientes valores: \n '.$txt.'Porfavor inserte los datos correctamente e intentelo de nuevo");';
                }
                
                break;

            
//)(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
            case 'get_compra_antigua':
                $conectar->conectar();
                $conectar->Getcompra_antigua($_POST["datos"]);

            break;

            case 'compra_antiguo':
                $comprobacion = array();
                if($_POST['cantidad1']!='' and is_numeric($_POST['cantidad1'])){
                    
                    $attr11 = $_POST['cantidad1'];
                }else{
                    array_push($comprobacion, "cantidad");
                }

                if($_POST['costo1']!='' and is_numeric($_POST['costo1'])){
                    
                    $attr12 = $_POST['costo1'];
                }else{
                    array_push($comprobacion, "costo");
                }

                if($_POST['precio1']!='' and is_numeric($_POST['precio1'])){
                    
                    $attr13 = $_POST['precio1'];
                }else{
                    array_push($comprobacion, "precio");
                }
                
                if($_POST['fecha1']!=''){
                    $attr14 = $_POST['fecha1'];
                }else{
                    array_push($comprobacion, "fecha");
                }

                if($_POST['id1']!='' and is_numeric($_POST['id1'])){
                    
                    $attr15 = $_POST['id1'];
                }else{
                    array_push($comprobacion, "seleccion");
                }
                if(empty($comprobacion)){
                    $conectar->conectar();
                    $conectar->compra_antigua();
                    $conectar->registrar_compra(1, $attr11, $attr12, $attr14, $attr15);
                    if($conectar->modify_price($attr13, $attr15)){
                        echo "precio modificado";
                    }else{
                        echo 'alert("a ocurrido un error al registrar el precio");';
                     datos::retornar();
                    }
                    
                }else{
                    $txt = '';
                    foreach($comprobacion as $x){
                        $txt = $txt.'- '.$x.'\n ';
                    }
                    echo 'alert("no se han regitrado los siguientes valores: \n '.$txt.'Porfavor inserte los datos correctamente e intentelo de nuevo");';
                
                }

                break;

                
            case 'compra_llegada';
                $comprobacion=array();

                if($_POST['selected_arrived_obj']!=''){
                    $attr21 = $_POST['selected_arrived_obj'];
                }else{
                    array_push($comprobacion, 1);
                }
                $attr22 = $_POST['cantidad_seleccionada'];
                if(empty($comprobacion)){
                    $conectar->conectar();
                    $conectar->registrar_inventario($attr21, $attr22);
                    echo 'alert("se ha registrado la llegada del producto de manera exitosa");';
                }else{
                    echo 'alert("no se ha seleccionado ningun producto, vuelva a intentarlo");';

                }
                

                break;
            
            
        }

        
    }

    class datos {
        public $conexion = null;

        public function conectar(){
            $dns = "mysql:host=localhost;dbname=rebel";
            $user = 'root';
            $pass = '';

            global $conexion;

            try{
                $conexion = new PDO($dns, $user, $pass);
                return 1;
            }catch(PDOException $e){
                return $e;
            }
        }

        public function compra_nueva(){
            global $conexion;
             // crear producto en el inventario
            $nombre = $_POST["nombre"];
            $color = $_POST["color"];
            $cantidad = $_POST["cantidad"];
            $costo = $_POST["costo"];
            $precio = $_POST["precio"];
            $fecha = $_POST["fecha"];
            $descripcion = $_POST["descripcion"];


            if(isset($_FILES['foto'])){
                $foto = $_FILES['foto'];
                $foto_name = $_FILES['foto']['name'];
                $foto_type = $_FILES['foto']['type'];
            }else{
                return "alert('foto no encontrada');";
            }

            $allowed_types = array("image/jpg","image/jpeg","image/png");

            if(!in_array($foto_type, $allowed_types)){
                return "alert('El formato de foto no es valido');";
            }
            
            move_uploaded_file($foto['tmp_name'], '../../imgs/uploaded/'.$foto_name);
            $sql = "INSERT INTO producto (nombre, color, cantidad, costo, precio, descripcion, foto) 
            values (:nombre, :color, :cantidad, :costo, :precio, :descripcion, :foto)";
            
            $staus = $conexion->prepare($sql);
            
            $staus->bindParam(':nombre',$nombre);
            $staus->bindParam(':color',$color);
            $staus->bindParam(':cantidad',$cantidad);
            $staus->bindParam(':costo',$costo);
            $staus->bindParam(':precio',$precio);
            $staus->bindParam(':descripcion',$descripcion);
            $location = $foto_name;
            $staus->bindParam(':foto',$location);
            if($staus->execute()){
                echo"alert('el producto se ha registrado exitosamente');";
            }else{
                echo "alert('ha ocurrido un error al momento de subir el producto nuevo');";
            }

        }
        public function Getcompra_antigua($x){

            global $conexion;
             
             $query= $conexion->query($x);
             $stament = $query->fetchall(PDO::FETCH_NUM);
             //$return_stament = "const productos = [";
             //foreach($stament as $y){
             //   $return_stament.= "['". $y[0] ."','". $y[1] ."','". $y[2] ."','". $y[3] ."','". $y[4] ."','". $y[5] ."','". $y[6] ."','". $y[7] ."'],";
             //}
             //$return_stament.= "]";

             echo json_encode($stament);

            }
        

        public function registrar_compra($types, $cantidad, $costo, $fecha, $ids){

            global $conexion;
            
            switch($types){
                case 0: //no existe en el inventario
                    $sql = "SELECT max(id) FROM `producto`;";
                    $id =$conexion->query($sql);
                    $result = $id->fetch();
                    $sentencia = $conexion->prepare("INSERT INTO compra (producto, cantidad, costo_unidad, fecha) VALUES (:result, :cantidad, :costo_unidad, :fecha);");
                    $sentencia->bindParam(':result', $result[0]);
                    $sentencia->bindParam(':cantidad', $cantidad);
                    $sentencia->bindParam(':costo_unidad', $costo);
                    $sentencia->bindParam(':fecha', $fecha);
                    if($sentencia->execute()){
                        echo 'alert("se ha registrado correctamente la compra");';
                         
                    }else{
                        echo "alert('error');";
                    }
                    break;
                
                    
                case 1: //existe en el inventario
                    $sentencia = $conexion->prepare("INSERT INTO compra (producto, cantidad, costo, fecha) VALUES (:ids, :cantidad, :costo, :fecha);");
                    $sentencia->bindParam(':cantidad', $cantidad);
                    $sentencia->bindParam(':costo', $costo);
                    $sentencia->bindParam(':fecha', $fecha);
                    $sentencia->bindParam(':ids', $ids);
                    
                    if($sentencia->execute()){
                        echo '<script type="text/javascript">
                            alert("se ha registrado correctamente la compra");;
                         </script>';;
                    }else{
                        echo "alert('ha ocurrido un error en la ejecucion');";
                    }
                    break;
                
            }


            
        }
        public function get_non_arrived(){
            global $conexion;
            $sql ="SELECT * FROM compra inner join inventario on compra.producto = inventario.id AND arrived = 0;";
            $query= $conexion->query($sql);
            $result = $query->fetchall(PDO::FETCH_NUM);
            return($result);
        }


        public function registrar_inventario($x, $cantidad){
            global $conexion;

            $query2 = $conexion->prepare('SELECT producto FROM compra WHERE id = :id');
            $query2->bindParam(':id', $x);
            $query2->execute();
            $result = $query2->fetchall(PDO::FETCH_NUM);
            var_dump($result[0][0]);

            $sql = "UPDATE compra SET arrived = 1 WHERE id = :id;";
            $query = $conexion->prepare($sql);
            $query->bindParam(':id', $x);
            if($query->execute()){
                echo "registro completado en llegada";
            }else{
                echo "error";
            }
            var_dump(intval(strval($cantidad)));
            $query3 = $conexion->prepare('UPDATE inventario SET cantidad = (SELECT cantidad FROM inventario WHERE id = :id) + :cantidad WHERE id = :id');
            $query3->bindParam(':id', $result[0][0]);
            $query3->bindParam(':cantidad', $cantidad);
            try{
                $query3->execute();
            }catch(PDOException $e){
                echo '<script type="text/javascript">
                alert("Hubo un error inesperado \n Codigo: '.$e.'");
             </script>';
            }
            
        }

        public function modify_price($precio, $id){
            global $conexion;
            $query2 = $conexion->prepare("UPDATE inventario SET precio = :precio WHERE id = :ids");
            $query2->bindParam(':ids', $id);
            $query2->bindParam(':precio', $precio);
            if($query2->execute()){
                        return true;
                    }else{
                        return false;
                    }
        }
    
        
        
    }