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
                <tr v-for="score in highsorces" :key="score.game">
                    <td>
                        {{ score.game }}
                    </td>
                    <td>
                        {{ score.score }}
                    </td>
                    <td>
                        {{ score.time }}
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
            highsorces: [{
                game: "9×9 10mine",
                score: "11'1",
                time: "2023/4/2"
            }]
        }
    },
    computed: {
        ...mapState(['gamePerforment'])
    },
    watch: {
        '$store.state.gamePerforment': {
            handler (newValue, oldValue) {
            console.log('gamePerforment 对象发生变化：', newValue, oldValue)
        },
        deep: true
        }
    },
    methods: {
        localHighsorce() {
            const hs = localStorage.getItem('highscores')
            if (hs) {
                this.highsorces = JSON.parse(hs);
            }
        },
        saveHighscore(gameName, score) {
            // 从本地存储加载历史最佳成绩记录
            this.loadHighscores()

            const timestamp = new Date().toISOString()

            // 检查游戏记录是否已存在
            if (this.highscores[gameName]) {
            // 如果新分数比现有分数高，则更新分数
                if (score > this.highscores[gameName].score) {
                    this.highscores[gameName].score = score
                    this.highscores[gameName].timestamp = timestamp
                }
            } else {
            // 如果游戏记录不存在，则创建一个新的记录
                this.highscores[gameName] = { score, timestamp }
            }
            // 将记录保存到本地存储中
            localStorage.setItem('highscores', JSON.stringify(this.highscores))
        }
    }
}

</script>
<style>
.score {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

</style>