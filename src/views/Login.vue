<template>
  <div id="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>
    <section>
      <div class="col1">
        <h1>Tabtimize</h1>
        <p>
          Welcome to
          <a href="https://tabtimize.com/" target="_blank">Tabtimize.</a>Powered
          by Vue.js, vuex and Firebase.
        </p>
      </div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              placeholder="you@email.com"
              id="email1"
            />
          </div>
          <div>
            <label for="password1">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="******"
              id="password1"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>
        <form v-else @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <label for="name">First Name</label>
            <input
              v-model.trim="signupForm.name"
              type="text"
              placeholder="Bob"
              id="name"
            />
          </div>
          <div>
            <label for="nameLast">Last Name</label>
            <input
              v-model.trim="signupForm.nameLast"
              type="text"
              placeholder="Johnson"
              id="nameLast"
            />
          </div>
          <div>
            <label for="company">Company name</label>
            <input
              v-model.trim="signupForm.company"
              type="text"
              placeholder="YouTube"
              id="company"
            />
          </div>
          <div>
            <label for="companyType">Company/business Type</label>
            <input
              v-model.trim="signupForm.companyType"
              type="text"
              placeholder="Online video platform"
              id="companyType"
            />
          </div>
          <div>
            <label for="email2">Email</label>
            <input
              v-model.trim="signupForm.email"
              type="text"
              placeholder="example@email.com"
              id="email2"
            />
          </div>
          <div>
            <label for="password2">Password</label>
            <input
              v-model.trim="signupForm.password"
              type="password"
              placeholder="min 6 characters"
              id="password2"
            />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";
/*eslint-disable*/
export default {
  components: {
    PasswordReset,
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        nameLast: "",
        company: "",
        companyType: "",
        email: "",
        password: "",
      },
      showLoginForm: true,
      showPasswordReset: false,
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        nameLast: this.signupForm.nameLast,
        company: this.signupForm.company,
        companyType: this.signupForm.companyType
      });
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-weight: bold;
}
#login {
  background: linear-gradient(
    to right,
    $primary 0%,
    $primary 50%,
    $white 50%,
    $white 100%
  );

  @media screen and (max-width: 742px) {
    height: 100vh;
    background: $white;
  }

  .col1,
  .col2 {
    height: 100vh;
    padding-top: 30vh;
    @media screen and (max-width: 742px) {
      height: auto;
      padding-top: 20vh;
    }
  }

  .col1 {
    color: $white;
    @media screen and (max-width: 742px) {
      display: none;
    }

    p {
      max-width: 490px;
      margin-top: 2rem;
      line-height: 1.8;
    }

    a {
      color: $white;
      text-decoration: underline;
    }
  }

  .signup-form {
    padding-top: 20vh;
    @media screen and (max-width: 742px) {
      padding-top: 10vh;
    }
  }

  .col2 {
    h1 {
      margin-bottom: 2rem;
    }

    form {
      max-width: 450px;
      margin: 0 auto;
    }

    .extras {
      float: right;
      text-align: right;

      a {
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    .password-reset {
      h1 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 2rem;
      }
    }
  }
}

// password reset
.modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#333, 0.5);

  .modal-content {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(#333, 0.5);
    z-index: 999;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      cursor: pointer;
      transition: 0.15s;

      &:hover {
        color: #000;
      }
    }

    h3 {
      margin: 0;
    }

    p {
      margin: 15px 0;
    }

    .error {
      color: tomato;
      font-size: 12px;
    }

    .button {
      width: 100%;
    }
  }
}
</style>
