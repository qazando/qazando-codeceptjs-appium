Feature('Students');

const { I, login_page, home_page } = inject()

const code = require('../Utils/code')
const name = require('../Utils/name')

Scenario('Add student with success', () => {

    const myCode = code.getCode()
    const myName = name.getName()

    login_page.doLogin('teste@teste.com', '123456')
    home_page.registerStudent(myCode, myName)
    home_page.searchStudent(myName, myCode)
});
