<template>
  <div 
    style="width:320px;height:100px;margin:0 auto;" 
    class="pa-2">
    <ins 
      :data-ad-unit = "adId" 
      class="kakao_ad_area" 
      style="display:none;" 
      data-ad-width = "320" 
      data-ad-height = "100"/> 
  </div>
</template>
<script>
export default {
  props: {
    adId: { type: String, default: '' }
  }
}
</script>
