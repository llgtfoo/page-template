/**
 * @name:系统水印
 * @param {type}
 */

export default (Vue) => {
  Vue.directive('water-marker', {
    inserted: function (el, {
      value: {
        width = '150px',
        height = '150px',
        textAlign = 'center',
        textBaseline = 'middle',
        font = '16px microsoft yahei',
        fillStyle = 'rgba(184, 184, 184, 0.4)',
        content = '可笑可笑',
        rotate = '-30',
        zIndex = 1000,
        visible = true,
      },
    }) {

      const canvas = document.createElement('canvas')

      canvas.setAttribute('width', width)
      canvas.setAttribute('height', height)
      const ctx = canvas.getContext('2d')

      ctx.textAlign = textAlign
      ctx.textBaseline = textBaseline
      ctx.font = font
      ctx.fillStyle = fillStyle
      ctx.rotate(Math.PI / 180 * rotate)
      const texts = content.split('\n')
      texts.forEach((t, index) =>
        ctx.fillText(t, parseFloat(width) / 2, parseFloat(height) / texts.length * (index + 1)))

      const base64Url = canvas.toDataURL()
      const watermarkDiv = document.createElement('div')
      watermarkDiv.className = 'water-marker-div'
      watermarkDiv.setAttribute('style', `
        ${visible ? 'opacity: 1;' : 'opacity: 0;'}
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:${zIndex || 1000};
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${base64Url}')`)

      el.style.position = 'relative'
      el.insertBefore(watermarkDiv, el.firstChild)
    },
    componentUpdated(el, { value, oldValue }) {
      const opt = Object.assign({
        width: '200px',
        height: '150px',
        textAlign: 'center',
        textBaseline: 'middle',
        font: '16px microsoft yahei',
        fillStyle: 'rgba(184, 184, 184, 0.4)',
        content: '请勿外传',
        rotate: '-30',
        zIndex: 1000,
        visible: true,
      }, oldValue, value)
      const [watermarkDiv] = el.getElementsByClassName('water-marker-div')
      const canvas = document.createElement('canvas')

      canvas.setAttribute('width', opt.width)
      canvas.setAttribute('height', opt.height)
      const ctx = canvas.getContext('2d')

      ctx.textAlign = opt.textAlign
      ctx.textBaseline = opt.textBaseline
      ctx.font = opt.font
      ctx.fillStyle = opt.fillStyle
      ctx.rotate(Math.PI / 180 * opt.rotate)
      const texts = opt.content.split('\n')
      texts.forEach((t, index) => {
        console.log(index)
        ctx.fillText(t, 50, 60 + 20 * index)
      })

      const base64Url = canvas.toDataURL()
      watermarkDiv.setAttribute('style', `
        ${opt.visible ? 'opacity: 1;' : 'opacity: 0;'}
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:${opt.zIndex};
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${base64Url}')`)
    },
  })
}
