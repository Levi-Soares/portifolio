from flask import Flask, render_template, redirect, request, url_for
from flask_mail import Mail, Message 
from config import email, senha
import logging

# Ativa log para debug do SMTP
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
app.secret_key = 'Portifolio'

# Configuração do Flask-Mail
mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email,
    "MAIL_PASSWORD": senha,
}

app.config.update(mail_settings)
mail = Mail(app)

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    formContato = Contato(
        request.form["nome"], 
        request.form["email"],
        request.form["mensagem"]
    )

    msg = Message(
        subject=f'{formContato.nome} te enviou uma mensagem no portfólio',
        sender=app.config.get("MAIL_USERNAME"),
        recipients=['levi.soares.contato@gmail.com', app.config.get("MAIL_USERNAME")],
        body=f'''
{formContato.nome} com o e-mail {formContato.email}, te enviou a seguinte mensagem:

{formContato.mensagem}
'''
    )

    try:
        mail.send(msg)
        print("E-mail enviado com sucesso!")
        return redirect(url_for('index', success=True))
    except Exception as e:
        print(f"Erro ao enviar e-mail: {str(e)}")
        return redirect(url_for('index', error=True))

if __name__ == '__main__':
    app.run(debug=True)

    #commit final