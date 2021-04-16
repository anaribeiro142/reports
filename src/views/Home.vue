<template>
  <div class="home">
    <h1>My Reports</h1>
    <div class="wrapper">
      <i class="fa fa-search"  aria-hidden="true"></i>
      <input type="text" placeholder="Find a report" v-model="query">
    </div>
    <table class="reports-table">
      <thead>
        <tr>
          <th>Game</th>
          <th>Player</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="report in filteredReport" :key="report.id" @click="openReport(report.id)">
          <td>{{report.game}}</td>
          <td>{{report.player}}</td>
          <td>{{report.status}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  
export default {
  data() {
    return{
      query: ""
    }
  },
  computed: {
    ...mapState([
      'reports',
    ]),
    filteredReport() {
      if(this.query!='')
        return this.reports.filter(report =>{
          console.log(report.game)
          return report.game.toLowerCase().includes(this.query.toLowerCase()) | report.player.toLowerCase().includes(this.query.toLowerCase())
                  | report.status.toLowerCase().includes(this.query.toLowerCase())
        })
      else 
        return this.reports
    }
  },
  methods:{
    openReport(reportID){
      this.$router.push({name: 'Report', params: {id: reportID}})
    },
  }
};
</script>

<style lang="css" scoped>
.home{
  width: 80%;
  margin: 0 auto;
}
.reports-table{
  width: 100%;
  margin: 80px 0;
  border-collapse: collapse;
}
.wrapper{
  display: flex;
  border-bottom: 2px solid #00008B;
  width: 50%;
  margin: 0 auto;
  margin-top:40px
}
input{
   width: 100%; 
   border: none;
   font-size: 15px;
   padding-left: 10px;
   outline: none;
}
thead{
  background-color: #14145a;
  color: #ffffff;
}
tbody tr:nth-of-type(even){
  background: #eee;
}

td, th{
  padding: 16px;
}

tbody tr {
  text-align: center;

}

tbody tr:hover{
  background: #F0F8FF;
}
</style>