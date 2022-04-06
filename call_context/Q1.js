function askPassword(ok, fail) {
    let password = prompt("Password", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFailed() {
        alert(`${this.name} failed login`)
    },
};

// askPassword(user.loginOk, user.loginFailed); // The problem occurs as the context of the object user is not found in the LE so name is undefined Here
// alert(`wrapper solution () =>`);
// askPassword(() => user.loginOk(), () => user.loginFailed()); //Wrapper Solution here the context of the object is found!
// alert(`bind solution `);
// askPassword(user.loginOk.bind(user), user.loginFailed.bind(user)); //Bind Solution here the context of the object is bind with the helper bind function
// alert(`apply solution `);
// askPassword(() => user.loginOk.apply(user), () => user.loginFailed.apply(user)); // apply solution here the context of the object is wrapped with apply function
alert(`call solution `);
askPassword(() => user.loginOk.call(user), () => user.loginFailed.call(user));// call solution here the context of the object is wrapped with call function
