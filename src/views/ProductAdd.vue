<template>
  <div>
    <b-container>
        <h1>ADD PRODUCT</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Id:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.id"
          type="number"
          required
          placeholder="Enter id"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Title" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.title"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
    
    <b-form-group id="input-group-2" label="Desc" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.desc"
          required
          placeholder="Enter description"
        ></b-form-input>
      </b-form-group>
     

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          id: null,
          desc: '',
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.desc = ''
        this.form.id = null
      }
    }
  }
</script>