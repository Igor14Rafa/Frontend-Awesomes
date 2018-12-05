const url = "https://gist.githubusercontent.com/Igor14Rafa/27dac886e0b39ecb69b9795e83f6868a/raw/11ba383453db426cba15a0e09df522231a8123dc/alunos.json";
const vm = new Vue({
                    el: '#app',
                    data() {
                        return {
                            results: [],
                            loading: true,
                            errored: false
                        } 
                     },
                    mounted() {
                        axios.get(url).then(response => {
                        this.results = response.data
                        })
                        .catch(error => {
                            console.log(error)
                            this.errored = true
                          })
                          .finally(() => this.loading = false)
                    }
});