class Telephone {
    constructor() {
      this.phoneNumbers = new Set()
      this.observers = new Set()
    }
  
    addObserver(observer) {
      this.observers.add(observer)
    }
  
    removeObserver(observer) {
      this.observers.delete(observer)
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.add(phoneNumber)
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers.delete(phoneNumber)
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.has(phoneNumber)) {
        this.observers.forEach((observer) => {
          observer.notify(phoneNumber)
        })
      } else {
        console.log("The number you are calling is unavailable")
      }
    }
}
  

class DisplayNumberObserver {
    notify(phoneNumber) {
      console.log(phoneNumber)
    }
}
  
class DialNumberObserver {
    notify(phoneNumber) {
      console.log("Now Dialing "+phoneNumber)
    }
}
  
const telephone = new Telephone()
  
const displayNumberObserver = new DisplayNumberObserver()
const dialNumberObserver = new DialNumberObserver()
  

telephone.addObserver(displayNumberObserver)
telephone.addObserver(dialNumberObserver)

telephone.addPhoneNumber("+2348181409145")

telephone.dialPhoneNumber("+2348181409145")