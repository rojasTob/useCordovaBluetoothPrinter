## Proyecto cordova - angularjs. 

Ejemplo para usar el plugin org.apache.cordova.sipkita BluetoothPrinter  

### Pasos

Crear el proyecto cordova - angularjs mediante yeoman (comando __yo__)

```
$ npm install -g yo
```

```
npm install -g generator-angularjs-cordova
```

Creamos la carpeta testapp e ingresamos. Luego ejecutamos el comando __yo angular-cordova__ para inicializar el proyecto, tendremos una serie de pasos para la creación del proyecto.

```
mkdir testapp && cd testapp
yo angularjs-cordova
```

Una vez completada la ejecución del comando tenemos lista la aplicación cordova-angularjs. Podemos ejecutar los siguientes comandos:

Para ejecutar la aplicación en el browser:

```
grunt serve
```

Para generar una version de la aplicacion:

```
grunt build
```

### Crear rutas

Para generar rutas en el proyecto utilizamos el comando:

```
cordova angularjs-cordova:angular-route nombreRuta
```

### Instalar el plugin

Para instalar el plugin [Cordova Bluetooth Printer](https://github.com/eddysby2000/Cordova-Bluetooth-Printer-Plugin.git):

```
cordova plugin add https://github.com/eddysby2000/Cordova-Bluetooth-Printer-Plugin.git
```

En para este ejemplo se usó una impresora zebra iMz320.
