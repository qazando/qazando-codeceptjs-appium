Feature('Login');

const { I, login_page } = inject()

BeforeSuite(() => {
    console.log('BeforeSuite')
});

Before(() => {
    console.log('Before')    
});

AfterSuite(() => {
    console.log('AfterSuite')
});

After(() => {
    console.log('After')
});

Scenario('Login with success', (home_page) => {
    login_page.doLogin('teste@teste.com', '123456')
    home_page.checkLoginSuccess()
});

Scenario('Login with error', () => {
    login_page.doLogin('xteste@teste.com', '123456')
    login_page.checkLoginError()
});
