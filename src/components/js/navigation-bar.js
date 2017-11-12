import {common} from '@/mixins/'
export default {
  name: 'navbar',
  mixins: [common],
  data () {
    return {
      showAccordion: false,
      showNavBar: false
    }
  },
  methods: {
    toggleAccordion: function () {
      this.showAccordion = !this.showAccordion
    },
    toggleNavBar: function () {
      this.showNavBar = !this.showNavBar
    }
  }
}
