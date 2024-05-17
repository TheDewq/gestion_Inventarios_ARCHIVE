<!DOCTYPE html>

<?php
  require "links/links.html";
?>
<html lang="es">
<script type="text/javascript" src="scripts/primary/primary.js"></script>
<body>
        <nav class="navbar navbar-expand-lg bg-dark" id="primary_bar">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Rebel
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form action="index.php" method="get">
                  <input type="text" hidden value="" name="bar_selection" id="bar_selection">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <input type="submit" aria-current="page" class="nav-link text-light" value="Inventario" onmouseover="modify_bar_input(0)">
                    </li>
                    <li class="nav-item">
                      <input type="submit" aria-current="page" class="nav-link text-light" value="Compra" onmouseover="modify_bar_input(1)">
                    </li>
                    <li class="nav-item">
                      <input type="submit" aria-current="page" class="nav-link text-light" value="Venta" onmouseover="modify_bar_input(2)">
                    </li>
                    <li class="nav-item">
                      <input type="submit" aria-current="page" class="nav-link text-light" value="Devolucion" onmouseover="modify_bar_input(3)">
                    </li>
                    <li class="nav-item">
                      <input type="submit" aria-current="page" class="nav-link text-light" value="Analisis" onmouseover="modify_bar_input(4)" disabled>
                    </li>
                  </ul>
                </form>
                <form class="d-flex" role="search">
                  <button class="btn btn-outline-success me-2" type="button">Inciar Sesion</button>
                </form>
              </div>
              
            
          </div>
          
        </nav>

        <div id="primary_box">
            <?php
              if($_GET){
                  switch($_GET['bar_selection']){
                    case 'Inventarios':
                      include "sections/inventarios.html";
                      include "scripts/database php/get_inventarios.php"; 
                      
                    break;

                    case 'Compra':
                      include "sections/compra.html";
                    break;

                    case 'Venta';
                      include "scripts/database php/get_inventarios.php";
                      include "sections/search_btn.html";
                      include "sections/venta.html";
                      
      
                    break;

                    case 'Devolucion';
                     include "sections/devolucion.html";
                    break;

                    case 'Analisis';
                      include "sections/analisis.html";
                    break;
                  }
              }
            
            ?>
        </div>
</body>
</html>