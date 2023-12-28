# Carrito de compras con React Vite, CkakraUI, Yum y Formik

Este proyecto fue designado como trabajo práctico, del programa de capacitación "Alkemy" de "JavaScript organizado por el Ministerio de Trabajo"

El Carrito de compra es un proyecto que permite integrar lo aprendido en una solo proyecto completo. Tiene como principales caracteristicas el aprendizaje de React, ChakraUI fue utilizado para integrar un framework con fines de diseño UI/UX. Dispone de un formalario de ingreso de datos de usuario, que luego se utiliza, en la simulación de la compra. Tambien un formulario para contacto. Esto fue implementado con Formik y Yum para realizar las validaciónes. 

![chakra.jpg](https://i.postimg.cc/2y7GPRW6/chakra.jpg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 

## Caracteristicas

* **Login:** Cuenta con un login con usuario y clave hardcodeado que permite el accesso al carrito de compra y confirmarla. Los datos son omar.virili@gmail.com como usuario y 1234 como password.
* **Accesso a Api:** El home se realizo mediante la consulta a una api, gratuita que permite consultar una lista de productos con tus atributos, como precio, descripcion, categoria, etc.
* **Formulario de Contacto:** Formulario para realizar consultas, a la empresa.
* **Carrito de compra:** El carrito de compra puede ser modificado desde la home mediante el boton de agregar, quitar, o ingresando al detalle del producto y desde allí agregar el producto al carrito. Si deseo agregar más de una unidad puedo hacer click nuevamente en el boton agregar o en boton de "+" situado en el carrito. Cada card del home muestra un icono de carrito con una cantidad de productos agregados. En el header se observa otro icono Carrito pero con un contador de productos generales. En la vista de carrito, se puede limpiar compras, modificar cantidades individuales, eliminar producto, o confirmar carrito. En el caso de confirmar la comprar se dirije a un formulario donde de solicita los datos del cliente para realizar al simulación de facturación, enviado el formulario se genera una vista donde se muestra datos de las compras y datos del cliente.

## Instalación

1. Realize un Clone del repositorio:

   ```git
   https://github.com/odv144/shoppingCart.git
 
   ```
2. Dentro de la carpeta recien clonada ingrese al terminal para instalar las depencias asegurese de estar en la misma carpeta que el archivo package.json y escriba el siguiente comando en la terminal,seguido de un Enter para confirmar el comando.:
   ```
   npm install
   ```
3. Por ultimo debe iniciar el servidor para que la aplicación funcione en su navegador, para ello en el terminal ingrese el siguiente comando seguido de un Enter para confirmar el comando.

   ```shell
   npm run dev
   ```

4. El comando anterior genera un url como indica la siguiente imagen, puede dar un click + control para abrir el link directamente en el navegador por defecto.

![ejecucion.jpg](https://i.postimg.cc/3xnNSLbZ/ejecucion.jpg)

## Capturas 
Agregando productos al carrito
![captura-aplicacion.jpg](https://i.ibb.co/0VHZjcS/Cargando-Productos.jpg)

Solicitud de Datos Cliente para simular la compra
![Imagen-de-Whats-App-2023-11-25-a-las-20-03-57-a8433266.jpg](https://i.ibb.co/m4vsR6p/Datos-Cliente.jpg)

Terminado de cargar los datos del cliente se Confirmacion-Compra
![Confirmacion-Compra](https://i.ibb.co/fQnGpP9/Confirmacion-Compra.jpg)

Listado de productos comprados
![lista-Comprada](https://i.ibb.co/XLLnLJg/lista-Comprada.jpg)

Solicitud de login para poder ingresar a la seccion de compra
![LoginparaComprar](https://i.ibb.co/sF44ZZp/login.jpg)
## License

Este proyecto está licenciado bajo la Licencia GPL-3.0. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

