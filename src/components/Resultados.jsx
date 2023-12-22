import styled from "@emotion/styled"

const Contenedor = styled.div `
  color: #fff;

  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;

`

const Imagen = styled.img `
    display: block;
    width: 120px;

`

const Texto  = styled.p `

font-size: 18px;
  span {
    font-weight: 700;
  }

`

const Precio = styled.p `
  font-size: 24px;
  span {
    font-weight: 700;
  }


`



export default function Resultados({resultado}) {

   // extrayendo la info de la api para usarla, todo esto viene de resultado de la llamada de la api
   
   const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen-cripto" />
        <div>
          <Precio>El precio es de: <span>{PRICE}</span></Precio>
          <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
          <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
          <Texto>Variacion LAST 24 HOURS: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}
