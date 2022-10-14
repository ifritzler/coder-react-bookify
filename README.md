# Bookify - Tienda virtual

Desarrollo realizado enteramente con React

## Tecnologias utilizadas en el proyecto

- ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
-     ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

## Inicializacion de proyecto

Deberemos abrir nuestra consola bash o cmd y clonar el repositorio de forma local con el siguiente comando.

```
git clone https://github.com/ifritzler/coder-react-bookify.git
```

## Instalacion de dependencias

Una vez dentro de la carpeta de nuestro proyecto. Dentro de la consola de comandos digitamos el siguiente comando.

```
// Para los que usen NPM
npm install

// Para los que usan PNPM
pnpm install

// Para los que usan YARN
yarn install
```

## Inicializacion del proyecto

Una vez instaladas las dependencias del mismo, se procede a ejecutar el siguiente comando depende de el manejador de paquetes que se este utilizando.

```
npm run start
pnpm start
yarn start
```

## Librerias utilizadas.

- ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

  [Link a su documentacion](https://styled-components.com/)

  Esta libreria fue utilizada como facilitador a la hora de colocar estilos a los componentes. De esta manera se evita la posible duplicidad de clases y se pueden aislar los componentes de estilos o de layout a componentes estilados y reutilizables

- ## Formik

  [Link a la documentacion](https://formik.org/)

  Esta libreria fue utilizada para el control de formularios. De esta manera es mas simple la gestion de los mismos.
  Fue utilizada en el Checkout de la aplicación.

## Consideraciones adicionales

Si bien el proyecto tiene unos requerimientos minimos el cual no indica la necesidad de un sistema de autenticación. La aplicacion tiene la posibilidad de hacer conexion con los servicios de [**auth0**](https://auth0.com/).

Esto es con el fin de poder realizar un **login de usuario** y **generar nuevas funcionalidades**.

El proyecto al dia de la entrega tiene como funcionalidad:

- Navegacion responsive
- Navegacion por categorias de producto
- Filtrado por categoria
- Lista de productos
- LocalStorage integrado con el carrito
- Vista del carrito y boton de checkout
- Formulario de fin de compra
- Identificador de compra al finalizar el flujo
