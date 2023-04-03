<template>
    <div class="score">
        <h4>最佳历史记录</h4>
        <table>
            <thead>
                <tr>
                    <th>
                        难度模式
                    </th>
                    <th>
                        用时
                    </th>
                    <th>
                        日期
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="highscore in highscores" :key="highscore.gameName">
                    <td>
                        {{ highscore.gameName }}
                    </td>
                    <td>
                        {{ highscore.scores }}s
                    </td>
                    <td>
                        {{ highscore.time }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'scoreComponent',
    data() {
        return {
            highscores: []
        }
    },
    computed: {
        ...mapState(['gamePerforment'])
    },
    watch: {
        '$store.state.gamePerforment': {
            handler (newValue, oldValue) {
            console.log('gamePerforment 对象发生变化：', newValue, oldValue)
            this.saveHighscore(newValue.sort, newValue.time);
        },
        deep: true
        }
    },
    methods: {
        loadHighscore() {
            const hs = localStorage.getItem('highscores')
            console.log(hs, "hs");
            if (hs) {
                this.highscores = JSON.parse(hs);
            }
        },
        saveHighscore(gameNa, score) {
            // 从本地存储加载历史最佳成绩记录
            this.loadHighscore()

            const timestamp = new Date().toLocaleDateString()
            console.log(this.highscores, "highscores")
            // 检查游戏记录是否已存在
            let existingHighscoreIndex = this.highscores.findIndex(
                highscore => highscore.gameName === gameNa
            )
            console.log(existingHighscoreIndex, "index");
            if (existingHighscoreIndex !== -1) {
            // 如果新分数比现有分数高，则更新分数
                if (parseInt(score) < parseInt(this.highscores[existingHighscoreIndex].scores)) {
                    this.highscores[existingHighscoreIndex].scores = score
                    this.highscores[existingHighscoreIndex].time = timestamp
                    console.log("run")
                }
                
            } else {
            // 如果游戏记录不存在，则创建一个新的记录
                this.highscores.push( { gameName: gameNa, scores: score, time: timestamp } )
            }
            // 将记录保存到本地存储中
            localStorage.setItem('highscores', JSON.stringify(this.highscores))
            console.log(localStorage);
            console.log(JSON.stringify(this.highscores), "jsonhighscores")
            console.log(this.highscores[0], "highscores[0]")
        }
    },
    mounted() {
        //console.log(this.gamePerforment, "gamePerforment")
        this.loadHighscore()
    }
}

</script>
<style>
.score {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}
table th {
    width: 100px;
}

</style>