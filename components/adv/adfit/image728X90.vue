<template>
  <div 
    style="width:728px;height:90px;margin:0 auto;" 
    class="pa-2">
    <ins 
      :data-ad-unit = "adId" 
      class="kakao_ad_area" 
      style="display:none;" 
      data-ad-width = "728" 
      data-ad-height = "90"/> 
      <!-- <script 
      type="text/javascript" 
      src="//t1.daumcdn.net/adfit/static/ad.min.js" 
      async/>     -->
  </div>
</template>
<script>
export default {
  props: {
    adId: { type: String, default: '' }
  }
}
</script>
