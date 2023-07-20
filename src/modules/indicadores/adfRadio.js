var adfLibrary = {
  adfPoints: function(point, city, country, latitude, longitude) {
    this.point = point;
    this.city = city;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
  }
};

// Crear una lista para almacenar los puntos
var pointList = [];

// Función para buscar un punto por valor
function searchPoint(value) {
  for (var i = 0; i < pointList.length; i++) {
    var point = pointList[i];
    if (point.point === value) {
      return point;
    }
  }

  return null; // Devolver nulo si el punto no se encuentra
}

// Generar los puntos manualmente al azar
var points = [
  { point: "000", city: "Tokio", country: "Japón", latitude: 35.6895, longitude: 139.6917 },
  { point: "001", city: "Nueva York", country: "Estados Unidos", latitude: 40.7128, longitude: -74.0060 },
  { point: "002", city: "Londres", country: "Reino Unido", latitude: 51.5074, longitude: -0.1278 },
  { point: "003", city: "París", country: "Francia", latitude: 48.8566, longitude: 2.3522 },
  { point: "004", city: "Estambul", country: "Turquía", latitude: 41.0082, longitude: 28.9784 },
  { point: "005", city: "Dubái", country: "Emiratos Árabes Unidos", latitude: 25.2048, longitude: 55.2708 },
  { point: "006", city: "Los Ángeles", country: "Estados Unidos", latitude: 34.0522, longitude: -118.2437 },
  { point: "007", city: "Pekín", country: "China", latitude: 39.9042, longitude: 116.4074 },
  { point: "008", city: "Moscú", country: "Rusia", latitude: 55.7512, longitude: 37.6184 },
  { point: "009", city: "São Paulo", country: "Brasil", latitude: -23.5505, longitude: -46.6333 },
  { point: "010", city: "Ciudad de México", country: "México", latitude: 19.4326, longitude: -99.1332 },
  { point: "011", city: "Bangkok", country: "Tailandia", latitude: 13.7563, longitude: 100.5018 },
  { point: "012", city: "Miami", country: "Estados Unidos", latitude: 25.7617, longitude: -80.1918 },
  { point: "013", city: "Sídney", country: "Australia", latitude: -33.8688, longitude: 151.2093 },
  { point: "014", city: "Madrid", country: "España", latitude: 40.4168, longitude: -3.7038 },
  { point: "015", city: "Toronto", country: "Canadá", latitude: 43.6511, longitude: -79.3470 },
  { point: "016", city: "Singapur", country: "Singapur", latitude: 1.3521, longitude: 103.8198 },
  { point: "017", city: "Río de Janeiro", country: "Brasil", latitude: -22.9068, longitude: -43.1729 },
  { point: "018", city: "Roma", country: "Italia", latitude: 41.9028, longitude: 12.4964 },
  { point: "019", city: "Chicago", country: "Estados Unidos", latitude: 41.8781, longitude: -87.6298 },
  { point: "020", city: "Buenos Aires", country: "Argentina", latitude: -34.6037, longitude: -58.3816 },
  { point: "021", city: "Seúl", country: "Corea del Sur", latitude: 37.5665, longitude: 126.9780 },
  { point: "022", city: "Melbourne", country: "Australia", latitude: -37.8136, longitude: 144.9631 },
  { point: "023", city: "Ámsterdam", country: "Países Bajos", latitude: 52.3676, longitude: 4.9041 },
  { point: "024", city: "Hong Kong", country: "China", latitude: 22.3193, longitude: 114.1694 },
  { point: "025", city: "Vancouver", country: "Canadá", latitude: 49.2827, longitude: -123.1207 },
  { point: "026", city: "San Francisco", country: "Estados Unidos", latitude: 37.7749, longitude: -122.4194 },
  { point: "027", city: "Kuala Lumpur", country: "Malasia", latitude: 3.1390, longitude: 101.6869 },
  { point: "028", city: "Shanghái", country: "China", latitude: 31.2304, longitude: 121.4737 },
  { point: "029", city: "Estocolmo", country: "Suecia", latitude: 59.3293, longitude: 18.0686 },
  { point: "030", city: "El Cairo", country: "Egipto", latitude: 30.0444, longitude: 31.2357 },
  { point: "031", city: "Berlín", country: "Alemania", latitude: 52.5200, longitude: 13.4050 },
  { point: "032", city: "Santiago", country: "Chile", latitude: -33.4489, longitude: -70.6693 },
  { point: "033", city: "Valparaíso", country: "Chile", latitude: -33.0458, longitude: -71.6197 },
  { point: "034", city: "Viña del Mar", country: "Chile", latitude: -33.0153, longitude: -71.5505 },
  { point: "035", city: "Concepción", country: "Chile", latitude: -36.8261, longitude: -73.0498 },
  { point: "036", city: "La Serena", country: "Chile", latitude: -29.9078, longitude: -71.2540 },
  { point: "037", city: "Valdivia", country: "Chile", latitude: -39.8196, longitude: -73.2452 },
  { point: "038", city: "Puerto Montt", country: "Chile", latitude: -41.4651, longitude: -72.9425 },
  { point: "039", city: "Antofagasta", country: "Chile", latitude: -23.6509, longitude: -70.3975 },
  { point: "040", city: "Arica", country: "Chile", latitude: -18.4783, longitude: -70.3126 },
  { point: "041", city: "Punta Arenas", country: "Chile", latitude: -53.1638, longitude: -70.9171 },
  { point: "042", city: "África", country: "Sudáfrica", latitude: -25.7461, longitude: 28.1881 },
  { point: "043", city: "Atenas", country: "Grecia", latitude: 37.9838, longitude: 23.7275 },
  { point: "044", city: "Dublín", country: "Irlanda", latitude: 53.3498, longitude: -6.2603 },
  { point: "045", city: "Bruselas", country: "Bélgica", latitude: 50.8503, longitude: 4.3517 },
  { point: "046", city: "Múnich", country: "Alemania", latitude: 48.1351, longitude: 11.5820 },
  { point: "047", city: "Praga", country: "República Checa", latitude: 50.0755, longitude: 14.4378 },
  { point: "048", city: "Budapest", country: "Hungría", latitude: 47.4979, longitude: 19.0402 },
  { point: "049", city: "Lisboa", country: "Portugal", latitude: 38.7223, longitude: -9.1393 },
  { point: "050", city: "Copenhague", country: "Dinamarca", latitude: 55.6761, longitude: 12.5683 },
  { point: "051", city: "Oslo", country: "Noruega", latitude: 59.9139, longitude: 10.7522 },
  { point: "052", city: "Viena", country: "Austria", latitude: 48.2082, longitude: 16.3738 },
  { point: "053", city: "Zúrich", country: "Suiza", latitude: 47.3769, longitude: 8.5417 },
  { point: "054", city: "Bucarest", country: "Rumania", latitude: 44.4268, longitude: 26.1025 },
  { point: "055", city: "Bogotá", country: "Colombia", latitude: 4.7109, longitude: -74.0721 },
  { point: "056", city: "Bangalore", country: "India", latitude: 12.9716, longitude: 77.5946 },
  { point: "057", city: "Marrakech", country: "Marruecos", latitude: 31.6295, longitude: -7.9811 },
  { point: "058", city: "Manila", country: "Filipinas", latitude: 14.5995, longitude: 120.9842 },
  { point: "059", city: "Luxemburgo", country: "Luxemburgo", latitude: 49.6116, longitude: 6.1319 },
  { point: "060", city: "San Petersburgo", country: "Rusia", latitude: 59.9343, longitude: 30.3351 },
  { point: "061", city: "Sofía", country: "Bulgaria", latitude: 42.6977, longitude: 23.3219 },
  { point: "062", city: "Panamá", country: "Panamá", latitude: 8.9833, longitude: -79.5167 },
  { point: "063", city: "Riga", country: "Letonia", latitude: 56.9496, longitude: 24.1052 },
  { point: "064", city: "La Haya", country: "Países Bajos", latitude: 52.0705, longitude: 4.3007 },
  { point: "065", city: "Reikiavik", country: "Islandia", latitude: 64.1466, longitude: -21.9426 },
  { point: "066", city: "Tallin", country: "Estonia", latitude: 59.4370, longitude: 24.7536 },
  { point: "067", city: "Belgrado", country: "Serbia", latitude: 44.7866, longitude: 20.4489 },
  { point: "068", city: "Liubliana", country: "Eslovenia", latitude: 46.0569, longitude: 14.5058 },
  { point: "069", city: "Sevilla", country: "España", latitude: 37.3891, longitude: -5.9845 },
  { point: "070", city: "Amán", country: "Jordania", latitude: 31.9566, longitude: 35.9450 },
  { point: "071", city: "Zagreb", country: "Croacia", latitude: 45.8150, longitude: 15.9819 },
  { point: "072", city: "Osaka", country: "Japón", latitude: 34.6937, longitude: 135.5023 },
  { point: "073", city: "Colombo", country: "Sri Lanka", latitude: 6.9271, longitude: 79.8612 },
  { point: "074", city: "Wellington", country: "Nueva Zelanda", latitude: -41.2865, longitude: 174.7762 }
  // Continuar con los puntos restantes
];

// Agregar los puntos a la lista
for (var i = 0; i < points.length; i++) {
  var pointData = points[i];
  var adfPoint = new adfLibrary.adfPoints(pointData.point, pointData.city, pointData.country, pointData.latitude, pointData.longitude);
  pointList.push(adfPoint);
}

export { searchPoint};
