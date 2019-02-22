function createScooter() {
  let ScooterID = 0

  return class {
    constructor(year, color, model) {
      this.year = year
      this.color = color
      this.model = model
      this.id = ++ScooterID
    }
  }
}

function createDriver() {
  let DriverID = 0

  return class {
    constructor(name, age, experience) {
      this.name = name
      this.age = age
      this.experience = experience
      this.id = ++DriverID
    }
  }
}

function createPickupLocation() {
  let PickupLocationID = 0

  return class {
    constructor(address, city) {
      this.address = address
      this.city = city
      this.id = ++PickupLocationID
    }
  }
}

const Scooter = createScooter()
const Driver = createDriver()
const PickupLocation = createPickupLocation()
