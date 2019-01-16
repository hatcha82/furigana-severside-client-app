<template>
  <v-tabs
    v-model="activeTab"
    color="primary"
    slider-color="yellow"
  >
    <v-tab  
      v-if="song.lyricsKor"        
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
      v-if="song.lyricsKor"         
      key="3"
      ripple
      class="white--text">
      번역
    </v-tab>
    <v-tab-item v-if="song.lyricsKor">
      <v-card flat>
        <v-card-text>         
          <div 
            class="furigana" 
            v-html="$options.filters.withTranslate(song.tab, song.lyricsKor)"/>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item >
      <v-card flat>
        <v-card-text>
          <div 
            class="furigana" 
            v-html="song.tab"/>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <div 
            class="furigana" 
            v-html="song.lyrics"/>
        </v-card-text>  
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>              
          <div 
            class="furigana" 
            v-html="song.lyricsKor"/>
        </v-card-text>  
      </v-card>
    </v-tab-item>
  </v-tabs>
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
    song: { type: Object, default: null }
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>
<style scope>
.furigana {
  line-height: 2em;
  font-size: 1.2em;
  white-space: pre-line;
}
.furigana rt {
  color: red;
  font-size: 0.6em;
}
</style>
