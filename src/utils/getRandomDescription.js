export default function getRandomDescription() {
	const randomDescriptions = [
		'Este herói da Marvel é tão misterioso que até mesmo sua descrição ficou intrigada e decidiu não aparecer!',
		'Na busca da descrição desse personagem, descobrimos que ele é tão épico que as palavras simplesmente fugiram para uma dimensão paralela.',
		'Em um universo de superlativos, este membro da Marvel decidiu deixar a descrição para os meros mortais, enquanto ele salva o dia.',
		'Assim como um vilão clássico, a descrição deste personagem preferiu se esconder nas sombras, esperando o momento certo para revelar seus detalhes.',
		'Dizem que até o Thanos achou a ausência de descrição desse herói algo verdadeiramente inexplicável.',
		'Esse personagem da Marvel é tão único que a descrição teve que fazer uma pausa para entender a complexidade de sua grandiosidade.',
		'Não é que a descrição não queira aparecer, é que ela ficou com medo de não estar à altura da grandiosidade deste herói da Marvel!',
		'A descrição desse personagem está de férias em Wakanda, absorvendo a tecnologia avançada enquanto nosso herói protege o universo.',
		'Enquanto alguns heróis usam capas, este da Marvel preferiu usar o mistério, deixando a descrição sem palavras e nós sem pistas!',
		'A ausência de descrição desse personagem é mais um mistério do que o enredo de um quadrinho da Marvel, e estamos ansiosos para decifrá-lo!',
	];

	return randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)];
}
