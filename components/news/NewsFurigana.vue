<template>
  <div class="white">
    <v-tabs
      v-model="activeTab"
      color="primary"
      slider-color="yellow"
    >
      <v-tab  
        v-if="article.translateText"        
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
        v-if="article.translateText"         
        key="3"
        ripple
        class="white--text">
        번역
      </v-tab>
      <v-tab-item v-if="article.translateText">
        <v-card flat>
          <v-card-text>          
            <h1 
              class="furigana" 
              v-html="article.titleFurigana"/>
            <h2 
              class="furigana" 
              v-html="article.titleTranslate"/>
            <div class="furigana pl-3" >
              <p>
                <img 
                  :src="article.newsImageUrl ? article.newsImageUrl : require('~/assets/noImage.png')" 
                  height="200"              
                >          
              </p>
            </div>
            <div 
              class="furigana" 
              v-html="$options.filters.withTranslate(article.furigana, article.translateText)"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item >
        <v-card flat>
          <v-card-text>
            <h1 
              class="furigana" 
              v-html="article.titleFurigana"/>
            
            <div class="furigana pl-3" >
              <p>
                <img 
                  :src="article.newsImageUrl ? article.newsImageUrl : require('~/assets/noImage.png')" 
                  height="200"              
                >          
              </p>
            </div>
            <div 
              class="furigana" 
              v-html="article.furigana"/>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h1 
              class="furigana" 
              v-html="article.title"/>
            <div class="furigana pl-3" >
              <p>
                <img 
                  :src="article.newsImageUrl ? article.newsImageUrl : require('~/assets/noImage.png')" 
                  height="200"              
                >          
              </p>
            </div>
            <div 
              class="furigana" 
              v-html="article.article"/>
          </v-card-text>  
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>  
            <h1 
              class="furigana" 
              v-html="article.titleTranslate"/>  
            <div class="furigana pl-3" >
              <p>
                <img 
                  :src="article.newsImageUrl ? article.newsImageUrl : require('~/assets/noImage.png')" 
                  height="200"              
                >          
              </p>
            </div>
            <div 
              class="furigana" 
              v-html="article.translateText"/>
          </v-card-text>  
        </v-card>
      </v-tab-item>
    </v-tabs>
    <div class="furigana pl-3" >
      <p>
        <br>
        <img 
          :src="article.newsPubllisherImageUrl ? article.newsPubllisherImageUrl : require('../../assets/noImage.png')"
          height="30px"              
        > 
        <span class="ml-3 caption">
          Published Date : {{ article.newsPublishedDate | moment("YYYY. MM. DD dddd, h:mm:ss a") }}         
        </span>
        <a 
          :href="article.newsUrl" 
          target="_blank"
          class="caption grey--text lighten-1">원본 : {{ article.newsUrl }} </a>
      </p>
      
    </div>
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
    article: { type: Object, default: null }
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
.furigana rt {
  color: red;
  font-size: 0.6em;
}
</style>
