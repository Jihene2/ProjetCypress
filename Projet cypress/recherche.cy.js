import { Recherche } from "../PageObject/recherchepo"

describe('empty spec', () => {
  const recherche=new Recherche
  
  it('should open website', () => {
    recherche.Launch()
 
   })


   it('should see categories', () => {
  recherche.Reaserch()
  
 
   })

   it('should select category', () => {
    recherche.ChooseCategory()

  })

  it('should select sub category', () => {
    recherche.ChooseSubCategory()

  }) 


  it('should sort By price', () => {
    recherche.SortByPrice()

  }) 

  it('should enter minimum price', () => {
    recherche.EnterMinPrice(40)
})

it('should enter maximum price', () => {
  recherche.EnterMinPrice(55)
})

})
