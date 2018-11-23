<template>
  <div 
    :style="'width:' + adWidth + 'px;height:' + adHeight +'px;margin:0 auto;'" 
    class="pa-2">
    <ins 
      :data-ad-unit = "adId" 
      :data-ad-width = "adWidth" 
      :data-ad-height = "height" 
      class="kakao_ad_area" 
      style="display:none;"/> 
  </div>
</template>
<script>
export default {
  props: {
    adId: { type: String, default: '' },
    adWidth: { type: String, default: '' },
    adHeight: { type: String, default: '' }
  }
}
</script>
