<template>
    <div class="nb-tabs">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane :key="1">
                <template #tab>
                    <span>
                        <apple-outlined />
                        首页
                    </span>
                </template>
            </a-tab-pane>
            <a-tab-pane :key="2">
                <template #tab>
                    <span>
                        <apple-outlined />
                        商品分类
                    </span>
                </template>
            </a-tab-pane>
            <a-tab-pane :key="3">
                <template #tab>
                    <span>
                        <apple-outlined />
                        商品管理
                    </span>
                </template>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';

    const activeKey = ref(1)
</script>

<style scoped lang="less">

    .nb-tabs {
        background-color: #fff;
        ::v-deep .ant-tabs-tab {
                height: 38px;
                line-height: 38px;
                margin: 0 -18px 0 13px !important;
                padding: 0 30px 0 30px !important;
                transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
        }


    ::v-deep .ant-tabs-tab:hover {
        padding: 0 13px 0 13px !important;
        color: #515a6e !important;
        background: #dee1e6;
        -webkit-mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkCAYAAADvhSSyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVR4nO3d4U3CUBSG4beJA9QNcAJhAtnAOoGOwCaOoBvoCDgBOIHdQDbAH7cJMaHtxcJB6/skJ6Thptw/H+cSktOCn5kCc+AWKJtraaxqYA28A8/N9cktgE9ga1n/tBYcqDhw/QtQHfoh0gitgdkpbrzg/N8klvWbKruz5Xa0CbAi/R6TtDMjdbdOF5k3qzBk0j4VRwzazbC9SKN1nbMo9+j4QTo+SvpuA1z2LcoN2nbYXqRR681R7tFR0gAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNGq4kjTRolRM0x31L3Sb0TMLKCZqTiaVu9/QErW+oyAQHp0p9NqRBqnXbgq6glcATdjQpRw1ctb3ZFrQSeAQejr8fabRegbvcxXPScfHcDxCwrL9YK/Y0qILdgwSnpNHfHhWl4ZbAW/O6LEgplHRC/mEtBfgClkhxraFbr7gAAAAASUVORK5CYII=);
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkCAYAAADvhSSyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVR4nO3d4U3CUBSG4beJA9QNcAJhAtnAOoGOwCaOoBvoCDgBOIHdQDbAH7cJMaHtxcJB6/skJ6Thptw/H+cSktOCn5kCc+AWKJtraaxqYA28A8/N9cktgE9ga1n/tBYcqDhw/QtQHfoh0gitgdkpbrzg/N8klvWbKruz5Xa0CbAi/R6TtDMjdbdOF5k3qzBk0j4VRwzazbC9SKN1nbMo9+j4QTo+SvpuA1z2LcoN2nbYXqRR681R7tFR0gAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNGq4kjTRolRM0x31L3Sb0TMLKCZqTiaVu9/QErW+oyAQHp0p9NqRBqnXbgq6glcATdjQpRw1ctb3ZFrQSeAQejr8fabRegbvcxXPScfHcDxCwrL9YK/Y0qILdgwSnpNHfHhWl4ZbAW/O6LEgplHRC/mEtBfgClkhxraFbr7gAAAAASUVORK5CYII=);
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
    }

    ::v-deep .ant-tabs-tab-active {
        color: #1890ff !important;
        background: #e8f4ff !important;
        mask: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAkCAYAAADvhSSyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVR4nO3d4U3CUBSG4beJA9QNcAJhAtnAOoGOwCaOoBvoCDgBOIHdQDbAH7cJMaHtxcJB6/skJ6Thptw/H+cSktOCn5kCc+AWKJtraaxqYA28A8/N9cktgE9ga1n/tBYcqDhw/QtQHfoh0gitgdkpbrzg/N8klvWbKruz5Xa0CbAi/R6TtDMjdbdOF5k3qzBk0j4VRwzazbC9SKN1nbMo9+j4QTo+SvpuA1z2LcoN2nbYXqRR681R7tFR0gAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNCmDQpAAGTQpg0KQABk0KYNCkAAZNGq4kjTRolRM0x31L3Sb0TMLKCZqTiaVu9/QErW+oyAQHp0p9NqRBqnXbgq6glcATdjQpRw1ctb3ZFrQSeAQejr8fabRegbvcxXPScfHcDxCwrL9YK/Y0qILdgwSnpNHfHhWl4ZbAW/O6LEgplHRC/mEtBfgClkhxraFbr7gAAAAASUVORK5CYII=);
        -webkit-mask-size: 100% 100%;
        mask-size: 100% 100%;
        padding: 0 20px 0 20px !important;
    }

        ::v-deep .ant-tabs-tab-active:hover {
            padding: 0 30px 0 30px !important;
        }
    }

    
</style>
