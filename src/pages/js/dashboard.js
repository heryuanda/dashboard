import {common} from '@/mixins/'
import LineChart from '@/components/LineChart'
export default {
  name: 'Dashboard',
  mixins: [common],
  components: {LineChart},
  data () {
    return {
      page: 'dashboard'
    }
  },
  created () {
    this.setPage(this.page)
  }
}
