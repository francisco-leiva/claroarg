import React from 'react'

const Help = () => {
  return (
    <div className='help__container'>
      <div className='help__container__title'>
        <h1>¿Cómo podemos ayudarte?</h1>
      </div>

      <div className='help__container__card'>
        <div className='help__container__card__title'>
          <h2>Formas de pago</h2>
        </div>

        <div className='help__container__card__questions'>
          <div className='help__container__card__boxes'>
            <div className='help__container__card__box'>
              <p>¿Cuáles son los medios de pago disponibles?</p>
            </div>

            <div className='help__container__card__box'>
              <p>¿Puedo pagar con la tarjeta de crédito de un tercero?</p>
            </div>

            <div className='help__container__card__box'>
              <p>¿Cuáles son las formas de pago disponibles para mí línea?</p>
            </div>
          </div>

          <div className='help__container__card__boxes'>
            <div className='help__container__card__box'>
              <p>¿Los medios de pago para la compra de celulares son los mismos que para la compra de accesorios?</p>
            </div>

            <div className='help__container__card__box'>
              <p>¿Puedo pagar con más de una tarjeta de crédito?</p>
            </div>

            <div className='help__container__card__box'>
              <p>Quiero comprar un equipo y pagarlo con mi factura Claro pero no me figura esa opción.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help;