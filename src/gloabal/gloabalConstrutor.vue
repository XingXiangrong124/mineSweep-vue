<script>
    export default {
        methods: {
            createMine(tr, td, mineCount) {
                return new Mine(tr, td, mineCount);
            }
        }
    }
    
function Mine (tr, td, mineCount) {
    this.tr = tr;
    this.td = td;
    this.mineCount = mineCount;

    this.squares = [];
    this.surplusMine = mineCount;
    this.minePosition = [];
    this.fix = []; //用来测试寻找雷的位置
    this.fixWrong = [];
    this.n = 0;
}

Mine.prototype.randomNum = function () {
    let createSquare = new Array(this.tr * this.td);
    console.log(createSquare, "createSquare")
    for (let i = 0; i < createSquare.length; i++) {
        createSquare[i] = i;
    }
    createSquare.sort(() => 0.5 - Math.random());
    return createSquare.slice(0, this.mineCount);
}

Mine.prototype.init = function () {
    const mPosition = this.randomNum(); //雷的位置
    this.minePosition = [];
    // this.surplusMine;

    let n = -1; //获取对应索引
    for (let i = 0; i < this.td; i++) {
        this.squares[i] = [];
        for (let j = 0; j < this.tr; j++) {
            n++;
            if (mPosition.indexOf(n) !== -1) {
                this.squares[i][j] = {
                    type: "mine",
                    x: j,
                    y: i,
                    check: false,
                    isFlag: false
                }
                this.minePosition.push([j, i]); //将雷的位置存储进去
            } else {
                this.squares[i][j] = {
                    type: "number",
                    x: j,
                    y: i,
                    value: 0,
                    check: false,
                    isFlag: false
                }
            }
        }
    }
    this.update();
    // console.log(this.squares);
}

Mine.prototype.getAround = function (square) {
    let x = square.x;
    let y = square.y;
    let result = [];
    for (let i = x-1; i <= x+1; i++) {
        for (let j = y-1; j <= y+1; j++) {
            if (i < 0 || j < 0 || i >= this.tr || j >= this.td || (i === x && j === y)) {
                continue;
            }
            if (this.squares[j][i].type === "mine") {
                // this.n++;
                continue;
            }
            result.push(this.squares[j][i]);
        }
    }
    return result;
}

Mine.prototype.update = function () {
    for (let i = 0; i < this.td; i++) {
        for (let j = 0; j < this.tr; j++) {
            // console.log(i, j,this.tr);
            if (this.squares[i][j].type === 'number') {
                continue;
            }
            let collection = this.getAround(this.squares[i][j]);
            for (let coll of collection) {
                coll.value++;
            }
        }
    }
}

Mine.prototype.isZero = function (square) {
    let allItems = [], arounds = [];
    arounds.push.apply(arounds, this.getAround(square));
    // console.log(arounds, "arounds");
    // this.squares[square.y][square.x].check = true;  //自己本身也要定义成true
    while (arounds.length !== 0) {
        let a = arounds.pop();
        // console.log(a,"a");
        if (a.check === false && a.isFlag === false) {
            a.check = true;
            allItems.push(a);

            this.n++; //计算翻开的格子数

            if (a.value === 0) {
                let temp = this.getAround(a);
                // console.log(temp, "temp");
                arounds.push.apply(arounds, temp);
            }
        }
    }
    // console.log("all",allItems);
    console.log(this.n, "n");
    return allItems;  
}
Mine.prototype.fixList = function (square) {
    if (square.isFlag && square.type === "mine") {
        // if (this.fix.indexOf(square)  === -1) {
            this.fix.push(square);
        // }
    } else {
        this.fixWrong.push(square);
    }
}
Mine.prototype.surplusShow = function () {

}
document.oncontextmenu = function(){
	return false
	//或者 e.preventDefault()
}
</script>