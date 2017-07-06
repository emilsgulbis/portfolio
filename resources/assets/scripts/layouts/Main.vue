<template>
    <div>
        <div id="page" :class="pageClasses">
            <layout-header id="header" class="hidden-xxl-up"></layout-header>
            <div id="page-container">
                <div id="sidebar" class="hidden-xl-down">
                    <div ref="sticky" class="sticky">
                        <layout-header id="header"></layout-header>
                        <layout-footer id="footer"></layout-footer>
                    </div>
                </div>
                <main id="content">
                    <slot></slot>
                </main>
            </div>
        </div>
        <burger></burger>
        <layout-menu></layout-menu>
    </div>
</template>

<script>
import Burger from '../components/Burger.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Menu from './Menu.vue'

import stickybits from 'stickybits'

export default {
    components: {
        Burger,
        'layout-menu' : Menu,
        'layout-header' : Header,
        'layout-footer' : Footer
    },
    data(){
        return {
            menuActive: false,
        }
    },
    computed : {
        hasColumns(){
            return _.get(this.$route.meta, 'sidebar')
        },
        isInvert(){
            return _.get(this.$route.meta, 'invert');
        },
        pageClasses(){
            return {
                'menu--active' : this.menuActive,
                'with-columns' : this.hasColumns,
                'invert' : this.isInvert
            }
        }
    },
    mounted(){
        var self = this;
        bus.$on('menu:toggle', function(active){
            self.menuActive = active;
        });
        stickybits(this.$refs.sticky, {stickyBitStickyOffset: 45})
    }
}
</script>
