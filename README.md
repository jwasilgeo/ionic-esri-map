# ionic-esri-map
An Ionic app demonstrating how to use the Esri ArcGIS API for JavaScript.

_This is a work in progress._

## Guidance
- Use [Esri/angular-esri-map](https://github.com/Esri/angular-esri-map) to enable Esri mapping within an Ionic (AngularJS) app.
  - Refer to how these resources have been added to [index.html](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/index.html#L23-L26) (and don't forget Esri CSS a few lines above).
  - Refer to how `<esri-map-view>` directives have been added to a [template](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/templates/tab-esri.html) and given functionality via a corresponding [controller](https://github.com/jwasilgeo/ionic-esri-map/blob/master/www/js/controllers.js#L5).
- See [Esri/quickstart-map-phonegap](https://github.com/Esri/quickstart-map-phonegap) for additional info and ideas.

## Development
- Do everything described in **Step 1** here: [Getting Started with Ionic](http://ionicframework.com/getting-started/)
- Create a project using `ionic start IonicMap blank` or use some other project name you feel is appropriate. Blank indicates a blank app.
- Continue with **Step 3** of the Ionic getting started guide. Make sure the default app runs without any errors.
- Download the contents of this repository and then copy the contents of the `www` directory into your new project's `www` directory. Make sure all the files are copied over.
- If all goes well with Step 3, then in your project's config.xml change `<content src="index.html" />` to point to either `tabbed.html` or `fullscreen.html`. In Android, this file is under `/res/xml/config.xml`.

## Proof
![example-screen](https://raw.github.com/jwasilgeo/ionic-esri-map/master/example-screen.PNG)
