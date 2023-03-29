<template>
    <div class="word">
        <h3>网页扫雷游戏</h3>
            <div class="difficulty">
                <a href="javascript:void(0)" @click="level(1)">基础</a>
                <a href="javascript:void(0)" @click="level(2)">中级</a>
                <a href="javascript:void(0)" @click="level(3)">专家</a>
                <a href="javascript:void(0)" @click="level(4)">满屏</a>
                <a href="javascript:void(0)" @click="custom()">自定义</a>
            </div>
    </div>
    <gridComponent ref="gc" :mineChange="this.mine" :height="this.height" :width="this.width"></gridComponent>
</template>

<script>
// import info from '../../gloabal/gloabal_detailInfo.js';
// import ggrid from './../grid/grid-component.vue';
import gridComponent from './../grid/grid-component.vue';
// import {inject} from 'vue'
// const $mine = inject('$mine')
export default {
    data() {
        return {
            mine: undefined,
            width: null,
            height: null
        }
    },
    methods: {
    draw() {
        // console.log( this.$refs.gc)
        this.$refs.gc.draw();
    },
    restart() {
        this.$refs.gc.restart();
    },
    level(l) {
    let SW = document.body.clientWidth;
    // let game = document.getElementsByClassName("game");
    // let cell = document.getElementsByClassName("cell");
    // let grid = document.getElementById("grid");
    
    if (l === 1) {
        this.mine.tr = 9;
        this.mine.td = 9;
        this.mine.mineCount = 10;
        // game[0].style.width = '229px';
        // game[0].style.height = '268px';
        // cell[0].style.width = '225px';
        // cell[0].style.height = '225px';
        // grid.width = "225";
        // grid.height = "225";
    } else if (l === 2) {
        this.mine.tr = 16;
        this.mine.td = 16;
        this.mine.mineCount = 40;
        // game[0].style.width = '404px';
        // game[0].style.height = '444px';
        // cell[0].style.width = '400px';
        // cell[0].style.height = '400px';
        // grid.width = "400";
        // grid.height = "400";
    } else if (l === 3) {
        //console.log(SW, SH);
        if (SW >= 755) {
            this.mine.tr = 30;
            this.mine.td = 16;
            this.mine.mineCount = 99;
            // game[0].style.width = '754px';
            // game[0].style.height = '444px';
            // cell[0].style.width = '750px';
            // cell[0].style.height = '400px';
            // grid.width = "750";
            // grid.height = "400";
        } else {
            this.mine.tr = 16;
            this.mine.td = 30;
            this.mine.mineCount = 99;
            // game[0].style.width = '404px';
            // game[0].style.height = '794px';
            // cell[0].style.width = '400px';
            // cell[0].style.height = '750px';
            // grid.width = "400";
            // grid.height = "750";
        }
    } else if (l === 4) {
        let M;
        let X = parseInt((SW - 18) / 25);
        let Y = parseInt((1000 - 54) / 25);
        let XY = X * Y;
        if (XY >= 480) {
            M = XY * 0.20625;
        } else {
            M = XY * XY / 5760 + XY / 8;
        }
        M = parseInt(M);
        this.mine.tr = X;
        this.mine.td = Y;
        this.mine.mineCount = M;
        // game[0].style.width = `${X*25+4}px`;
        // game[0].style.height = `${Y*25+44}px`;
        // cell[0].style.width = `${X*25}px`;
        // cell[0].style.height = `${Y*25}px`;
        // grid.width = `${X*25}`;
        // grid.height = `${Y*25}`;
    }
    // this.width = grid.width;
    // this.height = grid.height;
    // console.log(this.width, this.height,"w")
    this.setShape(this.mine.tr, this.mine.td)
    this.mine.init();
    this.draw()
    this.restart();
},
    custom() {
        this.mine.td = parseInt(prompt("请输入行数", 9));
        this.mine.tr = parseInt(prompt("请输入列数", 9));
        this.mine.mineCount = parseInt(prompt("请输入雷数", 10));
    },
    setShape(tr, td) {
        let game = document.getElementsByClassName("game");
        let cell = document.getElementsByClassName("cell");
        let grid = document.getElementById("grid");

        game[0].style.width = `${tr*25+4}px`;
        game[0].style.height = `${td*25+44}px`;
        cell[0].style.width = `${tr*25}px`;
        cell[0].style.height = `${td*25}px`;
        grid.width = `${tr*25}`;
        grid.height = `${td*25}`;
        this.width = grid.width;
        this.height = grid.height;
    }
    },
    components: {
        gridComponent,
    },
    mounted() {
        let mines = this.$mine;
        this.mine = mines.methods.createMine(9, 9, 10);
    }
}

</script>

<style scoped>
.difficulty {
    display: flex;
    justify-content: center;
}
.difficulty a {
    padding: 0 5px;
}
</style>