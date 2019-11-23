<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img class="logo" src="../src/assets/logo.png" @click="backHome()">
                    </q-avatar>
                    心予公益协会
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view></router-view>
        </q-page-container>

        <q-footer elevated class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title style="font-size: 14px;">
                    <div class="text-center">Copyright © {{new Date().getFullYear()}} Xinyu. All Rights Reserved</div>
                    <div class="text-center">心予公益协会 版权所有</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>
<script>
    export default {
        name: 'LayoutDefault',

        components: {},

        data() {
            return {}
        },
        methods: {
            backHome() {
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    }
</script>

<style>
</style>
