function Animal () {
	this.weight = null;
}

function Tenodera () {
	this.genusName = null;
}

Tenodera.prototype = new Animal();

function TenoderaSinensis () {
	this.speciesName = null;
}

TenoderaSinensis.prototype = new Tenodera();

var chineseMantis = new TenoderaSinensis();


chineseMantis.speciesName = "ChineseMantis";

console.log("Manny", chineseMantis);

// 

function CanisLupus () {
	this.speciesName = "Gray Wolf"
}

function Canis () {
	this.furColor = "";
}

function Canidae () {
	this.legCount = 4;
}


Canidae.prototype = new Animal();
Canis.prototype = new Canidae();
CanisLupus.prototype = new Canis();

Canidae.prototype.setLegCount = function(count) {
	legCount = count;
}
Canidae.prototype.setLegCount = function(count) {
	return this.legCount;
}


var grayWolf = new CanisLupus();
console.log(grayWolf);