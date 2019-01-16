<template>
  <div class="">
    <v-layout wrap>
      <v-flex 
      >
        <div v-if="false">
          <v-select 
            v-model="selectedVoice"
            :items="voiceList"
            class="mt-3"             
            item-text="name"
            item-value="name"
            label="음성언어를 선택해주세요."
            persistent-hint
            return-object
            single-line
            @change="voiceChange"          
          />
        </div>
        
        <transition 
          v-if="isLoading" 
          name="fade">  
          <v-btn 
            color="primary" 
            @click="stop">
            <v-icon>fas fa-stop </v-icon>
          </v-btn> 
        <!-- <pulse-loader :loading="isLoading" :color="color" :size="size"></pulse-loader> -->
        </transition>
        <transition 
          v-if="!isLoading" 
          name="fade">
          <v-btn 
            color="primary" 
            @click="play" >
           
            <v-icon v-if="!isLoading">fas fa-headphones-alt</v-icon>
          </v-btn>  
        </transition> 
      </v-flex>
      <v-flex 
       
        class="pt-4" 
      >
         
        <div 
          v-if="false" 
          id="page-wrapper">       
          <v-layout 
            row 
            justify-center >
            <v-flex xs12>
              <!-- <v-select 
                  v-model="selectedVoice"
                  :items="voiceList"             
                  item-text="name"
                  item-value="name"
                  label="Voice"
                  persistent-hint
                  return-object
                  single-line
                  @change="voiceChange"
                /> -->
            </v-flex>
            <v-flex 
              xs6 
              style="">
              <v-slider 
                v-model="volume" 
                min="0" 
                max="10" 
                step="1" 
                label="Volume"/>
            </v-flex>
            <v-flex 
              xs6 
              style="">
              <v-slider 
                v-model="rate" 
                min="0" 
                max="10" 
                step="1" 
                label="Rate"/>
            </v-flex>           
            <v-flex xs4>
              <v-slider 
                v-model="pitch" 
                min="0" 
                max="10" 
                step="1" 
                thumb-label="always" 
                label="Pitch"/>
            </v-flex>           
          </v-layout>        
          <v-btn @click="play"><v-icon >play_arrow</v-icon></v-btn>
          <v-btn @click="pause"><v-icon >pause</v-icon></v-btn>      
          <v-btn @click="reset"><v-icon />Reset</v-btn>    
        </div>
        
      </v-flex>
    </v-layout>

  

  </div>  
</template>

<script>
export default {
  components: {},
  props: {
    text: { type: String, default: '' }
  },
  data() {
    return {
      select: null,
      isLoading: false,
      loadingSize: '20px',
      name: '',
      selectedVoice: null,
      rate: 4,
      volume: 4,
      pitch: 5,
      synth: window.speechSynthesis,
      voiceList: window.speechSynthesis.getVoices(),
      greetingSpeech: new window.SpeechSynthesisUtterance()
    }
  },
  beforeDestroy() {
    this.synth.cancel()
  },
  mounted() {
    // wait for voices to load
    // I can't get FF to work without calling this first
    // Chrome works on the onvoiceschanged function

    setTimeout(() => {
      this.isLoading = true

      this.voiceList = this.synth.getVoices()

      this.isLoading = false
    }, 2000)

    this.synth.onvoiceschanged = () => {
      this.synth.cancel()
      // give a bit of delay to show loading screen
      // just for the sake of it, I suppose. Not the best reason
    }
    this.listenForSpeechEvents()
  },
  methods: {
    /**
     * React to speech events
     */
    listenForSpeechEvents() {
      this.greetingSpeech.onstart = () => {
        this.isLoading = true
      }
      this.greetingSpeech.onend = () => {
        this.isLoading = false
      }
    },
    /**
     * Shout at the user
     */
    voiceChange() {},
    play() {
      // it should be 'craic', but it doesn't sound right
      this.synth.cancel()
      if (this.synth.paused) {
        this.synth.resume()
      } else {
        this.greetingSpeech.text = this.text
        this.greetingSpeech.rate = this.rate / 5
        this.greetingSpeech.volume = this.volume / 5
        this.greetingSpeech.pitch = this.pitch / 5
        this.greetingSpeech.lang = 'ja-JP'
        this.synth.speak(this.greetingSpeech)
      }
    },
    pause() {
      this.synth.pause()
    },
    stop() {
      this.synth.cancel()
    },
    reset() {
      this.rate = 5
      this.volume = 5
      this.pitch = 5
    },
    langChange() {
      this.synth.cancel()
    }
  }
}
</script>

<style scope>
#page-wrapper {
  border-radius: 10px;
}
</style>
