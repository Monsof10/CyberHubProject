const authNav = {
  login: {
    text: "Login",
    link: "/login"
  },
  signup: {
    text: "Sign Up",
    link: "/Signup"
  }
};

const authPages = {
  login: {
    title: "Login to Your Account",
    submitText: "Login",
    redirectText: "Don't have an account?",
    redirectLink: "/Signup",
    redirectLinkText: "Sign Up"
  },
  signup: {
    title: "Create New Account",
    submitText: "Sign Up",
    redirectText: "Already have an account?",
    redirectLink: "/login",
    redirectLinkText: "Login"
  }
};

export { authNav, authPages };
