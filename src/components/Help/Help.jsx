import './Help.scss'

export default function Help() {
  return (
    <div className='help__container'>
      <div>
        <h1>¿Cómo podemos ayudarte?</h1>
      </div>

      <div className='help__wrapper'>
        <div className='help__title'>
          <h2>Formas de pago</h2>
        </div>

        <div className='help__questions'>
          <div className='help__boxes'>
            <div className='help__boxes--box'>
              <p>¿Cuáles son los medios de pago disponibles?</p>
            </div>

            <div className='help__boxes--box'>
              <p>¿Puedo pagar con la tarjeta de crédito de un tercero?</p>
            </div>

            <div className='help__boxes--box'>
              <p>¿Cuáles son las formas de pago disponibles para mí línea?</p>
            </div>
          </div>

          <div className='help__boxes'>
            <div className='help__boxes--box'>
              <p>
                ¿Los medios de pago para la compra de celulares son los mismos
                que para la compra de accesorios?
              </p>
            </div>

            <div className='help__boxes--box'>
              <p>¿Puedo pagar con más de una tarjeta de crédito?</p>
            </div>

            <div className='help__boxes--box'>
              <p>
                Quiero comprar un equipo y pagarlo con mi factura Claro pero no
                me figura esa opción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
