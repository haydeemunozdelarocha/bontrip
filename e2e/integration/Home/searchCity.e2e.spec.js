import { urls, selectors } from '../../variables';

describe('Home page', () => {
    it('A user can search for a city and go to the planner', () => {
        cy.visit(urls.homepage);
        cy.get(selectors.home.cityInput, {timeout: 3000}).type('Munich');
        cy.get(selectors.home.cityInputOptions).should('be.visible');
        cy.get(selectors.home.cityInputOptions).find('ul').find('li').contains('Munich').click();
        cy.location().should((loc) => {
            expect(loc.pathname).contains('newtrip');
        })
    })
})
