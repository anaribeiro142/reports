<template>
	<div>
    <div class="report" v-if="!editing">
      <h1>Report</h1>
      <section class="report-info">
           
        <h4>Created at:</h4> <p>{{report.date}}</p>
        <h4>Status:</h4> <p>{{report.status}}</p>
        <h4>Game on occured:</h4> <p>{{report.game}} </p>
        <h4>Player who made:</h4> <p>{{report.player}}</p>
        <h4 class="fraude"> The fraudes detected were:</h4>
        	<p>{{report.fraudes}}</p>
        <h4 class="obs"> Observations:</h4>
        <p v-if="report.observations">{{report.observations}}</p>
        <p v-else>You don't have any observations!</p>

      </section>
        <button class="button" type="button" @click="deleteReport"><strong>Delete</strong></button>
        <button class="button" type="button" @click="changeEditing"><strong>Edit</strong></button>
    </div>
    <div class="report" v-else>
      <h1>Edit Report</h1>
      <section class="report-info">
           
        <h4>Created at:</h4> <p>{{report.date}}</p>
        <h4>Status:</h4> <p>{{report.status}}</p>
        <h4>Game on occured:</h4> <input type="text" v-model="game" >
        <h4>Player who made:</h4>
        <Dropdown
            :options="players"
            :placeholder="player"
            v-on:selected="validateSelection"
            >
        </Dropdown>
        <h4 class="fraude"> The fraudes detected were:</h4>
        <div class="select-list">
          <select v-model="fraudeToReport">
            <option v-for="fraude in existingFraudes" :key="fraude" :value="fraude">{{fraude}}</option>
        	</select>
    		</div>
        <h4 class="obs"> Observations:</h4>
        <textarea class="descript-area" v-model="description" :placeholder="report.observations" rows="10"></textarea>

      </section>
      <button  class="button" type="button"  @click="editReport"><strong>Save</strong></button>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Dropdown from 'vue-simple-search-dropdown';

    export default {
        data (){
            return{
                id: this.$route.params.id,
                editing: false,
                game: "",
                palyer: "",
                fraudeToReport: "",
                description: ""
            };
        },
        computed: {
            ...mapState(["reports","existingFraudes","players"]),
            report(){
                let report = this.reports.find(r => r.id === this.id)
                this.game = report.game
                this.player = report.player
                this.fraudeToReport = report.fraudes
                this.description = report.observations
                return report
            }

        },
        methods:{
            changeEditing(){
                this.editing = !this.editing
            },

            editReport(){
                let editedReport = {
                    id: this.report.id,
                    game: this.game,
                    player: this.player,
                    date: this.report.date,
                    status: this.report.status,
                    fraudes: this.fraudeToReport,
                    observations: this.description 
                }
                this.$store.commit('editReport', editedReport)
                this.$router.push({name:'Home'})
            },

            deleteReport(){
                this.$store.commit('deleteReport', this.report.id)
                this.$router.push({name:'Home'})
                
            },
            validateSelection(selection){
                this.player = selection.name
            }
				},
				components:{
                    Dropdown
				}
    }
</script>

<style lang="scss" scoped>
.report {
    width: 586px;
    background: #fff;
    margin-left: 165px;
    border-radius: 10px; 
}

.report-info{
    width: 80%;
    display: grid;
    justify-content: space-around;
    grid-template-columns: 1fr 1fr ;
    
}
.unorder-list{
    list-style-type: circle;
}

.select-list select{
    display: inline-block;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ebebeb;;
    background-color: #ffffff;
    padding: 16px 0;
}

.button{
    background-color: #14145a;
    color: #ffffff;
    width: 15%;
    padding: 18px 17px;
    border: none;
    margin-top: 15px;
    margin-right: 15px;
    border-radius: 8px;
    &:hover {
        background: #00008B;
    }
    align-content: center;
}

input{
   width: 100%; 
   display: block;
   border: none;
   border-bottom: 2px solid #ebebeb;
   padding: 5px 0;
   margin-bottom: 31px;
   font-size: 15px;
}

.descript-area{
    width: 100%;
    height: 100%
}

@media screen and (max-width: 1024px) {
    .report {
        margin: 0 auto;
    }
}
@media screen and (max-width: 768px) {
    
    .report {
        width: calc( 100% - 30px);
        max-width: 100%;
    }
}

@media screen and (max-width: 480px) {
    .report-info {
        padding: 30px 30px 70px 30px;
    }
}
</style>