<template>
    <div>
    <!-- <wordComponent></wordComponent> -->
    <div class="table">
        <div class="game">
                <div class="title pad">
                    <span class="mc">
                        <canvas height="23px" id="mineCount"></canvas>
                    </span>
                    <img class="facePad" id="face" src="data:img/gif;base64,R0lGODlhFQAVAJEAAAAAAP//AL29vQAAACH5BAAHAP8ALAAAAAAVABUAAAJAlI+py50AoUMwWCsduBy33XXAAoaiUlZY+nBq8MKUSY9HSbtzft4X/vu1MCLhcBXRoXgyBlD5AWYmgsiUis0yCgA7" alt="restart">
                    <span class="tc">
                        <canvas height="23px" width="39px" id="timeCount"></canvas>
                    </span>
                </div>
                <div class="cell pad">
                    <canvas width="225px" height="225px" id="grid"></canvas>
                </div>
            </div>
    </div>
</div>
</template>

<script>
// import this from './../../gloabal/gloabal_data.js';
// import this from './../../gloabal/gloabal_detailInfo.js';
// import wordComponent from './../word/word-component.vue';
import {inject} from 'vue'

export default {
    name: 'grid-component',
    props: {
        mineChange: {
            type: Object
        },
        height: {
            type: Number
        },
        width: {
            type: Number
        }
    },
    setup() {
            const gif = inject('gif');
            const gfss = inject('gfs');
            const gfdd = inject('gfd');
            const gfbb = inject('gfb');
            return {
                gif,
                gfss,
                gfdd,
                gfbb
            }
        },
    data() {
        return {
            mine: undefined,
            t: undefined,
            time : 0, 
            isStart : false,//计时器参数
            tFlag: undefined, //flag计时器
            grid : null,
            face: null,
            imageSwitch: null,
            gfb: [],
            gfd: [],
            gfs: []
        }
    }, 
    // components: {
    //     // wordComponent
    // },
    methods: {
    draw() {
    // const canvas_grid = document.getElementById("grid");
    const ctx_grid = this.grid.getContext("2d");
    console.log(ctx_grid);
    if (this.mineChange) {
        this.mine.tr = this.mineChange.tr;
        this.mine.td = this.mineChange.td;
        this.mine.mineCount = this.mineChange.mineCount;
        console.log(this.mine.tr,this.mine.td, "1")
    } else {
        // this.mine.tr = 9;
        // this.mine.td = 9;
        // this.mine.mineCount = 10;
        console.log(this.mine)
    }
    
    this.mine.init()
    
    let hc = this.mine.td;
    console.log(`hc的值${hc}`)
    let wc = this.mine.tr;
    let mineCount = this.mine.surplusMine;

    for (let i = 0; i < hc; i++) {
        for (let j = 0; j < wc; j++) {
            ctx_grid.drawImage(this.gfs[0], j*25, i*25);
            console.log(this.gfs[0].src)
        }
    }
     //console.log(mineCount);
    
    const canvas_mineCount = document.getElementById("mineCount");
    const ctx_mineCount = canvas_mineCount.getContext("2d");
    for (let i = 2; i >= 0; i--) {
        let index = mineCount % 10;
        mineCount = Math.floor(mineCount / 10);
        ctx_mineCount.drawImage(this.gfd[index], i*13, 0);
    }
    const canvas_timeCount = document.getElementById("timeCount");
    const ctx_timeCount = canvas_timeCount.getContext("2d");
    for (let i = 0; i < 3; i++) {
        ctx_timeCount.drawImage(this.gfd[0], i*13, 0);
    }
    },
    timeBegin () {
    //首次点击开始计时
        if (!this.isStart) {
        const canvas_timeCount = document.getElementById("timeCount");
        const ctx_timeCount = canvas_timeCount.getContext("2d");
        this.time++;
        let timeWrite = this.time;
            for (let i = 2; i >= 0; i--) {
                let index = timeWrite % 10;
                timeWrite = Math.floor(timeWrite / 10);
                ctx_timeCount.drawImage(this.gfd[index], i*13, 0);
            }
        //console.log(time)
            this.t = setTimeout(() => {
                this.isStart = false;
                this.timeBegin();
            }, 1000);
            this.isStart = true;
        }
        },
    mineDown (e) {
    //方块响应
    let x = Math.floor(e.offsetX/25);
    let y = Math.floor(e.offsetY/25);
    // console.log(`${x}和${y}`)
    const canvas_grid = document.getElementById("grid");
    const ctx_grid = canvas_grid.getContext("2d");
    const face = document.getElementById("face");
    const canvas_mineCount = document.getElementById("mineCount");
    const ctx_mineCount = canvas_mineCount.getContext("2d");
    // ctx_grid.clearRect(x*25, y*25, 25, 25);
    // console.log(mine.squares);
    if (this.mine.squares[y][x].isFlag === true) {
        this.mine.squares[y][x].isFlag = false;
        ctx_grid.drawImage(this.gfs[0], x*25, y*25);
        let mineC = ++this.mine.surplusMine;
        // console.log(mineC);
            for (let i = 2; i >= 0; i--) {
                let index = mineC % 10;
                mineC = Math.floor(mineC / 10);
                // console.log(mineC);
                ctx_mineCount.drawImage(this.gfd[index], i*13, 0);
            }
            if (this.mine.squares[y][x].type === "mine") {
                this.mine.fix.splice(this.mine.fix.indexOf(this.mine.squares[y][x]), 1);
            } else {
                this.mine.fixWrong.splice(this.mine.fixWrong.indexOf(this.mine.squares[y][x]), 1);
            }
    } else if (!this.mine.squares[y][x].check && (e.button === 0 || e.button === 1)) {
        this.mine.squares[y][x].check = true;
        if (this.mine.squares[y][x].type === "number") {
            if (!this.mine.squares[y][x].value) {
                let items = this.mine.isZero(this.mine.squares[y][x]);
                for (let item of items) {
                // console.log(item);
                    ctx_grid.drawImage(this.gfb[item.value], item.x*25, item.y*25);
                }
            } 
            // else {
                this.mine.n++;
                //console.log(mine.n, "点击+1")
            // }
            ctx_grid.drawImage(this.gfb[this.mine.squares[y][x].value], x*25, y*25);
        } else {
            console.log("mine.minePosition", this.mine.minePosition);
            for (let p of this.mine.minePosition) {
                if (this.mine.squares[p[1]][p[0]].isFlag === false ) {
                    if (p[0] === x && p[1] === y) {
                        ctx_grid.drawImage(this.gfs[2], x*25, y*25);
                    } else {
                        ctx_grid.drawImage(this.gfs[3], p[0]*25, p[1]*25);
                    }
                }
            }
            face.src = this.gif[2];
            console.log(this.gif[2], "gif")
            //让时钟停止
            clearTimeout(this.t);
            //应对一开始就踩到雷的问题，没有它会一直计时
            this.isStart = true;
            //假如存在标旗错误的情况
            if (!this.tFlag) {
                this.tFlag = setInterval(this.flagChange, 1200);
            }
            console.log(this.grid);
            this.grid.removeEventListener("mousedown", this.mineDown);
        }
    // console.log(`x:${Math.floor(x/25)}`)
    } else if (e.button === 2 && !this.mine.squares[y][x].check) {
        if (this.mine.surplusMine > 0) {
            this.mine.squares[y][x].isFlag = true;
            ctx_grid.drawImage(this.gfs[1], x*25, y*25);
            
            let mineCC = --this.mine.surplusMine;
            for (let i = 2; i >= 0; i--) {
                let index = mineCC % 10;
                mineCC = Math.floor(mineCC / 10);
                ctx_mineCount.drawImage(this.gfd[index], i*13, 0);
            }
            this.mine.fixList(this.mine.squares[y][x]);
        }
    }
    //游戏是否结束判断
    console.log(this.mine.fix.length, "fix");
    console.log(this.mine.n, "剩余");
    // console.log(mine.squares[y][x]);
        // if (mine.fix.length === mine.mineCount || (mine.tr*mine.td-mine.n) === mine.mineCount) {
        if ((this.mine.tr*this.mine.td-this.mine.n) === this.mine.mineCount) {
            face.src = this.gif[1];
            clearTimeout(this.t);
            //没标小红旗的标小红旗
            for (let pp of this.mine.minePosition) { 
                if (!this.mine.squares[pp[1]][pp[0]].isFlag) {
                    ctx_grid.drawImage(this.gfs[1], pp[0]*25, pp[1]*25);
                }
            }
            //所有雷都扫完 显示总雷数
            let mc = this.mine.mineCount;
            for (let i = 2; i >= 0; i--) {
                let index = mc % 10;
                mc = Math.floor(mc / 10);
                ctx_mineCount.drawImage(this.gfd[index], i*13, 0);
            }
            this.grid.removeEventListener("mousedown", this.mineDown);
        }
    },
    restart () {
    clearTimeout(this.t);
    clearInterval(this.tFlag);
    this.tFlag = null;
    this.isStart = false;
    this.time = 0;
    this.mine.n = 0;
    this.mine.fix = [];//测试用的数据
    this.mine.fixWrong = [];
    this.mine.surplusMine = this.mine.mineCount;
    this.draw();
    this.face.src = this.gif[0];
    this.mine.init();
    this.grid.addEventListener("mousedown", this.mineDown);
},
flagChange () {
    const canvas_grid = document.getElementById("grid");
    const ctx_grid = canvas_grid.getContext("2d");
    if (this.imageSwitch === this.gfs[1]) {
        this.imageSwitch = 0; 
        for (let s of this.mine.fixWrong) {
            ctx_grid.drawImage(this.gfb[s.value], s.x*25, s.y*25);
        }  
    } else {
        this.imageSwitch = this.gfs[1];
        for (let s of this.mine.fixWrong) {
            ctx_grid.drawImage(this.imageSwitch, s.x*25, s.y*25);
        }
    }
    console.log("run!");
    }
    },
    mounted() {
        this.$nextTick(() => {
            let mines = this.$mine;
        this.mine = mines.methods.createMine(9, 9, 10);
        console.log("start draw", this.mine)
        this.grid = document.getElementById("grid")
        this.grid.addEventListener("click", this.timeBegin);
        this.grid.addEventListener("mousedown", this.mineDown);
        this.face = document.getElementById("face");
        this.face.addEventListener("mouseup", this.restart);
        this.imageSwitch = this.gfs[1];
            this.draw();
        })
    }, 
    created() {
        if (this.gfss && this.gfbb && this.gfdd) {
        for(let i=0;i<4;i++){
            this.gfs[i]=new Image();
            this.gfs[i].src = this.gfss[i];
        }
        for(let i=0;i<10;i++){
            this.gfd[i]=new Image();
            this.gfd[i].src = this.gfdd[i];
        }
        for(let i=0;i<9;i++){
            this.gfb[i]=new Image();
            this.gfb[i].src = this.gfbb[i];
            // console.log(this.gfb[i], i)
        }
        // this.draw();
    }
    }
}
</script>

<style scoped>
.table {
    /* height: 268px; */
    margin-top: 15px;
    position: relative;
}
.game {
    background-color: #cccccc;
    padding: 9px;
    height: 268px;
    width: 229px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.title {
    /* border-bottom: 1.6px solid rgb(255,255,255); */
    height: 34px;
    box-sizing: border-box;
    /* display: flex; */
    position: relative ;

}
.cell {
    height: 225px;
    width: 225px;
    /* box-sizing: border-box; */
    margin-top: 6px;

    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
.pad {
    border: 2px solid #808080;
    border-right-color: #fff;
    border-bottom-color: #fff;
}
.facePad {
    border: 2px solid #808080;
    border-left-color: #fff;
    border-top-color: #fff;
}
#face {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
#face:active {
    border-color: #808080;
    border-right-width: 0.6px ;
    border-bottom-width: 0.6px;
}
.mc {
    width: 50%;
    height: 100%;
    position: relative;
    float: left;
}
.mc #mineCount {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
}
.tc {
    width: 50%;
    height: 100%;
    display: relative;
    float: right;
}
.tc #timeCount {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
}
</style>