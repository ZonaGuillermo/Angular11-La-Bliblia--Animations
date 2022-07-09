# Using Angular Animations

First of all, we have to add some lines to our `app.module.ts`.

We need to import the `BrowserAnimationModule` and add it to the imports @NgModule decorator. 

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
	//...
})
```

In second place, we add a `[@animationName]` trigger attribute into the HTML tag which we need animate.

***app.component.html***
```html
<div class="semaforo" [@cambiaColor]></div>
```

After that, we have to include `animations: [...]` into the `@Component` properties in the `.ts` file of this component

***app.component.ts***
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ ]
})
```

Inside this `animations: [...]` array we have to put the code of ours animations. See the code in the repository or read about it in the links in [More information section](#more-information-here) below.

This way to proceed can do our code dirty. So in order to have a better organization we can externalize the animation code in a file, improving the reading of our code and making it reutilizable.

<br>
<br>

## Externalizing ours animations codes

we are going to create an `animations.ts` file in an `animations` folder and write our animation code inside:

***./animations/animations.ts***
```ts
export const animations = 
  trigger('cambiaColor, [...]')

```

And then, we have to import this `animations.ts` file in our component `.ts` file and use it variable inside of animations array:

***app.component.ts***
```ts
import { animations } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ animations ]
})
```
And that's all. In this way we can have a more sustainable and clean code.

Just one more thing...

<br>

### ***BE CAREFULL!!***  
Ensure when you write your code that the nessesary imports appear in the beginning of your file. In other way you'll have to make these imports by hand.

```ts
import { trigger } from "@angular/animations";

export const animations = 
	trigger('cambiaColor', [
		//...
	])
```

<br>
<br>

# More information here:

- Introduction to Angular animations  
	https://angular.io/guide/animations
	
- Animaciones para transición de rutas  
	https://docs.angular.lat/guide/route-animations



<br>
<br>
<br>
<br>



# Apendix

## AnimationsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
