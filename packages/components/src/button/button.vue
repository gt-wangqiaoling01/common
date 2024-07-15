<script setup lang="ts">
// props
withDefaults(
    defineProps<{
        color?: string
    }>(),
    {
        color: '#fff'
    }
)
</script>

<template>
    <button class="common-button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.common-button {
}
</style>