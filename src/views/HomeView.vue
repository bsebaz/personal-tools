<template>
  <div class="home">
    <div class="container px-4 py-5">
      <h1 class="border-bottom pb-2">Tools</h1>
      <div class="d-flex flex-row flex-wrap p-2 ">
        <ToolCard :name="'Sql Generator'" :toolLink="'SqlGenerator'"/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ToolCard from '../components/ToolCard.vue'

export default {
  name: 'HomeView',
  components: {
    ToolCard
  }
}
</script>
