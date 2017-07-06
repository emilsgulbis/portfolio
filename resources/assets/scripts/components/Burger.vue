<template>
    <div class="burger" :class="{'burger--opened' : active}" @click="toggleMenu">
       <div class="burger--top"></div>
       <div class="burger--middle"></div>
       <div class="burger--bottom"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active : false
        }
    },
    mounted(){
        var self = this;
        bus.$on('menu:close', function(){
            self.active = false;
            bus.$emit('menu:toggle', false);
        });
    },
    methods : {
        toggleMenu(){
            this.active = !this.active;
            bus.$emit('menu:toggle', this.active);
        }
    }
}
</script>
