## Pasos basicos
CREAR UN COMPONENTE.
- Crear componente por medio del comando ng g c componentes/nombre -is
- Agregar la ruta del componente al archivo app.modules (angular cli lo hace solo)
- Crear el template en el view (html). el contenido
- - Si el componente no esta en el home
- -- Si es el primer componente. Crear archivo de rutas
- - Si el componente esta en el home
- -- agregar el nombre del selector al archivo app.component.html

CREAR RUTAS
- Crear archivo app.routes.ts
- Argregar la estructura basica del archivo app.routes.ts
- Importar los complementos
- Agregar el nombre del complemento al array de rutas
- - Cuando la vista sea un enlace
- -- Agregar la ruta en el archivo html que controla las rutas ( [routerLink]="['ruta']" )
- Importar el archivo de rutas en app.module.ts
- Agregar la clase importada al array de imports
- agregar la etiquite <router-outlet> al app.comoment.html

SERVICIO INTERNO
- crear el servicio con el comando ng g s services/nombre
- importarlo al archivo app.modules.ts
- Agregar la clase al array de providers
- Importar el servicio en el componente que lo va a utilizar
- Mandar al servicio llamar en el constructor
- En el archivo sercies.nombre agregadar la data a consumir
- Crear un metodo para usar la data (en el mismo archivos service)
- Mandar llamar el metodo creado (en el service) usando el servicio -> en el componente

OBTENER RUTA POR PARAMETRO
- Crear la ruta (en app.routes) con el parametro a recibir
- Crear el componente
- Agregar el link en la vista
- Importar en el componente el modulo ActivedRoute
- agregarlo en el constructor
- subscribirse al observador (recibe el parametro)
- crear en el servicio un metodo para obtener un solo objeto
- importar el servicio en el componente
- agregarlo al constructor
- mandar llamar el metodo desde el servicio 
