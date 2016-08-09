# ionic-esri-map
An Ionic app **demonstrating** how to use the Esri ArcGIS API for JavaScript.

**_This is a work in progress._**

## Guidance
- This is intended for use with v3.16+ of the ArcGIS API for JavaScript. v4.0+ is not currently supported.

- Use [Esri/angular-esri-map](https://github.com/Esri/angular-esri-map) to enable Esri mapping within an Ionic (AngularJS) app.

  - **Esri** and **angular-esri-map** js + css resources have been added to the initial html page. See [fullscreen.html](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/fullscreen.html) or [tabbed.html](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/tabbed.html).

  - An `<esri-map>` directive has been added to the html, either by a [template](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/templates/tab-esri.html) for the tabbed example, or directly in fullscreen.html in the full screen example. Keep in mind that this directive can be given more functionality via a corresponding controller.

- A Content Security Policy (CSP) has also been established in the initial html page. More info on CSP [here](https://developers.arcgis.com/javascript/jshelp/inside_phonegap.html#Privacy_Security_and_Whitelists_427).

- See [Esri/quickstart-map-phonegap](https://github.com/Esri/quickstart-map-phonegap) for additional info and ideas.

## Development
- Do everything described in **Step 1** here: [Getting Started with Ionic](http://ionicframework.com/getting-started/)
- Create a project using `ionic start IonicMap blank` or use some other project name you feel is appropriate. Blank indicates a blank app.
- Continue with **Step 3** of the Ionic getting started guide. Make sure the default app runs without any errors.
- Download the contents of this repository and then copy the contents of the `www` directory into your new project's `www` directory. Make sure all the files are copied over.
- If all goes well with Step 3, then in your project's config.xml change `<content src="index.html" />` to point to either `tabbed.html` or `fullscreen.html`. In Android, this file is under `/res/xml/config.xml`.

## Proof
![example-screen](https://raw.github.com/jwasilgeo/ionic-esri-map/master/example-screen.PNG)
