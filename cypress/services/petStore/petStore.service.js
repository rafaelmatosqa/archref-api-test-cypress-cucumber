import Rest from './_restPetStore.service'



export default class PetStore extends Rest {
   

  static createPetStore(body){
    const url = `/api/v3/pet`
    return super.post(url,body)
  }
}