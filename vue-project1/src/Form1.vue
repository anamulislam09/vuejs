<template>
  <div class="container">
    <pre>

        {{ JSON.stringify(formValues, null, 2) }}
    </pre>
    <br />

    <form v-on:submit.prevent="dataSubmit">
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="inputEmail3"
            placeholder="Enter name"
            v-model.trim.lazy="formValues.name"
          />
        </div>
      </div>
      <br />
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Email</label
        >
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputPassword3"
            placeholder="Enter email"
            v-model.trim.lazy="formValues.email"
          />
        </div>
      </div>

      <br />

      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Age</label>
        <div class="col-sm-10">
          <input
            type="number"
            class="form-control"
            placeholder="Enter Your age"
            v-model.number="formValues.age"
          />
        </div>
      </div>

      <br />

      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >District</label
        >
        <div class="col-sm-10">
          <select
            v-model="formValues.districts"
            name=""
            id=""
            class="form-control"
          >
            <option value="" selected disabled>Select Ones</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
            <option value="Barishal">Barishal</option>
          </select>
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Gender</label
        >
        <div class="col-sm-10">
          <label for="male">Male</label>
          <input
            class="form-check-input"
            type="radio"
            value="Male"
            v-model="formValues.gender"
            name="Male"
            id=""
          /><br />
          <label for="">Female</label>
          <input
            type="radio"
            v-model="formValues.gender"
            value="Female"
            name="Female"
            id=""
          />
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Education</label
        >
        <div class="col-sm-10">
          <select
            v-model="formValues.education"
            multiple
            name=""
            id=""
            class="form-control"
          >
            <option value="" selected disabled>Select Ones</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Honours">Honours</option>
          </select>
        </div>
      </div>
      <br />

      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Skills</label
        >
        <div class="col-sm-10">
          <div class="form-check">
            <label for="">Laravel</label>
            <input
              class="form-check-input"
              v-model="formValues.Skills"
              type="checkbox"
              value="Laravel"
              id="flexCheckDefault"
            />
          </div>
          <div class="form-check">
            <label for="">React</label>
            <input
              class="form-check-input"
              type="checkbox"
              v-model="formValues.Skills"
              value="React"
              id="flexCheckChecked"
              checked
            />
          </div>
          <div class="form-check">
            <label class="form-check-label" for="flexCheckDefault"> Vue </label>
            <input
              class="form-check-input"
              type="checkbox"
              v-model="formValues.Skills"
              value="Vue"
              id="flexCheckChecked"
            />
          </div>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        districts: "",
        gender: "",
        education: [],
        Skills: [],
        age: "",
      },
    };
  },

  methods: {
    dataSubmit(event) {
      //   event.preventDefault();
      console.log(this.formValues);
    },
  },
};
</script>

<style></style>
