//Clase principal de habitaciones
export class Rom_fathet {
  constructor(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin
  ) {
    this.nombrePersonR = nombrePersonR;
    this.precioHabitacion = 0;
    this.Num_Romm = Num_Romm;
    this.tipoHabitacion = tipoHabitacion;
    this.fecha_Inicio = fecha_Inicio;
    this.fecha_fin = fecha_fin;
    this.reservada = false;
    this.dias_fechas = 0;
    this.precio_Total = 0;
  }
  //Metodo habitacion reservada
  habitacionR() {
    return (this.reservada = true);
  }

  //Metodo detallado para obtener el detalle
  obtenerDetalle() {
    throw new Error("Se genero un error en la reserva de la habitacion");
  }
}
export class Rom_Num1 extends Rom_fathet {
  constructor(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin,
    letraH = ""
  ) {
    super(nombrePersonR, Num_Romm, tipoHabitacion, fecha_Inicio, fecha_fin);
    this.letraH = letraH;
  }

  //Metodo detallado para obtener el detalle
  obtenerDetalle() {
    if (this.tipoHabitacion === "Habitacion Individual") {
      this.letraH = "A";
      this.precioHabitacion = 95000;
      const date_1 = new Date(this.fecha_Inicio);
      const date_2 = new Date(this.fecha_fin);
      const dias_fecha =
        (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
      const precioTotal = this.precioHabitacion * dias_fecha;

      return `La habitación ${this.tipoHabitacion} ${this.letraH}${this.Num_Romm} está reservada a nombre de ${this.nombrePersonR}, 
      donde estará desde ${this.fecha_Inicio} hasta ${this.fecha_fin} que son unos ${dias_fecha} días  
      con el precio ${this.precioHabitacion} pesos por noche, con un total de ${precioTotal} de pesos donde 
      incluye con un baño una cama un televisor normal`;
    } else {
      throw new Error("Se genero un error en la reserva de la habitacion");
    }
  }
  obtenerLetraA() {
    return (this.letraH = "A");
  }
  obtenerPrecioPornoche() {
    return (this.precioHabitacion = 95000);
  }
  obtenerDias() {
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    return (this.dias_fechas = dias_fecha);
  }
  obtenerPreciototal() {
    this.precioHabitacion = 95000;
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    const precioTotal = this.precioHabitacion * dias_fecha;
    return (this.precio_Total = precioTotal);
  }
}

export class Rom_Num2 extends Rom_Num1 {
  constructor(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin,
    letraH = ""
  ) {
    super(
      nombrePersonR,
      Num_Romm,
      tipoHabitacion,
      fecha_Inicio,
      fecha_fin,
      letraH
    );
  }
  //Metodo detallado para obtener el detalle
  obtenerDetalle() {
    if (this.tipoHabitacion === "Habitacion Doble") {
      this.letraH = "B";
      this.precioHabitacion = 230000;
      const date_1 = new Date(this.fecha_Inicio);
      const date_2 = new Date(this.fecha_fin);
      const dias_fecha =
        (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
      const precioTotal = this.precioHabitacion * dias_fecha;

      return `La habitación ${this.tipoHabitacion} ${this.letraH}${this.Num_Romm} está reservada a nombre de ${this.nombrePersonR}, 
      donde estará desde ${this.fecha_Inicio} hasta ${this.fecha_fin} que son unos ${dias_fecha} días  
      con el precio ${this.precioHabitacion} pesos por noche, con un total de ${precioTotal} de pesos donde 
      incluye un baño de lujo dos camas, un televisor de lujo`;
    } else {
      throw new Error("Se genero un error en la reserva de la habitacion");
    }
  }
  obtenerLetraB() {
    return (this.letraH = "B");
  }
  obtenerPrecioPornoche() {
    return (this.precioHabitacion = 230000);
  }
  obtenerDias() {
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    return (this.dias_fechas = dias_fecha);
  }
  obtenerPreciototal() {
    this.precioHabitacion = 230000;
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    const precioTotal = this.precioHabitacion * dias_fecha;
    return (this.precio_Total = precioTotal);
  }
}
export class suit extends Rom_Num1 {
  constructor(
    nombrePersonR,
    Num_Romm,
    tipoHabitacion,
    fecha_Inicio,
    fecha_fin,
    letraH = ""
  ) {
    super(
      nombrePersonR,
      Num_Romm,
      tipoHabitacion,
      fecha_Inicio,
      fecha_fin,
      letraH
    );
    this.servicioAlcuarto = false;
  }

  //servicio al cuarto
  service_cuarto() {
    this.servicioAlcuarto = true;
  }

  //Metodo detallado para obtener el detalle
  obtenerDetalle() {
    if (this.tipoHabitacion === "Suit de Lujo") {
      this.letraH = "C";
      this.precioHabitacion = 559000;
      const date_1 = new Date(this.fecha_Inicio);
      const date_2 = new Date(this.fecha_fin);
      const dias_fecha =
        (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
      const precioTotal = this.precioHabitacion * dias_fecha;

      return `La habitación ${this.tipoHabitacion} ${this.letraH}${this.Num_Romm} está reservada a nombre de ${this.nombrePersonR}, 
      donde estará desde ${this.fecha_Inicio} hasta ${this.fecha_fin} que son unos ${dias_fecha} días  
      con el precio ${this.precioHabitacion} pesos por noche, con un total de ${precioTotal} de pesos donde 
      incluye un baño de lujo cama grande 
        y una gran vista con servicio ${this.servicioAlcuarto}`;
    } else {
      throw new Error("Se genero un error en la reserva de la habitacion");
    }
  }
  obtenerLetraC() {
    return (this.letraH = "C");
  }
  obtenerPrecioPornoche() {
    return (this.precioHabitacion = 559000);
  }
  obtenerDias() {
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    return (this.dias_fechas = dias_fecha);
  }
  obtenerPreciototal() {
    this.precioHabitacion = 559000;
    const date_1 = new Date(this.fecha_Inicio);
    const date_2 = new Date(this.fecha_fin);
    const dias_fecha =
      (date_2.getTime() - date_1.getTime()) / (1000 * 60 * 60 * 24);
    const precioTotal = this.precioHabitacion * dias_fecha;
    return (this.precio_Total = precioTotal);
  }
}
