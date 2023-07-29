import propTypes from 'prop-types';
import iconAt from '../../../../assets/images/icon-at.svg';

export default function ResetPasswordCard({ onCardChange }) {

	return (
		<div className="card-wrapper">
			<h1 className="title">
				Recuperar senha<span className='dot'>.</span>
			</h1>

			<p className='description'>
				Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
			</p>

			<form action="">
				<div className="form-group">
					<input type="text" placeholder='informe seu e-mail' />
					<img className='floating-icon' src={iconAt} alt="Ícone @" />
				</div>

				<button className='btn-submit' disabled>
					enviar link
				</button>
			</form>

			<button className='btn-bottom' onClick={onCardChange}>
				{'<< Voltar para Login'}
			</button>
		</div>
	);
}

ResetPasswordCard.propTypes = {
	onCardChange: propTypes.func.isRequired
};