<link rel="stylesheet" href="styles/compra.css">
<?php 
    include 'assets/links.html';
?>
<html>
   
    <body>
    <script type="text/javascript" src="js/compra.js"></script>
            <label for="nuevo">Nuevo</label>
            <input type="radio" name="compra_"value="nuevo" onclick="form_generate(0)">
            <br>
            <label for="antiguo">Antiguo</label>
            <input type="radio" name="compra_" value="antiguo" onclick="form_generate(1)">
            <br>
            <label for="llegada">Llegada</label>
            <input type="radio" name="compra_" value="antiguo" onclick="form_generate(2)">
        
        
            <form action="assets/db.php" method="post" enctype="multipart/form-data">
            <input type='text' value='' name='tipo' hidden id="modifiable_type_form">
                <div id="form-pag">
                    <div style="display: none;" id="form_nuevo_compra">   
                        
                        <p>Nombre: </p>
                        <input type='text' name='nombre'>
                        <p>Color: </p>
                        <input type='text' name='color'>
                        <p>Cantidad: </p>
                        <input type='text' name='cantidad'>
                        <p>Costo: </p>
                        <input type='text' name='costo'>
                        <p>Precio: </p>
                        <input type='text' name='precio'>
                        <p>Fecha: </p>
                        <input type='date' name='fecha' class='form_compran_fecha'>
                        <p>Foto: </p>
                        <input type='file' name='foto'>
                        <input type='submit' name='Subir'>
                    </div>

                    
                    <div style="display: none;" id="form_antiguo_compra" class="form_antiguo">
                    <input type="text" value="" name="id1" id="change_selected_product" hidden  >
                        <div id="antiguo" class="form_container">
                            <ul class="list-group">
                                    <?php
                                        include 'assets/db.php';
                                        $instans = new datos();
                                        $instans->conectar();
                                        $objetos = $instans->compra_antigua();
                                    foreach($objetos as $x){
                                            echo '<li class="list-group-item">
                                                    <div class="select_old_product" onclick="seleccionar_antiguo('.$x[0].', \'price_obj'.$x[0].'\')" id="select'.$x[0].'">
                                                        <h6>'.$x[1].'</h6>
                                                        <img src="img/uploaded/'.$x[3].'" alt="no se encuentra" style="margin: 2%; width: 10vw;">
                                                    </div>
                                                  </li>
                                            <script> let price_obj'.$x[0].' = "'.$x[2].'";</script>';                                        }
                                        
                                    ?>
                                    
                            </ul> 
                        </div>

                        <div class="form_container1">
                            <label for="cantidad">Cantidad</label><br>
                                        <input type="text" name="cantidad1" id="primary_cantidad" onchange="modifiable_cantidad()"><br>
                            <label for="costo">Costo</label><br>
                                        <input type="text" name="costo1" id="modifiable_costo"><span> = </span>
                                        <input type="text" id="attr1" onchange="calcular_costo()"  placeholder="Costo total"><span> / </span>
                                        <input type="text" id="attr2" onchange="calcular_costo()" placeholder="Cantidad"><br>
                            <label for="precio">Precio</label><br>
                                        <input type="text" name="precio1" id="modifiable_form_price"><br>
                                        <input type='date' name='fecha1' class='form_compran_fecha'><br>
                                        <input type='submit' name='Subir'><br>  

                                      
                                      
                        </div>

                        
                    </div>

                    <div style="display: none;" id="form_llegada">
                        <input type="text" id="modifiable_non_arraived" hidden name="selected_arrived_obj">
                        <input type="text" value="" name="cantidad_seleccionada" hidden id="cantidad_arrived_obj">
                        <ul class="list-group">
                            <?php
                                            $objetos = $instans->get_non_arrived();
                                        foreach($objetos as $x){

                                                echo '<li class="list-group-item" onmouseover="select_non_arrived('.$x[0].','.$x[2].')">
                                                            <h1>'.$x[7].'</h1>
                                                            <span> fecha: '.$x[4].'</span>
                                                            <span> cantidad: '.$x[2].'</span>
                                                            
                                                            <img src="img/uploaded/'.$x[12].'" alt="no se encuentra" style="margin: 2%; width: 10vw;">
                                                            <input type="submit" value="seleccionar" class="select_button">
                                                    </li>';                                         }
                                            
                                        ?>
                        </ul>
                    </div>
                </div>
            </form>
        
    </body>
</html>