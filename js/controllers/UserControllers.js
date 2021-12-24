class UserController {
  constructor() {
    this.addEventBtns();
    this.users = {};
  }

  addLine(user) {}

  readPhoto(data) {
    console.log(data);
  }

  register() {
    let formEl = document.querySelector(".register");
    let elements = formEl.elements;
    let user;
    let registerData = {};
    [...elements].forEach((v) => {
      switch (v.type) {
        case "checkbox":
          registerData[v.name] = v.checked;
          break;
        case "file":
          this.readPhoto(v.files[0]);
        default:
          registerData[v.name] = v.value;
          break;
      }
    });

    if (JSON.stringify(this.users) == JSON.stringify({})) {
      user = new User(
        0,
        elements.name.value,
        elements.photo.value,
        elements.email.value,
        elements.admin.value,
        elements.password.value
      );
    } else {
      let lastUser = Object.values({ a: "teste", b: "teste2" })[
        object.values({ a: "teste", b: "teste2" }).length - 1
      ];
      user = new User(
        lastUser.getId() + 1,
        elements.name.value,
        elements.photo.value,
        elements.email.value,
        elements.admin.value,
        elements.password.value
      );
    }
  }
  addEventBtns() {
    document.querySelector(".add").addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "flex";
    });

    document.querySelectorAll(".close")[0].addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "none";
    });

    document.querySelectorAll(".check")[0].addEventListener("click", () => {
      this.register();
    });

    document.querySelectorAll(".close")[1].addEventListener("click", () => {
      document.querySelector(".form-add").style.display = "none";
    });
  }
}
