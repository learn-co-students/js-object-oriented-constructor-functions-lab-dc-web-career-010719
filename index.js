function Scooter (year, color, model){
  this.year = year
  this.color = color
  this.model = model
  console.log(this)
}

function Driver (name, age, experience){
  this .name = name
  this.age = age
  this.experience = experience
  console.log(this)
}

function PickupLocation(address, city){
  this.address = address
  this.city = city
  console.log(this)
}

// const racer = Scooter.new(2001, "blue", "racer")
//
// const dave = Driver.new("Dave", 40, )
