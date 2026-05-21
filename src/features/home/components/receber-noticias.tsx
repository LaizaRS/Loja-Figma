export default function ReceberNoticia() {
  return (
    <div className="w-scren m-8!">
      <div className="flex flex-col gap-6 border max-w-137.5 text-center border-black p-6">
        <p>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? <strong>Cadastre-se!</strong>{' '}
        </p>
        <div className="flex justify-center items-center">
          <input placeholder="Digite seu e-mail" className="w-full p-1 h-[36.5px] max-w-90 border border-black" type="text" />
          <button className="p-1.5 bg-purple-600 text-white ">Enviar</button>
        </div>
      </div>
    </div>
  )
}
