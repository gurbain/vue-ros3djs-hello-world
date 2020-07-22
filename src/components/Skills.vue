<template>
  <div class="hello">
    <!-- {{ name }}

    {{ btnState ? 'The Button is disabled' : 'The button is active' }}
    <button v-on:click="changeName" v-bind:disabled="btnState" >Change Name</button> -->
    <div class="holder">
      <ValidationObserver ref="form">
      <form @submit.prevent="addSkill">
        <ValidationProvider rules="min:5" v-slot="{ errors }">
          <input type="text" placeholder="Enter a skill" v-model="skill"/>
          
          <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p v-if="errors[0]" :class="{ alert: errors[0], hidden: !errors[0] }">
            {{ errors[0] }}
            </p>
          </transition>
         </ValidationProvider>
      </form>
      </ValidationObserver>
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data,index) in skills" :key='index'>{{data.skill}}
            <i class="fa fa-minus-circle" v-on:click="removeSkill(index)"></i>
          </li>
        </transition-group>
      </ul>

      <!-- <p v-if="skills.length >= 2">You have more than 1 skills</p>
      <p v-else>You have less than or equal 1 skill</p> -->
      <!-- <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div> -->

      <!-- class object -->
      <!-- <div v-bind:class="alertObject"></div> -->

      <!-- inline style -->
      <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeigth }"></div> -->
      <p>These are the skills that you possess</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: 'Coursetro',
      btnState: true,
      checked: false,
      skill: '',
      skills: [
        {'skill': 'Vue.js'},
        {'skill': 'Front end developer'},
      ],
      // showAlert: true,
      // showClass: true,
      // alertObject: {
      //   alert: true,
      // },
      // bgColor: 'yellow',
      // bgWidth: '100%',
      // bgHeigth: '30px',

    }
  },

  methods:{

    // addSkill(){
    //   this.$validator.validateAll().then((result) => {
    //     if(result){
    //         this.skills.push({skill: this.skill})
    //         this.skill = ''

    //     } else{
    //       console.log('not valid');

    //     } 
    //   });

    // }


    addSkill () {
      this.$refs.form.validate().then(success => {
        if (!success) {
          console.log('error');
          return;
        }
        this.skills.push({skill: this.skill})
        this.skill = ''
        

        // Resetting Values
        // this.firstName = this.lastName = this.email = '';

        // Wait until the models are updated in the UI
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },

    removeSkill (id) {
      this.skills.splice(id,1);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 

  .alert{
    background-color: yellow;
    width: 100%;
    height: 30px;

  }

  .another-class{
    border: solid 1px black;

  }


  .holder {
    background: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

   input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;

  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;

  }

  @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
