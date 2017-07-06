<template>
    <div :class="{'with-columns' : hasColumns, 'invert' : isInvert}">
        <div id="page-container" :class="{'menu--active' : menuActive}">
            <div id="page">
                <aside id="sidebar">
                    <layout-header id="header"></layout-header>
                    <layout-footer id="footer"></layout-footer>
                </aside>
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
        }
    },
    mounted(){
        var self = this;
        bus.$on('menu:toggle', function(active){
            self.menuActive = active;
        });
    }
}
</script>
