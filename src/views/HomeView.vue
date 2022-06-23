<template>
    <div class="home">
        <nb-tabs></nb-tabs>
    </div>
</template>

<script lang="ts" setup>
    import NbTabs from '@/components/NbTabs/index.vue'
    import { sum , a } from '@/types/math'

    console.log(sum(1, 211))
    console.log(a)
</script>

<style type="text/less">
    .home {
        margin: 30px;
        border: 1px #ccc solid;
        padding: 30px;
    }

</style>
