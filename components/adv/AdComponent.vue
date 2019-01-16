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
      <adsbygoogle            
        :ad-slot="googleAdSlotId"/>
    </v-flex>
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
