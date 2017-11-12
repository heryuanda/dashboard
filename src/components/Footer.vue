<template>
  <footer class="sticky-footer">
    <div class="container">
      <div class="text-center">
        <small>Copyright © XXX {{currentYear}}</small>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>

