export class Recherche{
    Launch(){
        cy.visit('https://www.parashop.tn/')

    }

    Reaserch(){
        cy.get('.mobile-bar-group > .menu-trigger').click()
    }

    ChooseCategory(){

        cy.get('.main-menu-item-2 > .collapse-toggle > .open-menu > .fa').click()
    }

    ChooseSubCategory(){

    cy.get('[data-image="https://www.parashop.tn/image/cache/data/categories/visage-mousse-nettoyante-150x150.jpg.webp"] > a > span').click()
    }
    
    SortByPrice(){
        cy.get('.module-item-p > .panel-heading > .panel-title > .accordion-toggle').click()
    }
    
    EnterMinPrice(Min){
        cy.get('.filter-price-min').type(Min)
    }
    
    EnterMaxPrice(Max){
        cy.get('.filter-price-max').type(Max)
    }


}
