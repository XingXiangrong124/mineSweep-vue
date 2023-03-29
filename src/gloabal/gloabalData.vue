<script>
//can be deleted
import { inject } from 'vue'
    export default {
        name: 'gloabalData',
        setup() {
            const giff = inject('gif');
            console.log(giff[0])
            return {
                giff
            }
        },
        data() {
            return {
                gif: [{
                    id: 0,
                    address: "data:img/gif;base64,R0lGODlhFQAVAJEAAAAAAP//AL29vQAAACH5BAAHAP8ALAAAAAAVABUAAAJAlI+py50AoUMwWCsduBy33XXAAoaiUlZY+nBq8MKUSY9HSbtzft4X/vu1MCLhcBXRoXgyBlD5AWYmgsiUis0yCgA7"
                }, {
                    id: 1,
                    address: "data:img/gif;base64,R0lGODlhFQAVAJEAAAAAAP//AMDAwICAACH5BAAHAP8ALAAAAAAVABUAAAJHlI+py50AoUMwWCsduBy33XXAAoaiAkZqFYwUprZx+27xTR/swMoD/DKZXIaSkEMsXoytJQo58zyPOdIxSWJmJoIV9wueFAAAOw=="
                }, {
                    id: 2,
                    address: "data:img/gif;base64,R0lGODlhFQAVAJEAAAAAAP//AMDAwAAAACH5BAAHAP8ALAAAAAAVABUAAAJDlI+py50AoUMwWCsduBy33XXAAm5gYHrPdWLs6p6parShSN36eNg6LbBFKhxejyV6wXwo4PGH+vyMDCKLqhlOttxuAQA7"
                }],
                gfs: [new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAP///8DAwICAgAAAACH5BAQUAP8ALAAAAAAZABkAAAJKhI+pFrH/GpwnCFGb3nxfzHQi92XjWYbnmAIrepkvGauzV7s3Deq71vrhekJgrtgIIpVFptD5g+6kN+osZflot9xPsgvufsPkSwEAOw==", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAKIAAP///8DAwICAgP8AAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAZABkAAANsCLrcriG8OSO9KwiRo//gt3FQaIJjZw7DmZYh25ovEMtzWH+47G6qno8GhAWEOVTRBur9SMxbUrQ8BQiEpyqE1RpBXSLUGtZVI9i0Wu3ZodfwbMR9ja/bZ6s3qjeTNCOBgoMjc4SHhIaIixsJADs=",
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAP///4CAgP8AAAAAACH5BAQUAP8ALAAAAAAZABkAAAJgjI+py70Co5wUmhrHwPFyzVlBCIYeBGqqik6nkK4s7I6TjFOvCvR42bGhND3AbyPZEX2/GuwILV2iUZGEOgtesUhthuu8VcNbqE74fOZoSTQFiHm9u3G3OCSQ4yv6/aQAADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAP///76+voKCggAAACH5BAAHAP8ALAAAAAAZABkAAAJglI+py70Bo5wUmhrHwPFyzVlCCIYeBGqqik5nkK4s7I6TjFOvCvR42bGhND3AbyPZEX2/GuwILV2iUZGEOgtesUhthuu8VcNbqE74fOZoSTQFiHm9u3G3OBSQ4yv6/aQAADs="
                    ],
                gfd: [new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI5lI8Jy3wgmoMRymoc0vqt/G1hB1JkZVKKaQSC60YI/NZPW8dpApZrqvKhfkIPkIi5jFANWUkS5CUKADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI3lI8psc33mDQAmilAdUnv1mkXeHhWuGGlOCpsxGXIpII0dYbjs358v0PlgDGiDfQKPj6cmkJRAAA7", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI8lI8Jy3whmgMvNmsgRC4nSwmaslRkOHKl962QVIYgfFAwta3JBu6i0UHwgp6cztQT/jCSZWTmGN5kn08BADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI5lI8Jy3whmgMvNmsgRC4nSwmaslRkOHKl962QVIYgXMGUvJFebnRi6/qpcECU8OB7XYK2CNIm+3wKADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI8lI8psc0HDJsmCmDptdhCXIFIF3rlOYpkyplftXWgJ9cHU8+3skkNu0usNB/PA+gQin4a0YPyMEF/PF4BADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI5lI8Jy3wgmgtmxSZotYhql2gX1GUbWZ6heSWGCEkWLHNmHR0iwnmKvVOZgiAWr2cU3jBIHKpmc7kKADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI5lI8Jy3wgmgtmxSZotYhql2gX1GUbWZ6heSWGCEkWLHPRiJE2woFPvxupeEDU0HeM5XQ4B6oWdCEKADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI5lI8Jy3whmgMvNmsgRC4nSwmaslRkOHKl963buIUejLziHZnkfOpHl/qtcCoU0dDBpVy8WO0W/EgLADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAIAAAP8AAAAAACH5BAQUAP8ALAAAAAANABcAAAI0jI8Jy3wQmoMRymoc0vqt/G1hB1JkZVKKiTaRJ4VvbIGJja6pWvbirvPBbJdRawKL3ZaGAgA7", 
                      new Image().src="data:img/gif;base64,R0lGODlhDQAXAJEAAP8AAIAAAAAAAAAAACH5BAQUAP8ALAAAAAANABcAAAI6lI8Jy3wgmoMRymoc0vqt/G1hB1JkZVKKiTaRJ4VC0E4HnWDzLqp4b6D9SrecRrjy1XS0mAUWy0kNBQA7"
                    ],
                gfb: [new Image().src="data:img/gif;base64,R0lGODlhGQAZAKIAAM7OzsbGxr6+vra2trKysqampoKCggAAACH5BAAHAP8ALAAAAAAZABkAAANHaLrc3mWQSau9xAwQuv9gGBhEIJxoqq4CabLw6sY0Otf0jcP6Lpc+HjD4exFTvWNrqDwlj09iNDj1VXdXXLa2zTGb3VgYlgAAOw==", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAMDAwICAgAAA/wAAACH5BAQUAP8ALAAAAAAZABkAAAJMjI+py70Ao5wUmorxzTxuLIRC9lFiSAbZOWqqybZVCcWoC8fpeu5gj/uJfBUWMXebvYpAJdJGoQFsTc8yQh1OpJ3otesEH8XbLzlSAAA7", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZALMAAMDAwKu5q6i4qKW3pZy0nJaylpCwkIquioCAgACAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAZABkAAAReEMlJq704X8C7/yAnhSQ5lmh3cknrvi64wvT7zXV9I50N+ipeihXzrFACoEhYMtB2pSSsIGN6CrRBIHQEEGjb0pEmGOJch+Gyl3samW13kB0vztViKx665+r7a4AfEQA7", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAMDAwICAgP8AAAAAACH5BAQUAP8ALAAAAAAZABkAAAJOjI+py70Ao5wUmorxzTxuIITiOFIfiZbSmabT16le0EWyRdeg+OZTGzL5JECBsFI86m4AGIfpzEB9RVLPVuWtqFnjVZeJgmdjzbBMRk8KADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAMDAwICAgAAAmQAAgCH5BAAHAP8ALAAAAAAZABkAAAJdjI+py70Ao5wUmorxzTzuOgjAQJLUN5FiaU5oVK7sGVAxxA50Gor47KrBVJLc7hfilY6jnHMp+TynwYjgisXmfB4hx1jtgKPezLjbaULJ6bOlnK684mG6HG5H5ykFADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAMDAwICAgIAAAAAAACH5BAQUAP8ALAAAAAAZABkAAAJOjI+py70Ao5wUmorxzTxuIITiSE4fiY5mEKXu2oodDKmzx9bybeWgW6L9gDZcjLgz3oo9HhPw6TxPyGRTVxUIs1ohjxL9SsLia3nsO0MKADs=", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAMDAwICAgACAgAAAACH5BAQUAP8ALAAAAAAZABkAAAJTjI+py70Ao5wUmorxzTxuKITiKFIfiZbTmaJmEI3dCoPqbNWAjOdxS3r9gDyPjhiUsEKVos/GpDgBS0Hz9twhsdTjNmqUfIU9ja5MQ1c+6nBbUgAAOw==", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAJEAAL6+voKCggAAAAAAACH5BAAHAP8ALAAAAAAZABkAAAJMjI+py70Ao5wUmorxzTxuIITiSE4fiY5mEKXu2rUiHIOz9HElznY771NRcpQfrWI8TpJK2S1DtD2hPWeoRhTGojVgV1P9NsWWMBlSAAA7", 
                      new Image().src="data:img/gif;base64,R0lGODlhGQAZAIAAAMDAwICAgCH5BAQUAP8ALAAAAAAZABkAAAJKjI+py70Ao5wUmorxzTxu63xeMIYi8JnHlK4UwpLgOctjaUuwnqtvb/rxQsJaZXcz/k4tGsqVfPp4OCK1yih2OM7t1avJgWNjTAEAOw=="
                    ],
            }
        },
        created() {
            console.log(this.giff[0], "create")
        }
    }
</script>