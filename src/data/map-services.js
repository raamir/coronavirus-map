const accessToken = "pk.eyJ1IjoicmlqYWFtaXIiLCJhIjoiY2s4bDFpdnV3MDd6NDNqbzJ1c3czZG5veiJ9.GW_4IpfXqfJ8-cV9_t5lgQ";

export const mapServices = [
  {
    name: 'OpenStreetMap',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'Mapbox',
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: `https://api.mapbox.com/styles/v1/rijaamir/ck8l5yitv0eoo1ik1087m2fot/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`
  }
];
