## Proyecto cordova - angularjs. 

Ejemplo para usar el plugin org.apache.cordova.sipkita BluetoothPrinter  


### Ejecutar la aplicacion:

Primero installamos dependencias de grunt y bower:

```
npm install
```

```
bower install
```

Agregamos la plataforma para android:

```
cordova platform add android
```

Para instalar el plugin [Cordova Bluetooth Printer](https://github.com/eddysby2000/Cordova-Bluetooth-Printer-Plugin.git):

```
cordova plugin add https://github.com/eddysby2000/Cordova-Bluetooth-Printer-Plugin.git
```

Para generar un apk:

```
cordova build
```

Para ejecutar en un emulador:

```
cordova run android
```

En para este ejemplo se conectó al dispositivo movil una impresora zebra iMz320.
El proyecto fue creado con yeoman, mediante el generador [yo angularjs-cordova](https://www.npmjs.com/package/generator-angularjs-cordova)
