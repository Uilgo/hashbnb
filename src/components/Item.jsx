const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-4">
      <img
        className="aspect-square rounded-2xl object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7i2avPtjWUJQtviULVETMz6itf1ee8E9nw&s"
        alt="Imagem da Acomodação"
      />
      <h3 className="text-xl font-semibold">Cabo frio Rio de Janeiro</h3>
      <p className="truncate text-gray-600">Cobertura Duplex</p>
      <p>
        <span className="font-semibold">R$ 550,00</span>
        por noite
      </p>
    </a>
  );
};

export default Item;
