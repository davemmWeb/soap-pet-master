document.querySelector('.productos').addEventListener('click',traerDatos());


function traerDatos() {

    console.log('Dentro de la funcion')

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '/gatos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText)

            let res = document.querySelector('#productos');

            res.innerHTML = '';



            for (let item of datos.data) {

                res.innerHTML += 
                `<div class="producto">
                  <div class="AgilityGatitos">
                    <img src="${item.img}" alt="AgilityGatitos" />
                  </div>
                <div class="info">
                  <strong>${item.info}</strong>
                </div>
                <div class="precio">
                  <span class="desde">Desde</span>
                  <span class="valor">${item.precio}</span>
                </div>
                <div class="agregarCarrito">
                  <button id="agregar">Agregar al carrito</button>
                </div>
              </div>`
                // console.log(item)
            }

        }
    }



}

