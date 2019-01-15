<template>
  <div class="white">
    <v-tabs
      v-model="activeTab"
      color="primary"
      slider-color="yellow"
    >
      <v-tab  
        v-if="douwa.translateText"        
        key="0"
        ripple
        class="white--text" >
        함께 보기
      </v-tab>
      <v-tab          
        key="1"
        ripple
        class="white--text" >
        후리가나
      </v-tab>
      <v-tab          
        key="2"
        ripple
        class="white--text">
        원본
      </v-tab>
      <v-tab 
        v-if="douwa.translateText"         
        key="3"
        ripple
        class="white--text">
        번역
      </v-tab>
      <v-tab-item v-if="douwa.translateText">
        <v-card flat>
          <v-card-text>          
            <h1 
              class="furigana" 
              v-html="douwa.titleFurigana"/>
            <h2 
              class="furigana" 
              v-html="douwa.titleTranslate"/>
            <div 
              class="furigana" 
              v-html="$options.filters.withTranslate(douwa.furigana, douwa.translateText)"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item >
        <v-card flat>
          <v-card-text>
            <h1 
              class="furigana" 
              v-html="douwa.titleFurigana"/>
            <div 
              class="furigana" 
              v-html="douwa.furigana"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1 
              class="furigana" 
              v-html="douwa.title"/>
            <div 
              class="furigana" 
              v-html="douwa.article"/>
          </v-card-text>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>  
            <h1 
              class="furigana" 
              v-html="douwa.titleTranslate"/>  
            <span class="publishedDate"> {{ douwa.newsPublishedDate | moment("YYYY. MM. DD dddd, h:mm:ss a") }} </span>
            <v-img 
              :lazy-src="douwa.newsImageUr ? douwa.newsImageUrl : require('~/assets/noImage.png')" 
              :src="douwa.newsImageUrl ? douwa.newsImageUrl : require('~/assets/noImage.png')" 
              height="200" 
              contain 
              position="left"
              class="ml-3"
            />          
            <div 
              class="furigana" 
              v-html="douwa.translateText"/>
          </v-card-text>  
        </v-card>
      </v-tab-item>
    </v-tabs>
    
   
    <p 
      class="ml-3 caption" 
      align="center">      
      <a 
        :href="douwa.linkUrl" 
        target="_blank"
        class="caption grey--text lighten-1">원본 : {{ douwa.linkUrl }} </a>
    </p>
    <br>   
  </div>  
</template>
<script>
export default {
  filters: {
    withTranslate(furigana, traslate) {
      var html = ''
      var furiganaArray = furigana.split('\n')
      var traslateArray = traslate.split('\n')
      for (let [index, line] of furiganaArray.entries()) {
        var trans = traslateArray[index] ? traslateArray[index] : ''
        var furiganaText = line ? line : ''
        html += furiganaText
        html += '\n'
        html += `<span style='color:#aaa;font-size:0.9em'>${trans}</span>`
        html += '\n'
      }
      return html
    }
  },
  props: {
    douwa: { type: Object, default: null }
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>
<style scope>
.publishedDate {
  color: #aaa;
}
h1.furigana {
  font-size: 2em;
}
h2.furigana {
  color: #aaa;
}
.furigana {
  line-height: 2em;
  font-size: 1.2em;
  white-space: pre-line;
  width: 80%;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .furigana p img {
    width: 100%;
  }
}

.furigana p {
  text-align: left;
}
.furigana rt {
  color: red;
  font-size: 0.8em;
}
</style>
