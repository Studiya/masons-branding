<template>
  <svg>
    <use :href="icon"></use>
  </svg>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    defualt: ''
  },
  setSymbol: {
    type: String,
    required: false,
    default: ''
  }
})

const icon = '/images/' + props.name + '.svg#' + props.setSymbol
</script>
