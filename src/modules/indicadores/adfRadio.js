var adfLibrary = {
  adfPoints: function(point, latitude, longitude) {
    this.point = point;
    this.latitude = latitude;
    this.longitude = longitude;

    // Agregar automáticamente el punto a la lista
    pointList.push(this);
  }
};

// Crear una lista para almacenar los puntos
var pointList = [];

// Función para buscar un punto por valor
function searchPoint(value) {
  for (var i = 0; i < pointList.length; i++) {
    var point = pointList[i];
    if (point.point === value || point.latitude === value || point.longitude === value) {
      return point;
    }
  }

  return null; // Devolver nulo si el punto no se encuentra
}

function generateRandomPoints() {
  for (var i = 0; i < 1000; i++) {
    var point = ("00" + i).slice(-3); // Formatear el punto como "000", "001", etc.
    var latitude = (Math.random() * 180) - 90; // Generar un valor aleatorio entre -90 y 90 para la latitud
    var longitude = (Math.random() * 360) - 180; // Generar un valor aleatorio entre -180 y 180 para la longitud
    
    new adfLibrary.adfPoints(point, latitude, longitude); // Crear un nuevo punto usando adfLibrary
  }
}

generateRandomPoints();

export { searchPoint };
