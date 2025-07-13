<template>
  <div><input type="file" @change="change" /><img v-if="preview" :src="preview" width="120"/></div>
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['uploaded'])
const preview = ref(null)
function change(e) {
  const reader = new FileReader()
  reader.onload = () => { preview.value = reader.result; emit('uploaded', reader.result) }
  reader.readAsDataURL(e.target.files[0])
}
</script>
