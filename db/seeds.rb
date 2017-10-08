Image.delete_all
Property.delete_all

Property.create({
  location: "Castle Terrace",
  bedrooms: 2,
  publicRooms: 1,
  bathrooms: 1,
  price: "£600.00 pcm",
  description: "Property comprises of: Entrance hall with secure entry phone system, two spacious double bedrooms with built in wardrobes, fully fitted modern kitchen, bathroom with shower over bath, and large lounge with feature fireplace.",
  })

Image.create({
  address: "http://www.s1homes.com/property_images/NeilsonsSolicitors/2017/2017100702205605/image1-640x480.jpg",
  property_id: 1
  })
