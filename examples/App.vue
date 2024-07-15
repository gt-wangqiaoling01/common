<script setup lang="ts">
import { Button }from '@common/components'
import { add } from '@common/utils'
import { onMounted } from 'vue';
onMounted(() => {
    console.log('mounted', add(1,2))
})
</script>

<template>
    <div class="example-wrapper">
        <Button>222</Button>
    </div>
</template>

<style lang="scss" scoped>
.example-wrapper {
}
</style>