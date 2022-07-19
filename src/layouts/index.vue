<template>
    <div class="nb-admin-wrap">
        <div class="change">
            <button @click="onClick" type="primary">切换模板</button>
        </div>
        <component :is="template" />
    </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
// import NbLayoutColumn from './NbLayoutColumn/index.vue'
// import NbLayoutCommon from './NbLayoutCommon/index.vue'

const imports = require.context('./', true, /\.vue$/)

const components: any = {}

imports
    .keys()
    .filter((key) => key !== './index.vue')
    .forEach((key) => {
        components[key.replace(/(\/|\.|index.vue)/g, '')] = imports(key).default
    })

console.log(components)

let template = shallowRef(components.NbLayoutColumn)

const onClick = ()=> {
    if(template.value == components.NbLayoutColumn) {
      template.value = components.NbLayoutCommon
    }else {
      template.value = components.NbLayoutColumn
    }
}

</script>

<style lang="less" scoped>
.change {
    margin: 30px;
    border: 1px #ccc solid;
    padding: 30px;
}
</style>