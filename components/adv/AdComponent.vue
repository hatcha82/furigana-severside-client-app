<template>
  <v-layout 
    :class="layoutType"
    class="white text-xs-center pa-1 mb-1">
    <v-flex
      xs12
      sm12
      md6
      lg6
      class="pt-1 pb-1"
    >
      <adfit-banner
        :data-ad-unit="adfitDesktopUnit"
        style="margin:0 auto;display:block"
        class="hidden-sm-and-down"
        data-ad-test="N"/>
      <adfit-banner
        :data-ad-unit="adfitMobileUnit"
        style="margin:0 auto;display:block"
        class="display-sm-and-up hidden-md-and-up"
        data-ad-test="N"/>
     
    </v-flex>
    <v-flex
      xs12
      sm12
      md6 
      lg6
      class="pt-1 pb-1"
    >
      <div style="margin:auto"> 
        <iframe 
          width="728%" 
          height="90" 
          allowtransparency="true" 
          src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1054519%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" 
          frameborder="0" 
    
          class="hidden-sm-and-down"
          scrolling="no"/>
        <iframe 
          width="320" 
          height="100" 
          allowtransparency="true" 
          src="https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1054519%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" 
          class="display-sm-and-up hidden-md-and-up"
          frameborder="0" 
          scrolling="no"/>
      </div>
    </v-flex>

  </v-layout>
 
</template>
<script>
export default {
  props: {
    layoutType: { type: String, default: 'wrap' },
    googleAdSlotId: { type: String, default: '' },
    adfitDesktopUnit: { type: String, default: '' },
    adfitMobileUnit: { type: String, default: '' }
  }
}
</script>
