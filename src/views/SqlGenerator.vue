<template>
  <div class="SqlGenerator">
    <div class="container" @submit.prevent="HandleSubmit">
      <h1 class="border-bottom pb-2">Sql Generator</h1>
      <form class="mt-4">
        <div class="col-md-6">
          <div class="row mb-4">
            <label class="col-sm-3 col-form-label">Table Name:</label>
            <div class="col-sm-9">
              <input class="form-control" type="text" required v-model="tableName">
            </div>
          </div>
          <div class="row mb-4">
            <label class="col-sm-3 col-form-label">Field:</label>
            <div class="col-sm-5">
              <input class="form-control" type="text" placeholder="Field Name" v-model="tmpFieldName">
            </div>
            <div class="col-sm-3">
              <select class="form-control" v-model="tmpFieldType">
                <option value="INT">Int</option>
                <option value="VARCHAR">VarChar</option>
              </select>
            </div>
            <div class="col-sm-1">
              <button type="button" class="btn btn-success" @click="AddField">Add</button>
            </div>
          </div>
          <div v-for="field in fields" :key="field.id" class="row mb-2" >
            <div class="col-md-12 fieldItem py-2" @click="DeleteField(field)">
              <div class="d-block">Name: {{ field.fieldName }}</div>
              <div class="d-block">Type: {{ field.fieldType }}</div>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <button class="btn btn-primary">Create Sql</button>
            </div>
          </div>
        </div>
      </form>

      <div v-if="sqlText" class="row languageText mt-5">
        <div class="col-md-12">
          <div class="textNav">
            <div class="text-start">
              <div id="sqlText" class="col-md-2 d-inline-block text-center languageSelector" :class="{ active : selectedRenderedText == 'sqlText'}" @click="SelectText">
                SQL
              </div>
              <div id="phpText" class="col-md-2 d-inline-block text-center languageSelector" :class="{ active : selectedRenderedText == 'phpText'}" @click="SelectText">
                PHP
              </div>
            </div>
            <div class="text-start subSelect">
              <div id="CREATE" :class="{ active : selectSubText == 'CREATE'}" class="col-md-2 text-center d-inline-block" @click="SubSelect">
                Create
              </div>
              <div id="INSERT" :class="{ active : selectSubText == 'INSERT'}" class="col-md-2 text-center d-inline-block" @click="SubSelect">
                Insert
              </div>
              <div id="UPDATE" :class="{ active : selectSubText == 'UPDATE'}" class="col-md-2 text-center d-inline-block" @click="SubSelect">
                Update
              </div>
              <div id="DELETE" :class="{ active : selectSubText == 'DELETE'}" class="col-md-2 text-center d-inline-block" @click="SubSelect">
                Delete
              </div>
            </div>
          </div>
          <div class="row">
            <div v-if="selectedRenderedText == 'sqlText'" class="col-md-12 pb-3 renderedText">
              <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="sqlText"></textarea>
            </div>
            <div v-if="selectedRenderedText == 'phpText'" class="col-md-12 pb-3 renderedText">
              <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="phpText"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableName: '',
      tmpFieldName: '',
      tmpFieldType: '',
      fields: [],
      tmpField: {},
      sqlText: '',
      phpText: '',
      selectedRenderedText: 'sqlText',
      selectSubText: 'CREATE'
    }
  },
  methods: {
    AddField() {
      if (!this.fields.includes(this.tmpFieldName)){
        this.tmpField.id = this.fields.length
        this.tmpField.fieldName = this.tmpFieldName
        this.tmpField.fieldType = this.tmpFieldType

        this.fields.push(this.tmpField)
      }
      this.tmpField = {}
      this.tmpFieldName = ''
      this.tmpFieldType = ''
    },
    DeleteField(field) {
      this.fields = this.fields.filter((fieldItem) => {
        return fieldItem.id != field.id
      })
    },
    HandleSubmit() {
      this.sqlText = "CREATE TABLE " + this.tableName + " ( \n"

      var first = true
      this.fields.forEach((field) => {
        if (first){
          this.sqlText += field.fieldName + " " + field.fieldType
          first = false 
        }
        else {
          this.sqlText += ",\n"+field.fieldName + " " + field.fieldType
        } 
      })

      this.sqlText += "\n)"
    },
    SelectText(event){
      this.selectedRenderedText = event.target.id
    },
    SubSelect(event){
      this.selectSubText = event.target.id
    }
  }
}
</script>

<style>
  .fieldItem {
    background: #00b33c;
    color: white;
    border-radius: 10px;
    border: 3px solid black;
    cursor: pointer;
  }
  .languageSelector {
    padding: .75rem;
    outline: 1px solid green;
    cursor: pointer;
  }
  .languageSelector.active {

  }
  .languageText {

  }
  .languageText textarea {
    border-radius: 0 0 0.375rem 0.375rem;
  }
  .subSelect {
    font-size: 14px;
  }
  .subSelect div{
    padding: .5rem;
    outline: 1px solid blue;
  }
  .subSelect div.active{
    
  }
  .renderedText {
    /* padding-left: 0 !important; 
    padding-right: 0 !important;  */
  }
  .textNav {
    outline: 1px solid red;
  }
</style>