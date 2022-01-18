document.querySelector('#btn').addEventListener('click', generarJson);

function generarJson(){
    const json = new XMLHttpRequest();

    json.open('GET', 'js/tabla.json', true);
    json.send();
    json.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let x = document.querySelector('#generar');
            x.innerHTML = '';

            for(let item of datos){
                x.innerHTML += `
                
                    <tr>
                        <td>${item.CEDULA}</td>
                        <td>${item.NOMBRE}</td>
                        <td>${item.DIRECCION}</td>
                        <td>${item.TELEFONO}</td>
                        <td>${item.CORREO}</td>
                    </tr>
                
                `
            }
        }
    }
}