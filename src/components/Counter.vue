<template>
  <div>
    <span>カウント:</span><span>{{ count }}</span>
    <input type="button" value="カウント" @click="onCountBtnClick()" />
  </div>
</template>

<<script>
export default {
    data: function(){
        return {

        }
    },
    computed: {
        count: function(){
            return this.$store.state.count;
        }
    },
    methods: {
        onCountBtnClick(){
            console.log('clicked!')
            this.$store.commit('increment');
        }
    }
}
</script>