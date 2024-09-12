from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', '345at4s5ys3%+h53T4y55g')

# Configuração do Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'danilokog652@gmail.com'
app.config['MAIL_PASSWORD'] = 'vpfp vnip ysuu mfgi'
app.config['MAIL_DEFAULT_SENDER'] = ('Nome do Remetente', 'danilokog652@gmail.com')

mail = Mail(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/send-email', methods=['POST'])
def send_email():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    msg = Message('Novo Contato de {}'.format(name),
                  recipients=[email])
    msg.body = 'Nome: {}\nE-mail: {}\n\nMensagem:\n{}'.format(name, email, message)

    try:
        mail.send(msg)
        flash('Mensagem enviada com sucesso!', 'success')
    except Exception as e:
        flash('Erro ao enviar mensagem. Tente novamente mais tarde.', 'danger')
        print(e)

    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)