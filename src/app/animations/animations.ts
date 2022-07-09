import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

export const animations = 
	trigger('changeColor', [
		state('red', style({
			'background-color': 'red'
		})),
		state('yellow', style({
			'background-color': 'yellow',
			'transform': 'scale(2)'
		})),
		state('green', style({
			'background-color': 'green'
		})),
		// CASE 1:________________________________________________
		// transition('* => *', animate(500)),

		// CASE 2:________________________________________________
		// transition('red => yellow', animate(2000)),
		// transition('yellow => green', animate('2s ease-in')),
		// transition('green => red', animate(500)),
		// transition('void => *', [
		// 	style({
		// 		'transform': 'translateX(300px)'
		// 	}),
		// 	animate(500)
		// ])

		// CASE 3:________________________________________________
		transition('* => *', [
			animate(1000, keyframes([
				style({opacity: 1, transform: 'translateX(100px)', offset: 0}),
				style({opacity: .5, transform: 'translateX(-100px)', offset: 0.5}),
				style({opacity: 1, transform: 'translateX(0px)', offset: 1})
			])),
			animate(500)  // Nessesary to animate the states
		])
	])



// '* => *' Any state to any state. This way have prevalence to the others.

// 'void => *' From initial state to any other.