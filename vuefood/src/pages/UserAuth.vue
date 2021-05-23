<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Oj, det blev fel 🤷🏻‍♂️"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog fixed :show="isLoading" title="Autentiserar ..."></base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-postadress:</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Lösenord:</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid" class="errors">
          Vänligen ange en giltig e-postadress samt ett lösenord på minst 6
          tecken
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Logga in";
      } else {
        return "Skapa konto";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Skapa konto istället";
      } else {
        return "Logga in istället";
      }
    },
  },
  methods: {
    async submitForm() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid === false;
        return;
      }

      const authPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", authPayload);
        } else {
          await this.$store.dispatch("signup", authPayload);
        }
        this.$router.replace("/foods");
      } catch (err) {
        this.error = err.message || "Autentiseringen misslyckades";
      }
    },
    switchAuthMode() {
      if (this.mode === "signup") {
        this.mode = "login";
      } else {
        this.mode = "signup";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  background-color: rgba(255, 166, 0, 0.445);
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
