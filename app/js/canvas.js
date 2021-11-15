

/////////
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

$(document).ready(function(init) {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("2103B4E1127C19439A4CC5AAFD1F9D54");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}); 

function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.DI_spasibo_825x85();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;

			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(true,'both',true,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
///////////
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:

(lib.v7 = function() {
	this.initialize(img.v7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,497,76);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.z6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C750").s().p("AkNj+IIVgGIAGIDIoVAGg");
	this.shape.setTransform(27,26.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,52.2);


(lib.z5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCgQgigNgXgXQgVgYgLgeQgLgfAAgiQABgrAOghQAPgiAagWQAagXAigLQAhgMAlAAQAeAAAWAFQAWAEALAGIgRBHQgMgFgPgDQgQgEgUAAQgaAAgWALQgVAKgNAWQgNAWgBAiQABAuAZAbQAZAZAvABQAQAAARgDQAQgDALgEIAMBHQgKAEgVAFQgXAEgeABQguAAgjgOg");
	this.shape.setTransform(13.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,34.8);


(lib.z4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+CoIAAhQQAAgmACglQABgiADgiIgBAAQgMAggOAfQgPAhgOAaIg0BlIhoAAIAAlQIBTAAIAABSIgBBSIgDBKIACAAIATgrIAVgpIATgnIA4hzIBdAAIAAFQg");
	this.shape.setTransform(14.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,33.7);


(lib.z3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgCpIgkgFIAAlOIDuAAIAABKIiUAAIAAArIATgBIAVgBQAaAAAaAHQAaAHAUAPQARANAKAUQAKATAAAcQAAAZgJATQgJAUgQANQgRAOgXAJQgYAJgaADQgaAFgbAAQgfAAgVgCgAgfAKIgMACIAABZIANABIAOABQALAAAJgDQAKgEAJgGQAHgHAEgJQAEgIAAgLQAAgKgEgIQgDgHgHgGQgJgHgMgEQgLgDgLAAIgMAAg");
	this.shape.setTransform(13.3,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.7,34.1);


(lib.z2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbCWQgkgXgTgnQgSgngBgvQABgwAUgoQAUgoAmgXQAlgYAzAAQAoABAgANQAeAOAUAXQAVAZAKAeQALAfAAAhQgBA2gVAoQgUAogmAVQgmAWgzAAQg0AAgkgYgAgkhYQgPAMgJAYQgJAXAAAeQABAvASAbQATAbAgAAQAWAAAPgNQAQgNAHgXQAJgXAAgeQAAgcgJgYQgHgXgQgNQgQgNgWgBQgUABgQANg");
	this.shape.setTransform(16.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.1,34.8);


(lib.x4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjCgQgigNgXgXQgVgYgLgeQgLgfAAgiQABgrAOghQAPgiAagWQAagXAigLQAhgMAlAAQAeAAAWAFQAWAEALAGIgRBHQgMgFgPgDQgQgEgUAAQgaAAgWALQgVAKgNAWQgNAWgBAiQABAuAZAbQAZAZAvABQAQAAARgDQAQgDALgEIAMBHQgKAEgVAFQgXAEgeABQguAAgjgOg");
	this.shape.setTransform(13.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,34.8);


(lib.x3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Aj5kUIIBAEIAeH9IpMAog");
	this.shape.setTransform(29.5,27.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.9,55.4);


(lib.x2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0CoIAAkGIhnAAIAAEGIhaAAIAAlQIEbAAIAAFQg");
	this.shape.setTransform(14.2,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.5,33.7);


(lib.x1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AkYD+IA5oKIH4AWIgQIDg");
	this.shape.setTransform(28.1,26.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.3,53.8);


(lib.vvvv0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlTDVQgHgHgHgRIgNgfIgTgvIgSgqIgBB2QAAAVgGAGQgGAGgPAAQgKAAgHgDQgJgEAAgZQAHjCAAihQAAgjAFgGQAKgLAMAAQALAAAFADQAHADACAGQACAIAAAtIgBBCIgBAlIAoiBQADgJAGgLQAGgKAEgDQADgCANAAQAWAAAAATQAAATgHALIgbBGIgpBnIALAaQAZAuAQAlIAZAzQAIAOAAAQQAAAKgIAHQgJAGgKAAQgOAAgHgHgAp0C+QgVgcgEgtQgGg9AAhVQAAhAAKgsQARhPBFAAQA1AAATA7QAGAUACAfQAAAGgCAEQgIAMgUAAIgKgCQgIgDgCgDQgCgGgBgNIgCgTIgFgRQgDgLgGgFQgGgGgJAAQgPAAgJAaQgKAZAAAaIAAAbIgCBAIABAcIABAZIAAALQADBqAhAAQAOAAAKgPQAKgOACgWQACgLgCgPQACgJAIgFQAHgFAJAAQARAAAEAJQAFAIAAARQAAAhgGAQQgMAegVAQQgWAPgbAAQgqAAgVgbgAFlDSQgGgHAAgOIABgQIAAgIIABijIABilIgRAAIgaAAQgPgEAAgYIAAgCQADgQARgHQCIAAAHAEQAEACAFAIQAFAHAAAGQAAAEgGALQgGAKgGAAIgSAAIgZABIgBDtIAAAvIAAAjIAAAmQAAACgDAFQgEAFgHAFQgHAGgKAAQgSAAgFgHgAgFDZQgbAAgWgRQgVgRAAgdIAAgeQANgRALAAQAMAAAOANIABAfQAAAJAJAGQAJAHAJAAQARAAAIgTQAJgTAAgaIAAgLIAAgLIAAgKQAAglgIgRQgIgRgaAAIghgBQgJgDAAgSQAAgGAEgGQAEgHAFgCIAbgBQAXgBAAhFIAAgTQAAgXgEgLQgDgLgMAAQgIAAgEAHQgFAGgBAGIgBAUQgCAJgJAGQgIAFgIAAQgLAAgNgLIAAghQAAgZAUgSQAVgRAdAAQAVAAAQAIQAPAHAIAPQAHAPADAQQAEARAAAWQAAA3gVAjQAMAIAIAIQATAXAAA1IgBAzQgBATgEAVQgFAWgIAMQgIALgQAIQgPAIgWAAgAH6DXQgVgDAAgdIADl4QACgKAIgGQAJgGAIAAQAIAAAJAIQAJAIACAIQgBAJAAAqIAAARIgBAgIgBAyIAjgBQAnAAAaAgQAUAXAAA0QAAAfgCAUQgBASgEAWQgEAVgJALQgIAMgPAHQgQAIgWAAgAIcAEIgBCKIABAZIAgAAQASAAAIgSQAJgRAAgZIAAgLIABgKIAAgJQAAgmgIgSQgJgSgbAAgADyDCIgPh4IgbAAIgZABIgEAWQgMBXgFAPQgFAEgNAFQgNAFgEAAQgSAAAAgWQAAgIACgGIANhSQAhjAALg4IACgHIAEgVQADgIAFgJQAFgKAJgEQAKgFANAAQALAAAIAGQAIAFAEALIAGAUIADAVIAOBpIAQB2IAOBrIABAIQAAAdgjACQgQAAgDgVgADIhaIgFAlIgMBNIATAAIAUAAIgQibIgGApgAiPDCIgOh4IgbAAIgaABIgDAWQgMBXgGAPQgEAEgNAFQgNAFgFAAQgSAAAAgWQAAgIACgGIAOhSQAgjAALg4IACgHIAFgVQACgIAFgJQAFgKAKgEQAJgFAOAAQALAAAIAGQAHAFAEALIAGAUIADAVIAOBpIAQB2IAOBrIABAIQAAAdgjACQgQAAgDgVgAi5haIgFAlIgMBNIAUAAIATAAIgQibIgGApg");
	this.shape.setTransform(66,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vvvv0, new cjs.Rectangle(0,0,132,44), null);


(lib.v9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApkDYQgHgFgDgGIgBgKQAnhjAqhkQgqhygSg2QgEgNAAgIQALgTAPAAQAKAAAIAHQAIAIADAMQAWBFARAvIAFAMIAehMQAVg1AGgNQACgEAGgFQAGgEAFAAQAIAAAKAHQAKAIAAAKQAAAHgCAFQgNAdg+CXIAkBdIAlBeIgDAIQgCAEgGAHQgHAIgJAAQgOAAgGgIQgEgFgIgVIgYhBIgYhBIgzCLQgKAbgWAAQgIAAgHgFgAAfDUQgIgHAAgUIAAggQACg0AAieIAAhNIABgNIABgPIABgOIADgOQACgHADgFQAIgKAkAAIAIAAIAKAAIASAAQAZAAAJAEQAIAFAAASQAAAPgHAFQgHAFgcAAIgqABQACABAAAqIAAAqIgBAXIAAANIAAAKIAAAFIAtAAQAVAAAFAGQAFAFAAAQQAAALgIAGQgIAGgKAAIgiAAQgMAAAAAEIAAAfIgBBLIAAAjIADAAIAVgBIAXgBQARAAAIAFQAHAFAAANQAAAKgGAGQgGAGgIABQgsAEggAAQgWAAgIgIgAlVDKQgVgRgKgyQgLg3AAhFIABgWIAAgWIAAghQAAgYAEgXQAEgYAKgZQAKgaAVgQQAVgQAdAAQAhAAAWAjQAWAjABAqIACAxIAAArQAABwgTA+QgTA9gvAAQggAAgVgRgAlHACQAACqAkAAQARAAAIg1QAHg1AAhJQAAhagEgeQgCgOgIgPQgIgPgJAAQglAAAACtgAg4DTQgHgGgCgGQgCgFAAgEIgBh+IgfAAQg3AAgQg7QgJgcAAhQQAAhDACgXQADgSAYAAQAMAAAJAJQAFAFAAAzIAAA1QAAA4AGAaQAHAZASAAIAZAAIAAgMIABgMIABhwIAAg7QAAgNAEgHQAEgHAEgBQAEgCAGAAQAgAAAAApIgDFxQAAAMgEAEQgFADgNAAQgLAAgIgHgAHXDZQgWgDAAgeIAEl3QABgKAJgGQAJgGAIAAQAHAAAJAHQAKAIACAJQgBAJAAApIgBARIAAAgIgCAyIAjAAQAoAAAaAgQATAWAAA1QAAAfgBATQgBATgFAVQgEAVgIAMQgJALgPAIQgPAIgXAAgAH4AGIAACKIAAAZIAgAAQASAAAJgSQAJgSAAgYIAAgLIAAgKIAAgKQAAgmgIgSQgIgSgbAAgAFxDZQieAAgLgEQgMgFgEgHQgDgGAAgUIAAiAIABh2IAAgyIAAggIAAgmIABgHQABgEAHgGQAGgGALAAQARAAAGAHQAGAIAAAOIAAAKIAAAHIAAAGQgCCDAADFIARAAIATABIAAh6IABhvIABgzIAAggIAAgmIABgIQACgEAGgGQAHgGALAAQAaAAAAAZIAAAJIAAAHIAAAMQgCBoAADdIAgAAIAAh9IABhyIAAh3QAAgCADgFQACgFAIgGQAHgFALAAQAPAAAEAGQAEAHAAAOIAAAMIAAAGIAAAHQgCCHAADNIAAAHQAAAggfAAg");
	this.shape.setTransform(62.4,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v9, new cjs.Rectangle(0,0,124.9,44.2), null);


(lib.v8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoDRQgKgNAAgQQAAgSANgIQAQgIALAAQASAAAFAKQAGALAAATQAAARgJAJQgKAKgPAAQgPAAgKgNgAgrBrQgGgKAAgeQAAgUAHgWQAHgVAGgKIATgiQAgg3AAgiQAAgQgEgMQgFgMgHAAQgOAAgIARQgJAQAAAcIgBAUQgBAHgFAFQgFAFgKAAQgVAAgGgKQgGgJAAgZQAAg2AZgaQAagaAlAAQAfAAAVAWQAVAWAAApQAAAXgHAWQgGAXgIANIgUAhQgiA0AAAjIABAJIAAAFIABAIQgBAOgFAGQgEAHgFABIgQACQgOAAgGgKg");
	this.shape.setTransform(8.1,22.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v8, new cjs.Rectangle(0,0,16.3,44.4), null);


(lib.v6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AkOkFIIVgFIAXH6Io7Abg");
	this.shape.setTransform(28.6,26.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,53.4);


(lib.v5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AktDcIBknvIH3AjIggIEg");
	this.shape.setTransform(30.2,27.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,55.3);


(lib.v4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AjikNIH+A7IgJHXIouAJg");
	this.shape.setTransform(28.4,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.7,54.1);


(lib.v3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AkRkZIIhAnIACHkIojAog");
	this.shape.setTransform(27.4,28.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.8,56.4);


(lib.n9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAFQgFAGgHAAQgGAAgFgGgAgEgEQgCACAAACQAAADACACQACACACAAQADAAACgCQACgCAAgDQAAgCgCgCQgCgCgDAAQgCAAgCACg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGAAQAIAAAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFgAgEgEQgCACAAACQAAADACACQACACACAAQADAAACgCQACgCAAgDQAAgCgCgCIgDgBIgGABg");
	this.shape_1.setTransform(14,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGgAgFgFQgCADAAACQAAAEACACQADACACAAQAEAAACgCQACgCAAgEQAAgCgCgDQgBAAAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHABg");
	this.shape_2.setTransform(14,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJgAgHgHQgCADAAAEQAAAFACADQADACAEAAQAFAAADgCQACgDAAgFQAAgEgCgDQgCgBgEAAIgJABg");
	this.shape_3.setTransform(14,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAgQgNgNgBgTQABgSANgMQAMgNASgBQATABANANQANAMgBASQABATgNANQgNANgTgBQgSABgMgNgAgJgJQgFAEAAAFQAAAGAFAEQAEAFAFAAQAGAAAEgFQAFgEAAgGQAAgFgFgEQgCgDgFAAQgEAAgIADg");
	this.shape_4.setTransform(14,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwAyQgVgVAAgdQAAgcAVgUQAUgVAcAAQAdAAAVAVQAUAUAAAcQAAAdgUAVQgVAUgdAAQgcAAgUgUgAgPgPQgHAGAAAJQAAAJAHAHQAGAGAJAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgHgJAAQgJAAgGAHg");
	this.shape_5.setTransform(14,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCBEQgcgdAAgnQAAgmAcgcQAcgcAmAAQAnAAAdAcQAbAcAAAmQAAAngbAdQgdAbgnAAQgmAAgcgbgAgrgrQgTASAAAZQAAAaATASQASASAZAAQAaAAASgSQASgSAAgaQAAgZgSgSQgSgTgaAAQgZAAgSATg");
	this.shape_6.setTransform(14,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhQBRQgigiAAgvQAAgvAighQAhgiAvAAQAvAAAiAiQAiAhAAAvQAAAvgiAiQgiAigvAAQgvAAghgigAhBhBQgbAbAAAmQAAAmAbAbQAbAcAmAAQAmAAAbgcQAcgbAAgmQAAgmgcgbQgbgbgmAAQgmAAgbAbg");
	this.shape_7.setTransform(14,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaBbQgmglAAg2QAAg0AmgmQAmgmA0AAQA2AAAlAmQAmAmAAA0QAAA2gmAlQglAmg2AAQg0AAgmgmgAhRhRQgiAjAAAuQAAAwAiAhQAjAiAuAAQAwAAAhgiQAighAAgwQAAgugigjQghgigwAAQguAAgjAig");
	this.shape_8.setTransform(14,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhgBhQgogoAAg5QAAg4AogoQAogoA4AAQA5AAAoAoQAoAoAAA4QAAA5goAoQgoAog5AAQg4AAgogogAhahaQglAmAAA0QAAA1AlAmQAmAlA0AAQA1AAAmglQAlgmAAg1QAAg0glgmQgmglg1AAQg0AAgmAlg");
	this.shape_9.setTransform(14,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpgAhdhdQgnAnAAA2QAAA3AnAnQAnAnA2AAQA3AAAngnQAngnAAg3QAAg2gngnQgngng3AAQg2AAgnAng");
	this.shape_10.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,12.3,3.5,3.5);


(lib.n8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBC527").s().p("AgyDlIAAAAIgggCQgJgBgHgEQgIgEgHgHIgBAAIgIgJQgIgIACgJQABgLgEgJQgDgIgIgGIgBgBQgFgEgEgGQgFgHADgGIADgJIAEgJQADgHgCgGQgBgGgEgFIgBAAIgFgHIgGgGIAAgBQgEgFADgFIAKgPQAEgIAAgGIAAgBQAAgHgGgGIAAgBIgDgEIgBAAIgDgEIAAgBQgDgEABgEQAHgWASgOQADgCAFgBIAKgBQATgCAYAAIAAAAIArAAQALAAAIgEQAHgEACgGIABgBQACgGgDgHQgGgTgLgUIAAgBQgHgNgDgIIAAAAQgFgLgBgLQgCgOABgLQACgNAFgLQAGgMALgHIgBAAQALgGANgBIAEABIAAAAIABAAIABABIAAABIAAAAIACAaIAEAaQADAOAEAKIAAgBQAEANAIAKQAHAKANAJQARANAIAVQAPAnATAdIAJALIAAAAQAFAGAGAFQAFAEAFACIgBgBQAGADAGAAIAAAAIABAAIAAABIADAGIgBgBIABAHQAFApABAvIgBAjQgBAVgDASIgCAGIgFACIAAAAIgQADIAAAAIgkAHIgkAHIgSACIgSABQgkACghAAIgLAAg");
	this.shape.setTransform(19.7,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88AC04").s().p("AiNEAQgTgDgRgNQgOgLgKgMQgLgQACgOQABgGgCgDIAAgBQgCgEgEgEQgKgHgGgLQgEgKAAgKQAAgJAEgKIABgBIACgFIAAgBIABgDIABAAIgCgDIgBgBIgFgFIgEgFQgNgSAKgVQADgHAGgIIAAgBIgBgBIgCgCIgBgBIAAgBIgBgCQgNgRAHgUQAJgbAXgTQAHgGAJgDIABAAQAHgDAKgBQATgCAaAAIAqAAIgLgVIgLgZQgLgcABgZQAAgcAPgYQALgTASgIQARgJAWABQAOABAIAJIAAABQAIAIABAOQABASACAOQADARAEAOQAFATAPAKQAaASAKAdQAMAgASAdQAIALAHAHQABABAAAAQABAAABAAQAAABABAAQAAAAABAAIAAAAIAFAAIABAAIAIAAIAAgBQAEAAADgDQAIgGAOAAIA3AAQATAAAMANQANAMAAATIAABYIAABYQAAATgNANQgMANgUAAIg1AAQgUAAgNgPIgCAAIglAHIglAHQgQAEgUABIgkADQgZACgcAAIgIAAQgbAAgWgDgAiugoIgKABQgFABgDACQgSAOgHAWQgBAEADAEIAAABIADAEIABAAIADAEIAAABQAGAGAAAHIAAABQAAAGgEAIIgKAPQgDAFAEAFIAAABIAGAGIAFAHIABAAQAEAFABAGQACAGgDAHIgEAJIgDAJQgDAGAFAHQAEAGAFAEIABABQAIAGADAIQAEAJgBALQgCAJAIAIIAIAJIABAAQAHAHAIAEQAHAEAJABIAgACIAAAAQAmABArgDIASgBIARgCIAkgHIAkgHIAAAAIAQgDIAAAAIAFgCIACgGQADgSABgVIABgjQgBgvgFgpIgBgHIABABIgDgGIAAgBIgBAAIAAAAQgGAAgGgDIABABQgFgCgFgEQgGgFgFgGIAAAAIgJgLQgTgdgPgnQgIgVgRgNQgMgJgHgKQgIgKgEgNIAAABQgEgKgDgOIgEgaIgCgaIAAAAIAAgBIgBgBIgBAAIAAAAIgEgBQgOABgLAGIABAAQgLAHgGAMQgFALgCANQgBALACAOQABALAFALIAAAAQADAIAHANIAAABQALAUAGATQADAHgCAGIgBABQgCAGgHAEQgIAEgLAAIgrAAIAAAAQgYAAgTACgACUAOQgGAAgEAFQgEAEABAGQADAaACAZQAEBEgJA6QAAAEACADIAAAAQAEAHAIAAIA1AAQAIAAAEgEIABAAQADgEAAgIIAAivQAAgHgDgEQgEgEgGAAIgeAAIgbAAg");
	this.shape_1.setTransform(24.9,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFDFD").s().p("AgaBnQgIAAgEgHIgBAAQgCgDABgEQAJg6gFhDQgBgZgEgaQAAgGAEgEQAEgFAGAAIA3AAQAGAAAEAEQAEAEAAAHIAACuQAAAIgEAEIAAAAQgEAEgIAAg");
	this.shape_2.setTransform(42.5,37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,51.8);


(lib.n6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFAC9QALhQApg/QgUgOgJgdQgGgXgBhTQAAglAOgXQAXglAtAAQA7ABANAoIgEFUQAAASgVAAQgNAAgJgMQgIgNAAgGQABgQAAgVIAAgMIABgNIABgaIAAgaIgFAAIgGAAQgRAPgPAnQgOAmgIAkQgCAGgJAGQgIAHgHAAQgPAAgMgMgAGLiOQgJAOgBAcIAAA8QAAAWAIAQQAHAOAQAAIAWAAQABguABh5QgDgCgMABQgWAAgIAOgAhuDBQgIgGAAgTIAAgdQABgwABiRIAAhGIAAgMIABgNIACgNQABgHACgGQABgGADgEQAIgLAgAAIAIABIAIAAIARAAQAXAAAIAEQAHAEAAAQQAAAPgFAEQgIAFgZAAIgmABQACABgBAmIAAAmIAAAVIAAAMIgBAJIAAAGIAqAAQATAAAEAEQAFAFAAAPQAAAJgHAGQgHAFgJABIggAAQgLAAAAADIAAAcIAABFIgBAhIADAAIAUgBIAUgCQAQABAHAEQAGAEAAANQAAAJgEAFQgHAGgHAAQgoAEgdAAQgVAAgGgHgADwC1IACjvIgLA2IgfCDQgJAagcAAQgUAAgIgYIgniLIgJAkIABCXQgEATgbAAQgVAAAAggIAAgiIAAhRIgBhYIAAhOIAAg3QAJgYAZAAQAMAAAOAJIBHELQAoi5ANgrQAEgRAFgJQAEgJALgFIABgCIAEgCIAGgBIANgBQAJAAAFAJQAHAHAAAPIAAA/QADCGAAB2QAAAcgEAIQgIALgVAAQgRAAgBgSgAkoDDQgFgEgBgKIADlQQAJgsBCgBQAyAAAUAiQAKAPAAAwQgBBPgIAbQgRA2gyAAQgUAAgKgCIAAA6IAAA3QABAGgJANQgHAMgOAAQgNAAgEgEgAj3ibIgCB6IAAAXIAAAXIAWAAQAQAAAIgPQAIgQAAgWIAAgRIABgXIAAgUQAAgcgIgPQgJgOgVABQgPgBAAACgAnTDFQgEAAgFgDQgNgJAAgRIADlDQACgPAJgKQAIgIALgEQAMgEAKgBQAJgBANgBQAoABAOAYQANAYAAArQAAA1gSAdQAJAGAIAKQASAWAAAvIgBAuQgBARgEATQgEAUgIAKQgHALgOAHQgOAHgVAAgAm1CZIAdAAQAQAAAIgQQAIgQAAgXIAAgKIABgJIAAgJQAAgigIgRQgHgQgZAAIgWAAgAmyibIgDB5QAbAAAFgFQALgNAAg2IAAgMQAAgmgaABIgOAAg");
	this.shape.setTransform(49,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98,40.1);


(lib.n5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am0DXQgHgFAAgGIAAgZIiUAAIgBAZQAAAHgGAEQgGAEgJAAQgIAAgHgEQgHgFAAgHIAAgMIgCgRQAAgaAKgHQAHgFAgAAQAKg9AHhdQAHheAAg5IAAgHQAAgOAHgJQAIgJAOAAQBGAAAGAEQAKAFADAHQADAHAAASIAABzIAABoIAABUQAdAAAIAGQAHAGAAAaIgBAeQAAAPgWAAQgIAAgGgEgAobCIIAwAAQABh8AAiuIgBAAIgLABIgNAAQgBCIgXChgAK4CxQgHgGAAgTIAAgdQABgwAAiRIABhGIAAgMIABgOIABgMQACgIACgFQABgGADgFQAHgKAhAAIAHABIAJAAIAQAAQAYAAAIAEQAHAEABAQQAAAPgHAEQgHAEgZAAIgmABQABABAAAnIgBAmIAAAVIAAAMIAAAJIAAAFIApAAQATAAAFAFQAEAFABAPQAAAKgIAFQgHAFgJAAIgfAAQgLAAAAAEIAAAcIgBBFIAAAgIADAAIATgBIAUgBQAQAAAIAEQAGAFAAAMQABAKgGAFQgGAFgIABQgoAEgdAAQgUAAgHgHgAgTCxQgHgGAAgTIAAgdQABgwAAiRIABhGIABgMIABgOIABgMQABgIACgFQABgGAEgFQAGgKAgAAIAIABIAJAAIAQAAQAXAAAIAEQAIAEAAAQQAAAPgHAEQgGAEgZAAIgnABQACABAAAnIgBAmIAAAVIAAAMIAAAJIAAAFIAoAAQAUAAAFAFQAEAFAAAPQAAAKgHAFQgHAFgJAAIggAAQgLAAAAAEIAAAcIAABFIAAAgIACAAIATgBIAVgBQAQAAAHAEQAHAFAAAMQAAAKgGAFQgFAFgIABQgpAEgdAAQgSAAgIgHgAlrCxQgHgGgBgTIAAgdQACgwAAiRIAAhGIABgMIABgOIACgMQABgIACgFQABgGADgFQAHgKAhAAIAIABIAIAAIAQAAQAYAAAIAEQAHAEABAQQgBAPgGAEQgHAEgZAAIgnABQACABAAAnIgBAmIAAAVIAAAMIAAAJIAAAFIApAAQAUAAAEAFQAEAFAAAPQABAKgIAFQgGAFgKAAIgfAAQgLAAAAAEIAAAcIAABFIgBAgIADAAIATgBIAUgBQARAAAHAEQAGAFABAMQAAAKgGAFQgGAFgHABQgpAEgdAAQgUAAgHgHgAIVCnQgTgPgJguQgKgyAAg/IAAgUIABgVIAAgeQAAgVAEgWQAEgWAIgXQAKgXASgPQAUgOAaAAQAfAAATAgQAUAfACAnIACAtIAAAnQAABngRA4QgTA4gqAAQgeAAgTgQgAIigPQABCbAgAAQAQAAAGgwQAIgxAAhDQAAhSgFgcQgBgMgIgOQgGgOgJAAQghAAgBCfgArzC2QgHgBgJgFQgKgFgHgIQgHgIgGgQQgFgQAAgVQAAgRAGgHQAGgGAOAAQANAAAEAJQAGAJAAAeQgBATAUAAQANAAAFgNQAGgNAAgSIABgGIAAgVIABgcQgRAFgOAAQgTAAgMgHQgSgJgJgeQgIgfgCgYIgBg9IABgOIAAgOIAAgnQAHgbAWAAQATAAgBAYQAABpAHA7QABAIAHAIQAGAIALAAQAJAAANgIIAEihQAAgYAKgNQAFgHANAAQAPAAAEASIABAQIAAAKIgBAvIgCBaIgDBWIgDAyQgCAPgFALQgDAMgJANQgIANgPAGQgOAIgVAAIgLgBgAhjChIgikdIgEAeIgFAdIgHAwIgLA+IgCAOIgCAOQgLBPgFAOQgFAFgLAEQgLAEgFAAQgQAAAAgUQAAgHABgGIANhLQAdiwALgzIACgHQACgLACgHQACgIAEgIQAFgJAJgEQAIgFANAAQAKAAAHAGQAHAFAEAKIAFASIADATIANBgIAOBsIAOBiIABAIQAAAMgJAHQgIAIgQAAQgPAAgCgTgAGeClIAAhEIAAhFIg1ABIAABSIgBAeQAAALgEANQgFAMgJACIgJAAQgWAAABgYIAAgyIAAgtIAAg8IAAhZIAAg3IABgwQAAgIAFgFQAEgEAEgBIAMgBQAIAAAJAGQAIAFAAAIIgCCxIAVgBIAhABIADi1QgBgHAHgGQAHgGAJAAQAMAAAOAPIABBIQAACzgDB1QgOALgRAAQgTAAAAgOgADjClIAAhEIABhFIg1ABIAABSIgBAeQgBALgFANQgEAMgIACIgKAAQgWAAAAgYIAAgyIABgtIAAg8IgBhZIAAg3IABgwQABgIAFgFQAEgEAEgBIAMgBQAIAAAJAGQAIAFAAAIIgBCxIAUgBIAhABIADi1QAAgHAGgGQAHgGAJAAQAMAAAOAPIABBIQAACzgDB1QgPALgPAAQgUAAAAgOg");
	this.shape.setTransform(81.3,21.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.5,43.9);


(lib.n4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsDHQgZAAgUgQQgTgPAAgaIAAgcQAMgPAKAAQALAAANALIABAcQAAAJAJAGQAHAFAKAAQAPAAAIgRQAIgRAAgYIAAgKIAAgKIAAgJQAAgigIgPQgHgQgZAAIgegBQgIgDAAgQQAAgFADgGQAEgHAFgBIAZgBQAWgBAAhAIAAgRQAAgUgEgKQgDgKgMAAQgHAAgEAFQgEAGgBAFIgCATQgBAIgIAFQgIAGgHAAQgKAAgMgLIAAgeQAAgXATgQQASgQAbAAQAVAAAOAHQAOAHAHAOQAHANACAPQADAPAAAVQAAAygSAgQALAHAHAHQASAWAAAwQAAAdgCARQgBASgEAUQgEATgHALQgIALgOAHQgOAHgUAAgAB8CyIgNhuIgZAAIgYABIgDAUQgLBQgFAOQgEADgMAFQgLAFgFAAQgPAAAAgVQAAgHACgGIALhKQAeiwAKgzIACgHQACgMACgHQACgHAFgJQAEgIAJgFQAJgEAMAAQAKAAAHAFQAHAFAEAKIAFASIADAUIANBgIAPBrIANBiIAAAIQAAAbggABQgOAAgDgTgABVhSIgEAiIgLBHIASAAIASgBIgPiNIgGAlg");
	this.shape.setTransform(17.3,19.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,39.9);


(lib.n3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(102.5,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205,40.5);


(lib.n2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlOC5QgTgPgJguQgJgyAAhAIAAgTIAAgVIAAgeQAAgVAEgWQAEgWAJgXQAJgXATgPQATgOAaAAQAfAAAUAgQAUAfABAnIACAtIAAAnQAABngRA4QgSA4grAAQgdAAgUgQgAlAACQAACcAgAAQAQAAAHgwQAHgxAAhDQAAhSgEgcQgCgMgHgOQgHgOgJAAQghAAAACegAEzDCQgHgGgCgFIgCgIIAAh0IgdAAQgyAAgPg2QgIgZAAhJQAAg+ACgVQADgRAVAAQAMAAAHAIQAFAFAAAvIAAAwQAAA0AGAYQAGAWAQAAIAYAAIAAgLIAAgKIABhnIAAg2QAAgMAEgGQADgHAEgBQAEgBAGAAQAdAAAAAmIgDFRQAAAKgEAEQgEAEgMAAQgKAAgHgHgABCDIQgHgBgJgFQgKgFgHgIQgIgIgFgQQgFgQAAgVQAAgRAGgHQAGgGAOAAQAMAAAFAJQAFAJAAAeQAAATAUAAQAMAAAGgNQAGgNAAgSIAAgGIABgVIABgcQgRAFgOAAQgUAAgLgHQgSgJgJgfQgIgegCgYIgBg9IABgOIAAgOIAAgnQAHgbAWAAQASAAAAAYQAABpAHA7QABAHAGAIQAHAJALAAQAJAAANgJIAEigQAAgYAJgNQAGgHAMAAQAQAAAEASIABAQIAAAKIgBAvIgDBaIgCBWIgDAyQgDAPgEALQgEAMgIANQgJANgOAGQgPAIgUAAIgLgBgAnGDCQgEgGAAgNIAAgKIAAgGIAAgGQACh4AAi0Ig2AAIgBDaIAAAqIAAAgIAAAiQAAADgDAEQgDAFgHAEQgGAGgKAAQgIAAgFgCQgGgCgCgEIgCgHIAAgKIAAgLIAAgGIAAgGQACh7AAi7IAAgHQAAgNAIgJQAIgJAOAAQBnAAAGADQAKAFADAHQAEAHAAARIgBDiIgBAqIAAAhIAAAiIgCAHQgCAFgHAEQgGAGgJAAQgRAAgEgHgAg6CzIgikdIgEAeIgEAdIgIAvIgLA/IgCAOIgCAOQgLBPgFAOQgFAFgLAEQgLAEgFAAQgQAAAAgUQAAgHACgGIAMhLQAeiwAKgzIACgHQACgLACgHQACgIAFgIQAEgJAJgEQAJgFAMAAQAKAAAHAGQAHAFAEAKIAFASIADATIANBgIAPBsIANBiIABAIQAAAMgJAHQgIAIgQAAQgOAAgDgTgAICC2QAChTAAhGIABg+Ig9DWQgEANgSAAQgOAAgMgIQgNgIgBgKQgBgNAAguQAAhKACh3IAAggIAAghIABgQQACgUANgFQAHgCAGAAQAVAAAAAfIAAAuIgBBIIgBBeIgBAbIA8jPQAMgrAGgJQAEgFAFgEQAPAAAKAIQAJAGABAMIAAChIAABjIAAAFIAAAnIgBAdQgCAQgEAGQgDAGgGAAQgTAAgPgPg");
	this.shape.setTransform(56.4,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.9,40.3);


(lib.c6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB5COQgMgKAIgLIAAgBIBkiDQAEgHgGgHIgVgQIgdgbIAAAAIgegbQgRgRgLgNQgHgHAGgIQAHgKAJAHQASANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhCBXQgEAGgGAAIgBAAQgFAAgGgFgAg6COQgMgKAJgMIBiiDQAEgHgGgHQgPgLgGgFIAAAAIgcgbIAAAAQgrgogPgRQgHgHAGgJIAAABQAHgKAJAHQASANAZAVIAoAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhBBXQgEAGgGAAIgBAAQgFAAgGgFgAjuCOQgMgKAIgLIAAgBQAlgzA/hQQAEgHgGgHIgVgQIgdgbIAAAAQgrgogPgRQgHgHAGgJIAAABQADgFAEAAQAEgCAEAEQATANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAgIhCBXQgEAGgGAAQgGAAgGgFg");
	this.shape.setTransform(25.7,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC527").s().p("Ag6COQgMgKAIgLIAAgBQAlgzA+hQQAEgHgGgHIgVgQIgcgbIAAAAQgrgogPgRQgHgHAGgJIAAABQADgFAEAAQAEgCAEAEQATANAZAVIAoAkIAdAWQAWASAAAQQAAAPgUAYIgcAgIhBBXQgEAGgGAAQgGAAgGgFg");
	this.shape_1.setTransform(7.7,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfCOQgMgKAIgLIAAgBIBkiDQAEgHgGgHIgVgQIgdgbIAAAAIgegbQgRgRgLgNQgHgHAGgIQAHgKAJAHQASANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhCBXQgEAGgGAAIgBAAQgFAAgGgFgAiUCOQgMgKAJgMIBjiDQAEgHgGgHQgPgLgGgFIAAAAIgdgbIAAAAQgrgogPgRQgHgHAGgJIAAABQAHgKAJAHQASANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhCBXQgEAGgGAAIgBAAQgFAAgGgFg");
	this.shape_2.setTransform(34.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FBC527").s().p("Ag6COQgMgKAJgMIBiiDQAEgHgGgHQgPgLgGgFIAAAAIgcgbIAAAAQgrgogPgRQgHgHAGgJIAAABQAHgKAJAHQASANAZAVIAoAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhBBXQgEAGgGAAIgBAAQgFAAgGgFg");
	this.shape_3.setTransform(25.7,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AB5COQgMgKAIgLIAAgBIBkiDQAEgHgGgHIgVgQIgdgbIAAAAIgegbQgRgRgLgNQgHgHAGgIQAHgKAJAHQASANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhCBXQgEAGgGAAIgBAAQgFAAgGgFgAjuCOQgMgKAIgLIAAgBQAlgzA/hQQAEgHgGgHIgVgQIgdgbIAAAAQgrgogPgRQgHgHAGgJIAAABQADgFAEAAQAEgCAEAEQATANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAgIhCBXQgEAGgGAAQgGAAgGgFg");
	this.shape_4.setTransform(25.7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBC527").s().p("Ag6COQgMgKAIgLIAAgBIBjiDQAEgHgGgHIgVgQIgcgbIAAAAIgegbQgRgRgLgNQgHgHAGgIQAHgKAJAHQASANAZAVIAoAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhBBXQgEAGgGAAIgBAAQgFAAgGgFg");
	this.shape_5.setTransform(43.7,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfCOQgMgKAJgMIBjiDQAEgHgGgHQgPgLgGgFIAAAAIgdgbIAAAAQgrgogPgRQgHgHAGgJIAAABQAHgKAJAHQASANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAhIAAgBIhCBXQgEAGgGAAIgBAAQgFAAgGgFgAiUCOQgMgKAIgLIAAgBQAlgzA/hQQAEgHgGgHIgVgQIgdgbIAAAAQgrgogPgRQgHgHAGgJIAAABQADgFAEAAQAEgCAEAEQATANAZAVIApAkIAdAWQAWASAAAQQAAAPgUAYIgcAgIhCBXQgEAGgGAAQgGAAgGgFg");
	this.shape_6.setTransform(16.7,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},5).to({state:[{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_6},{t:this.shape_5}]},5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.4,29.4);


(lib.c5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCAQgFgFABgMIAAgUIAAgmIABguIAAgsIAAgfIAAgPIABgWQABgLAFgJQADgEAHgBIAQgBIAGAAIAEAAIALAAQAOAAAGACQAGADAAALQAAAHgBADQgCADgGACIgRABIgDAAIgVAAIABAHIAAAMIAAAIIAAAZIAAAOIAAAIIgBAGIAAAEIAbAAQAIAAAFABQAEACABADIABAJQgBAIgEADQgFAEgGAAIgVAAIgFAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAATIAAAXIgBAXIAAAVIACAAIAMgBIAOAAQAKAAAFACQAFADAAAJQgBAGgDAEQgEADgFAAIgWACIgXABIgDAAQgLAAgFgEg");
	this.shape.setTransform(105.9,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkCAQgFgFABgMIAAgUIAAgmIABguIAAgsIAAgfIAAgPIABgWQABgLAFgJQADgEAHgBIAQgBIAGAAIAEAAIALAAQAOAAAGACQAGADAAALQAAAHgBADQgCADgGACIgRABIgDAAIgVAAIABAHIAAAMIAAAIIAAAZIAAAOIAAAIIgBAGIAAAEIAbAAQAIAAAFABQAEACABADIABAJQgBAIgEADQgFAEgGAAIgVAAIgFAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAABAAAAIAAATIAAAXIgBAXIAAAVIACAAIAMgBIAOAAQAKAAAFACQAFADAAAJQgBAGgDAEQgEADgFAAIgWACIgXABIgDAAQgLAAgFgEg");
	this.shape_1.setTransform(96.3,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVCCQgEgCgBgFIAAguIAAgYIABgWIgjABIAAA2IAAAUQAAAKgDAHQgDAHgGACIgHAAQgGAAgEgEQgEgDAAgJIABgiIAAgdIAAgpIAAg7IgBgkIABgXIAAgJQABgJAFgCQAFgCAGAAQAGAAAFADQAFAEAAAGIgBBEIAAAwIAHAAIAHAAIAKAAIALABIACh4QAAgFAEgDQAFgEAGgBQAEAAAEADQAEACAFAFIABAXIAAAaIgBAxIAAAxIgBAuIAAAjIAAASQgFADgFACQgGACgEAAQgFAAgEgCg");
	this.shape_2.setTransform(85.4,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghCDQgIgBgEgCQgEgCgCgFIgBgKIACjlQABgFADgEQAEgEAIAAIAPAAIATABIAQAAIAJACIAFAFQACADAAAEIgBAGIgEAHQgCACgDAAIgEAAIgJABIgaABIgBAaIAAARIgBAfIAOgBIAGAAQAPABAKAFQAJAGAGAIQAGAGACAIIAEARIAAAPQABAbgDAUQgDAVgLALQgKALgXABIgKABIgLAAIgQgBgAgTADIAAAnIAAAtIAAAGIAAAHIATAAQAHAAAFgFQAFgFACgIQACgHAAgKIAAgGIABgHIAAgGQAAgNgCgKQgCgKgGgGQgFgFgLgBg");
	this.shape_3.setTransform(73.4,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSCDQgJgEgJgLQgHgLgEgWQgDgQgCgUQgCgUAAgUIAAgNIAAgNIAAgUQAAgNADgQQACgQAHgPQAGgOAMgKQAMgKARAAQAOAAAMALQAKAKAGAPQAGAQAAAQIABAQIAAAOIAAANIABANQAAAqgEAgQgFAggMASQgLATgUAAQgKAAgLgDgAgGhjQgEAEgDAMQgDALgCAVIgCA1IAAAWIACAbIAEAbQACAMAEAIQAEAHAEABQAHgBADgJQAEgKACgQIAEgkIABgmIgBgbIAAgbIgCgTIgDgLQgDgGgDgEQgDgFgEAAQgEAAgEAEg");
	this.shape_4.setTransform(61.1,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwCDQgDgCAAgIIABjgQADgNAJgGQAIgGAKgCQALgCAJAAQAOAAAMAFQAMAEAIANQADAGABAHIACAPIAAAOIAAAcIgDAaQgBAMgCAFQgGATgLAIQgLAJgQAAIgLAAIgIgBIAAAGIAAAPIAAARIAAAMIAAASIAAAHIgCAGQgCAFgEAFQgEAEgHAAQgIAAgEgCgAgPhmIgBAsIAAAlIAAAQIAAAOIAOAAQAHAAAFgFQAEgEADgIQACgJAAgJIAAgLIAAgPIAAgNQABgSgGgKQgFgKgOAAIgHAAIgDABg");
	this.shape_5.setTransform(49.2,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA2CMQgEgDAAgFIgBgQIhhAAIgBAIIAAAIQAAAFgEADQgEADgGAAQgFAAgEgDQgFgDAAgGIgBgHIAAgMQAAgHABgGQABgFAEgDQAEgDAHgBIAPgBIAGgwIAFg2IAEg3IABgtIAAgFQAAgIAFgGQAEgHAKAAIANAAIAPAAIAOABIAIABQAGADADAFQACAGAAALIAAA0IAAAyIAAAsIgBAzIAAAEIAPACQAHAAADADQADADABAFQABAGAAAHIAAAOIgBAHQAAADgDACQgCADgEABIgFABQgGAAgEgDgAABhvQAAAlgBAlIgHBEIgGA3IAeAAIAAgWIABgmIAAgrIAAgrIAAgiIAAgRIgBAAIgHAAIgJAAg");
	this.shape_6.setTransform(34.7,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRCDQgLgEgHgLQgIgLgFgWQgCgQgCgUQgCgUAAgUIAAgNIABgNIAAgUQgBgNADgQQACgQAGgPQAHgOAMgKQAMgKARAAQAOAAALALQALAKAGAPQAGAQABAQIAAAQIABAOIAAANIAAANQAAAqgFAgQgFAggKASQgMATgVAAQgJAAgKgDgAgGhjQgEAEgDAMQgDALgCAVIgCA1IABAWIABAbIADAbQADAMAEAIQAEAHAFABQAFgBAEgJQAEgKADgQIACgkIABgmIAAgbIgBgbIgBgTIgDgLQgCgGgEgEQgEgFgEAAQgDAAgEAEg");
	this.shape_7.setTransform(20.6,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXCCQgEgCgBgEIgBgJIAAgGIABgFIAAgDIAAgYIAAglIABgsIAAgrIAAgjIAAgRIgSAAIgRAAIAAAyIAAAyIgBAtIAAASIAAATIAAAMIAAAXIgCAFQgCADgEADQgEADgHAAQgIAAgDgCQgDgCgBgEIgBgIIAAgHIAAgEIABgEIAAgZIAAgoIAAgtIABguIAAgjIAAgQIAAgEQAAgJAFgGQAFgGAKAAIAQAAIAXAAIAVABQAKAAACABQAGADACAFQADAFAAALIAAA0IgBA0IAAAuIAAATIAAATIAAAMIAAAXIgCAFQgBADgEADQgEADgHAAQgIAAgDgCg");
	this.shape_8.setTransform(8,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.8,47.2);


(lib.c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6C505").s().p("AtcEaQjCgGgVgKQgSgagJjIQgJjNAUhUQAGgbAGgDQAogKHUAAQGRAAIdAHQHvAGAeADQAgAEBUByQBUBzAJAzQAHAthPBfQhLBbg2AXQgYAJlRAIQlRAImoAAQmaAAjogIg");
	this.shape.setTransform(112.7,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsqEwQiugEg/gIQglgDgGgIQgZgdgJjcQgJjeAZhOQAIgbAQgFQAqgKHXAAQGGABIcAGQH8AGAfAEQArAEBaB8QBWB3AJA1QAJA2hWBoQhQBfg5AXQgeANmGAIQlLAGl7AAQlnABjpgHgAw3kXQgGADgGAbQgUBUAJDNQAJDIASAaQAVAKDCAGQDoAIGaAAQGoAAFRgIQFRgIAYgJQA2gXBLhbQBPhfgHgtQgJgzhUhzQhUhygggEQgegDnvgGQodgHmRAAQnUAAgoAKg");
	this.shape_1.setTransform(112.7,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225.4,62.1);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.v7();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c2, new cjs.Rectangle(0,0,497,76), null);


(lib.b9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmoGVIAAspINRAAIAAMpg");
	mask.setTransform(454.5,40.5);

	// Слой_1
	this.instance = new lib.v7();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.b9, new cjs.Rectangle(412,0,85,76), null);


(lib.b8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHCGQgMgBgIgIQgKgIgCgLIgJg0Ig1gBQgMAAgKgHQgJgIgDgLQgDgMAFgLQAFgKAKgFIAvgaIgQgzQgEgLAEgLQAEgMAKgGQAKgGAMABQAMABAJAIIAlAlIArgfQAKgHAMAAQAMABAJAHQAJAIADAMQADALgFALIgXAwIArAfQAJAHAEALQADAMgFALQgEALgKAGQgLAGgMgBIg0gHIgRAyQgEAMgKAGQgIAGgKAAIgDAAg");
	this.shape.setTransform(13.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b8, new cjs.Rectangle(0,0,27.4,26.9), null);


(lib.b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoVDLQgVgRgKgyQgLg3AAhFIABgWIAAgWIAAghQAAgYAFgXQADgYAKgZQAKgaAVgQQAVgQAdAAQAhAAAWAjQAWAjACAqIABAxIAAArQAABwgSA+QgUA9gvAAQggAAgVgRgAoHADQAACqAkAAQASAAAHg1QAIg1AAhJQgBhagEgeQgCgOgIgPQgIgPgJAAQglAAAACtgAh/DbQgbAAgXgRQgUgRAAgcIAAgeQANgRALAAQALAAAPANIABAeQAAAKAJAGQAJAGAKAAQARAAAIgTQAJgTgBgaIABgLIAAgLIAAgKQAAglgIgQQgJgRgaAAIghgCQgJgDAAgSQAAgFADgHQAFgHAEgCIAcgBQAYgBAAhFIAAgTQAAgWgEgLQgEgLgMAAQgIAAgEAGQgGAGAAAGIgBAUQgCAJgJAGQgJAGgHAAQgMAAgNgLIAAghQAAgaAVgRQAUgSAeAAQAWAAAPAIQAQAIAIAPQAHAOADARQAEAQgBAXQABA3gVAjQAMAHAHAIQAUAYAAA1IgBAyQgBATgEAWQgFAWgJALQgHAMgQAHQgPAIgXAAgAlDDUQgGgHAAgOIAAgQIABgHIABikIABikIgRAAIgagBQgPgDgBgZIABgCQADgPARgHQCIAAAGADQAFADAFAHQAFAIAAAFQAAAFgHAKQgFAKgGAAIgSABIgZAAIgBDuIAAAuIAAAkIAAAlQAAADgDAFQgEAFgHAFQgIAFgKAAQgRAAgFgHgAEpDaQgFAAgGgEQgOgKAAgTIAElhQADgQAIgKQAJgKANgEQANgEALgBQAKgCAOAAQArAAAPAbQAPAaAAAwQAAA6gTAgQAIAGALALQATAXAAA0QAAAfgBATQgBATgFAVQgEAVgIAMQgJALgPAIQgQAIgWAAgAFJCqIAgAAQASAAAIgSQAKgSgBgYIAAgLIABgKIAAgKQAAglgIgSQgJgSgbAAIgYAAgAFMinIgCCEQAcAAAGgGQAMgNABg7IAAgNQAAgqgcAAIgRABgAC6DPQgGgLAAgLIAEl3QABgKAJgGQAJgGAHAAQAIAAAJAHQAJAIACAJIgBBeIgCDvIAAApQAAAGgJANQgIANgPAAQgLAAgGgLgAAPDaQgVgDAAgeIAEl3QABgKAIgGQAIgGAJAAQAHAAAJAHQAKAIACAJQgBAJAAApIgBARIgBAgIgBAyIAjAAQAoAAAZAgQAUAWAAA1QAAAfgCATQAAATgFAVQgEAVgJAMQgIALgPAIQgPAIgXAAgAAwAHIgBCKIABAZIAgAAQASAAAJgSQAIgSABgYIAAgLIAAgKIAAgKQAAgmgIgSQgIgSgcAAgAIDDKQgJgNAAgPQAAgSAOgHQAOgIAMAAQARAAAFAKQAGAKAAATQAAAQgJAKQgJAJgQAAQgPAAgKgNgAICA/IAAgIIAAgUIAAgcIAAgjIAAgmIAAgPIgBhzIADgIQAMgMARAAQAOAAARANQgCADgCCBIgDCEQAAAzgdAAQgaAAAAgxg");
	this.shape.setTransform(57.6,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115.1,44);


(lib.b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnuDvQgIgHAAgUIAAggQACg0AAieIAAhNIABgNIABgPIACgOIADgOQABgHADgFQAIgKAkAAIAIAAIAKAAIASAAQAaAAAIAEQAIAFABASQAAAPgIAFQgHAFgcAAIgpABQABABAAAqIAAAqIAAAXIAAANIgBAKIAAAEIAtAAQAVAAAFAGQAFAFAAARQAAALgIAGQgHAGgLAAIgiAAQgMAAAAAEIAAAfIgBBLIAAAjIADAAIAWgBIAWgBQARAAAIAFQAHAFABANQAAAKgHAGQgGAGgIABQgsAEggAAQgWAAgIgIgAk3DbQgVgcgFgtQgFg9AAhWQAAg/AKgsQAQhPBFAAQA2AAATA6QAGAUACAgQAAAGgCAEQgIAMgUAAIgKgDQgIgCgCgEQgCgGgBgMIgDgTIgEgRQgDgMgGgFQgGgFgJAAQgPAAgKAZQgJAaAAAZIgBAbIgBA/IABAeIABAYIAAALQACBrAiAAQAOAAAKgPQAKgPACgWQACgLgCgOQACgKAHgEQAIgGAJAAQARAAAEAJQAFAJAAAQQAAAhgGARQgMAdgVAQQgWAQgcAAQgpAAgVgbgAhbDuQgGgHAAgOIABgQIAAgHIABikIAAikIgQAAIgbgBQgPgDABgZIAAgCQADgPARgHQCHAAAHADQADADAGAHQAFAIAAAFQAAAFgGAKQgHAKgFAAIgRABIgZAAIgBDuIAAAuIAAAkIAAAlQgBADgDAFQgDAFgHAFQgHAFgLAAQgRAAgFgHgApJDuQgIgGgCgGQgCgFAAgEIgBh+IgeAAQg4AAgQg7QgIgdgBhPQABhDABgXQADgSAYAAQAMAAAJAJQAFAFAAAzIAAA1QAAA4AHAZQAGAaASAAIAZAAIAAgMIABgNIABhvIAAg7QAAgNAEgHQAEgHAEgBQAEgCAGAAQAgAAABApIgEFxQABAMgFAEQgEADgOAAQgLAAgHgHgAGyDpQgGgLAAgLIAEl3QABgKAJgGQAIgGAJAAQAHAAAJAHQAKAIACAJIgBBeIgEDvIAAApQAAAGgHANQgJANgPAAQgLAAgGgLgAEGD0QgVgDAAgeIAEl3QABgKAIgGQAJgGAIAAQAIAAAJAHQAKAIABAJQgBAJAAApIAAARIAAAgIgCAyIAjAAQAnAAAbAfQATAXAAA1QAAAfgBATQgCATgEAVQgEAVgIAMQgJALgPAIQgQAIgWAAgAEoAhIAACKIAAAZIAgAAQASAAAIgSQAKgSgBgYIAAgLIABgKIAAgKQAAgmgIgSQgJgSgbAAgAKPDhQAChbAAhMQgBgyACgSIhCDqQgGAPgTAAQgOAAgOgJQgOgJgBgLQgCgOAAgzQAAhQACiCIABgjIAAgkIAAgSQADgWAPgFQAHgDAHAAQAXAAAAAiIAAAyIgBBPIgCBnIgBAeIBBjjQANgvAHgJQAEgGAGgEQARAAAKAIQAKAHABANIABCvIAABuIAAAFIAAArIgDAfQAAARgFAHQgEAHgGAAQgVAAgQgRgACXDiIAAhLIABhKIg7AAIAABaIAAAhQgBAMgFAOQgEANgKADIgKAAQgYAAAAgaIAAg3IAAgxIAAhDIAAhgIAAg8QAAglABgQQABgJAFgFQAEgFAFAAIANgBQAKAAAIAFQAJAHAAAIIgCDAIAYAAIAkABIACjFQAAgIAHgHQAIgGALAAQAMAAAPAQIABBPQAADEgDCAQgQAMgSAAQgVAAAAgQgAJBjCQgRgOAAgVQgBgRATAAQAMAAAMAMQAJALALAAQAOAAAKgOQAFgHAKAAQAVABADATIgCAFIgHALQgEAHgGAGQgHAFgLAFQgMAFgNAAQgeAAgQgOg");
	this.shape.setTransform(71,24.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.9,49.4);


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuDlQgUgRgKgxQgLg3AAhGIABgXIAAgVIAAghQgBgXAFgYQAEgXAKgaQAKgZAUgQQAWgQAdAAQAgAAAXAjQAWAjABAqIACAwIAAArQAABxgTA9QgTA9gwAAQgfAAgWgRgAA9AdQAACrAkAAQARAAAIg1QAHg1AAhLQAAhYgFgfQgBgNgIgPQgIgPgJAAQglAAAACsgAlyDbQgWgcgEgtQgFg9AAhVQAAhAAKgsQARhPBEAAQA2AAATA7QAGAUACAfQAAAGgCAEQgIAMgUAAIgKgCQgIgDgDgDQgBgGgBgNIgCgTIgFgRQgDgLgGgFQgHgGgIAAQgPAAgKAaQgJAZAAAaIAAAbIgCA/IABAdIABAZIAAALQADBqAhAAQANAAALgPQAKgOACgWQACgLgCgPQACgJAHgFQAIgFAJAAQARAAAEAJQAFAIAAARQAAAhgGAQQgMAegVAQQgWAPgbAAQgqAAgVgbgAipD0QgGAAgFgEQgNgJAAgTIADlhQACgQAJgKQAJgKAOgEQAMgFAKgBQALgBAOAAQAsAAAOAaQAPAbAAAvQAAA6gTAfQAJAGAKAMQATAXAAA0QAAAfgCAUQgBASgEAWQgEAVgIALQgJAMgPAHQgQAIgWAAgAiJDEIAgAAQASAAAIgSQAJgRAAgZIAAgLIABgKIAAgJQAAgmgIgSQgJgSgaAAIgZAAgAiGiNIgCCFQAdAAAGgGQAMgOgBg6IAAgOQAAgpgbAAIgRAAgAFbDhQAChaAAhNQAAgyABgSIhCDrQgFAOgTAAQgPAAgOgJQgOgJgBgLQgCgOAAgyQABhRACiCIAAgjIAAgkIABgSQACgVAPgGQAIgCAGAAQAXAAAAAiIAAAyIgBBPIgCBnIgBAeIBCjjQANgvAGgKQAFgGAGgDQARAAAKAHQAJAIACAMIAACvIAABuIAAAFIAAArIgCAfQgBASgEAHQgEAGgHAAQgUAAgRgRgAENjCQgRgNAAgWQAAgQASAAQAMAAANAMQAIAKALAAQAOAAAKgOQAGgHAJAAQAVABADAUIgCAEIgGALQgFAIgGAFQgGAGgMAFQgLAEgOAAQgdAAgRgOg");
	this.shape.setTransform(40.2,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,49.3);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AldDBQgVgcgEgtQgGg9AAhWQAAg/AKgsQARhPBFAAQA1AAATA6QAGAUACAgQAAAGgCAEQgIAMgUAAIgKgDQgIgCgCgEQgCgGgBgMIgCgTIgFgRQgDgMgGgFQgGgFgJAAQgPAAgJAZQgKAaAAAZIAAAbIgCA/IABAeIABAYIAAALQADBrAhAAQAOAAAKgPQAKgPACgWQACgLgCgOQACgKAIgEQAHgGAJAAQARAAAEAJQAFAJAAAQQAAAhgGARQgMAdgVAQQgWAQgbAAQgqAAgVgbgAogDLQgVgRgKgyQgLg3AAhFIABgWIAAgWIAAghQAAgYAEgXQAEgYAKgZQAKgaAVgQQAVgQAdAAQAhAAAWAjQAWAjABAqIACAxIAAArQAABwgTA+QgTA9gvAAQggAAgVgRgAoSADQAACqAkAAQARAAAIg1QAHg1AAhJQAAhagEgeQgCgOgIgPQgIgPgJAAQglAAAACtgAiBDUQgGgHAAgOIABgQIAAgHIABikIABikIgRAAIgagBQgPgDAAgZIAAgCQADgPARgHQCIAAAHADQAEADAFAHQAFAIAAAFQAAAFgGAKQgGAKgGAAIgSABIgZAAIgBDuIAAAuIAAAkIAAAlQAAADgDAFQgEAFgHAFQgHAFgKAAQgSAAgFgHgAGxDaQgVgDAAgeIADl3QACgKAIgGQAJgGAIAAQAIAAAJAHQAJAIACAJQgBAJAAApIAAARIgBAgIgBAyIAjAAQAnAAAaAgQAUAWAAA1QAAAfgCATQgBATgEAVQgEAVgJAMQgIALgPAIQgQAIgWAAgAHTAHIgBCKIABAZIAgAAQASAAAIgSQAJgSAAgYIAAgLIABgKIAAgKQAAgmgIgSQgJgSgbAAgADpDaQgGAAgFgEQgOgKAAgTIADlhQADgQAJgKQAJgKANgEQANgEAKgBQALgCAOAAQArAAAPAbQAPAaAAAwQAAA6gUAgQAJAGAKALQAUAXAAA0QAAAfgCATQgBATgEAVQgEAVgJAMQgIALgPAIQgQAIgWAAgAEJCqIAgAAQASAAAIgSQAJgSAAgYIAAgLIABgKIAAgKQAAglgIgSQgJgSgbAAIgYAAgAEMinIgCCEQAcAAAGgGQAMgNAAg7IAAgNQAAgqgcAAIgQABgACEDEIgOh3IgbAAIgaAAIgDAXQgMBWgGAQQgEADgNAFQgNAGgFAAQgRAAAAgXQAAgHACgHIANhRQAgjBALg3IACgIIAFgUQACgIAFgKQAFgJAKgFQAJgFAOAAQALAAAIAGQAHAGAEALIAGATIADAWIAOBoIAQB2IAOBrIABAJQAAAdgjABQgQAAgDgVgABahYIgFAlIgMBOIAUAAIATgBIgQiaIgGAog");
	this.shape.setTransform(58.7,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.4,44);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF2DaQgHgCgLgFQgKgFgIgJQgIgIgGgSQgGgRAAgZQAAgRAGgIQAHgHAQAAQANAAAFAKQAGAKAAAhQAAAVAVAAQAOAAAGgPQAHgOAAgTIABgHIAAgXIABgeQgSAGgQgBQgVAAgNgIQgTgJgKgjQgJghgCgZIgBhEIAAgPIABgPIAAgrQAHgdAZAAQAUAAAAAaQAAB0AHBAQABAHAHAJQAIAKALAAQAKAAAOgKIAFiwQAAgaAKgNQAFgIAOAAQARgBAFAVIACARIgBALIgBAzIgDBjIgCBeIgDA3QgEAPgEAOQgEAMgKAOQgIAOgQAHQgRAIgWAAIgMAAgADuDTQgHgGgCgGQgCgFAAgEIgBh+IgfAAQg4AAgQg8QgIgbAAhQQAAhDABgYQAEgRAYgBQAMAAAJAJQAFAFAAA0IAAA0QAAA5AGAZQAGAZATAAIAZAAIAAgLIABgMIABhwIAAg8QAAgNADgGQAEgHAFgCQADgBAHAAQAgAAAAApIgDFxQAAALgEAFQgFADgNAAQgLAAgIgHgAkUDWQgFgEgBgLIADlwQAKgwBIAAQA3AAAWAkQAKARAAAzQAABYgKAdQgSA8g2AAQgWAAgLgCIgBA9IABA+QAAAGgJAOQgIANgPAAQgNAAgGgEgAjeioIgCCFIAAAaIAAAYIAYAAQARAAAKgQQAJgRAAgZIAAgSIAAgZIAAgWQAAgfgJgQQgJgPgYAAQgQAAAAACgAnHDZQgGAAgFgFQgOgJAAgTIADlhQAEgQAIgKQAJgKANgEQANgEALgBQAKgCAOAAQAsAAAPAbQAOAaAAAwQAAA5gUAhQAKAFAJAMQAUAWAAA0QAAAfgCAUQAAATgFAVQgEAVgJAMQgIALgPAIQgPAHgXABgAmnCoIAgAAQASABAJgTQAIgRABgYIAAgLIAAgLIAAgJQAAglgIgTQgIgRgcgBIgYAAgAmkioIgCCEQAdAAAFgGQANgNAAg7IAAgOQAAgpgdAAIgQABgAArDDIgOh4IgbAAIgZABIgEAXQgMBWgFAPQgEAEgOAFQgNAGgEAAQgSgBAAgWQAAgIACgGIANhSQAhjAALg3IACgIIAFgUQACgJAFgJQAFgJAJgFQAKgFANAAQALAAAIAGQAHAFAEALIAGAUIADAWIAOBoIAQB2IAOBrIABAIQAAAdgjACQgQAAgDgVgAABhZIgEAlIgMBOIATAAIATgBIgQibIgGApg");
	this.shape.setTransform(48.1,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b1, new cjs.Rectangle(0,0,96.1,43.6), null);


(lib._7z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA+CoIgWhNIhWAAIgTBNIhdAAIBilQIB3AAIBkFQgAAcAXIgQg7IgIghIgHgiIgBAAIgIAiIgHAiIgPA6IA+AAg");
	this.shape.setTransform(15.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.9,33.7);


(lib.x7d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.z4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.7,29.2,1,1,8.5,0,0,14.5,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F24354").s().p("AknDhIA9oAIIRA/Ig9IAg");
	this.shape.setTransform(32.1,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance_1 = new lib.v5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.2,31.6,1,1,0,0,0,30.2,27.6);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.7,59.2);


(lib.x6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.z3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(32.2,27.9,1,1,2.7,0,0,13.3,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8C750").s().p("AkWD0IAZoCIIVAbIgaICg");
	this.shape.setTransform(31.2,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance_1 = new lib.v4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.4,28.1,1,1,0,0,0,28.4,27);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.1,55.1);


(lib.x5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.z2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(29.5,26.5,1,1,0,0,0,16.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4EB8EA").s().p("AkKECIAAoDIIVAAIAAIDg");
	this.shape.setTransform(29,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance_1 = new lib.v3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.4,28.2,1,1,0,0,0,27.4,28.2);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,56.4);


(lib.v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.b3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-108.2,1.1,0.25,0.25,0,0,0,58.8,22);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(92).to({_off:false},0).to({regX:58.6,regY:21.9,scaleX:1,scaleY:1,x:-108.3},6,cjs.Ease.backOut).to({_off:true},80).wait(82));

	// Слой_2
	this.instance_1 = new lib.b4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,-1.5,0.25,0.25,0,0,0,40.4,24.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({regX:40.2,regY:24.6,scaleX:1,scaleY:1},6,cjs.Ease.backOut).to({_off:true},78).wait(82));

	// Слой_3
	this.instance_2 = new lib.b5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(137.9,-1.5,0.25,0.25,0,0,0,71.2,24.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({_off:false},0).to({regX:71,regY:24.7,scaleX:1,scaleY:1,y:-1.4},6,cjs.Ease.backOut).to({_off:true},76).wait(82));

	// Слой_4
	this.instance_3 = new lib.b6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(285,1.1,0.25,0.25,0,0,0,57.8,22);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({regX:57.6,regY:21.9,scaleX:1,scaleY:1},6,cjs.Ease.backOut).to({_off:true},74).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.n7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.b8();
	this.instance.parent = this;
	this.instance.setTransform(13.7,13.4,1,1,0,0,0,13.7,13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,26.9);


(lib.d9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib._7z("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(31.2,27.1,1,1,0,0,0,15.9,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAD65B").s().p("AkSD5IARoCIIUARIgRICg");
	this.shape.setTransform(31.4,26.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance_1 = new lib.x1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,27.8,1,1,0,0,0,28.1,26.9);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.9,54.6);


(lib.d8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.z5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27.8,26.3,1,1,0,0,0,13.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_2
	this.instance_1 = new lib.z6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.5,26.1,1,1,0,0,0,26.9,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой_1
	this.instance_2 = new lib.v6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.6,30.1,1,1,0,0,0,28.6,26.7);
	this.instance_2.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,56.8);


(lib.d0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.x2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(31.6,26.2,1,1,-0.3,0,0,14.2,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F24354").s().p("AlUk6IKagPIAPKEIqaAOg");
	this.shape.setTransform(32.2,26.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.instance_1 = new lib.x3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.4,30.1,1,1,0,0,0,29.4,27.7);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.4,57.8);


(lib.c9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.n8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-227.6,-2.3,0.72,0.72,0,0,0,24.9,25.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},57).wait(82));

	// Слой_2
	this.instance_1 = new lib.n8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-280.6,-2.3,0.72,0.72,0,0,0,24.9,25.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},55).wait(82));

	// Слой_3
	this.instance_2 = new lib.n8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-333.6,-2.3,0.72,0.72,0,0,0,24.9,25.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},53).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.n7();
	this.instance.parent = this;
	this.instance.setTransform(958.3,85,0.8,0.8,0,0,180,13.7,13.5);

	this.instance_1 = new lib.n7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(700.9,13.4,0.5,0.5,0,0,0,13.7,13.4);

	this.instance_2 = new lib.n7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(363,90.5,0.7,0.7,0,0,180,13.8,13.5);

	this.instance_3 = new lib.n7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(774,90.4,1,1,0,0,0,13.7,13.4);

	this.instance_4 = new lib.n7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(221.7,23.2,0.5,0.5,0,0,0,13.7,13.4);

	this.instance_5 = new lib.n7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.6,20.2,0.7,0.7,0,0,180,13.7,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.c7, new cjs.Rectangle(0,6.7,969.3,97.1), null);


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.b9();
	this.instance.parent = this;
	this.instance.setTransform(-93.5,37.1,1,1.132,0,0,0,248.5,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:454.5,scaleY:1.1,x:200.2,y:36.9},0).wait(1).to({scaleY:1.08,x:278.5,y:36.8},0).wait(1).to({regX:248.4,scaleY:1.06,x:141.2,y:36.6},0).to({regX:248.5,scaleY:1,x:249.6,y:37.9},4,cjs.Ease.quadOut).wait(1).to({regX:454.5,x:454.8,y:38},0).wait(1).to({regX:248.5,x:248.5},0).wait(3));

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_1 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_2 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_3 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_4 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_5 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_6 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_7 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_8 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");
	var mask_graphics_9 = new cjs.Graphics().p("EgnIAHvIAAvdMBORAAAIAAPdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-173.5,y:38.6}).wait(1).to({graphics:mask_graphics_1,x:-85.4,y:38.6}).wait(1).to({graphics:mask_graphics_2,x:-7.6,y:38.6}).wait(1).to({graphics:mask_graphics_3,x:59.8,y:38.6}).wait(1).to({graphics:mask_graphics_4,x:116.9,y:38.6}).wait(1).to({graphics:mask_graphics_5,x:163.5,y:38.6}).wait(1).to({graphics:mask_graphics_6,x:199.8,y:38.6}).wait(1).to({graphics:mask_graphics_7,x:225.8,y:38.6}).wait(1).to({graphics:mask_graphics_8,x:241.3,y:38.6}).wait(1).to({graphics:mask_graphics_9,x:246.5,y:38.6}).wait(3));

	// Слой_1
	this.instance_1 = new lib.c2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.5,38,1,1,0,0,0,248.5,38);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342,-5.9,497,91.7);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.x4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.9,26.4,1,1,0,0,0,13.6,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4EB8EA").s().p("AkQj6IIUgOIANIDIoUAOg");
	this.shape.setTransform(28.6,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkHkKIH1gCIAoH+IorAbg");
	this.shape_1.setTransform(27.8,28.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.9,55.9);


(lib.c0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.n8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(403.4,-2.3,0.72,0.72,0,0,180,24.8,25.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},57).wait(82));

	// Слой_2
	this.instance_1 = new lib.n8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(456.4,-2.3,0.72,0.72,0,0,180,24.8,25.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(107).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},55).wait(82));

	// Режим изоляции
	this.instance_2 = new lib.n8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(509.4,-2.3,0.72,0.72,0,0,180,24.8,25.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({scaleX:0.81,scaleY:0.81},16,cjs.Ease.elasticOut).to({_off:true},53).wait(82));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.b7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.n7();
	this.instance.parent = this;
	this.instance.setTransform(765.9,20.4,0.5,0.5,0,0,0,13.7,13.4);

	this.instance_1 = new lib.n7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(363,90.5,0.7,0.7,0,0,180,13.8,13.5);

	this.instance_2 = new lib.n7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(308.1,13.4,1,1,0,0,0,13.7,13.4);

	this.instance_3 = new lib.n7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.7,90.5,0.5,0.5,0,0,0,13.7,13.4);

	this.instance_4 = new lib.n7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.7,28.1,0.7,0.7,0,0,180,13.7,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.b7, new cjs.Rectangle(0.1,0,772.6,99.9), null);


(lib.b0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.c5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(74.1,33.1,1,1,0,0,0,56.4,23.6);

	this.instance_1 = new lib.c6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(171.2,31.4,1,1,0,0,0,25.7,14.7);

	this.instance_2 = new lib.c4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(112.7,31.1,1,1,0,0,0,112.7,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225.4,62.1);


(lib.z1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_8
	this.instance = new lib.x5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(346.8,36.8,0.25,0.25,0,0,0,28,28.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({regX:27.9,regY:28.2,scaleX:1,scaleY:1,x:346.9},5,cjs.Ease.backOut).wait(4));

	// Слой_7
	this.instance_1 = new lib.x6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(291,34.5,0.25,0.25,0,0,0,29.8,27.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:29.6,scaleX:1,scaleY:1,y:34.6},5,cjs.Ease.backOut).wait(6));

	// Слой_6
	this.instance_2 = new lib.x7d("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.9,34,0.25,0.25,0,0,0,30.8,29.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(8));

	// Слой_5
	this.instance_3 = new lib.d8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(186.8,29.8,0.25,0.25,0,0,0,28.6,28.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regY:28.4,scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(10));

	// Слой_4
	this.instance_4 = new lib.d9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(132,32.5,0.25,0.25,0,0,0,29.6,27.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({regX:29.4,regY:27.3,scaleX:1,scaleY:1,x:131.9},5,cjs.Ease.backOut).wait(12));

	// Слой_3
	this.instance_5 = new lib.d0("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(78.5,28.9,0.25,0.25,0,0,0,29.8,29);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({regX:29.7,regY:28.9,scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(14));

	// Слой_1
	this.instance_6 = new lib.c1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(28,32.7,0.25,0.25,0,0,0,28.2,28.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:27.9,regY:27.9,scaleX:1,scaleY:1,x:27.9},5,cjs.Ease.backOut).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.9,25.6,14,13.9);


(lib.v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.b0();
	this.instance.parent = this;
	this.instance.setTransform(436.6,1.6,1.2,1.2,0,0,0,112.8,31.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({_off:false},0).to({regX:112.7,scaleX:1,scaleY:1,x:436.5},21,cjs.Ease.elasticOut).wait(39).to({y:-48.4},6,cjs.Ease.cubicIn).wait(1));

	// Слой_2
	this.instance_1 = new lib.n6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(250.6,-0.7,0.25,0.25,0,0,0,49,20.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(186).to({_off:false},0).to({regY:20.1,scaleX:1,scaleY:1,y:-0.6},5,cjs.Ease.backOut).wait(62).to({startPosition:0},0).to({y:49.4},6,cjs.Ease.cubicIn).wait(1));

	// Слой_3
	this.instance_2 = new lib.n5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.9,0.9,0.25,0.25,0,0,0,81.4,22);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(184).to({_off:false},0).to({regX:81.3,regY:21.9,scaleX:1,scaleY:1,x:104},5,cjs.Ease.backOut).wait(64).to({startPosition:0},0).to({y:-49.1},6,cjs.Ease.cubicIn).wait(1));

	// Слой_4
	this.instance_3 = new lib.n4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.4,-0.7,0.25,0.25,0,0,0,17.4,20.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(182).to({_off:false},0).to({regX:17.3,regY:19.9,scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(66).to({startPosition:0},0).to({y:49.3},6,cjs.Ease.cubicIn).wait(1));

	// Слой_5
	this.instance_4 = new lib.n3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-145.1,-0.8,0.25,0.25,0,0,0,102.8,20.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180).to({_off:false},0).to({regX:102.5,scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(68).to({startPosition:0},0).to({y:-50.8},6,cjs.Ease.cubicIn).wait(1));

	// Слой_6
	this.instance_5 = new lib.n2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-321.9,-0.9,0.25,0.25,0,0,0,56.4,20.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(178).to({_off:false},0).to({regY:20.1,scaleX:1,scaleY:1},5,cjs.Ease.backOut).wait(70).to({startPosition:0},0).to({y:49.1},6,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.c8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_7
	this.instance = new lib.z1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(275.3,2.3,0.999,1.141,0,0,0,187.6,32.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({_off:true},75).wait(168));

	// Слой_2
	this.instance_1 = new lib.v8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(531.2,1,0.3,0.3,0,0,0,8.2,22.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({scaleX:1.2,scaleY:1.2,x:531.3,y:1.1},6,cjs.Ease.backOut).to({_off:true},54).wait(168));

	// Слой_3
	this.instance_2 = new lib.c3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(266,0.5,1,1,0,0,0,248.5,38);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({_off:true},76).wait(168));

	// Слой_4
	this.instance_3 = new lib.v9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-313.1,-0.1,0.25,0.25,0,0,0,62.4,22.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({regY:22.1,scaleX:1,scaleY:1,y:0},6,cjs.Ease.backOut).to({_off:true},82).wait(168));

	// Слой_5
	this.instance_4 = new lib.vvvv0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-168.3,0.1,0.25,0.25,0,0,0,66,22.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({_off:false},0).to({regY:21.9,scaleX:1,scaleY:1,x:-168.2,y:0},6,cjs.Ease.backOut).to({_off:true},79).wait(168));

	// Слой_6
	this.instance_5 = new lib.b1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-37.6,0,0.25,0.25,0,0,0,48.2,22);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({regX:48.1,regY:21.8,scaleX:1,scaleY:1},6,cjs.Ease.backOut).to({_off:true},76).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.DI_spasibo_825x85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_52
	this.instance = new lib.v2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(421.3,37.9,0.852,0.852,0,0,0,94.6,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// Слой_29 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_170 = new cjs.Graphics().p("AXBGkQgIAAAAhkIAAp1QAAhkAIAAIMQAAQAIAAAABkIAAJ1QAABkgIAAg");
	var mask_graphics_171 = new cjs.Graphics().p("AANGkQgbAAAAhkIAAp1QAAhkAbAAMAqdAAAQAcAAAABkIAAJ1QAABkgcAAg");
	var mask_graphics_172 = new cjs.Graphics().p("AzGGkQgtAAAAhkIAAp1QAAhkAtAAMBEBAAAQAtAAAABkIAAJ1QAABkgtAAg");
	var mask_graphics_173 = new cjs.Graphics().p("Egi5AGkQg7AAAAhkIAAp1QAAhkA7AAMBY8AAAQA6AAAABkIAAJ1QAABkg6AAg");
	var mask_graphics_174 = new cjs.Graphics().p("EgvMAGkQhFAAAAhkIAAp1QAAhkBFAAMBpOAAAQBFAAAABkIAAJ1QAABkhFAAg");
	var mask_graphics_175 = new cjs.Graphics().p("Eg3+AGkQhNAAAAhkIAAp1QAAhkBNAAMB02AAAQBNAAAABkIAAJ1QAABkhNAAg");
	var mask_graphics_176 = new cjs.Graphics().p("Eg9PAGkQhRAAAAhkIAAp1QAAhkBRAAMB70AAAQBSAAAABkIAAJ1QAABkhSAAg");
	var mask_graphics_177 = new cjs.Graphics().p("Eg+/AGkQhTAAAAhkIAAp1QAAhkBTAAMB+JAAAQBTAAAABkIAAJ1QAABkhTAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(170).to({graphics:mask_graphics_170,x:226.5,y:42}).wait(1).to({graphics:mask_graphics_171,x:275.8,y:42}).wait(1).to({graphics:mask_graphics_172,x:317.6,y:42}).wait(1).to({graphics:mask_graphics_173,x:351.7,y:42}).wait(1).to({graphics:mask_graphics_174,x:378.3,y:42}).wait(1).to({graphics:mask_graphics_175,x:397.3,y:42}).wait(1).to({graphics:mask_graphics_176,x:408.7,y:42}).wait(1).to({graphics:mask_graphics_177,x:412.5,y:42}).wait(1).to({graphics:null,x:0,y:0}).wait(82));

	// Слой_20
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1484B2").ss(2,1,1).p("Eg+4gGoMB9xAAAQBkAAAABmIAAKFQAABmhkAAMh9xAAAQhkAAAAhmIAAqFQAAhmBkAAg");
	this.shape.setTransform(412.5,42.5);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(170).to({_off:false},0).wait(90));

	// Слой_27
	this.instance_1 = new lib.b7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(497.2,43,1,1,0,0,0,492.1,49.9);
	this.instance_1.alpha = 0.398;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(170).to({_off:false},0).wait(90));

	// Слой_43
	this.instance_2 = new lib.n9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(441.1,6.1,1,1,0,0,0,14,14);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(235).to({_off:false},0).wait(25));

	// Слой_44
	this.instance_3 = new lib.n9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(914.6,79.4,1,1,0,0,0,14,14);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(209).to({_off:false},0).to({_off:true},50).wait(1));

	// Слой_45
	this.instance_4 = new lib.n9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(317.1,81.1,1,1,0,0,0,14,14);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194).to({_off:false},0).wait(66));

	// Слой_46
	this.instance_5 = new lib.n9("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(131.1,6.1,1,1,0,0,0,14,14);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({_off:false},0).wait(90));

	// Режим изоляции
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#01AAEB").s().p("Eg+4AGpQhkAAAAhmIAAqEQAAhnBkAAMB9xAAAQBkAAAABnIAAKEQAABmhkAAg");
	this.shape_1.setTransform(412.5,42.5);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(170).to({_off:false},0).wait(90));

	// Слой_49
	this.instance_6 = new lib.c0("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(727.5,39.8,0.9,0.9,0,0,0,456.4,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(260));

	// Слой_48
	this.instance_7 = new lib.c9("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(99.2,39.8,0.9,0.9,0,0,0,-280.7,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(260));

	// Слой_50
	this.instance_8 = new lib.v1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(412.8,40.4,0.9,0.9,0,0,0,87.7,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(260));

	// Слой_29 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_84 = new cjs.Graphics().p("AXBGkQgIAAAAhkIAAp1QAAhkAIAAIMQAAQAIAAAABkIAAJ1QAABkgIAAg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AARGkQgbAAAAhkIAAp1QAAhkAbAAMAqYAAAQAcAAAABkIAAJ1QAABkgcAAg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Ay/GkQgtAAAAhkIAAp1QAAhkAtAAMBD3AAAQAtAAAABkIAAJ1QAABkgtAAg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgiwAGkQg6AAAAhkIAAp1QAAhkA6AAMBYvAAAQA7AAAABkIAAJ1QAABkg7AAg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgvAAGkQhFAAAAhkIAAp1QAAhkBFAAMBo9AAAQBGAAAABkIAAJ1QAABkhGAAg");
	var mask_1_graphics_89 = new cjs.Graphics().p("Eg3wAGkQhNAAAAhkIAAp1QAAhkBNAAMB0jAAAQBNAAAABkIAAJ1QAABkhNAAg");
	var mask_1_graphics_90 = new cjs.Graphics().p("Eg9AAGkQhSAAAAhkIAAp1QAAhkBSAAMB7gAAAQBRAAAABkIAAJ1QAABkhRAAg");
	var mask_1_graphics_91 = new cjs.Graphics().p("Eg+xAGkQhTAAAAhkIAAp1QAAhkBTAAMB91AAAQBTAAAABkIAAJ1QAABkhTAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(84).to({graphics:mask_1_graphics_84,x:226.5,y:42}).wait(1).to({graphics:mask_1_graphics_85,x:275.7,y:42}).wait(1).to({graphics:mask_1_graphics_86,x:317.3,y:42}).wait(1).to({graphics:mask_1_graphics_87,x:351.4,y:42}).wait(1).to({graphics:mask_1_graphics_88,x:377.9,y:42}).wait(1).to({graphics:mask_1_graphics_89,x:396.8,y:42}).wait(1).to({graphics:mask_1_graphics_90,x:408.1,y:42}).wait(1).to({graphics:mask_1_graphics_91,x:411.9,y:42}).wait(1).to({graphics:null,x:0,y:0}).wait(168));

	// Слой_25
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8FA710").ss(2,1,1).p("Eg+4gGoMB9xAAAQBkAAAABmIAAKFQAABmhkAAMh9xAAAQhkAAAAhmIAAqFQAAhmBkAAg");
	this.shape_2.setTransform(412.5,42.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(84).to({_off:false},0).to({_off:true},94).wait(82));

	// Слой_42
	this.instance_9 = new lib.n9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(859,3.5,1,1,0,0,0,14,14);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(151).to({_off:false},0).to({_off:true},27).wait(82));

	// Слой_41
	this.instance_10 = new lib.n9("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(89,3.5,1,1,0,0,0,14,14);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(129).to({_off:false},0).to({_off:true},49).wait(82));

	// Слой_40
	this.instance_11 = new lib.n9("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(479,3.5,1,1,0,0,0,14,14);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(123).to({_off:false},0).to({_off:true},55).wait(82));

	// Слой_39
	this.instance_12 = new lib.n9("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(780,11.5,1,1,0,0,0,14,14);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(112).to({_off:false},0).to({_off:true},66).wait(82));

	// Слой_38
	this.instance_13 = new lib.n9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(159,63.5,1,1,0,0,0,14,14);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({_off:false},0).to({_off:true},82).wait(82));

	// Слой_13
	this.instance_14 = new lib.c7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(497.2,43,1,1,0,0,0,492.1,49.9);
	this.instance_14.alpha = 0.398;
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(84).to({_off:false},0).to({_off:true},94).wait(82));

	// Слой_12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6C505").s().p("Eg+4AGpQhkAAAAhmIAAqEQAAhnBkAAMB9xAAAQBkAAAABnIAAKEQAABmhkAAg");
	this.shape_3.setTransform(412.5,42.5);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(84).to({_off:false},0).to({_off:true},94).wait(82));

	// Слой_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#1484B2").ss(2,1,1).p("Eg+4gGoMB9xAAAQBkAAAABmIAAKFQAABmhkAAMh9xAAAQhkAAAAhmIAAqFQAAhmBkAAg");
	this.shape_4.setTransform(412.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},92).wait(168));

	// Слой_37
	this.instance_15 = new lib.n9("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(441.1,6.1,1,1,0,0,0,14,14);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({_off:true},27).wait(168));

	// Слой_36
	this.instance_16 = new lib.n9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(914.6,79.4,1,1,0,0,0,14,14);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(39).to({_off:false},0).to({_off:true},53).wait(168));

	// Слой_35
	this.instance_17 = new lib.n9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(317.1,81.1,1,1,0,0,0,14,14);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(24).to({_off:false},0).to({_off:true},68).wait(168));

	// Слой_28
	this.instance_18 = new lib.n9("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(131.1,6.1,1,1,0,0,0,14,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true},92).wait(168));

	// Слой_24
	this.instance_19 = new lib.b7();
	this.instance_19.parent = this;
	this.instance_19.setTransform(497.2,43,1,1,0,0,0,492.1,49.9);
	this.instance_19.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},92).wait(168));

	// Слой_23
	this.instance_20 = new lib.c8("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(404.5,43.6,0.858,0.858,0,0,0,72.9,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(260));

	// Слой_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#01AAEB").s().p("Eg+4AGpQhkAAAAhmIAAqEQAAhnBkAAMB9xAAAQBkAAAABnIAAKEQAABmhkAAg");
	this.shape_5.setTransform(412.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},92).wait(168));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhAcAGpIAAtRMCA5AAAIAANRg");
	this.shape_6.setTransform(412.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(411.5,35.6,827,99.9);
// library properties:
lib.properties = {
	id: '2103B4E1127C19439A4CC5AAFD1F9D54',
	width: 860,
	height: 85,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"v7.png", id:"v7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2103B4E1127C19439A4CC5AAFD1F9D54'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;