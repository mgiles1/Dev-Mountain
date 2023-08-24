import axios from 'axios'

const orderCookies = async (evt) => {
    evt.preventDefault();
    const formData = {
        cookies: document.querySelector('#cookie-type-field').value,
        qty: document.querySelector('#qty-field').value
    }
    const response = await axios.post('/order-cookies', formData)
}

document.querySelector('#order-form').addEventListener('submit', orderCookies)