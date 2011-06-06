/*
---

name: Element.Event.Pseudos.Stop

description: Adds the functionality to preventDefault and stopPropagation on events

license: MIT-style license

authors:
  - Djamil Legato
  - Arian Stolwijk

requires: [Element.Event.Pseudos]

provides: [Element.Event.Pseudos.Stop]

...
*/

['stop', 'preventDefault', 'stopPropagation'].each(function(method){
	Event.definePseudo(method, function(split, fn, args){
		var event = args[0];
		if (event && event[method]) event[method]();
		fn.apply(this, args);
	});
});
