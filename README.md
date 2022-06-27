# workshop-13 - Redux

## Experience with redux state and actions

### Setup

1. clone this repo

```
    git clone git@github.com:monday-u-com/workshop-13.git
```

2. run npm install

```
    npm i
```

3. run npm start

```
    npm start
```

4. [Optional] install redux dev-tools for chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

![image](https://user-images.githubusercontent.com/35146205/169762361-da5d17ab-8c02-46a8-bdb9-990f61439cfa.png)

### Add login

1. Allow any user to login, but force password to be 1234.
   If user is empty, show an appropriate message
   If user is using other password, show an appropriate message
   (See `login-actions.js`)
2. Add actions for login/logout buttons

(See `login-connector.js`, `login-component`)

### Add missing actions to counter buttons

1. Increase - adds 1 to the counter (value saved in store)
2. Decrease - subtract 1 from counter
3. Reset - sets the initial value (0)

(see `counter-connector.js`, `counter-component.js`)

You can also search for `// TODO` in order to find all relevant places to complete

![image](https://user-images.githubusercontent.com/35146205/169763492-4edacd86-365c-4bbb-937b-f67603db8518.png)



Redux presentation - https://docs.google.com/presentation/d/16usajagd7990qf8jCUzmAM9GSwEkuOASkvV5xHBVRfQ/edit#slide=id.g126381b89ed_0_2746
