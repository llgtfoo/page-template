<template>
<div class="loading-warp">
  <div class="loading">
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
    <div class="dot" />
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  watch: {
  },
  mounted() {

  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.loading-warp{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #ffffff;
    top: 0;
    left: 0;
    z-index: 999;
}
  .loading {
      position: absolute;
      z-index: 1001;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%,-50%,0)
  }

  .dot {
      width: 24px;
      height: 24px;
      background: #3ac;
      border-radius: 100% !important;
      display: inline-block;
      animation: slide 1s infinite
  }

  .dot:nth-child(1) {
      animation-delay: .1s;
      background: #32aacc
  }

  .dot:nth-child(2) {
      animation-delay: .2s;
      background: #64aacc
  }

  .dot:nth-child(3) {
      animation-delay: .3s;
      background: #96aacc
  }

  .dot:nth-child(4) {
      animation-delay: .4s;
      background: #c8aacc
  }

  .dot:nth-child(5) {
      animation-delay: .5s;
      background: #faaacc
  }

  @-moz-keyframes slide {
      0% {
          transform: scale(1)
      }

      50% {
          opacity: .3;
          transform: scale(2)
      }

      100% {
          transform: scale(1)
      }
  }

  @-webkit-keyframes slide {
      0% {
          transform: scale(1)
      }

      50% {
          opacity: .3;
          transform: scale(2)
      }

      100% {
          transform: scale(1)
      }
  }

  @-o-keyframes slide {
      0% {
          transform: scale(1)
      }

      50% {
          opacity: .3;
          transform: scale(2)
      }

      100% {
          transform: scale(1)
      }
  }

  @keyframes slide {
      0% {
          transform: scale(1)
      }

      50% {
          opacity: .3;
          transform: scale(2)
      }

      100% {
          transform: scale(1)
      }
  }
</style>
