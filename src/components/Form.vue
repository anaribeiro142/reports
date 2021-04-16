<template>
    <div>
        <input type="text"  v-model="game" placeholder="Game where the fraude occured" >
        <div class="drop">
        <Dropdown
                
            :options="players"
            placeholder="Player who commited the fraude"
            v-on:selected="validateSelection"
        ></Dropdown>
        </div>
        <div class="select-list">
            <select v-model="fraudeToReport">
                <option disabled value="">Please select one</option>
                <option v-for="fraude in existingFraudes" :key="fraude" :value="fraude">{{fraude}}</option>
            </select>
        </div>
    	<div class="descript">
            <p>Observations:</p>
            <textarea class="descript-area" v-model="description" rows="10"></textarea>
        </div>
        <MessageBox v-if="error" :message="error" type="error"></MessageBox>
		<button class="button" type="button" @click="addReport"> <strong>Save</strong></button>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Dropdown from 'vue-simple-search-dropdown';
import MessageBox from '@/components/MessageBox.vue';
    export default {
       data(){
           return{
               game: "",
               player: "",
               fraudeToReport: "",
               description: "",
               error: ""
           };
       },
       computed: {
           ...mapState([
               'existingFraudes', 
               'players',
               'reports'
           ])
       },
       methods:{
           addReport(){
                if(this.game && this.player && this.fraudeToReport){
                    let currentDate = new Date().toLocaleString()
                    console.log(this.fraudeToReport)
                    let report = {
                        id: this.reports.length,
                        game: this.game,
                        player: this.player,
                        date: currentDate,
                        status: "analysing",
                        fraudes: this.fraudeToReport,
                        observations: this.description 
                    }
                    this.$store.commit('addReport', report)
                    this.$router.push({name: 'Home'})
                }
                else this.error = "You have fields to fill"
            },
            validateSelection(selection){
                this.player = selection.name
            }
       },
       components:{
           Dropdown,
           MessageBox
       }
    }
</script>

<style lang="scss" scoped>
input{
   width: 100%; 
   display: block;
   border: none;
   border-bottom: 2px solid #ebebeb;
   padding: 16px 0px;
   margin-bottom: 31px;
   
}

.drop{
    width: 100%;
}

.select-list select{
    display: inline-block;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ebebeb;;
    background-color: #ffffff;
    padding: 16px 0;
    margin-top:32px;
}

.descript{
    margin-bottom: 30px;
    display: block;
}

.descript-area{
    width: 100%
}

.button{
    background-color: #14145a;
    color: #ffffff;
    width: 40%;
    padding: 16px 17px;
    border: none;
    border-radius: 8px;
    &:hover {
        background: #00008B;
    }
}
</style>