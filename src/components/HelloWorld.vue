<script lang="ts" setup>
import { ref } from 'vue';
import Button from './shadcn/button/Button.vue';

defineProps({
    msg: String,
});

const count = ref(0);
</script>

<template>
    <div class="space-y-2">
        <p class="text-2xl">{{ msg }}</p>
        <Button variant="outline" @click="count++">count is {{ count }}</Button>
    </div>
</template>

<style scoped></style>
