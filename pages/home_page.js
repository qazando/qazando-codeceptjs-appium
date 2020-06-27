const { I } = inject();

module.exports = {

  button:{
    save: '~salvar',
  },

  fields:{
    code: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[1]',
    name: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[2]',
    search: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[3]'
  },

  registerStudent(code, name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check){
    I.fillField(this.fields.search, search)
    I.seeElement('(//XCUIElementTypeOther[@name="' + check + '"])[2]')
  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
  
}
