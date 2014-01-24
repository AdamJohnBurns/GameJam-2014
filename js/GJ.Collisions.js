GJ.Collisions = (function () {
	'use strict';



	// Private variables //////////////////////////////////////////





	// Private methods ////////////////////////////////////////////

	

	// Public methods /////////////////////////////////////////////

	return {
		// taken from the ndgmr.Collision library
		boundingBox: function(rect1, rect2) {
			// first we have to calculate the
			// center of each rectangle and half of
			// width and height
			var dx, dy, r1={}, r2={};
			r1.cx = rect1.x + (r1.hw = (rect1.width /2));
			r1.cy = rect1.y + (r1.hh = (rect1.height/2));
			r2.cx = rect2.x + (r2.hw = (rect2.width /2));
			r2.cy = rect2.y + (r2.hh = (rect2.height/2));

			dx = Math.abs(r1.cx-r2.cx) - (r1.hw + r2.hw);
			dy = Math.abs(r1.cy-r2.cy) - (r1.hh + r2.hh);

			if (dx < 0 && dy < 0) {
			  dx = Math.min(Math.min(rect1.width,rect2.width),-dx);
			  dy = Math.min(Math.min(rect1.height,rect2.height),-dy);
			  return {x:Math.max(rect1.x,rect2.x),
			          y:Math.max(rect1.y,rect2.y),
			          width:dx,
			          height:dy,
			          rect1: rect1,
			          rect2: rect2};
			} else {
			  return null;
			}
		}
	};
}());