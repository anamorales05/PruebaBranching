describe('template spec LOGIN', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/');
    cy.get('input[id="exampleInputEmail1"]').type("ana@gmail.com");
    cy.wait(3000);
    cy.get('input[id="prueba"]').type("123");
    cy.wait(3000);
    cy.get('button[id="boton"]').click();
  })
})