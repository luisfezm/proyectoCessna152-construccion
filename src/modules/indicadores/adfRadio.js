var adfLibrary = {
    adfPoints: function(point, x, y) {
      this.point = point;
      this.x = x;
      this.y = y;
  
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
      if (point.point === value || point.x === value || point.y === value) {
        return point;
      }
    }
  
    return null; // Devolver nulo si el punto no se encuentra
  }
  
  function generateRandomPoints() {
    for (var i = 0; i < 1000; i++) {
      var point = ("00" + i).slice(-3); // Formatear el punto como "000", "001", etc.
      var x = Math.floor(Math.random() * 2000) - 1000; // Generar un valor aleatorio entre -1000 y 1000 para x
      var y = Math.floor(Math.random() * 2000) - 1000; // Generar un valor aleatorio entre -1000 y 1000 para y
      
      new adfLibrary.adfPoints(point, x, y); // Crear un nuevo punto usando adfLibrary
    }
  }
  
  generateRandomPoints();
  // new adfLibrary.adfPoints("000", 0, 100); // Crear un nuevo punto usando adfLibrary
  export { searchPoint };
  