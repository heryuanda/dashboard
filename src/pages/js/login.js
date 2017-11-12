import {common} from '@/mixins/'
export default {
  name: 'Login',
  mixins: [common],
  data () {
    return {
      page: 'login'
    }
  },
  created () {
    this.setPage(this.page)
  },
  methods: {
    doLogin: function () {
      this.$router.push('/dashboard')
    }
  }
}
