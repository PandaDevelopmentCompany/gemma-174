const token = '7393898003:AAHyOAVTkz8-kpx7zFhBu62C6GqO23Knlz4';
const chatId = '746586393';
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Имя клиента: ' + sendName.value + ' Вопрос по заявке: ' + messageInput.value + " " + ' Номер телефона: ' + " " + sendTel.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваше сообщение:' + ' ' + messageInput.value + ' ' + 'Ваш телефон:' + ' ' + sendTel.value))
.catch(error => console.error(error));
}
});
