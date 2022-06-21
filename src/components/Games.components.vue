<template>
 <div class="card">
    <div class="container">
  <h2>Liste de vos jeux</h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1">Titre</div>
      <div class="col col-2">Editeur</div>
      <div class="col col-3">Plateforme</div>
    </li>
    <li class="table-row"
		v-for="game in games"
		:key="game.id">
      <div class="col col-1" data-label="Titre">{{game.title}}</div>
      <div class="col col-2" data-label="Editeur">{{game.editor}}</div>
      <div class="col col-3" data-label="Plateforme">{{game.platform}}</div>
    </li>
    
  </ul>
</div>
</div>

</template>

<script>
import gameService from '@/services/games.services.js'
export default {
  name: 'Games',
  data(){
		return {
			games : [],
			title: '',
			editor: '',
			platform: '',
			description: ''
		}
	},
 async created() {
		this.games = await gameService.getAll();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.responsive-table .table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 33%;
}
.responsive-table .col-2 {
  flex-basis: 33%;
	
}
.responsive-table .col-3 {
  flex-basis: 33%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis:30%;
  }
}
</style>
