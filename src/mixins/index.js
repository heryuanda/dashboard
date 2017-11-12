export const common = {
  methods: {
    setPage: function (page) {
      this.$store.dispatch('setCurrentPage', {
        data: page
      })
    },
    goToUrl: function (url) {
      this.$router.push(url)
    }
  }
}
