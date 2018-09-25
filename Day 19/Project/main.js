let Plan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;
class Level {
  constructor(plan) {
    let rows = plan.trim().split("\n").map(l => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if (typeof type == "string") return type;
        this.startActors.push(
          type.create(new Vec(x, y), ch));
        return "empty";
      });
    });
  }
}
class State {
	constructor(level,actors,status){
		this.level = level;
		this.actors = actors;
		this.status = status;
	}
	static start(leavel){
		return new State(level,level.startActors,"playing");
	}
	get player(){
		return this.actors.find(a => a.type == "player");
	}
}
class Vec {
	constructor(x,y){
		this.x =x; this.y =y;
	}
	plus(other){
		return new Vec(this.x + other.x, this.y + other.y);
	}
	times(factor){
		return new Vec(this.x * factor, this.y *factor);
	}
}
class Player {
	constructor(pos, speed) {
		this.pos = pos;
		this.speed = speed;
	}
	get type() {return "player"}
	static create(pos) {
		return new Player(pos.plus(new Vec(0, -0.5)),
			new Vec(0, 0));
	}
}
player.prototype.size = new Vec(0.8,1.5);
class Lava {
	constructor(pos, speed, reset){
		this.pos = pos;
		this.speed = speed;
		this.reset = reset;
	}
	get type() { return "lava";}
	static create(pos, ch){
		if (ch == "=") {
			return new Lava(pos, new Vec(2, 0));
		}
		else if (ch == "|") {
			return new Lava 
		}
	}
}

