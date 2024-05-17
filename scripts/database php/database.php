<?php


    class database{

        private function sql_connect(){
            $dns = "mysql:host=localhost;dbname=rebel";
            $user = 'root';
            $pass = '';

            try{
                $conexion = new PDO($dns, $user, $pass);
                return $conexion;
            }catch(PDOException $e){
                return $e;
            }
        }


        public function sql_get_inventario($sql, $posicionales = null){
            $query = $this->sql_connect();

            if($posicionales == null){ //para una consulta sin valores posicionales
                
                try{
                    $result = $query->query($sql);
                }catch(PDOException $e){
                    return $e;
                }
                return $result->fetchall(PDO::FETCH_NUM);
                
            }else{
                $result = $query->prepare($sql);
                $result->bindParam(":".$posicionales[0], $posicionales[1]);
                if($result->execute()){
                    return 1;
                }else{
                    return 0;
                }
            }
            
        }

    }