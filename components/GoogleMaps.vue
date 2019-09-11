<template>
  <div />
</template>

<script>
export default {
  props: {
    lat: {
      type: Number,
      required: true
    },

    lng: {
      type: Number,
      required: true
    },

    zoom: {
      type: Number,
      default: 10
    },

    icon: {
      type: String,
      default: require('~/assets/images/mapmarker.png')
    }
  },

  mounted() {
    this.registerGoogleAPIScript()
    window.initMap = () => {
      this.createMap()
    }
  },

  methods: {
    async createMap() {
      const google = await window.google
      const zoom = this.zoom
      const position = { lat: this.lat, lng: this.lng }

      const map = new google.maps.Map(this.$el, {
        zoom,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [
              { saturation: 36 },
              { color: '#2b303a' },
              { lightness: 40 }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [
              { visibility: 'on' },
              { color: '#2b303a' },
              { lightness: '-34' }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }, { lightness: 20 }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#2b303a' }, { lightness: '-10' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 21 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }, { lightness: 17 }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#000000' }, { lightness: 29 }, { weight: 0.2 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 18 }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 16 }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 19 }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#2b303a' }, { lightness: '0' }, { gamma: '1' }]
          }
        ]
      })

      // eslint-disable-next-line
      new google.maps.Marker({
        position,
        map,
        icon: this.icon
      })
    },

    async registerGoogleAPIScript() {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJCZDj3_UBJsd7v3GQJsprfjQjtmdY1Uw&callback=initMap'
      script.async = true
      script.defer = true

      await document.body.appendChild(script)
    }
  }
}
</script>
