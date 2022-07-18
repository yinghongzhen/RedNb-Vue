<template>
    <div class="nb-admin-wrap">
        <component :is="'nb-layout-column'" />
        <!-- <NbLayoutColumn></NbLayoutColumn> -->
    </div>
</template>

<script lang="ts" setup>
import NbLayoutColumn from './NbLayoutColumn/index.vue'

const imports = require.context('./', true, /\.vue$/)
const components: any = {}

imports
    .keys()
    .filter((key) => key !== './index.vue')
    .forEach((key) => {
        components[key.replace(/(\/|\.|index.vue)/g, '')] = imports(key).default
    })

    console.log(components)

</script>

<style lang="less" scoped>
.home {
    margin: 30px;
    border: 1px #ccc solid;
    padding: 30px;
}
</style>